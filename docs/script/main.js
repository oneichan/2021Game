phina.main(function() {
  var app = GameApp({
    startLabel: 'title',
    assets: ASSETS,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    scenes:[
      {
        className: 'TitleScene',
        label:'title',
        nextLabel:'quiz',
      },
      {
        className: 'QuizScene',
        label:'quiz',
        nextLabel:'result',
      },
      {
        className: 'ResultScene',
        label:'result',
        nextLabel:'title',
      },
      {
        className: 'JudgeScene',
        label:'judge',
        nextLabel:'quiz',
      },
    ],
  });
  app.run();
});
