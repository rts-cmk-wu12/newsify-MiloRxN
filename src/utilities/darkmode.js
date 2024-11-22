const colorMode = localStorage.getItem('colorMode');
let isDark = colorMode === 'dark';

const footer = document.querySelector('.footer');
const allWhiteText = document.querySelectorAll('.darkmode-white-text');
const allGrayText = document.querySelectorAll('.darkmode-gray-text');
const lightImages = document.querySelectorAll('.light-mode-image');
const darkImages = document.querySelectorAll('.dark-mode-image');

function toggleImages(showDark) {
    lightImages.forEach(image => {
        image.style.display = showDark ? 'none' : 'block';
    });
    darkImages.forEach(image => {
        image.style.display = showDark ? 'block' : 'none';
    });
}

const toggleDarkModeBtn = document.querySelector('#toggle__darkmode');
toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
    footer.classList.toggle('darkmode');

    allWhiteText.forEach(text => text.classList.toggle('darkmode-white-text'));
    allGrayText.forEach(text => text.classList.toggle('darkmode-gray-text'));

    if (!isDark) {
        localStorage.setItem('colorMode', 'dark');
        toggleImages(true);
    } else {
        localStorage.setItem('colorMode', 'light');
        toggleImages(false);
    }

    isDark = !isDark;
});