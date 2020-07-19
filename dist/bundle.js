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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitDreamOnMap", function() { return visitDreamOnMap; });
let map;
let panorama;
const panoramaElement = document.querySelector("#panorama");
const resetMapButton = document.getElementById("reset-map");
const backToMapButton = document.getElementById("back-to-map");


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

    addMapListeners();

    panoramaElement.style.display = "none";
    backToMapButton.style.display = "none";
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
}

  function addMapListeners() {
    resetMapButton.addEventListener("click", resetMap); 
    backToMapButton.addEventListener("click", backToMap); 
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

  function backToMap() {
    panoramaElement.style.display = "none";
    backToMapButton.style.display = "none";
    resetMapButton.style.display = "block";
  }

  function visitDreamOnMap(position) {
    panorama.setPosition(position)
    panoramaElement.style.display = "block";
    backToMapButton.style.display = "block";
    resetMapButton.style.display = "none";
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
    addDreamsListeners();
}

function buildOneDream(dream) {

    const dreamElement = document.createElement("div");
    dreamElement.innerHTML = `<div class="card text-center" id="${dream.id}">
    <h5 class="card-header font-weight-bold"> ${dream.description}</h5>
    <img src="${dream.imagePath}" class="card-img-top" alt="...">
    <div class="card-body">
        <a href="#" class="button-action btn btn-${dream.done?"secondary":"danger"} font-weight-bold btn-block">${dream.done?"Je veux le refaire":"Je me lance !"}</a>  
    </div>
    <div class="card-footer text-muted text-center">
        <a href="#" class="button-visit btn btn-outline-dark btn-sm">Visiter</a>
        <a href="${dream.link}" target="_blank" class="btn btn-outline-dark btn-sm">Plus d'informations</a>
    </div>
    </div>`;
    dreamsContainer.appendChild(dreamElement);

    Object(_map__WEBPACK_IMPORTED_MODULE_1__["addMarkerOnMap"])(dream);
}

function addDreamsListeners() {
    document.querySelectorAll(".button-visit").forEach(item => {
        item.addEventListener("click", event => {
            visitDream(item.parentElement.parentElement.getAttribute("id"));
        })
    })

    document.querySelectorAll(".button-action").forEach(item => {
        item.addEventListener("click", event => {
            toggleDreamDone(item.parentElement.parentElement.getAttribute("id"));
        })
    }) 
}

function visitDream(dreamId) {
    let position = _data__WEBPACK_IMPORTED_MODULE_0__["data"].filter(item => item.id == dreamId)[0].coordinates;
    Object(_map__WEBPACK_IMPORTED_MODULE_1__["visitDreamOnMap"])(position);
}

function toggleDreamDone(dreamId) {
    let dream = _data__WEBPACK_IMPORTED_MODULE_0__["data"].filter(item => item.id == dreamId)[0];
    dream.done = !dream.done;
    buildAllDreams()
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = [
    { 
        id: 1,
        imagePath: "./img/Havanu.jpg",
        description: "Chutes d'Havanasupai - USA, Arizona",
        done: false,
        link: "https://www.roadtrippin.fr/arizona/havasupai-falls/havasupai-falls.php",
        coordinates: { 
            lat: 36.255309, 
            lng: -112.698277 
        }

    },
    { 
        id: 2,
        imagePath: "https://www.partir.com/images/incontournables/polynesie-hiva-oa.jpg",
        description: "Hiva Oa (îles Marquises) - Polynésie française",
        done: false,
        link: "https://pacifique-a-la-carte.com/voyage-polynesie/archipel-des-marquises/sejour-hiva-oa",
        coordinates: {
            lat: -9.739656,
            lng: -138.922470
        }
    },
    { 
        id: 3,
        imagePath: "https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_650/https://www.alloweekend.com/wordpress/wp-content/uploads/2013/03/1.jpg",
        description: "Calanque d'En Vau - France, La Ciotat",
        done: false,
        link: "https://www.detoursenfrance.fr/en-vau-lune-des-plus-belles-calanques-de-france-7783",
        coordinates: { 
            lat: 43.202296,
            lng : 5.498953
        }
    }
];



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyZWFtLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUE2QjtBQUNTOztBQUV0QztBQUNBLElBQUksb0RBQU87QUFDWCxJQUFJLDZEQUFjO0FBQ2xCOztBQUVBLG1COzs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGlCQUFpQixtQ0FBbUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSx1RDtBQUNBLHlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUFBO0FBQUE7QUFBMkI7QUFDeUI7O0FBRXBEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMENBQUk7QUFDUjtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0VBQWtFLFNBQVM7QUFDM0UsZ0RBQWdELGtCQUFrQjtBQUNsRSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0EsbURBQW1ELGdDQUFnQywrQkFBK0IsZ0RBQWdEO0FBQ2xLO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDJEQUFjO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBLG1CQUFtQiwwQ0FBSTtBQUN2QixJQUFJLDREQUFlO0FBQ25COztBQUVBO0FBQ0EsZ0JBQWdCLDBDQUFJO0FBQ3BCO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4REE7QUFBQTtBQUFBO0FBQ0EsSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0wsSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQge2luaXRNYXB9IGZyb20gXCIuL21hcFwiXG5pbXBvcnQge2J1aWxkQWxsRHJlYW1zfSBmcm9tIFwiLi9kcmVhbVwiXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaW5pdE1hcCgpO1xuICAgIGJ1aWxkQWxsRHJlYW1zKCk7XG59XG5cbndpbmRvdy5pbml0ID0gaW5pdDsiLCJsZXQgbWFwO1xubGV0IHBhbm9yYW1hO1xuY29uc3QgcGFub3JhbWFFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYW5vcmFtYVwiKTtcbmNvbnN0IHJlc2V0TWFwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldC1tYXBcIik7XG5jb25zdCBiYWNrVG9NYXBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2stdG8tbWFwXCIpO1xuXG5cbmZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcbiAgICBjZW50ZXI6IHsgbGF0OiAwICwgbG5nOiAwIH0sXG4gICAgem9vbTogMixcbiAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2VcbiAgfSk7XG5cbiAgcGFub3JhbWEgPSBuZXcgZ29vZ2xlLm1hcHMuU3RyZWV0Vmlld1Bhbm9yYW1hKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFub3JhbWFcIiksIHtcbiAgICAgIHBvc2l0aW9uOiB7IGxhdDogMzYuMjU1MzA5LCBsbmc6IC0xMTIuNjk4Mjc3IH0sXG4gICAgICBwb3Y6IHtcbiAgICAgICAgaGVhZGluZzogMjAwLFxuICAgICAgICBwaXRjaDogMCxcbiAgICAgICAgem9vbTogMFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYWRkTWFwTGlzdGVuZXJzKCk7XG5cbiAgICBwYW5vcmFtYUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGJhY2tUb01hcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGFkZE1hcmtlck9uTWFwKGRyZWFtKSB7XG4gIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgIHBvc2l0aW9uOiBkcmVhbS5jb29yZGluYXRlcyxcbiAgICBpY29uOiBkcmVhbS5kb25lID8gXCIuL2ltZy9tYXJrZXJfZG9uZS5wbmdcIiA6IFwiLi9pbWcvbWFya2VyLnBuZ1wiLFxuICAgIG1hcDogbWFwXG4gIH0pO1xuXG4gIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICB6b29tT24obWFya2VyLmdldFBvc2l0aW9uKCkpO1xuICB9KTtcbn1cblxuICBmdW5jdGlvbiBhZGRNYXBMaXN0ZW5lcnMoKSB7XG4gICAgcmVzZXRNYXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0TWFwKTsgXG4gICAgYmFja1RvTWFwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBiYWNrVG9NYXApOyBcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21Pbihwb3NpdGlvbikge1xuICAgIG1hcC5zZXRab29tKDIwKTtcbiAgICBtYXAuc2V0Q2VudGVyKHBvc2l0aW9uKTtcbiAgICBtYXAuc2V0TWFwVHlwZUlkKFwic2F0ZWxsaXRlXCIpXG4gIH1cblxuICBmdW5jdGlvbiByZXNldE1hcCgpIHtcbiAgICBtYXAuc2V0Q2VudGVyKHsgbGF0OiAwICwgbG5nOiAwIH0pO1xuICAgIG1hcC5zZXRNYXBUeXBlSWQoXCJyb2FkbWFwXCIpO1xuICAgIG1hcC5zZXRab29tKDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmFja1RvTWFwKCkge1xuICAgIHBhbm9yYW1hRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYmFja1RvTWFwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICByZXNldE1hcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgZnVuY3Rpb24gdmlzaXREcmVhbU9uTWFwKHBvc2l0aW9uKSB7XG4gICAgcGFub3JhbWEuc2V0UG9zaXRpb24ocG9zaXRpb24pXG4gICAgcGFub3JhbWFFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgYmFja1RvTWFwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcmVzZXRNYXBCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIFxuZXhwb3J0IHtpbml0TWFwLGFkZE1hcmtlck9uTWFwLHZpc2l0RHJlYW1Pbk1hcH07IiwiaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi9kYXRhXCJcbmltcG9ydCB7YWRkTWFya2VyT25NYXAsdmlzaXREcmVhbU9uTWFwfSBmcm9tIFwiLi9tYXBcIlxuXG5jb25zdCBkcmVhbXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RyZWFtcy1jb250YWluZXJcIik7XG5cblxuZnVuY3Rpb24gYnVpbGRBbGxEcmVhbXMoKSB7XG4gICAgd2hpbGUoZHJlYW1zQ29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBkcmVhbXNDb250YWluZXIucmVtb3ZlQ2hpbGQoZHJlYW1zQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGRhdGEuZm9yRWFjaChidWlsZE9uZURyZWFtKTtcbiAgICBhZGREcmVhbXNMaXN0ZW5lcnMoKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRPbmVEcmVhbShkcmVhbSkge1xuXG4gICAgY29uc3QgZHJlYW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkcmVhbUVsZW1lbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjYXJkIHRleHQtY2VudGVyXCIgaWQ9XCIke2RyZWFtLmlkfVwiPlxuICAgIDxoNSBjbGFzcz1cImNhcmQtaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj4gJHtkcmVhbS5kZXNjcmlwdGlvbn08L2g1PlxuICAgIDxpbWcgc3JjPVwiJHtkcmVhbS5pbWFnZVBhdGh9XCIgY2xhc3M9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCIuLi5cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidXR0b24tYWN0aW9uIGJ0biBidG4tJHtkcmVhbS5kb25lP1wic2Vjb25kYXJ5XCI6XCJkYW5nZXJcIn0gZm9udC13ZWlnaHQtYm9sZCBidG4tYmxvY2tcIj4ke2RyZWFtLmRvbmU/XCJKZSB2ZXV4IGxlIHJlZmFpcmVcIjpcIkplIG1lIGxhbmNlICFcIn08L2E+ICBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXIgdGV4dC1tdXRlZCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnV0dG9uLXZpc2l0IGJ0biBidG4tb3V0bGluZS1kYXJrIGJ0bi1zbVwiPlZpc2l0ZXI8L2E+XG4gICAgICAgIDxhIGhyZWY9XCIke2RyZWFtLmxpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtZGFyayBidG4tc21cIj5QbHVzIGQnaW5mb3JtYXRpb25zPC9hPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gICAgZHJlYW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyZWFtRWxlbWVudCk7XG5cbiAgICBhZGRNYXJrZXJPbk1hcChkcmVhbSk7XG59XG5cbmZ1bmN0aW9uIGFkZERyZWFtc0xpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbi12aXNpdFwiKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgICAgICB2aXNpdERyZWFtKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tYWN0aW9uXCIpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZURyZWFtRG9uZShpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk7XG4gICAgICAgIH0pXG4gICAgfSkgXG59XG5cbmZ1bmN0aW9uIHZpc2l0RHJlYW0oZHJlYW1JZCkge1xuICAgIGxldCBwb3NpdGlvbiA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PSBkcmVhbUlkKVswXS5jb29yZGluYXRlcztcbiAgICB2aXNpdERyZWFtT25NYXAocG9zaXRpb24pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVEcmVhbURvbmUoZHJlYW1JZCkge1xuICAgIGxldCBkcmVhbSA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PSBkcmVhbUlkKVswXTtcbiAgICBkcmVhbS5kb25lID0gIWRyZWFtLmRvbmU7XG4gICAgYnVpbGRBbGxEcmVhbXMoKVxufVxuZXhwb3J0IHtidWlsZEFsbERyZWFtc307IiwiY29uc3QgZGF0YSA9IFtcbiAgICB7IFxuICAgICAgICBpZDogMSxcbiAgICAgICAgaW1hZ2VQYXRoOiBcIi4vaW1nL0hhdmFudS5qcGdcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2h1dGVzIGQnSGF2YW5hc3VwYWkgLSBVU0EsIEFyaXpvbmFcIixcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cucm9hZHRyaXBwaW4uZnIvYXJpem9uYS9oYXZhc3VwYWktZmFsbHMvaGF2YXN1cGFpLWZhbGxzLnBocFwiLFxuICAgICAgICBjb29yZGluYXRlczogeyBcbiAgICAgICAgICAgIGxhdDogMzYuMjU1MzA5LCBcbiAgICAgICAgICAgIGxuZzogLTExMi42OTgyNzcgXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgeyBcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGltYWdlUGF0aDogXCJodHRwczovL3d3dy5wYXJ0aXIuY29tL2ltYWdlcy9pbmNvbnRvdXJuYWJsZXMvcG9seW5lc2llLWhpdmEtb2EuanBnXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkhpdmEgT2EgKMOubGVzIE1hcnF1aXNlcykgLSBQb2x5bsOpc2llIGZyYW7Dp2Fpc2VcIixcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9wYWNpZmlxdWUtYS1sYS1jYXJ0ZS5jb20vdm95YWdlLXBvbHluZXNpZS9hcmNoaXBlbC1kZXMtbWFycXVpc2VzL3Nlam91ci1oaXZhLW9hXCIsXG4gICAgICAgIGNvb3JkaW5hdGVzOiB7XG4gICAgICAgICAgICBsYXQ6IC05LjczOTY1NixcbiAgICAgICAgICAgIGxuZzogLTEzOC45MjI0NzBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgeyBcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIGltYWdlUGF0aDogXCJodHRwczovL2Nkbi5zaG9ydHBpeGVsLmFpL2NsaWVudC90b193ZWJwLHFfZ2xvc3N5LHJldF9pbWcsd182NTAvaHR0cHM6Ly93d3cuYWxsb3dlZWtlbmQuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxMy8wMy8xLmpwZ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDYWxhbnF1ZSBkJ0VuIFZhdSAtIEZyYW5jZSwgTGEgQ2lvdGF0XCIsXG4gICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmRldG91cnNlbmZyYW5jZS5mci9lbi12YXUtbHVuZS1kZXMtcGx1cy1iZWxsZXMtY2FsYW5xdWVzLWRlLWZyYW5jZS03NzgzXCIsXG4gICAgICAgIGNvb3JkaW5hdGVzOiB7IFxuICAgICAgICAgICAgbGF0OiA0My4yMDIyOTYsXG4gICAgICAgICAgICBsbmcgOiA1LjQ5ODk1M1xuICAgICAgICB9XG4gICAgfVxuXTtcblxuZXhwb3J0IHtkYXRhfSJdLCJzb3VyY2VSb290IjoiIn0=