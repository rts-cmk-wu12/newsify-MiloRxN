export function removeArticle(articleElement, articleTitle) {
    let startX, endX;

    if (!articleElement) return;

    articleElement.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });

    articleElement.addEventListener('touchmove', e => {
        endX = e.touches[0].clientX;
    });

    articleElement.addEventListener('touchend', () => {
        if (startX - endX > 50) {
            articleElement.classList.add('swiped-remove');
            localStorage.removeItem(articleTitle);
            setTimeout(() => {
                articleElement.remove();
            }, 520)
        } else if (endX - startX > 50) {
            articleElement.classList.remove('swiped-remove');
        }
    });
}
