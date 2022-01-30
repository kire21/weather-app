const title = document.querySelector('.title');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const location = async(() => {
//   try {
//     const position = await getPosition();
//     const { latitude: lat, longitude: lng } = position.coords;

//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);
//   } catch (error) {
//     console.error(err);
//   }
// });

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
