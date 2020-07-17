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

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.881356 , lng: 2.362160 },
    zoom: 4
  });
  

}

function addMarkerOnMap(dream) {
  const marker = new google.maps.Marker({
    position: dream.coordinates,
    icon: dream.done ? "./img/marker_done.png" : "./img/marker.png",
    map: map
  });

}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAllDreams", function() { return buildAllDreams; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);



function buildAllDreams() {
    _data__WEBPACK_IMPORTED_MODULE_0__["data"].forEach(buildOneDream);
}

function buildOneDream(dream) {
    Object(_map__WEBPACK_IMPORTED_MODULE_1__["addMarkerOnMap"])(dream);
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
        imagePath: "https://www.atlasobscura.com/places/havasupai-falls",
        description: "Havanasupai Falls - USA, Arizona",
        done: true,
        link: "https://www.roadtrippin.fr/arizona/havasupai-falls/havasupai-falls.php",
        coordinates: {
            lat: 36.255538,
            lng: -112.697993
        }

    },
    {
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
    {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyZWFtLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUE2QjtBQUNTOztBQUV0QztBQUNBLElBQUksb0RBQU87QUFDWCxJQUFJLDZEQUFjO0FBQ2xCOztBQUVBLG1COzs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBLGFBQWEsaUNBQWlDO0FBQzlDO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUEyQjtBQUNTOztBQUVwQztBQUNBLElBQUksMENBQUk7QUFDUjs7QUFFQTtBQUNBLElBQUksMkRBQWM7QUFDbEI7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7aW5pdE1hcH0gZnJvbSBcIi4vbWFwXCJcbmltcG9ydCB7YnVpbGRBbGxEcmVhbXN9IGZyb20gXCIuL2RyZWFtXCJcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpbml0TWFwKCk7XG4gICAgYnVpbGRBbGxEcmVhbXMoKTtcbn1cblxud2luZG93LmluaXQgPSBpbml0OyIsImxldCBtYXA7XG5cbmZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcbiAgICBjZW50ZXI6IHsgbGF0OiA0OC44ODEzNTYgLCBsbmc6IDIuMzYyMTYwIH0sXG4gICAgem9vbTogNFxuICB9KTtcbiAgXG5cbn1cblxuZnVuY3Rpb24gYWRkTWFya2VyT25NYXAoZHJlYW0pIHtcbiAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgcG9zaXRpb246IGRyZWFtLmNvb3JkaW5hdGVzLFxuICAgIGljb246IGRyZWFtLmRvbmUgPyBcIi4vaW1nL21hcmtlcl9kb25lLnBuZ1wiIDogXCIuL2ltZy9tYXJrZXIucG5nXCIsXG4gICAgbWFwOiBtYXBcbiAgfSk7XG5cbn1cblxuZXhwb3J0IHtpbml0TWFwLGFkZE1hcmtlck9uTWFwfTsiLCJpbXBvcnQge2RhdGF9IGZyb20gXCIuL2RhdGFcIlxuaW1wb3J0IHthZGRNYXJrZXJPbk1hcH0gZnJvbSBcIi4vbWFwXCJcblxuZnVuY3Rpb24gYnVpbGRBbGxEcmVhbXMoKSB7XG4gICAgZGF0YS5mb3JFYWNoKGJ1aWxkT25lRHJlYW0pO1xufVxuXG5mdW5jdGlvbiBidWlsZE9uZURyZWFtKGRyZWFtKSB7XG4gICAgYWRkTWFya2VyT25NYXAoZHJlYW0pO1xufVxuXG5cbmV4cG9ydCB7YnVpbGRBbGxEcmVhbXN9OyIsImNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHBzOi8vd3d3LmF0bGFzb2JzY3VyYS5jb20vcGxhY2VzL2hhdmFzdXBhaS1mYWxsc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJIYXZhbmFzdXBhaSBGYWxscyAtIFVTQSwgQXJpem9uYVwiLFxuICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnJvYWR0cmlwcGluLmZyL2FyaXpvbmEvaGF2YXN1cGFpLWZhbGxzL2hhdmFzdXBhaS1mYWxscy5waHBcIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IHtcbiAgICAgICAgICAgIGxhdDogMzYuMjU1NTM4LFxuICAgICAgICAgICAgbG5nOiAtMTEyLjY5Nzk5M1xuICAgICAgICB9XG5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGltYWdlUGF0aDogXCJodHRwczovL3d3dy5wYXJ0aXIuY29tL2ltYWdlcy9pbmNvbnRvdXJuYWJsZXMvcG9seW5lc2llLWhpdmEtb2EuanBnXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkhpdmEgT2EgKMOubGVzIE1hcnF1aXNlcykgLSBQb2x5bsOpc2llIGZyYW7Dp2Fpc2VcIixcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9wYWNpZmlxdWUtYS1sYS1jYXJ0ZS5jb20vdm95YWdlLXBvbHluZXNpZS9hcmNoaXBlbC1kZXMtbWFycXVpc2VzL3Nlam91ci1oaXZhLW9hXCIsXG4gICAgICAgIGNvb3JkaW5hdGVzOiB7XG4gICAgICAgICAgICBsYXQ6IC05Ljc2NTcyMyxcbiAgICAgICAgICAgIGxuZzogLTEzOS4wNTI0MjJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgaW1hZ2VQYXRoOiBcImh0dHBzOi8vY2RuLnNob3J0cGl4ZWwuYWkvY2xpZW50L3RvX3dlYnAscV9nbG9zc3kscmV0X2ltZyx3XzY1MC9odHRwczovL3d3dy5hbGxvd2Vla2VuZC5jb20vd29yZHByZXNzL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEzLzAzLzEuanBnXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNhbGFucXVlIGQnRW4gVmF1IC0gRnJhbmNlLCBMYSBDaW90YXRcIixcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZGV0b3Vyc2VuZnJhbmNlLmZyL2VuLXZhdS1sdW5lLWRlcy1wbHVzLWJlbGxlcy1jYWxhbnF1ZXMtZGUtZnJhbmNlLTc3ODNcIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IHtcbiAgICAgICAgICAgIGxhdDogNDMuMjAyMzM3LCBcbiAgICAgICAgICAgIGxuZzogNS40OTc2NzBcbiAgICAgICAgfVxuICAgIH1cbl07XG5cbmV4cG9ydCB7ZGF0YX0iXSwic291cmNlUm9vdCI6IiJ9