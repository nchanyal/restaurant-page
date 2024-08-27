/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateAboutPage: () => (/* binding */ generateAboutPage)\n/* harmony export */ });\nfunction generateAboutPage() {\n    const contentDiv = document.querySelector(\"#content\");\n    const header = document.createElement(\"h1\");\n    const paragraph = document.createElement(\"p\");\n\n    contentDiv.textContent = \"\";\n    header.textContent = \"Seriously... there is nothing to see here...\";\n    paragraph.textContent = \"This website is simply a way for me to test using Webpack.\"\n\n    contentDiv.appendChild(header);\n    contentDiv.appendChild(paragraph);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanM/NTg2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZW5lcmF0ZUFib3V0UGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiU2VyaW91c2x5Li4uIHRoZXJlIGlzIG5vdGhpbmcgdG8gc2VlIGhlcmUuLi5cIjtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIlRoaXMgd2Vic2l0ZSBpcyBzaW1wbHkgYSB3YXkgZm9yIG1lIHRvIHRlc3QgdXNpbmcgV2VicGFjay5cIlxuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbn1cblxuZXhwb3J0IHtnZW5lcmF0ZUFib3V0UGFnZX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/about.js\n");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHomepage: () => (/* binding */ generateHomepage)\n/* harmony export */ });\n/* harmony import */ var _jakub_dziubak_iOHJKJqO6E0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jakub-dziubak-iOHJKJqO6E0-unsplash.jpg */ \"./src/jakub-dziubak-iOHJKJqO6E0-unsplash.jpg\");\n\n\nfunction generateHomepage() {\n    const contentDiv = document.querySelector(\"#content\");\n    const header = document.createElement(\"h1\");\n    const image = document.createElement(\"img\");\n\n    contentDiv.textContent = \"\";\n    header.textContent = \"Welcome to the Sushi Place!!\";\n    image.src = _jakub_dziubak_iOHJKJqO6E0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n    contentDiv.appendChild(header);\n    contentDiv.appendChild(image);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZXBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0U7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0Isb0VBQVU7O0FBRTFCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcz8xN2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdXNoaUltYWdlIGZyb20gXCIuL2pha3ViLWR6aXViYWstaU9ISktKcU82RTAtdW5zcGxhc2guanBnXCI7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSG9tZXBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgY29udGVudERpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIHRoZSBTdXNoaSBQbGFjZSEhXCI7XG4gICAgaW1hZ2Uuc3JjID0gc3VzaGlJbWFnZTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGltYWdlKTtcbn1cblxuZXhwb3J0IHtnZW5lcmF0ZUhvbWVwYWdlfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/homepage.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page.js */ \"./src/menu-page.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\nconst homeButton = document.querySelector(\"#home\");\nconst menuButton = document.querySelector(\"#menu\");\nconst contactButton = document.querySelector(\"#about\");\n\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.generateHomepage)();\n\nhomeButton.addEventListener(\"click\", _homepage_js__WEBPACK_IMPORTED_MODULE_0__.generateHomepage);\nmenuButton.addEventListener(\"click\", _menu_page_js__WEBPACK_IMPORTED_MODULE_1__.generateMenuPage);\ncontactButton.addEventListener(\"click\", _about_js__WEBPACK_IMPORTED_MODULE_2__.generateAboutPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFpRDtBQUNDO0FBQ0g7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQSw4REFBZ0I7O0FBRWhCLHFDQUFxQywwREFBZ0I7QUFDckQscUNBQXFDLDJEQUFnQjtBQUNyRCx3Q0FBd0Msd0RBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuZXJhdGVIb21lcGFnZSB9IGZyb20gXCIuL2hvbWVwYWdlLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudS1wYWdlLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUFib3V0UGFnZSB9IGZyb20gXCIuL2Fib3V0LmpzXCI7XG5cbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRcIik7XG5cbmdlbmVyYXRlSG9tZXBhZ2UoKTtcblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2VuZXJhdGVIb21lcGFnZSk7XG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZW5lcmF0ZU1lbnVQYWdlKTtcbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdlbmVyYXRlQWJvdXRQYWdlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMenuPage: () => (/* binding */ generateMenuPage)\n/* harmony export */ });\nfunction generateMenuPage() {\n    const contentDiv = document.querySelector(\"#content\");\n    const header = document.createElement(\"h1\");\n    const paragraph = document.createElement(\"p\");\n\n    contentDiv.textContent = \"\";\n    header.textContent = \"There is nothing to see here...\";\n    paragraph.textContent = \"This website is simply a way for me to test using Webpack.\"\n\n    contentDiv.appendChild(header);\n    contentDiv.appendChild(paragraph);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS1wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZS5qcz9kMjhlIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdlbmVyYXRlTWVudVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRoZXJlIGlzIG5vdGhpbmcgdG8gc2VlIGhlcmUuLi5cIjtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIlRoaXMgd2Vic2l0ZSBpcyBzaW1wbHkgYSB3YXkgZm9yIG1lIHRvIHRlc3QgdXNpbmcgV2VicGFjay5cIlxuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbn1cblxuZXhwb3J0IHtnZW5lcmF0ZU1lbnVQYWdlfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu-page.js\n");

/***/ }),

/***/ "./src/jakub-dziubak-iOHJKJqO6E0-unsplash.jpg":
/*!****************************************************!*\
  !*** ./src/jakub-dziubak-iOHJKJqO6E0-unsplash.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c31a8717132994605da1.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;