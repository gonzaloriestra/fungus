/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/auth/[auth0]";
exports.ids = ["pages/api/auth/[auth0]"];
exports.modules = {

/***/ "./src/authentication/AuthenticationService.ts":
/*!*****************************************************!*\
  !*** ./src/authentication/AuthenticationService.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  handleAuth: _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.handleAuth\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXV0aGVudGljYXRpb24vQXV0aGVudGljYXRpb25TZXJ2aWNlLnRzP2I3MGUiXSwibmFtZXMiOlsiaGFuZGxlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSwrREFBZTtBQUFFQSxZQUFVQTtBQUFaLENBQWYiLCJmaWxlIjoiLi9zcmMvYXV0aGVudGljYXRpb24vQXV0aGVudGljYXRpb25TZXJ2aWNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQXV0aCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xuXG5leHBvcnQgZGVmYXVsdCB7IGhhbmRsZUF1dGggfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/authentication/AuthenticationService.ts\n");

/***/ }),

/***/ "./src/pages/api/auth/[auth0].ts":
/*!***************************************!*\
  !*** ./src/pages/api/auth/[auth0].ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _authentication_AuthenticationService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../authentication/AuthenticationService */ \"./src/authentication/AuthenticationService.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_authentication_AuthenticationService__WEBPACK_IMPORTED_MODULE_0__.default.handleAuth());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2F1dGgvW2F1dGgwXS50cz82YTUwIl0sIm5hbWVzIjpbIkF1dGhlbnRpY2F0aW9uU2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBLCtEQUFlQSxxRkFBQSxFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9hdXRoL1thdXRoMF0udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0aGVudGljYXRpb25TZXJ2aWNlIGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL0F1dGhlbnRpY2F0aW9uU2VydmljZSc7XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhlbnRpY2F0aW9uU2VydmljZS5oYW5kbGVBdXRoKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[auth0].ts\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[auth0].ts"));
module.exports = __webpack_exports__;

})();