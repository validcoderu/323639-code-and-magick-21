'use strict';

(function () {
  var getRandomColor = function (colors) {
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  window.util = {
    getRandomColor: getRandomColor
  };

})();
