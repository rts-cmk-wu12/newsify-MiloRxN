const API_KEY = 'AA6iA4a5XkBbnhrqoa01wltF6JwD8d84'

const BASE_URL = 'https://api.nytimes.com/svc/';

const endpoints = {
    mostPopularByViews: 'mostpopular/v2/viewed/',
    homeTopStories: 'topstories/v2/'
}

async function fetchMostPopularByViews(days = 7) {
    const url = new URL(`${days}.json`, BASE_URL + endpoints.mostPopularByViews);
    url.searchParams.set('api-key', API_KEY);
    const rensponse = await fetch(url);
    const data = await rensponse.json();

    return data
}

module.exports = { fetchMostPopularByViews };