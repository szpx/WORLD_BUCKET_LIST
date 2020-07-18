/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



function init() {
    Object(_map__WEBPACK_IMPORTED_MODULE_0__["initMap"])();
    Object(_dream__WEBPACK_IMPORTED_MODULE_1__["buildAllDreams"])();
}

window.init = init;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMap", function() { return initMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMarkerOnMap", function() { return addMarkerOnMap; });
let map;
let panorama;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0 , lng: 0 },
    zoom: 2,
    streetViewControl: false
  });

  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("panorama"), {
      position: { lat: 36.255309, lng: -112.698277 },
      pov: {
        heading: 200,
        pitch: 0,
        zoom: 0
      }
    });

}

function addMarkerOnMap(dream) {
  const marker = new google.maps.Marker({
    position: dream.coordinates,
    icon: dream.done ? "./img/marker_done.png" : "./img/marker.png",
    map: map
  });

  marker.addListener('click', function() {
    zoomOn(marker.getPosition());
  });

  addMapListeners();
  }

  const resetMapButton = document.getElementById("reset-map");

  function addMapListeners() {
    resetMapButton.addEventListener("click", resetMap); 
  }

  function zoomOn(position) {
    map.setZoom(20);
    map.setCenter(position);
    map.setMapTypeId("satellite")
  }

  function resetMap() {
    map.setCenter({ lat: 0 , lng: 0 });
    map.setMapTypeId("roadmap");
    map.setZoom(2);
  }



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAllDreams", function() { return buildAllDreams; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);



const dreamsContainer = document.querySelector("#dreams-container");


function buildAllDreams() {
    while(dreamsContainer.hasChildNodes()) {
        dreamsContainer.removeChild(dreamsContainer.lastChild);
    }
    _data__WEBPACK_IMPORTED_MODULE_0__["data"].forEach(buildOneDream);
}

function buildOneDream(dream) {

    const dreamElement = document.createElement("div");
    dreamElement.innerHTML = `<div class="card text-center">
    <h5 class="card-header font-weight-bold"> ${dream.description}</h5>
    <img src="${dream.imagePath}" class="card-img-top" alt="...">
    <div class="card-body">
        <a href="#" class="btn btn-${dream.done?"secondary":"danger"} font-weight-bold btn-block">${dream.done?"Je veux le refaire":"Je me lance !"}</a>  
    </div>
    <div class="card-footer text-muted text-center">
        <a href="#" class="btn btn-outline-dark btn-sm">Visiter</a>
        <a href="${dream.link}" class="btn btn-outline-dark btn-sm">Plus d'informations</a>
    </div>
    </div>`;
    dreamsContainer.appendChild(dreamElement);

    Object(_map__WEBPACK_IMPORTED_MODULE_1__["addMarkerOnMap"])(dream);
}




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = [
    { // { lat: 36.255309, lng: -112.698277 }
        id: 1,
        imagePath: "./img/Havanu.jpg",
        description: "Chutes d'Havanasupai - USA, Arizona",
        done: true,
        link: "https://www.roadtrippin.fr/arizona/havasupai-falls/havasupai-falls.php",
        coordinates: {
            lat: 36.255538,
            lng: -112.697993
        }

    },
    { // { lat: -9.739656 , lng: -138.922470 }
        id: 2,
        imagePath: "https://www.partir.com/images/incontournables/polynesie-hiva-oa.jpg",
        description: "Hiva Oa (îles Marquises) - Polynésie française",
        done: false,
        link: "https://pacifique-a-la-carte.com/voyage-polynesie/archipel-des-marquises/sejour-hiva-oa",
        coordinates: {
            lat: -9.765723,
            lng: -139.052422
        }
    },
    { // { lat: 43.202296, lng : 5.498953 }
        id: 3,
        imagePath: "https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_650/https://www.alloweekend.com/wordpress/wp-content/uploads/2013/03/1.jpg",
        description: "Calanque d'En Vau - France, La Ciotat",
        done: false,
        link: "https://www.detoursenfrance.fr/en-vau-lune-des-plus-belles-calanques-de-france-7783",
        coordinates: {
            lat: 43.202337, 
            lng: 5.497670
        }
    }
];



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyZWFtLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUE2QjtBQUNTOztBQUV0QztBQUNBLElBQUksb0RBQU87QUFDWCxJQUFJLDZEQUFjO0FBQ2xCOztBQUVBLG1COzs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGlCQUFpQixtQ0FBbUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBMkI7QUFDUzs7QUFFcEM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwQ0FBSTtBQUNSOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Qsa0JBQWtCO0FBQ2xFLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQSxxQ0FBcUMsZ0NBQWdDLCtCQUErQixnREFBZ0Q7QUFDcEo7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBOztBQUVBLElBQUksMkRBQWM7QUFDbEI7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQ0EsS0FBSyxLQUFLO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTCxLQUFLLEtBQUs7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSyxLQUFLO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQge2luaXRNYXB9IGZyb20gXCIuL21hcFwiXG5pbXBvcnQge2J1aWxkQWxsRHJlYW1zfSBmcm9tIFwiLi9kcmVhbVwiXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaW5pdE1hcCgpO1xuICAgIGJ1aWxkQWxsRHJlYW1zKCk7XG59XG5cbndpbmRvdy5pbml0ID0gaW5pdDsiLCJsZXQgbWFwO1xubGV0IHBhbm9yYW1hO1xuXG5mdW5jdGlvbiBpbml0TWFwKCkge1xuICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG4gICAgY2VudGVyOiB7IGxhdDogMCAsIGxuZzogMCB9LFxuICAgIHpvb206IDIsXG4gICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlXG4gIH0pO1xuXG4gIHBhbm9yYW1hID0gbmV3IGdvb2dsZS5tYXBzLlN0cmVldFZpZXdQYW5vcmFtYShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhbm9yYW1hXCIpLCB7XG4gICAgICBwb3NpdGlvbjogeyBsYXQ6IDM2LjI1NTMwOSwgbG5nOiAtMTEyLjY5ODI3NyB9LFxuICAgICAgcG92OiB7XG4gICAgICAgIGhlYWRpbmc6IDIwMCxcbiAgICAgICAgcGl0Y2g6IDAsXG4gICAgICAgIHpvb206IDBcbiAgICAgIH1cbiAgICB9KTtcblxufVxuXG5mdW5jdGlvbiBhZGRNYXJrZXJPbk1hcChkcmVhbSkge1xuICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICBwb3NpdGlvbjogZHJlYW0uY29vcmRpbmF0ZXMsXG4gICAgaWNvbjogZHJlYW0uZG9uZSA/IFwiLi9pbWcvbWFya2VyX2RvbmUucG5nXCIgOiBcIi4vaW1nL21hcmtlci5wbmdcIixcbiAgICBtYXA6IG1hcFxuICB9KTtcblxuICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgem9vbU9uKG1hcmtlci5nZXRQb3NpdGlvbigpKTtcbiAgfSk7XG5cbiAgYWRkTWFwTGlzdGVuZXJzKCk7XG4gIH1cblxuICBjb25zdCByZXNldE1hcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXQtbWFwXCIpO1xuXG4gIGZ1bmN0aW9uIGFkZE1hcExpc3RlbmVycygpIHtcbiAgICByZXNldE1hcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXRNYXApOyBcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21Pbihwb3NpdGlvbikge1xuICAgIG1hcC5zZXRab29tKDIwKTtcbiAgICBtYXAuc2V0Q2VudGVyKHBvc2l0aW9uKTtcbiAgICBtYXAuc2V0TWFwVHlwZUlkKFwic2F0ZWxsaXRlXCIpXG4gIH1cblxuICBmdW5jdGlvbiByZXNldE1hcCgpIHtcbiAgICBtYXAuc2V0Q2VudGVyKHsgbGF0OiAwICwgbG5nOiAwIH0pO1xuICAgIG1hcC5zZXRNYXBUeXBlSWQoXCJyb2FkbWFwXCIpO1xuICAgIG1hcC5zZXRab29tKDIpO1xuICB9XG5cbmV4cG9ydCB7aW5pdE1hcCxhZGRNYXJrZXJPbk1hcH07IiwiaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi9kYXRhXCJcbmltcG9ydCB7YWRkTWFya2VyT25NYXB9IGZyb20gXCIuL21hcFwiXG5cbmNvbnN0IGRyZWFtc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJlYW1zLWNvbnRhaW5lclwiKTtcblxuXG5mdW5jdGlvbiBidWlsZEFsbERyZWFtcygpIHtcbiAgICB3aGlsZShkcmVhbXNDb250YWluZXIuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIGRyZWFtc0NvbnRhaW5lci5yZW1vdmVDaGlsZChkcmVhbXNDb250YWluZXIubGFzdENoaWxkKTtcbiAgICB9XG4gICAgZGF0YS5mb3JFYWNoKGJ1aWxkT25lRHJlYW0pO1xufVxuXG5mdW5jdGlvbiBidWlsZE9uZURyZWFtKGRyZWFtKSB7XG5cbiAgICBjb25zdCBkcmVhbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRyZWFtRWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNhcmQgdGV4dC1jZW50ZXJcIj5cbiAgICA8aDUgY2xhc3M9XCJjYXJkLWhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+ICR7ZHJlYW0uZGVzY3JpcHRpb259PC9oNT5cbiAgICA8aW1nIHNyYz1cIiR7ZHJlYW0uaW1hZ2VQYXRofVwiIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiLi4uXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi0ke2RyZWFtLmRvbmU/XCJzZWNvbmRhcnlcIjpcImRhbmdlclwifSBmb250LXdlaWdodC1ib2xkIGJ0bi1ibG9ja1wiPiR7ZHJlYW0uZG9uZT9cIkplIHZldXggbGUgcmVmYWlyZVwiOlwiSmUgbWUgbGFuY2UgIVwifTwvYT4gIFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciB0ZXh0LW11dGVkIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtZGFyayBidG4tc21cIj5WaXNpdGVyPC9hPlxuICAgICAgICA8YSBocmVmPVwiJHtkcmVhbS5saW5rfVwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmsgYnRuLXNtXCI+UGx1cyBkJ2luZm9ybWF0aW9uczwvYT5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICAgIGRyZWFtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkcmVhbUVsZW1lbnQpO1xuXG4gICAgYWRkTWFya2VyT25NYXAoZHJlYW0pO1xufVxuXG5cbmV4cG9ydCB7YnVpbGRBbGxEcmVhbXN9OyIsImNvbnN0IGRhdGEgPSBbXG4gICAgeyAvLyB7IGxhdDogMzYuMjU1MzA5LCBsbmc6IC0xMTIuNjk4Mjc3IH1cbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGltYWdlUGF0aDogXCIuL2ltZy9IYXZhbnUuanBnXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNodXRlcyBkJ0hhdmFuYXN1cGFpIC0gVVNBLCBBcml6b25hXCIsXG4gICAgICAgIGRvbmU6IHRydWUsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cucm9hZHRyaXBwaW4uZnIvYXJpem9uYS9oYXZhc3VwYWktZmFsbHMvaGF2YXN1cGFpLWZhbGxzLnBocFwiLFxuICAgICAgICBjb29yZGluYXRlczoge1xuICAgICAgICAgICAgbGF0OiAzNi4yNTU1MzgsXG4gICAgICAgICAgICBsbmc6IC0xMTIuNjk3OTkzXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgeyAvLyB7IGxhdDogLTkuNzM5NjU2ICwgbG5nOiAtMTM4LjkyMjQ3MCB9XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBpbWFnZVBhdGg6IFwiaHR0cHM6Ly93d3cucGFydGlyLmNvbS9pbWFnZXMvaW5jb250b3VybmFibGVzL3BvbHluZXNpZS1oaXZhLW9hLmpwZ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJIaXZhIE9hICjDrmxlcyBNYXJxdWlzZXMpIC0gUG9seW7DqXNpZSBmcmFuw6dhaXNlXCIsXG4gICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vcGFjaWZpcXVlLWEtbGEtY2FydGUuY29tL3ZveWFnZS1wb2x5bmVzaWUvYXJjaGlwZWwtZGVzLW1hcnF1aXNlcy9zZWpvdXItaGl2YS1vYVwiLFxuICAgICAgICBjb29yZGluYXRlczoge1xuICAgICAgICAgICAgbGF0OiAtOS43NjU3MjMsXG4gICAgICAgICAgICBsbmc6IC0xMzkuMDUyNDIyXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHsgLy8geyBsYXQ6IDQzLjIwMjI5NiwgbG5nIDogNS40OTg5NTMgfVxuICAgICAgICBpZDogMyxcbiAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHBzOi8vY2RuLnNob3J0cGl4ZWwuYWkvY2xpZW50L3RvX3dlYnAscV9nbG9zc3kscmV0X2ltZyx3XzY1MC9odHRwczovL3d3dy5hbGxvd2Vla2VuZC5jb20vd29yZHByZXNzL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEzLzAzLzEuanBnXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNhbGFucXVlIGQnRW4gVmF1IC0gRnJhbmNlLCBMYSBDaW90YXRcIixcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZGV0b3Vyc2VuZnJhbmNlLmZyL2VuLXZhdS1sdW5lLWRlcy1wbHVzLWJlbGxlcy1jYWxhbnF1ZXMtZGUtZnJhbmNlLTc3ODNcIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IHtcbiAgICAgICAgICAgIGxhdDogNDMuMjAyMzM3LCBcbiAgICAgICAgICAgIGxuZzogNS40OTc2NzBcbiAgICAgICAgfVxuICAgIH1cbl07XG5cbmV4cG9ydCB7ZGF0YX0iXSwic291cmNlUm9vdCI6IiJ9