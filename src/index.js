import weatherData from './modules/weatherData.js';
import renderWeatherData from './modules/renderWeatherData.js';

const searchBtn = document.querySelector('#search__btn');
const searchInput = document.querySelector('#search__input');
const searchForm = document.querySelector('#search__form');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

searchBtn.addEventListener('click', async () => {
  if (searchInput.value === '') return;
  const data = await weatherData.getWeatherData(searchInput.value);
  renderWeatherData.setSearchResult(data);
});
