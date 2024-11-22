export function saveArticle(articleElement, articleTitle) {
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
            articleElement.classList.add('swiped');
            localStorage.setItem(articleTitle, 'saved');
        } else if (endX - startX > 50) {
            articleElement.classList.remove('swiped');
        }
    });

    const swipeAction = articleElement.querySelector('.swipe-action');
    if (swipeAction) {
        swipeAction.addEventListener('click', () => {
            articleElement.remove();
        });
    }
}