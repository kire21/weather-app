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

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

searchBtn.addEventListener('click', async () => {
  if (searchInput.value === '') return;
  const data = await _modules_weatherData_js__WEBPACK_IMPORTED_MODULE_0__["default"].getWeatherData(searchInput.value);
  _modules_renderWeatherData_js__WEBPACK_IMPORTED_MODULE_1__["default"].setSearchResult(data);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTztBQUN6QztBQUNBLCtCQUErQixVQUFVO0FBQ3pDLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRCQUE0QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BFakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsS0FBSztBQUNsRSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLG9DQUFvQyxNQUFNO0FBQzFDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQ3JCM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNObUQ7QUFDWTs7QUFFL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxxQkFBcUIsOEVBQTBCO0FBQy9DLEVBQUUscUZBQWlDO0FBQ25DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3JlbmRlcldlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZW5kZXJXZWF0aGVyRGF0YSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIHNldFNlYXJjaFJlc3VsdChkYXRhKSB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG5cbiAgICBsZXQgaW1nVXJsID0gJyc7XG5cbiAgICBpZiAoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uID09PSAnYnJva2VuIGNsb3VkcycgfHwgJ292ZXJjYXN0IGNsb3VkcycpIHtcbiAgICAgIGltZ1VybCA9ICcuL2ltYWdlcy9icm9rZW5fX2Nsb3Vkcy5zdmcnO1xuICAgIH1cbiAgICBpZiAoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uID09PSAnY2xlYXIgc2t5Jykge1xuICAgICAgaW1nVXJsID0gJy4vaW1hZ2VzL2NsZWFyX19za3kuc3ZnJztcbiAgICB9XG4gICAgaWYgKGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbiA9PT0gJ2xpZ2h0IHNub3cnKSB7XG4gICAgICBpbWdVcmwgPSAnLi9pbWFnZXMvbGlnaHRfX3Nub3cuc3ZnJztcbiAgICB9XG4gICAgaWYgKGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbiA9PT0gJ3Nub3cnKSB7XG4gICAgICBpbWdVcmwgPSAnLi9pbWFnZXMvbGlnaHRfX3Nub3cuc3ZnJztcbiAgICB9XG5cbiAgICAvLyBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fY29udGFpbmVyJyk7XG4gICAgY2FyZENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICA8YXJ0aWNsZSBjbGFzcz1cImNhcmRcIj5cbiAgICA8aW1nIGNsYXNzPVwiY2FyZF9faW1nXCIgc3JjPVwiJHtpbWdVcmx9XCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fZGF0YVwiPlxuICAgICAgPGgzIGNsYXNzPVwiY2FyZF9fbmFtZVwiPiR7ZGF0YS5uYW1lfTwvaDM+XG4gICAgICA8aDQgY2xhc3M9XCJjYXJkX19yZWdpb25cIj4ke2RhdGEuc3lzLmNvdW50cnl9IDxicj4gJHtcbiAgICAgIGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgIH0gPC9oND5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19yb3dcIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImljb25fX2ltZ1wiIHNyYz1cIi4vaW1hZ2VzL21heF9fdGVtcC5zdmdcIiBhbHQ9XCJcIlxuICAgICAgICAvPjwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2RhdGFcIj5cbiAgICAgICAgICA8cD5UZW1wZXJhdHVyZTwvcD5cbiAgICAgICAgICA8aDQ+JHtNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKX0gwrBDPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19yb3dcIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImljb25fX2ltZ1wiIHNyYz1cIi4vaW1hZ2VzL2h1bWlkaXR5LnN2Z1wiIGFsdD1cIlwiXG4gICAgICAgIC8+PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fZGF0YVwiPlxuICAgICAgICAgIDxwPkh1bWlkaXR5PC9wPlxuICAgICAgICAgIDxoND4ke2RhdGEubWFpbi5odW1pZGl0eX0gJiMzNzs8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX3Jvd1wiPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvbl9faW1nXCIgc3JjPVwiLi9pbWFnZXMvd2luZC5zdmdcIiBhbHQ9XCJcIlxuICAgICAgICAvPjwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2RhdGFcIj5cbiAgICAgICAgICA8cD5XaW5kPC9wPlxuICAgICAgICAgIDxoND4ke2RhdGEud2luZC5zcGVlZH0gbS9zPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9hcnRpY2xlPlxuICAgIGA7XG4gICAgY2FyZENvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICAgIGNhcmRDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZS5vcGFjaXR5ID0gMTtcbiAgfVxuXG4gIHJldHVybiB7IHNldFNlYXJjaFJlc3VsdCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyV2VhdGhlckRhdGE7XG4iLCJjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuXG5jb25zdCB3ZWF0aGVyRGF0YSA9ICgoKSA9PiB7XG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGNpdHkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9YTQyMTQ4MWNkYWNiZDAyMjAxNzA0ZWUyYTUwZmE0MjRgLFxuICAgICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgICApO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjaXR5ICR7Y2l0eX0gaXMgbm90IGZvdW5kISBQbGVhc2UgdHJ5IGFnYWluLmApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBlcnIubWVzc2FnZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBnZXRXZWF0aGVyRGF0YSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckRhdGE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB3ZWF0aGVyRGF0YSBmcm9tICcuL21vZHVsZXMvd2VhdGhlckRhdGEuanMnO1xuaW1wb3J0IHJlbmRlcldlYXRoZXJEYXRhIGZyb20gJy4vbW9kdWxlcy9yZW5kZXJXZWF0aGVyRGF0YS5qcyc7XG5cbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hfX2J0bicpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoX19pbnB1dCcpO1xuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hfX2Zvcm0nKTtcblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICBpZiAoc2VhcmNoSW5wdXQudmFsdWUgPT09ICcnKSByZXR1cm47XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyRGF0YS5nZXRXZWF0aGVyRGF0YShzZWFyY2hJbnB1dC52YWx1ZSk7XG4gIHJlbmRlcldlYXRoZXJEYXRhLnNldFNlYXJjaFJlc3VsdChkYXRhKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9