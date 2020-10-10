'use strict';

(function () {
  var setupForm = window.dialog.setup.querySelector('.setup-wizard-form');
  var submitButton = setupForm.querySelector('.setup-submit');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var submitFormHandler = function () {
    setupForm.submit();
  };

  var wizardCoatClickHandler = function () {
    var currentColor = window.util.getRandomColor(window.constants.COAT_COLORS);
    wizardCoat.style.fill = currentColor;
    document.querySelector('input[name=coat-color]').value = currentColor;
  };

  var wizardEyesClickHandler = function () {
    var currentColor = window.util.getRandomColor(window.constants.EYES_COLORS);
    wizardEyes.style.fill = currentColor;
    document.querySelector('input[name=eyes-color]').value = currentColor;
  };

  var wizardFireballClickHandler = function () {
    var currentColor = window.util.getRandomColor(window.constants.FIREBALL_COLORS);
    wizardFireball.style.backgroundColor = currentColor;
    document.querySelector('input[name=fireball-color]').value = currentColor;
  };

  submitButton.addEventListener('click', submitFormHandler);

  submitButton.addEventListener('keydown', function (evt) {
    if (evt.key === window.constants.ENTER_KEY) {
      submitFormHandler();
    }
  });

  wizardCoat.addEventListener('click', wizardCoatClickHandler);
  wizardEyes.addEventListener('click', wizardEyesClickHandler);
  wizardFireball.addEventListener('click', wizardFireballClickHandler);

})();
