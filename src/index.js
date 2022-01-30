import weatherData from './modules/weatherData.js';
import renderWeatherData from './modules/renderWeatherData.js';

const searchBtn = document.querySelector('#search__btn');
const searchInput = document.querySelector('#search__input');
const searchForm = document.querySelector('#search__form');
const locationBtn = document.querySelector('#location__btn');

// Serach City

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

searchBtn.addEventListener('click', async () => {
  if (searchInput.value === '') return;
  const data = await weatherData.getWeatherData(searchInput.value);
  renderWeatherData.setSearchResult(data);
});

// Get Current Location

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

locationBtn.addEventListener('click', async () => {
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    const data = await weatherData.getWeatherData(dataGeo.city);
    renderWeatherData.setSearchResult(data);
    console.log(dataGeo.city);
  } catch (error) {
    console.error(err);
  }
});
