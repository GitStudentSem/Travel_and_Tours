/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateThesis"]("main",{

/***/ "./src/modules/loginWindow.js":
/*!************************************!*\
  !*** ./src/modules/loginWindow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/disableScrolling'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nvar loginWindow = function loginWindow() {\n  \"use strict\";\n\n  var loginButton = document.querySelector(\".header__login-login\");\n  var login = document.querySelector(\".login\");\n  var overlay = document.querySelector(\".overlay\"); //Открытие окна логин\n\n  loginButton.addEventListener(\"click\", function () {\n    login.classList.add(\"active\");\n    overlay.style.display = \"block\";\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/disableScrolling'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n  }); // Закрытие модального окна\n\n  overlay.addEventListener(\"click\", function () {\n    login.classList.remove(\"active\");\n    overlay.style.display = \"none\";\n\n    window.onscroll = function () {};\n  });\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginWindow);\n\n//# sourceURL=webpack://Thesis/./src/modules/loginWindow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e394cd78a636695ca5e")
/******/ })();
/******/ 
/******/ }
);