const renderWeatherData = (() => {
  function setSearchResult(data) {
    if (!data) return;

    let imgUrl = '';

    if (data.weather[0].description === 'broken clouds' || 'overcast clouds') {
      imgUrl = './images/broken__clouds.svg';
    }
    if (data.weather[0].description === 'clear sky') {
      imgUrl = './images/clear__sky.svg';
    }
    if (data.weather[0].description === 'light snow') {
      imgUrl = './images/light__snow.svg';
    }
    if (data.weather[0].description === 'snow') {
      imgUrl = './images/light__snow.svg';
    }

    const cardContainer = document.querySelector('.card__container');
    cardContainer.textContent = '';

    const html = `
    <article class="card">
    <img class="card__img" src="${imgUrl}" />
    <div class="card__data">
      <h3 class="card__name">${data.name}</h3>
      <h4 class="card__region">${data.sys.country} <br> ${
      data.weather[0].description
    } </h4>
      <div class="card__row">
        <span>
          <img class="icon__img" src="./images/max__temp.svg" alt=""
        /></span>
        <div class="card__data">
          <p>Temperature</p>
          <h4>${Math.round(data.main.temp)} °C</h4>
        </div>
      </div>
      <div class="card__row">
        <span>
          <img class="icon__img" src="./images/humidity.svg" alt=""
        /></span>
        <div class="card__data">
          <p>Humidity</p>
          <h4>${data.main.humidity} &#37;</h4>
        </div>
      </div>
      <div class="card__row">
        <span>
          <img class="icon__img" src="./images/wind.svg" alt=""
        /></span>
        <div class="card__data">
          <p>Wind</p>
          <h4>${data.wind.speed} m/s</h4>
        </div>
      </div>
    </div>
  </article>
    `;
    cardContainer.insertAdjacentHTML('beforeend', html);
    cardContainer.getElementsByClassName.opacity = 1;
  }

  return { setSearchResult };
})();

export default renderWeatherData;
