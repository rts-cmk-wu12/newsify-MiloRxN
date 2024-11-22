import { removeArticle } from './removeArticle.js';
import { fetchHomeTopStories } from './nyt.js';
import truncate from './textfunctions.js';

const archiveNews = await fetchHomeTopStories();
const archiveNewsContainer = document.querySelector('.category');

archiveNews.results.forEach(article => {
    for (var i = 0; i < localStorage.length; i++) {
        if (article.title == localStorage.key(i)) {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = `
            <img src="/images/newsify_logo.svg" alt="article cover" class="category__image">
            <section class="category__description">
                <h3 class="category__description-heading darkmode-white-text">${article.title}</h3>
                <p class="category__description-text darkmode-gray-text">${truncate(article.abstract, 90)}</p>
            </section>`;
            articleElement.classList.add('category__article');
            archiveNewsContainer.append(articleElement);

            articleElement.addEventListener('click', () => {
                window.open(article.url);
            });

            const swipeAction = document.createElement('div');
            swipeAction.className = 'swipe-action-remove';

            const trashcanIcon = document.createElement('img');
            trashcanIcon.src = '/images/icons/trashcanWhite.svg';
            trashcanIcon.alt = 'Bookmark';
            trashcanIcon.style.width = '2rem';
            trashcanIcon.style.height = '2rem';

            swipeAction.appendChild(trashcanIcon);
            articleElement.appendChild(swipeAction);

            articleElement.appendChild(swipeAction);


            removeArticle(articleElement, article.title);
        }
    }

});
