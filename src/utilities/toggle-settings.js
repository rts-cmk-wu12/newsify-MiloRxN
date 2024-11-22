import sectionsData from '../json/apiNewsCategories.json';

const categories = sectionsData.sections;

const toggleContainerElements = document.querySelector('.toggle');
let currentStates = JSON.parse(localStorage.getItem('currentStates')) || {};

if (!localStorage.getItem('currentStates')) {
    currentStates = categories.reduce((acc, category) => {
        acc[`toggle-${category}`] = true;
        return acc;
    }, {});
    localStorage.setItem('currentStates', JSON.stringify(currentStates));
}

function saveCurrentStates() {
    localStorage.setItem('currentStates', JSON.stringify(currentStates));
}

categories.forEach(category => {
    const categoryToggleContainer = document.createElement('div');
    categoryToggleContainer.classList.add('toggle__element');
    const toggleId = `toggle-${category}`;

    categoryToggleContainer.innerHTML = `
    <div class="toggle__header">
                    <img class="toggle__logo" src="./images/newsify_logo.svg" alt="logo">
                    <h3 class="darkmode-white-text">${category}</h3>
                </div>

                <label class="toggle__switch" id="${toggleId}">
                    <input class="toggle__checkbox" type="checkbox" ${currentStates[toggleId] ? 'checked' : ''}>
                    <span class="toggle__slider"></span>
                </label>
                </div>
    `
    toggleContainerElements.append(categoryToggleContainer);

    const checkbox = categoryToggleContainer.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        currentStates[toggleId] = checkbox.checked;
        saveCurrentStates();
    })
})