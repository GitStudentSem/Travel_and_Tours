/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateThesis"]("main",{

/***/ "./src/modules/registerWindow.js":
/*!***************************************!*\
  !*** ./src/modules/registerWindow.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showHidePass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showHidePass */ \"./src/modules/showHidePass.js\");\n/* harmony import */ var _disableScrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disableScrolling */ \"./src/modules/disableScrolling.js\");\n/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateForm */ \"./src/modules/validateForm.js\");\nvar registerWindow = function registerWindow() {\n  \"use strict\";\n\n  var registerButton = document.querySelector(\".header__login-register\");\n  var register = document.querySelector(\".register\");\n  var overlay = document.querySelector(\".overlay\");\n  var email = document.querySelector(\".register__email\");\n  var password = document.querySelector(\".register__password\");\n  var submitForm = document.querySelector(\".register__submit-form\");\n  var showHide = document.querySelector(\".register__show-hide\"); //Открытие окна логин\n\n  registerButton.addEventListener(\"click\", function () {\n    register.classList.add(\"active\");\n    overlay.style.display = \"block\";\n    (0,_validateForm__WEBPACK_IMPORTED_MODULE_0__.default)(email, password);\n    (0,_showHidePass__WEBPACK_IMPORTED_MODULE_1__.default)(showHide, password);\n    (0,_disableScrolling__WEBPACK_IMPORTED_MODULE_2__.default)();\n  }); // Закрытие модального окна\n\n  overlay.addEventListener(\"click\", function () {\n    register.classList.remove(\"active\");\n    overlay.style.display = \"none\";\n\n    window.onscroll = function () {};\n  }); // Зарегестрироваться\n\n  submitForm.addEventListener(\"click\", function () {\n    register.classList.remove(\"active\");\n    overlay.style.display = \"none\";\n\n    window.onscroll = function () {};\n  });\n};\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerWindow);\n\n//# sourceURL=webpack://Thesis/./src/modules/registerWindow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4f695797bbe0a729923c")
/******/ })();
/******/ 
/******/ }
);