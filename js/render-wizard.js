'use strict';

(function () {
  var getWizardFullName = function (names, surnames) {
    var wizardName = Math.floor(Math.random() * names.length);
    var wizardSurname = Math.floor(Math.random() * surnames.length);
    return names[wizardName] + ' ' + surnames[wizardSurname];
  };

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var wizards = [
    {
      name: getWizardFullName(window.constants.FIRST_NAMES, window.constants.SUR_NAMES),
      coatColor: window.util.getRandomColor(window.constants.COAT_COLORS),
      eyesColor: window.util.getRandomColor(window.constants.EYES_COLORS)
    },
    {
      name: getWizardFullName(window.constants.FIRST_NAMES, window.constants.SUR_NAMES),
      coatColor: window.util.getRandomColor(window.constants.COAT_COLORS),
      eyesColor: window.util.getRandomColor(window.constants.EYES_COLORS)
    },
    {
      name: getWizardFullName(window.constants.FIRST_NAMES, window.constants.SUR_NAMES),
      coatColor: window.util.getRandomColor(window.constants.COAT_COLORS),
      eyesColor: window.util.getRandomColor(window.constants.EYES_COLORS)
    },
    {
      name: getWizardFullName(window.constants.FIRST_NAMES, window.constants.SUR_NAMES),
      coatColor: window.util.getRandomColor(window.constants.COAT_COLORS),
      eyesColor: window.util.getRandomColor(window.constants.EYES_COLORS)
    }
  ];

  window.renderWizard = {
    renderWizard: renderWizard,
    wizards: wizards
  };

})();
