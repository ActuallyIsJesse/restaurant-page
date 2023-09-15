/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page1 */ \"./src/page1.js\");\n\n\n\nconst content = document.querySelector('#content');\n(0,_page1__WEBPACK_IMPORTED_MODULE_0__.buildPageOne)(content);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/page1.js":
/*!**********************!*\
  !*** ./src/page1.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildPageOne: () => (/* binding */ buildPageOne)\n/* harmony export */ });\nconst buildPageOne = (container) => {\n    \n    //Build Nav bar\n    const navLinks = [];\n    const navButtons = []\n    const navArea = document.createElement(\"nav\");\n    navButtons[0] = document.createElement(\"div\");\n    navButtons[1] = document.createElement(\"div\");\n    navButtons[2] = document.createElement(\"div\");\n    navLinks[0] = document.createElement(\"a\");\n    navLinks[1] = document.createElement(\"a\");\n    navLinks[2] = document.createElement(\"a\");\n    \n    navLinks.forEach((element) => {\n        element.setAttribute(\"href\", \"#\");\n    })\n\n\n    navButtons.forEach((element, i) => {\n        element.classList.add(\"nav-item\")\n        element.append(navLinks[i]);\n    });\n    \n    navButtons[0].classList.add(\"nav-item\", \"active-nav\" )\n    \n    \n    // navButton1.append(navLink1);\n    // navButton2.append(navLink2);\n    // navButton1.append(navLink3);\n\n\n    \n    \n    //Build content area\n    const contentArea = document.createElement(\"div\");\n    contentArea.setAttribute(\"class\", \"content-area\")\n    container.append(navArea, contentArea);\n\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/page1.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;