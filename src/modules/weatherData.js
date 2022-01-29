const title = document.querySelector('.title');

const weatherData = (() => {
  async function getWeatherData(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a421481cdacbd02201704ee2a50fa424`,
        { mode: 'cors' }
      );
      if (response.status === 404)
        throw new Error(`The city ${city} is not found! Please try again.`);
      const data = await response.json();
      return data;
    } catch (err) {
      title.textContent = err.message;
    }
  }

  return { getWeatherData };
})();

export default weatherData;
