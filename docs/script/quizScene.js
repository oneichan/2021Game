phina.define('QuizScene', {
    superClass: 'DisplayScene',
    countTime: 0,
    waitTime: 700,

    init: function () {
        this.superInit();
        this.backgroundColor = 'floralwhite';
         
        var self = this;

        // json 読込
        var choices = QUIZ_DATA.Choices.clone();

        // クイズデータ決定
        var question = g_Questions[g_CurrentQuizCount];
        
        // 問題文
        var questionText = question.Question;

        // 問題文表示ラベル
        var questionLabel = NotoLabel(questionText);
        //questionLabel.fontFamily = 'noto';
        questionLabel.addChildTo(this)
            .setPosition(this.gridX.center(),this.gridY.span(3));

        // 画像表示
        var assetKey = question.AssetKey;
        var usiSprite = Sprite(assetKey);
        usiSprite.addChildTo(this)
            .setPosition(this.gridX.center(), this.gridY.span(USI_GRID_Y))
            .setScale(USI_SIZE_SCALE,USI_SIZE_SCALE);

        //--選択肢オブジェクト配列生成　
        var dispChoices=new Array();

        // 生成する選択肢の数
        var rand = Random();
        var correctWord;
        for (let index = 0; index < MAX_DISP_CHOICE; index++) {
            var choiceID;
            var choice;
            var isCorrect;
            if (index == 0) {
                // 選択肢ID
                choiceID = question.CorrectChoiceID;
                isCorrect = true;     
            }else{
                var choicesMax = choices.length - 1;
                var randid = rand.randint(0, choicesMax);
                choiceID = choices[randid].ID;
                isCorrect = false;
            }
            // 選択肢文
            choice = choices.find(function (elm) {
                return elm.ID == choiceID;
            });

            // 選択肢生成
            var choiceObj = {
                isCorrect: isCorrect,
                word: choice.word
            };
            if(isCorrect){
                correctWord = choice.word;
            }
            dispChoices.push(choiceObj);

            // 選択肢候補から排除
            choices.eraseIfAll(function (elm) {
                return elm.ID == choiceID;
            });            
        }

        // シャッフル
        dispChoices.shuffle();

        //選択肢ボタン
        var choiceGroup = DisplayElement().addChildTo(this);
        var choiceGridX = Grid({
            width: SCREEN_WIDTH,
            columns: CHOICE_COLUMN_X,
            offset: SCREEN_WIDTH / 2,
          });
        var choiceGridY = Grid({
            width:(CHOICE_HEIGHT + 15) * CHOICE_COLUMN_Y,
            columns: CHOICE_COLUMN_Y,
            offset: (SCREEN_HEIGHT / 4) * 3
        })
        for (let index = 0; index < dispChoices.length; index++) {
            var choiceObj = dispChoices[index];
            var choiceButton = ChoiceButton({
                scene:self,
                isCorrect:choiceObj.isCorrect,
                word:choiceObj.word,
                correctWord:correctWord,
                assetKey:assetKey,
            });

            choiceButton.addChildTo(choiceGroup)
                .setPosition(choiceGridX.span(0), choiceGridY.span(index));
            
        }

        g_CurrentQuizCount++;

        // 何問中何問かラベル
        var quizCountLabel = NotoLabel();
        quizCountLabel.text = g_CurrentQuizCount + "／" +g_AllQuizCount + "問目";
        quizCountLabel.addChildTo(this)
            .setPosition(this.gridX.center(), this.gridY.span(1)); 
    },
    
});

phina.define('ChoiceButton', {
    superClass: 'AnimateButton',
    init: function (options) {
        options = (options || {}).$safe(ChoiceButton.defaults);
        this.superInit(options);
        this.fill = 'white';
        this.stroke = 'black';
        this.fontColor = 'black';

        this.text = options.word;

        this.setSize(SCREEN_WIDTH - 10, CHOICE_HEIGHT);

        this.onpush = function () {
          options.scene.exit('judge', {
                        isCorrect:options.isCorrect,
                        correctWord:options.correctWord,
                        assetKey:options.assetKey,
            });
        }
    },
    _static: {
        defaults: {
            scene:"",
            isCorrect: false,
            word:"none",
            correctWord:"none",
            assetKey:"none"
        },

    }, 
});
