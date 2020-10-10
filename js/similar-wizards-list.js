'use strict';

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < window.renderWizard.wizards.length; i++) {
    fragment.appendChild(window.renderWizard.renderWizard(window.renderWizard.wizards[i]));
  }

  similarListElement.appendChild(fragment);

  document.querySelector('.setup-similar').classList.remove('hidden');

})();
