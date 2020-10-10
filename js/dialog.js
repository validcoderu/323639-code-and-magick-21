'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var usernameInput = setup.querySelector('.setup-user-name');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var escPressHandler = function (evt) {
    if (evt.key === window.constants.ESC_KEY) {
      if (usernameInput !== document.activeElement) {
        closePopup();
      }
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', escPressHandler);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', escPressHandler);
    setup.style.top = window.constants.SETUP_START_CORDS.y + 'px';
    setup.style.left = window.constants.SETUP_START_CORDS.x + '%';
  };

  setupOpen.addEventListener('click', openPopup);

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === window.constants.ENTER_KEY) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', closePopup);

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.constants.ENTER_KEY) {
      closePopup();
    }
  });

  window.dialog = {
    setup: setup
  };

})();
