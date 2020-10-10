'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var COLUMN_WIDTH = 40;
  var COLUMN_HEIGHT = 150;
  var COLUMN_GAP = 50;
  var TEXT_HEIGHT = 16;
  var START_POINT_Y = 90;
  var BAR_HEIGHT = COLUMN_HEIGHT - TEXT_HEIGHT * 2;

  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var getRandomColor = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (`hsl(240, ` + getRandomNumber(min, max) + `%,` + ` 50%)`);
  };

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

    ctx.font = `16px PT Mono`;
    ctx.fillStyle = `#000`;
    ctx.textBaseline = `hanging`;
    ctx.fillText(`Ура вы победили!`, 120, 35);
    ctx.fillText(`Список результатов:`, 120, 55);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, START_POINT_Y + BAR_HEIGHT - ((times[i] * BAR_HEIGHT) / maxTime));
      if (names[i] === `Вы`) {
        ctx.fillStyle = `rgba(255, 0, 0, 1)`;
      } else {
        ctx.fillStyle = getRandomColor(1, 100);
      }
      ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, START_POINT_Y + TEXT_HEIGHT + GAP + BAR_HEIGHT - ((times[i] * BAR_HEIGHT) / maxTime), COLUMN_WIDTH, (times[i] * BAR_HEIGHT) / maxTime);
      ctx.fillStyle = `#000`;
      ctx.fillText(names[i], CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, START_POINT_Y + TEXT_HEIGHT + GAP + BAR_HEIGHT + GAP);
    }
  };

})();
