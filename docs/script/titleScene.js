phina.define('TitleScene',{
    superClass: 'DisplayScene',
    init: function(){
        this.superInit();
        this.backgroundColor = 'floralwhite';

        var self = this;

        // グローバル変数初期化
        g_Questions = JSON.parse(JSON.stringify(QUIZ_DATA.Questions));
        g_Questions.shuffle();
        g_AllQuizCount = g_Questions.length;
        g_CorrectQuizCount = 0;
        g_CurrentQuizCount = 0;

        var titleLabel = Label({
            text:'2021',
            fontFamily:'chihaya',
            fontSize:200,
        });
        titleLabel.addChildTo(this)
        .setPosition(this.gridX.center(),this.gridY.span(5));
        
        var descriptionLabel = NotoLabel({
            fontSize: 50,
        });
        descriptionLabel.text = '牛肉部位クイズ🐄';
        descriptionLabel.addChildTo(this)
        .setPosition(this.gridX.center(),this.gridY.span(9));
        
        var startButton = AnimateButton({
            text:'はじめる',
            fill:'white',
            stroke:'black',
            fontColor:'black',

        });
        startButton.addChildTo(this)
        .setPosition(this.gridX.center(),this.gridY.span(13));
        startButton.onpush = function(){self.exit();};
        
    }
});