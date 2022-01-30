/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/renderWeatherData.js":
/*!******************************************!*\
  !*** ./src/modules/renderWeatherData.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

    // const title = document.querySelector('.title');
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWeatherData);


/***/ }),

/***/ "./src/modules/weatherData.js":
/*!************************************!*\
  !*** ./src/modules/weatherData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherData);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weatherData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherData.js */ "./src/modules/weatherData.js");
/* harmony import */ var _modules_renderWeatherData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderWeatherData.js */ "./src/modules/renderWeatherData.js");



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
  const data = await _modules_weatherData_js__WEBPACK_IMPORTED_MODULE_0__["default"].getWeatherData(searchInput.value);
  _modules_renderWeatherData_js__WEBPACK_IMPORTED_MODULE_1__["default"].setSearchResult(data);
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
    const data = await _modules_weatherData_js__WEBPACK_IMPORTED_MODULE_0__["default"].getWeatherData(dataGeo.city);
    _modules_renderWeatherData_js__WEBPACK_IMPORTED_MODULE_1__["default"].setSearchResult(data);
    console.log(dataGeo.city);
  } catch (error) {
    console.error(err);
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTztBQUN6QztBQUNBLCtCQUErQixVQUFVO0FBQ3pDLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRCQUE0QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BFakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0NBQWdDOztBQUUvQyx5REFBeUQsSUFBSSxHQUFHLElBQUk7QUFDcEU7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxLQUFLO0FBQ2xFLFVBQVU7QUFDVjtBQUNBO0FBQ0Esb0NBQW9DLE1BQU07QUFDMUM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7O1VDeEMzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05tRDtBQUNZOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EscUJBQXFCLDhFQUEwQjtBQUMvQyxFQUFFLHFGQUFpQztBQUNuQyxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdDQUFnQzs7QUFFNUMsc0RBQXNELElBQUksR0FBRyxJQUFJO0FBQ2pFO0FBQ0EsdUJBQXVCLDhFQUEwQjtBQUNqRCxJQUFJLHFGQUFpQztBQUNyQztBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyV2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlbmRlcldlYXRoZXJEYXRhID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gc2V0U2VhcmNoUmVzdWx0KGRhdGEpIHtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcblxuICAgIGxldCBpbWdVcmwgPSAnJztcblxuICAgIGlmIChkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24gPT09ICdicm9rZW4gY2xvdWRzJyB8fCAnb3ZlcmNhc3QgY2xvdWRzJykge1xuICAgICAgaW1nVXJsID0gJy4vaW1hZ2VzL2Jyb2tlbl9fY2xvdWRzLnN2Zyc7XG4gICAgfVxuICAgIGlmIChkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24gPT09ICdjbGVhciBza3knKSB7XG4gICAgICBpbWdVcmwgPSAnLi9pbWFnZXMvY2xlYXJfX3NreS5zdmcnO1xuICAgIH1cbiAgICBpZiAoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uID09PSAnbGlnaHQgc25vdycpIHtcbiAgICAgIGltZ1VybCA9ICcuL2ltYWdlcy9saWdodF9fc25vdy5zdmcnO1xuICAgIH1cbiAgICBpZiAoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uID09PSAnc25vdycpIHtcbiAgICAgIGltZ1VybCA9ICcuL2ltYWdlcy9saWdodF9fc25vdy5zdmcnO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19jb250YWluZXInKTtcbiAgICBjYXJkQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBodG1sID0gYFxuICAgIDxhcnRpY2xlIGNsYXNzPVwiY2FyZFwiPlxuICAgIDxpbWcgY2xhc3M9XCJjYXJkX19pbWdcIiBzcmM9XCIke2ltZ1VybH1cIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkX19kYXRhXCI+XG4gICAgICA8aDMgY2xhc3M9XCJjYXJkX19uYW1lXCI+JHtkYXRhLm5hbWV9PC9oMz5cbiAgICAgIDxoNCBjbGFzcz1cImNhcmRfX3JlZ2lvblwiPiR7ZGF0YS5zeXMuY291bnRyeX0gPGJyPiAke1xuICAgICAgZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgfSA8L2g0PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX3Jvd1wiPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvbl9faW1nXCIgc3JjPVwiLi9pbWFnZXMvbWF4X190ZW1wLnN2Z1wiIGFsdD1cIlwiXG4gICAgICAgIC8+PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fZGF0YVwiPlxuICAgICAgICAgIDxwPlRlbXBlcmF0dXJlPC9wPlxuICAgICAgICAgIDxoND4ke01hdGgucm91bmQoZGF0YS5tYWluLnRlbXApfSDCsEM8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX3Jvd1wiPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvbl9faW1nXCIgc3JjPVwiLi9pbWFnZXMvaHVtaWRpdHkuc3ZnXCIgYWx0PVwiXCJcbiAgICAgICAgLz48L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19kYXRhXCI+XG4gICAgICAgICAgPHA+SHVtaWRpdHk8L3A+XG4gICAgICAgICAgPGg0PiR7ZGF0YS5tYWluLmh1bWlkaXR5fSAmIzM3OzwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fcm93XCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJpY29uX19pbWdcIiBzcmM9XCIuL2ltYWdlcy93aW5kLnN2Z1wiIGFsdD1cIlwiXG4gICAgICAgIC8+PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fZGF0YVwiPlxuICAgICAgICAgIDxwPldpbmQ8L3A+XG4gICAgICAgICAgPGg0PiR7ZGF0YS53aW5kLnNwZWVkfSBtL3M8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2FydGljbGU+XG4gICAgYDtcbiAgICBjYXJkQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gICAgY2FyZENvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lLm9wYWNpdHkgPSAxO1xuICB9XG5cbiAgcmV0dXJuIHsgc2V0U2VhcmNoUmVzdWx0IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJXZWF0aGVyRGF0YTtcbiIsImNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG5cbi8vIGNvbnN0IGdldFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuLy8gICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuLy8gICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzb2x2ZSwgcmVqZWN0KTtcbi8vICAgfSk7XG4vLyB9O1xuXG4vLyBjb25zdCBsb2NhdGlvbiA9IGFzeW5jKCgpID0+IHtcbi8vICAgdHJ5IHtcbi8vICAgICBjb25zdCBwb3NpdGlvbiA9IGF3YWl0IGdldFBvc2l0aW9uKCk7XG4vLyAgICAgY29uc3QgeyBsYXRpdHVkZTogbGF0LCBsb25naXR1ZGU6IGxuZyB9ID0gcG9zaXRpb24uY29vcmRzO1xuXG4vLyAgICAgY29uc3QgcmVzR2VvID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZ2VvY29kZS54eXovJHtsYXR9LCR7bG5nfT9nZW9pdD1qc29uYCk7XG4vLyAgICAgY29uc3QgZGF0YUdlbyA9IGF3YWl0IHJlc0dlby5qc29uKCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YUdlbyk7XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuLy8gICB9XG4vLyB9KTtcblxuY29uc3Qgd2VhdGhlckRhdGEgPSAoKCkgPT4ge1xuICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShjaXR5KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPWE0MjE0ODFjZGFjYmQwMjIwMTcwNGVlMmE1MGZhNDI0YCxcbiAgICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICAgKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY2l0eSAke2NpdHl9IGlzIG5vdCBmb3VuZCEgUGxlYXNlIHRyeSBhZ2Fpbi5gKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gZXJyLm1lc3NhZ2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgZ2V0V2VhdGhlckRhdGEgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJEYXRhO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgd2VhdGhlckRhdGEgZnJvbSAnLi9tb2R1bGVzL3dlYXRoZXJEYXRhLmpzJztcbmltcG9ydCByZW5kZXJXZWF0aGVyRGF0YSBmcm9tICcuL21vZHVsZXMvcmVuZGVyV2VhdGhlckRhdGEuanMnO1xuXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoX19idG4nKTtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaF9faW5wdXQnKTtcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoX19mb3JtJyk7XG5jb25zdCBsb2NhdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbl9fYnRuJyk7XG5cbi8vIFNlcmFjaCBDaXR5XG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgaWYgKHNlYXJjaElucHV0LnZhbHVlID09PSAnJykgcmV0dXJuO1xuICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlckRhdGEuZ2V0V2VhdGhlckRhdGEoc2VhcmNoSW5wdXQudmFsdWUpO1xuICByZW5kZXJXZWF0aGVyRGF0YS5zZXRTZWFyY2hSZXN1bHQoZGF0YSk7XG59KTtcblxuLy8gR2V0IEN1cnJlbnQgTG9jYXRpb25cblxuY29uc3QgZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXNvbHZlLCByZWplY3QpO1xuICB9KTtcbn07XG5cbmxvY2F0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gYXdhaXQgZ2V0UG9zaXRpb24oKTtcbiAgICBjb25zdCB7IGxhdGl0dWRlOiBsYXQsIGxvbmdpdHVkZTogbG5nIH0gPSBwb3NpdGlvbi5jb29yZHM7XG5cbiAgICBjb25zdCByZXNHZW8gPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9nZW9jb2RlLnh5ei8ke2xhdH0sJHtsbmd9P2dlb2l0PWpzb25gKTtcbiAgICBjb25zdCBkYXRhR2VvID0gYXdhaXQgcmVzR2VvLmpzb24oKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlckRhdGEuZ2V0V2VhdGhlckRhdGEoZGF0YUdlby5jaXR5KTtcbiAgICByZW5kZXJXZWF0aGVyRGF0YS5zZXRTZWFyY2hSZXN1bHQoZGF0YSk7XG4gICAgY29uc29sZS5sb2coZGF0YUdlby5jaXR5KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9