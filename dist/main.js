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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page1 */ \"./src/page1.js\");\n/* harmony import */ var _page2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2 */ \"./src/page2.js\");\n/* harmony import */ var _page3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page3 */ \"./src/page3.js\");\n\n\n\n\nconst content = document.querySelector('#content');\n(0,_page1__WEBPACK_IMPORTED_MODULE_0__.buildPageOne)(content);\n\nconst page = (function () {\n    function navbarClickHandler(event) {\n        console.log(`The event index was ${event.target.dataset.index}`)\n        clearContainer(content);\n        if (Number(event.target.dataset.index) === 3) {\n            (0,_page3__WEBPACK_IMPORTED_MODULE_2__.buildPageThree)(content);\n        } else if (Number(event.target.dataset.index) === 2) {\n            (0,_page2__WEBPACK_IMPORTED_MODULE_1__.buildPageTwo)(content);\n        } else {\n            console.log(`Building page ${event.target.dataset.index}...`)\n            ;(0,_page1__WEBPACK_IMPORTED_MODULE_0__.buildPageOne)(content);\n        }\n        setNavListeners()\n    }\n\n    function clearContainer(container) {\n        while (container.firstChild) {\n            container.removeChild(container.firstChild);\n        }\n    }\n\n    function setNavListeners() {\n        //Set event listener on every nav link element that isn't active\n\n        let navItems = document.querySelectorAll('.nav-item')\n        navItems.forEach(element => {\n            element.removeEventListener(\"click\", navbarClickHandler);\n        })\n        Array.from(navItems).filter((element) => !element.classList.contains(\"active-nav\")).forEach(element => {\n            element.addEventListener(\"click\", navbarClickHandler);\n        });\n    }\n\n    return ({ navbarClickHandler, clearContainer, setNavListeners })\n})();\n\npage.setNavListeners()\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/page1.js":
/*!**********************!*\
  !*** ./src/page1.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildPageOne: () => (/* binding */ buildPageOne)\n/* harmony export */ });\nconst buildPageOne = (container) => {\n    \n    //Build Nav bar\n    const navLinks = [];\n    const navButtons = []\n    const navArea = document.createElement(\"nav\");\n    navButtons[0] = document.createElement(\"div\");\n    navButtons[1] = document.createElement(\"div\");\n    navButtons[2] = document.createElement(\"div\");\n    navLinks[0] = document.createElement(\"a\");\n    navLinks[1] = document.createElement(\"a\");\n    navLinks[2] = document.createElement(\"a\");\n    \n    navLinks.forEach((element, i) => {\n        element.setAttribute(\"href\", \"#\");\n        element.setAttribute(\"data-index\", i + 1)\n        element.textContent = `Page ${i + 1}`\n    })\n\n\n    navButtons.forEach((element, i) => {\n        element.classList.add(\"nav-item\")\n        element.setAttribute(\"data-index\", i + 1)\n        element.append(navLinks[i]);\n        navArea.append(element)\n    });\n    \n    navButtons[0].classList.add(\"nav-item\", \"active-nav\")\n    \n    //Build content area\n    const contentArea = document.createElement(\"div\");\n    contentArea.setAttribute(\"class\", \"content-area\")\n    container.append(navArea, contentArea);\n\n    // Populate content area\n    const firstPageH1 = document.createElement(\"h1\");\n    firstPageH1.textContent = \"Billy's Delicious Subs\";\n    const firstPageP = document.createElement(\"p\");\n    firstPageP.classList.add(\"card\");\n    firstPageP.textContent = `Here at Billy's Delicious Subs, we pride our selves on making delicious subs. If you haven't\n    had one yet, try it—it's delicious!`;\n    const firstPageImage = document.createElement(\"img\");\n    firstPageImage.setAttribute(\"src\", \"./subs.jpeg\")\n    contentArea.append(firstPageH1, firstPageP, firstPageImage);\n    \n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/page1.js?");

/***/ }),

/***/ "./src/page2.js":
/*!**********************!*\
  !*** ./src/page2.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildPageTwo: () => (/* binding */ buildPageTwo)\n/* harmony export */ });\nconst buildPageTwo = (container) => {\n    \n    //Build Nav bar\n    const navLinks = [];\n    const navButtons = []\n    const navArea = document.createElement(\"nav\");\n    navButtons[0] = document.createElement(\"div\");\n    navButtons[1] = document.createElement(\"div\");\n    navButtons[2] = document.createElement(\"div\");\n    navLinks[0] = document.createElement(\"a\");\n    navLinks[1] = document.createElement(\"a\");\n    navLinks[2] = document.createElement(\"a\");\n    \n    navLinks.forEach((element, i) => {\n        element.setAttribute(\"href\", \"#\");\n        element.setAttribute(\"data-index\", i + 1)\n        element.textContent = `Page ${i + 1}`\n    })\n\n\n    navButtons.forEach((element, i) => {\n        element.classList.add(\"nav-item\")\n        element.setAttribute(\"data-index\", i + 1)\n        element.append(navLinks[i]);\n        navArea.append(element)\n    });\n    \n    navButtons[1].classList.add(\"nav-item\", \"active-nav\")\n    \n    //Build content area\n    const contentArea = document.createElement(\"div\");\n    contentArea.setAttribute(\"class\", \"content-area\")\n    container.append(navArea, contentArea);\n\n    // Populate content area\n    const firstPageH1 = document.createElement(\"h1\");\n    firstPageH1.textContent = \"Menu\";\n    const firstPageP = document.createElement(\"p\");\n    firstPageP.classList.add(\"card\");\n    firstPageP.textContent = `Try something delicious!`;\n    const firstPageImage = document.createElement(\"img\");\n    firstPageImage.setAttribute(\"src\", \"./subs2.jpeg\")\n    contentArea.append(firstPageH1, firstPageP, firstPageImage);\n    \n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/page2.js?");

/***/ }),

/***/ "./src/page3.js":
/*!**********************!*\
  !*** ./src/page3.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildPageThree: () => (/* binding */ buildPageThree)\n/* harmony export */ });\nconst buildPageThree = (container) => {\n    \n    //Build Nav bar\n    const navLinks = [];\n    const navButtons = []\n    const navArea = document.createElement(\"nav\");\n    navButtons[0] = document.createElement(\"div\");\n    navButtons[1] = document.createElement(\"div\");\n    navButtons[2] = document.createElement(\"div\");\n    navLinks[0] = document.createElement(\"a\");\n    navLinks[1] = document.createElement(\"a\");\n    navLinks[2] = document.createElement(\"a\");\n    \n    navLinks.forEach((element, i) => {\n        element.setAttribute(\"href\", \"#\");\n        element.setAttribute(\"data-index\", i + 1)\n        element.textContent = `Page ${i + 1}`\n    })\n\n\n    navButtons.forEach((element, i) => {\n        element.classList.add(\"nav-item\")\n        element.setAttribute(\"data-index\", i + 1)\n        element.append(navLinks[i]);\n        navArea.append(element)\n    });\n    \n    navButtons[2].classList.add(\"nav-item\", \"active-nav\")\n    \n    //Build content area\n    const contentArea = document.createElement(\"div\");\n    contentArea.setAttribute(\"class\", \"content-area\")\n    container.append(navArea, contentArea);\n\n    // Populate content area\n    const firstPageH1 = document.createElement(\"h1\");\n    firstPageH1.textContent = \"Contact us\";\n    const firstPageP = document.createElement(\"p\");\n    firstPageP.classList.add(\"card\");\n    firstPageP.textContent = `Your feedback is very important to us. Let us know how we can serve you better!`;\n    const firstPageImage = document.createElement(\"img\");\n    firstPageImage.setAttribute(\"src\", \"./subs3.jpeg\")\n    contentArea.append(firstPageH1, firstPageP, firstPageImage);\n    \n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/page3.js?");

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