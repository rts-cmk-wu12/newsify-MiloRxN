const colorMode = localStorage.getItem('colorMode');
let isDark = colorMode === 'dark';

const applyDarkMode = () => {
    const footer = document.querySelector('.footer');
    const searchInput = document.querySelector('.darkmode-gray-input');
    const allWhiteText = document.querySelectorAll('.darkmode-white-text');
    const allGrayText = document.querySelectorAll('.darkmode-gray-text');
    const allWhiteLines = document.querySelectorAll('.darkmode-white-line');
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

    if (isDark) {
        document.body.classList.add('darkmode');
        footer?.classList.add('darkmode');
        searchInput?.classList.add('darkmode');
        allWhiteText.forEach(text => text.classList.add('darkmode'));
        allGrayText.forEach(text => text.classList.add('darkmode'));
        allWhiteLines.forEach(line => line.classList.add('darkmode'));
        toggleImages(true);
    } else {
        document.body.classList.remove('darkmode');
        footer?.classList.remove('darkmode');
        searchInput?.classList.remove('darkmode');
        allWhiteText.forEach(text => text.classList.remove('darkmode'));
        allGrayText.forEach(text => text.classList.remove('darkmode'));
        allWhiteLines.forEach(line => line.classList.remove('darkmode'));
        toggleImages(false);
    }
}

applyDarkMode();

const observer = new MutationObserver(applyDarkMode);
observer.observe(document.body, { 
    childList: true,
    subtree: true,
 });