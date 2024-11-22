import sectionsData from '../json/apiNewsCategories.json';

const categories = sectionsData.sections;
const currentStates = JSON.parse(localStorage.getItem('currentStates'));
const onlyLetters = /[^a-zA-Z]/g;

export function hideDisabledCategories(articleCategory, detailsElement) {
    categories.forEach(category => {
        if (articleCategory.toLowerCase().replace(onlyLetters, '') === category) {
            if (!currentStates[`toggle-${category}`]) {
                detailsElement.style.display = 'none';
            }
        }
    });
}