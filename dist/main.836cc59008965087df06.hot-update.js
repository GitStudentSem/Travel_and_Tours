/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateThesis"]("main",{

/***/ "./src/modules/validateForm.js":
/*!*************************************!*\
  !*** ./src/modules/validateForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n //Валидация\n\nvar validateForm = function validateForm(email, password) {\n  //почта\n  email.addEventListener(\"input\", function () {\n    email.value = email.value.replace(/[^a-z0-9@\\-_.!~'*]/, \"\");\n  });\n  email.addEventListener(\"blur\", function () {\n    // Защита от пустой строки\n    if (email.value !== \"\") {\n      var validate = function validate(email) {\n        // Проверка на правильность вида e-mail\n        var reg = /^([a-z0-9@\\-_.!~'*]+\\.)*[a-z0-9@\\-_.!~'*]+@[a-z0-9@\\-_.!~'*]+(\\.[a-z0-9@\\-_.!~'*]+)*\\.[a-z]{2,6}$/;\n\n        if (reg.test(email.value) === false) {\n          alert(\"Enter correct e-mai\");\n          return false;\n        }\n      };\n\n      validate(email);\n    }\n  }); // Пароль\n\n  password.addEventListener(\"input\", function () {\n    password.value = password.value.replace(/[^a-z0-9]/, \"\");\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateForm);\n\n//# sourceURL=webpack://Thesis/./src/modules/validateForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b0282935a6e5ad0735fd")
/******/ })();
/******/ 
/******/ }
);