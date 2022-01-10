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
exports.id = "pages/api/mushrooms";
exports.ids = ["pages/api/mushrooms"];
exports.modules = {

/***/ "./src/Fungus/Mushrooms/Application/Find/FindMushroomsResponse.ts":
/*!************************************************************************!*\
  !*** ./src/Fungus/Mushrooms/Application/Find/FindMushroomsResponse.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FindMushroomsResponse\": function() { return /* binding */ FindMushroomsResponse; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass FindMushroomsResponse {\n  constructor(mushrooms) {\n    _defineProperty(this, \"mushrooms\", void 0);\n\n    this.mushrooms = mushrooms;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRnVuZ3VzL011c2hyb29tcy9BcHBsaWNhdGlvbi9GaW5kL0ZpbmRNdXNocm9vbXNSZXNwb25zZS50cz8wZGEyIl0sIm5hbWVzIjpbIkZpbmRNdXNocm9vbXNSZXNwb25zZSIsImNvbnN0cnVjdG9yIiwibXVzaHJvb21zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFTyxNQUFNQSxxQkFBTixDQUE0QjtBQUdqQ0MsYUFBVyxDQUFDQyxTQUFELEVBQXdCO0FBQUE7O0FBQ2pDLFNBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7O0FBTGdDIiwiZmlsZSI6Ii4vc3JjL0Z1bmd1cy9NdXNocm9vbXMvQXBwbGljYXRpb24vRmluZC9GaW5kTXVzaHJvb21zUmVzcG9uc2UudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmltaXRpdmVzIH0gZnJvbSAnLi4vLi4vRG9tYWluL011c2hyb29tcyc7XG5cbmV4cG9ydCBjbGFzcyBGaW5kTXVzaHJvb21zUmVzcG9uc2Uge1xuICByZWFkb25seSBtdXNocm9vbXM6IFByaW1pdGl2ZXM7XG5cbiAgY29uc3RydWN0b3IobXVzaHJvb21zOiBQcmltaXRpdmVzKSB7XG4gICAgdGhpcy5tdXNocm9vbXMgPSBtdXNocm9vbXM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Fungus/Mushrooms/Application/Find/FindMushroomsResponse.ts\n");

/***/ }),

/***/ "./src/Fungus/Mushrooms/Application/Find/MushroomsFinder.ts":
/*!******************************************************************!*\
  !*** ./src/Fungus/Mushrooms/Application/Find/MushroomsFinder.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MushroomsFinder; }\n/* harmony export */ });\n/* harmony import */ var _FindMushroomsResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FindMushroomsResponse */ \"./src/Fungus/Mushrooms/Application/Find/FindMushroomsResponse.ts\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nclass MushroomsFinder {\n  constructor(repository) {\n    _defineProperty(this, \"_repository\", void 0);\n\n    this._repository = repository;\n  }\n\n  run() {\n    return new _FindMushroomsResponse__WEBPACK_IMPORTED_MODULE_0__.FindMushroomsResponse(this._repository.all().toPrimitives());\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRnVuZ3VzL011c2hyb29tcy9BcHBsaWNhdGlvbi9GaW5kL011c2hyb29tc0ZpbmRlci50cz82YmM4Il0sIm5hbWVzIjpbIk11c2hyb29tc0ZpbmRlciIsImNvbnN0cnVjdG9yIiwicmVwb3NpdG9yeSIsIl9yZXBvc2l0b3J5IiwicnVuIiwiRmluZE11c2hyb29tc1Jlc3BvbnNlIiwiYWxsIiwidG9QcmltaXRpdmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7QUFFZSxNQUFNQSxlQUFOLENBQXNCO0FBR25DQyxhQUFXLENBQUNDLFVBQUQsRUFBaUM7QUFBQTs7QUFDMUMsU0FBS0MsV0FBTCxHQUFtQkQsVUFBbkI7QUFDRDs7QUFFREUsS0FBRyxHQUEwQjtBQUMzQixXQUFPLElBQUlDLHlFQUFKLENBQTBCLEtBQUtGLFdBQUwsQ0FBaUJHLEdBQWpCLEdBQXVCQyxZQUF2QixFQUExQixDQUFQO0FBQ0Q7O0FBVGtDIiwiZmlsZSI6Ii4vc3JjL0Z1bmd1cy9NdXNocm9vbXMvQXBwbGljYXRpb24vRmluZC9NdXNocm9vbXNGaW5kZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNdXNocm9vbVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9Eb21haW4vTXVzaHJvb21SZXBvc2l0b3J5JztcblxuaW1wb3J0IHsgRmluZE11c2hyb29tc1Jlc3BvbnNlIH0gZnJvbSAnLi9GaW5kTXVzaHJvb21zUmVzcG9uc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdXNocm9vbXNGaW5kZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZXBvc2l0b3J5OiBNdXNocm9vbVJlcG9zaXRvcnk7XG5cbiAgY29uc3RydWN0b3IocmVwb3NpdG9yeTogTXVzaHJvb21SZXBvc2l0b3J5KSB7XG4gICAgdGhpcy5fcmVwb3NpdG9yeSA9IHJlcG9zaXRvcnk7XG4gIH1cblxuICBydW4oKTogRmluZE11c2hyb29tc1Jlc3BvbnNlIHtcbiAgICByZXR1cm4gbmV3IEZpbmRNdXNocm9vbXNSZXNwb25zZSh0aGlzLl9yZXBvc2l0b3J5LmFsbCgpLnRvUHJpbWl0aXZlcygpKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Fungus/Mushrooms/Application/Find/MushroomsFinder.ts\n");

/***/ }),

/***/ "./src/Fungus/Mushrooms/Application/Find/index.ts":
/*!********************************************************!*\
  !*** ./src/Fungus/Mushrooms/Application/Find/index.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Infrastructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Infrastructure */ \"./src/Fungus/Mushrooms/Infrastructure/index.ts\");\n/* harmony import */ var _MushroomsFinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MushroomsFinder */ \"./src/Fungus/Mushrooms/Application/Find/MushroomsFinder.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _MushroomsFinder__WEBPACK_IMPORTED_MODULE_1__.default(_Infrastructure__WEBPACK_IMPORTED_MODULE_0__.mushroomRepository));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRnVuZ3VzL011c2hyb29tcy9BcHBsaWNhdGlvbi9GaW5kL2luZGV4LnRzPzhiNmQiXSwibmFtZXMiOlsiTXVzaHJvb21zRmluZGVyIiwibXVzaHJvb21SZXBvc2l0b3J5Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBO0FBRUEsK0RBQWUsSUFBSUEscURBQUosQ0FBb0JDLCtEQUFwQixDQUFmIiwiZmlsZSI6Ii4vc3JjL0Z1bmd1cy9NdXNocm9vbXMvQXBwbGljYXRpb24vRmluZC9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG11c2hyb29tUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL0luZnJhc3RydWN0dXJlJztcblxuaW1wb3J0IE11c2hyb29tc0ZpbmRlciBmcm9tICcuL011c2hyb29tc0ZpbmRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBNdXNocm9vbXNGaW5kZXIobXVzaHJvb21SZXBvc2l0b3J5KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Fungus/Mushrooms/Application/Find/index.ts\n");

/***/ }),

/***/ "./src/Fungus/Mushrooms/Domain/Mushroom.ts":
/*!*************************************************!*\
  !*** ./src/Fungus/Mushrooms/Domain/Mushroom.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mushroom\": function() { return /* binding */ Mushroom; }\n/* harmony export */ });\n/* harmony import */ var _Shared_Domain_MushroomId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Shared/Domain/MushroomId */ \"./src/Fungus/Shared/Domain/MushroomId.ts\");\n/* harmony import */ var _Shared_Domain_AggregateRoot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Domain/AggregateRoot */ \"./src/Fungus/Shared/Domain/AggregateRoot.ts\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass Mushroom extends _Shared_Domain_AggregateRoot__WEBPACK_IMPORTED_MODULE_1__.AggregateRoot {\n  constructor({\n    id,\n    scientificName\n  }) {\n    super();\n\n    _defineProperty(this, \"_id\", void 0);\n\n    _defineProperty(this, \"_scientificName\", void 0);\n\n    this._id = id;\n    this._scientificName = scientificName;\n  }\n\n  id() {\n    return this._id;\n  }\n\n  scientificName() {\n    return this._scientificName;\n  }\n\n  toPrimitives() {\n    return {\n      id: this._id.value(),\n      scientificName: this._scientificName\n    };\n  }\n\n  static fromPrimitives({\n    id,\n    scientificName\n  }) {\n    return new Mushroom({\n      id: new _Shared_Domain_MushroomId__WEBPACK_IMPORTED_MODULE_0__.MushroomId(id),\n      scientificName\n    });\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRnVuZ3VzL011c2hyb29tcy9Eb21haW4vTXVzaHJvb20udHM/MThiYSJdLCJuYW1lcyI6WyJNdXNocm9vbSIsIkFnZ3JlZ2F0ZVJvb3QiLCJjb25zdHJ1Y3RvciIsImlkIiwic2NpZW50aWZpY05hbWUiLCJfaWQiLCJfc2NpZW50aWZpY05hbWUiLCJ0b1ByaW1pdGl2ZXMiLCJ2YWx1ZSIsImZyb21QcmltaXRpdmVzIiwiTXVzaHJvb21JZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBSU8sTUFBTUEsUUFBTixTQUF1QkMsdUVBQXZCLENBQXFDO0FBSTFDQyxhQUFXLENBQUM7QUFBRUMsTUFBRjtBQUFNQztBQUFOLEdBQUQsRUFBcUU7QUFDOUU7O0FBRDhFOztBQUFBOztBQUc5RSxTQUFLQyxHQUFMLEdBQVdGLEVBQVg7QUFDQSxTQUFLRyxlQUFMLEdBQXVCRixjQUF2QjtBQUNEOztBQUVERCxJQUFFLEdBQWU7QUFDZixXQUFPLEtBQUtFLEdBQVo7QUFDRDs7QUFFREQsZ0JBQWMsR0FBVztBQUN2QixXQUFPLEtBQUtFLGVBQVo7QUFDRDs7QUFFREMsY0FBWSxHQUFlO0FBQ3pCLFdBQU87QUFDTEosUUFBRSxFQUFFLEtBQUtFLEdBQUwsQ0FBU0csS0FBVCxFQURDO0FBRUxKLG9CQUFjLEVBQUUsS0FBS0U7QUFGaEIsS0FBUDtBQUlEOztBQUVELFNBQU9HLGNBQVAsQ0FBc0I7QUFBRU4sTUFBRjtBQUFNQztBQUFOLEdBQXRCLEVBQW9FO0FBQ2xFLFdBQU8sSUFBSUosUUFBSixDQUFhO0FBQUVHLFFBQUUsRUFBRSxJQUFJTyxpRUFBSixDQUFlUCxFQUFmLENBQU47QUFBMEJDO0FBQTFCLEtBQWIsQ0FBUDtBQUNEOztBQTVCeUMiLCJmaWxlIjoiLi9zcmMvRnVuZ3VzL011c2hyb29tcy9Eb21haW4vTXVzaHJvb20udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNdXNocm9vbUlkIH0gZnJvbSAnLi4vLi4vU2hhcmVkL0RvbWFpbi9NdXNocm9vbUlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi9TaGFyZWQvRG9tYWluL0FnZ3JlZ2F0ZVJvb3QnO1xuXG5leHBvcnQgdHlwZSBQcmltaXRpdmVzID0geyBpZDogc3RyaW5nOyBzY2llbnRpZmljTmFtZTogc3RyaW5nIH07XG5cbmV4cG9ydCBjbGFzcyBNdXNocm9vbSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IF9pZDogTXVzaHJvb21JZDtcbiAgcHJpdmF0ZSByZWFkb25seSBfc2NpZW50aWZpY05hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih7IGlkLCBzY2llbnRpZmljTmFtZSB9OiB7IGlkOiBNdXNocm9vbUlkOyBzY2llbnRpZmljTmFtZTogc3RyaW5nIH0pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9zY2llbnRpZmljTmFtZSA9IHNjaWVudGlmaWNOYW1lO1xuICB9XG5cbiAgaWQoKTogTXVzaHJvb21JZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgc2NpZW50aWZpY05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2NpZW50aWZpY05hbWU7XG4gIH1cblxuICB0b1ByaW1pdGl2ZXMoKTogUHJpbWl0aXZlcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLl9pZC52YWx1ZSgpLFxuICAgICAgc2NpZW50aWZpY05hbWU6IHRoaXMuX3NjaWVudGlmaWNOYW1lLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZnJvbVByaW1pdGl2ZXMoeyBpZCwgc2NpZW50aWZpY05hbWUgfTogUHJpbWl0aXZlcyk6IE11c2hyb29tIHtcbiAgICByZXR1cm4gbmV3IE11c2hyb29tKHsgaWQ6IG5ldyBNdXNocm9vbUlkKGlkKSwgc2NpZW50aWZpY05hbWUgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Fungus/Mushrooms/Domain/Mushroom.ts\n");

/***/ }),

/***/ "./src/Fungus/Mushrooms/Domain/Mushrooms.ts":
/*!**************************************************!*\
  !*** ./src/Fungus/Mushrooms/Domain/Mushrooms.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mushrooms\": function() { return /* binding */ Mushrooms; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass Mushrooms {\n  constructor({\n    mushrooms = []\n  } = {}) {\n    _defineProperty(this, \"_mushrooms\", void 0);\n\n    this._mushrooms = mushrooms;\n  }\n\n  add(mushroom) {\n    this._mushrooms.push(mushroom);\n  }\n\n  findById(id) {\n    return this._mushrooms.find(mushroom => mushroom.id().equalTo(id));\n  }\n\n  findByScientificName(scientificName) {\n    return this._mushrooms.find(mushroom => mushroom.scientificName() === scientificName);\n  }\n\n  toPrimitives() {\n    return this._mushrooms.map(mushroom => mushroom.toPrimitives());\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRnVuZ3VzL011c2hyb29tcy9Eb21haW4vTXVzaHJvb21zLnRzPzFkODgiXSwibmFtZXMiOlsiTXVzaHJvb21zIiwiY29uc3RydWN0b3IiLCJtdXNocm9vbXMiLCJfbXVzaHJvb21zIiwiYWRkIiwibXVzaHJvb20iLCJwdXNoIiwiZmluZEJ5SWQiLCJpZCIsImZpbmQiLCJlcXVhbFRvIiwiZmluZEJ5U2NpZW50aWZpY05hbWUiLCJzY2llbnRpZmljTmFtZSIsInRvUHJpbWl0aXZlcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTU8sTUFBTUEsU0FBTixDQUFnQjtBQUdyQkMsYUFBVyxDQUFDO0FBQUVDLGFBQVMsR0FBRztBQUFkLE1BQXNELEVBQXZELEVBQTJEO0FBQUE7O0FBQ3BFLFNBQUtDLFVBQUwsR0FBa0JELFNBQWxCO0FBQ0Q7O0FBRURFLEtBQUcsQ0FBQ0MsUUFBRCxFQUEyQjtBQUM1QixTQUFLRixVQUFMLENBQWdCRyxJQUFoQixDQUFxQkQsUUFBckI7QUFDRDs7QUFFREUsVUFBUSxDQUFDQyxFQUFELEVBQXVDO0FBQzdDLFdBQU8sS0FBS0wsVUFBTCxDQUFnQk0sSUFBaEIsQ0FBc0JKLFFBQUQsSUFBY0EsUUFBUSxDQUFDRyxFQUFULEdBQWNFLE9BQWQsQ0FBc0JGLEVBQXRCLENBQW5DLENBQVA7QUFDRDs7QUFFREcsc0JBQW9CLENBQUNDLGNBQUQsRUFBK0M7QUFDakUsV0FBTyxLQUFLVCxVQUFMLENBQWdCTSxJQUFoQixDQUFzQkosUUFBRCxJQUFjQSxRQUFRLENBQUNPLGNBQVQsT0FBOEJBLGNBQWpFLENBQVA7QUFDRDs7QUFFREMsY0FBWSxHQUFlO0FBQ3pCLFdBQU8sS0FBS1YsVUFBTCxDQUFnQlcsR0FBaEIsQ0FBcUJULFFBQUQsSUFBY0EsUUFBUSxDQUFDUSxZQUFULEVBQWxDLENBQVA7QUFDRDs7QUFyQm9CIiwiZmlsZSI6Ii4vc3JjL0Z1bmd1cy9NdXNocm9vbXMvRG9tYWluL011c2hyb29tcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE11c2hyb29tSWQgfSBmcm9tICcuLi8uLi9TaGFyZWQvRG9tYWluL011c2hyb29tSWQnO1xuXG5pbXBvcnQgeyBNdXNocm9vbSwgUHJpbWl0aXZlcyBhcyBNdXNocm9vbVByaW1pdGl2ZXMgfSBmcm9tICcuL011c2hyb29tJztcblxuZXhwb3J0IHR5cGUgUHJpbWl0aXZlcyA9IEFycmF5PE11c2hyb29tUHJpbWl0aXZlcz47XG5cbmV4cG9ydCBjbGFzcyBNdXNocm9vbXMge1xuICBwcml2YXRlIHJlYWRvbmx5IF9tdXNocm9vbXM6IEFycmF5PE11c2hyb29tPjtcblxuICBjb25zdHJ1Y3Rvcih7IG11c2hyb29tcyA9IFtdIH06IHsgbXVzaHJvb21zPzogQXJyYXk8TXVzaHJvb20+IH0gPSB7fSkge1xuICAgIHRoaXMuX211c2hyb29tcyA9IG11c2hyb29tcztcbiAgfVxuXG4gIGFkZChtdXNocm9vbTogTXVzaHJvb20pOiB2b2lkIHtcbiAgICB0aGlzLl9tdXNocm9vbXMucHVzaChtdXNocm9vbSk7XG4gIH1cblxuICBmaW5kQnlJZChpZDogTXVzaHJvb21JZCk6IE11c2hyb29tIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbXVzaHJvb21zLmZpbmQoKG11c2hyb29tKSA9PiBtdXNocm9vbS5pZCgpLmVxdWFsVG8oaWQpKTtcbiAgfVxuXG4gIGZpbmRCeVNjaWVudGlmaWNOYW1lKHNjaWVudGlmaWNOYW1lOiBzdHJpbmcpOiBNdXNocm9vbSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX211c2hyb29tcy5maW5kKChtdXNocm9vbSkgPT4gbXVzaHJvb20uc2NpZW50aWZpY05hbWUoKSA9PT0gc2NpZW50aWZpY05hbWUpO1xuICB9XG5cbiAgdG9QcmltaXRpdmVzKCk6IFByaW1pdGl2ZXMge1xuICAgIHJldHVybiB0aGlzLl9tdXNocm9vbXMubWFwKChtdXNocm9vbSkgPT4gbXVzaHJvb20udG9QcmltaXRpdmVzKCkpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Fungus/Mushrooms/Domain/Mushrooms.ts\n");

/***/ }),

/***/ "./src/Fungus/Mushrooms/Infrastructure/FileMushroomRepository.ts":
/*!***********************************************************************!*\
  !*** ./src/Fungus/Mushrooms/Infrastructure/FileMushroomRepository.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FileMushroomRepository\": function() { return /* binding */ FileMushroomRepository; }\n/* harmony export */ });\n/* harmony import */ var _Shared_Infrastructure_FileRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Shared/Infrastructure/FileRepository */ \"./src/Fungus/Shared/Infrastructure/FileRepository.ts\");\n/* harmony import */ var _Domain_Mushrooms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Domain/Mushrooms */ \"./src/Fungus/Mushrooms/Domain/Mushrooms.ts\");\n/* harmony import */ var _Domain_Mushroom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Domain/Mushroom */ \"./src/Fungus/Mushrooms/Domain/Mushroom.ts\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass FileMushroomRepository extends _Shared_Infrastructure_FileRepository__WEBPACK_IMPORTED_MODULE_0__.FileRepository {\n  constructor({\n    mushrooms = new _Domain_Mushrooms__WEBPACK_IMPORTED_MODULE_1__.Mushrooms(),\n    filePath = 'database/mushrooms.txt',\n    onLoad\n  } = {}) {\n    super({\n      filePath\n    });\n\n    _defineProperty(this, \"_mushrooms\", void 0);\n\n    this._mushrooms = mushrooms;\n    this.readAll({\n      onLineRead: json => {\n        this._mushrooms.add(_Domain_Mushroom__WEBPACK_IMPORTED_MODULE_2__.Mushroom.fromPrimitives(json));\n      },\n      onFinish: onLoad\n    });\n  }\n\n  findById(id) {\n    return this._mushrooms.findById(id);\n  }\n\n  findByScientificName(scientificName) {\n    return this._mushrooms.findByScientificName(scientificName);\n  }\n\n  add(mushroom) {\n    this._mushrooms.add(mushroom);\n\n    this.write(mushroom);\n  }\n\n  all() {\n    return this._mushrooms;\n  }\n\n  clean() {\n    this.cleanContent();\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRnVuZ3VzL011c2hyb29tcy9JbmZyYXN0cnVjdHVyZS9GaWxlTXVzaHJvb21SZXBvc2l0b3J5LnRzP2E0YzIiXSwibmFtZXMiOlsiRmlsZU11c2hyb29tUmVwb3NpdG9yeSIsIkZpbGVSZXBvc2l0b3J5IiwiY29uc3RydWN0b3IiLCJtdXNocm9vbXMiLCJNdXNocm9vbXMiLCJmaWxlUGF0aCIsIm9uTG9hZCIsIl9tdXNocm9vbXMiLCJyZWFkQWxsIiwib25MaW5lUmVhZCIsImpzb24iLCJhZGQiLCJNdXNocm9vbSIsIm9uRmluaXNoIiwiZmluZEJ5SWQiLCJpZCIsImZpbmRCeVNjaWVudGlmaWNOYW1lIiwic2NpZW50aWZpY05hbWUiLCJtdXNocm9vbSIsIndyaXRlIiwiYWxsIiwiY2xlYW4iLCJjbGVhbkNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBO0FBR0E7QUFDQTtBQUVPLE1BQU1BLHNCQUFOLFNBQXFDQyxpRkFBckMsQ0FBa0Y7QUFHdkZDLGFBQVcsQ0FBQztBQUNWQyxhQUFTLEdBQUcsSUFBSUMsd0RBQUosRUFERjtBQUVWQyxZQUFRLEdBQUcsd0JBRkQ7QUFHVkM7QUFIVSxNQUkyRCxFQUo1RCxFQUlnRTtBQUN6RSxVQUFNO0FBQUVEO0FBQUYsS0FBTjs7QUFEeUU7O0FBR3pFLFNBQUtFLFVBQUwsR0FBa0JKLFNBQWxCO0FBRUEsU0FBS0ssT0FBTCxDQUFhO0FBQ1hDLGdCQUFVLEVBQUdDLElBQUQsSUFBVTtBQUNwQixhQUFLSCxVQUFMLENBQWdCSSxHQUFoQixDQUFvQkMscUVBQUEsQ0FBd0JGLElBQXhCLENBQXBCO0FBQ0QsT0FIVTtBQUlYRyxjQUFRLEVBQUVQO0FBSkMsS0FBYjtBQU1EOztBQUVEUSxVQUFRLENBQUNDLEVBQUQsRUFBdUM7QUFDN0MsV0FBTyxLQUFLUixVQUFMLENBQWdCTyxRQUFoQixDQUF5QkMsRUFBekIsQ0FBUDtBQUNEOztBQUVEQyxzQkFBb0IsQ0FBQ0MsY0FBRCxFQUErQztBQUNqRSxXQUFPLEtBQUtWLFVBQUwsQ0FBZ0JTLG9CQUFoQixDQUFxQ0MsY0FBckMsQ0FBUDtBQUNEOztBQUVETixLQUFHLENBQUNPLFFBQUQsRUFBMkI7QUFDNUIsU0FBS1gsVUFBTCxDQUFnQkksR0FBaEIsQ0FBb0JPLFFBQXBCOztBQUVBLFNBQUtDLEtBQUwsQ0FBV0QsUUFBWDtBQUNEOztBQUVERSxLQUFHLEdBQWM7QUFDZixXQUFPLEtBQUtiLFVBQVo7QUFDRDs7QUFFRGMsT0FBSyxHQUFTO0FBQ1osU0FBS0MsWUFBTDtBQUNEOztBQXhDc0YiLCJmaWxlIjoiLi9zcmMvRnVuZ3VzL011c2hyb29tcy9JbmZyYXN0cnVjdHVyZS9GaWxlTXVzaHJvb21SZXBvc2l0b3J5LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0aG9kTm90SW1wbGVtZW50ZWQgfSBmcm9tICcuLi8uLi9TaGFyZWQvRG9tYWluL01ldGhvZE5vdEltcGxlbWVudGVkJztcbmltcG9ydCB7IE11c2hyb29tSWQgfSBmcm9tICcuLi8uLi9TaGFyZWQvRG9tYWluL011c2hyb29tSWQnO1xuXG5pbXBvcnQgeyBGaWxlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL1NoYXJlZC9JbmZyYXN0cnVjdHVyZS9GaWxlUmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IE11c2hyb29tUmVwb3NpdG9yeSB9IGZyb20gJy4uL0RvbWFpbi9NdXNocm9vbVJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTXVzaHJvb21zIH0gZnJvbSAnLi4vRG9tYWluL011c2hyb29tcyc7XG5pbXBvcnQgeyBNdXNocm9vbSB9IGZyb20gJy4uL0RvbWFpbi9NdXNocm9vbSc7XG5cbmV4cG9ydCBjbGFzcyBGaWxlTXVzaHJvb21SZXBvc2l0b3J5IGV4dGVuZHMgRmlsZVJlcG9zaXRvcnkgaW1wbGVtZW50cyBNdXNocm9vbVJlcG9zaXRvcnkge1xuICBwcml2YXRlIHJlYWRvbmx5IF9tdXNocm9vbXM6IE11c2hyb29tcztcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgbXVzaHJvb21zID0gbmV3IE11c2hyb29tcygpLFxuICAgIGZpbGVQYXRoID0gJ2RhdGFiYXNlL211c2hyb29tcy50eHQnLFxuICAgIG9uTG9hZCxcbiAgfTogeyBtdXNocm9vbXM/OiBNdXNocm9vbXM7IGZpbGVQYXRoPzogc3RyaW5nOyBvbkxvYWQ/OiAoKSA9PiB2b2lkIH0gPSB7fSkge1xuICAgIHN1cGVyKHsgZmlsZVBhdGggfSk7XG5cbiAgICB0aGlzLl9tdXNocm9vbXMgPSBtdXNocm9vbXM7XG5cbiAgICB0aGlzLnJlYWRBbGwoe1xuICAgICAgb25MaW5lUmVhZDogKGpzb24pID0+IHtcbiAgICAgICAgdGhpcy5fbXVzaHJvb21zLmFkZChNdXNocm9vbS5mcm9tUHJpbWl0aXZlcyhqc29uKSk7XG4gICAgICB9LFxuICAgICAgb25GaW5pc2g6IG9uTG9hZCxcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRCeUlkKGlkOiBNdXNocm9vbUlkKTogTXVzaHJvb20gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tdXNocm9vbXMuZmluZEJ5SWQoaWQpO1xuICB9XG5cbiAgZmluZEJ5U2NpZW50aWZpY05hbWUoc2NpZW50aWZpY05hbWU6IHN0cmluZyk6IE11c2hyb29tIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbXVzaHJvb21zLmZpbmRCeVNjaWVudGlmaWNOYW1lKHNjaWVudGlmaWNOYW1lKTtcbiAgfVxuXG4gIGFkZChtdXNocm9vbTogTXVzaHJvb20pOiB2b2lkIHtcbiAgICB0aGlzLl9tdXNocm9vbXMuYWRkKG11c2hyb29tKTtcblxuICAgIHRoaXMud3JpdGUobXVzaHJvb20pO1xuICB9XG5cbiAgYWxsKCk6IE11c2hyb29tcyB7XG4gICAgcmV0dXJuIHRoaXMuX211c2hyb29tcztcbiAgfVxuXG4gIGNsZWFuKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5Db250ZW50KCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Fungus/Mushrooms/Infrastructure/FileMushroomRepository.ts\n");

/***/ }),

/***/ "./src/Fungus/Mushrooms/Infrastructure/index.ts":
/*!******************************************************!*\
  !*** ./src/Fungus/Mushrooms/Infrastructure/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mushroomRepository\": function() { return /* binding */ mushroomRepository; }\n/* harmony export */ });\n/* harmony import */ var _FileMushroomRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileMushroomRepository */ \"./src/Fungus/Mushrooms/Infrastructure/FileMushroomRepository.ts\");\n\nlet mushroomRepository;\nconst env = \"development\" || 0;\n\nif (env === 'test') {\n  mushroomRepository = new _FileMushroomRepository__WEBPACK_IMPORTED_MODULE_0__.FileMushroomRepository({\n    filePath: 'database/mushrooms.spec.txt'\n  });\n} else {\n  mushroomRepository = new _FileMushroomRepository__WEBPACK_IMPORTED_MODULE_0__.FileMushroomRepository();\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRnVuZ3VzL011c2hyb29tcy9JbmZyYXN0cnVjdHVyZS9pbmRleC50cz85NTEwIl0sIm5hbWVzIjpbIm11c2hyb29tUmVwb3NpdG9yeSIsImVudiIsIkZpbGVNdXNocm9vbVJlcG9zaXRvcnkiLCJmaWxlUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtBQUVBLElBQUlBLGtCQUFKO0FBRUEsTUFBTUMsR0FBRyxHQUFHLGlCQUF3QixDQUFwQzs7QUFFQSxJQUFJQSxHQUFHLEtBQUssTUFBWixFQUFvQjtBQUNsQkQsb0JBQWtCLEdBQUcsSUFBSUUsMkVBQUosQ0FBMkI7QUFBRUMsWUFBUSxFQUFFO0FBQVosR0FBM0IsQ0FBckI7QUFDRCxDQUZELE1BRU87QUFDTEgsb0JBQWtCLEdBQUcsSUFBSUUsMkVBQUosRUFBckI7QUFDRCIsImZpbGUiOiIuL3NyYy9GdW5ndXMvTXVzaHJvb21zL0luZnJhc3RydWN0dXJlL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXVzaHJvb21SZXBvc2l0b3J5IH0gZnJvbSAnLi4vRG9tYWluL011c2hyb29tUmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IEZpbGVNdXNocm9vbVJlcG9zaXRvcnkgfSBmcm9tICcuL0ZpbGVNdXNocm9vbVJlcG9zaXRvcnknO1xuXG5sZXQgbXVzaHJvb21SZXBvc2l0b3J5OiBNdXNocm9vbVJlcG9zaXRvcnk7XG5cbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5cbmlmIChlbnYgPT09ICd0ZXN0Jykge1xuICBtdXNocm9vbVJlcG9zaXRvcnkgPSBuZXcgRmlsZU11c2hyb29tUmVwb3NpdG9yeSh7IGZpbGVQYXRoOiAnZGF0YWJhc2UvbXVzaHJvb21zLnNwZWMudHh0JyB9KTtcbn0gZWxzZSB7XG4gIG11c2hyb29tUmVwb3NpdG9yeSA9IG5ldyBGaWxlTXVzaHJvb21SZXBvc2l0b3J5KCk7XG59XG5cbmV4cG9ydCB7IG11c2hyb29tUmVwb3NpdG9yeSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Fungus/Mushrooms/Infrastructure/index.ts\n");

/***/ }),

/***/ "./src/Fungus/Shared/Domain/MushroomId.ts":
/*!************************************************!*\
  !*** ./src/Fungus/Shared/Domain/MushroomId.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MushroomId\": function() { return /* binding */ MushroomId; }\n/* harmony export */ });\n/* harmony import */ var _Id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Id */ \"./src/Fungus/Shared/Domain/Id.ts\");\n\nclass MushroomId extends _Id__WEBPACK_IMPORTED_MODULE_0__.Id {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRnVuZ3VzL1NoYXJlZC9Eb21haW4vTXVzaHJvb21JZC50cz9kNGZkIl0sIm5hbWVzIjpbIk11c2hyb29tSWQiLCJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVPLE1BQU1BLFVBQU4sU0FBeUJDLG1DQUF6QixDQUE0QiIsImZpbGUiOiIuL3NyYy9GdW5ndXMvU2hhcmVkL0RvbWFpbi9NdXNocm9vbUlkLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWQgfSBmcm9tICcuL0lkJztcblxuZXhwb3J0IGNsYXNzIE11c2hyb29tSWQgZXh0ZW5kcyBJZCB7fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Fungus/Shared/Domain/MushroomId.ts\n");

/***/ }),

/***/ "./src/pages/api/mushrooms/index.ts":
/*!******************************************!*\
  !*** ./src/pages/api/mushrooms/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Fungus_Mushrooms_Application_Find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Fungus/Mushrooms/Application/Find */ \"./src/Fungus/Mushrooms/Application/Find/index.ts\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.withApiAuthRequired)(async function (req, res) {\n  try {\n    const result = await _Fungus_Mushrooms_Application_Find__WEBPACK_IMPORTED_MODULE_2__.default.run();\n    res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().OK)).json(result.mushrooms);\n    res.end();\n  } catch (error) {\n    console.error(error.message);\n    return res.status(error.status || (http_status__WEBPACK_IMPORTED_MODULE_1___default().INTERNAL_SERVER_ERROR)).end(error.message);\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL211c2hyb29tcy9pbmRleC50cz8yMTgxIl0sIm5hbWVzIjpbIndpdGhBcGlBdXRoUmVxdWlyZWQiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJtdXNocm9vbXNGaW5kZXIiLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwianNvbiIsIm11c2hyb29tcyIsImVuZCIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLCtEQUFlQSx3RUFBbUIsQ0FBQyxnQkFBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQixFQUEwQjtBQUMzRCxNQUFJO0FBQ0YsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLDJFQUFBLEVBQXJCO0FBRUFGLE9BQUcsQ0FBQ0csTUFBSixDQUFXQyx1REFBWCxFQUEwQkMsSUFBMUIsQ0FBK0JKLE1BQU0sQ0FBQ0ssU0FBdEM7QUFDQU4sT0FBRyxDQUFDTyxHQUFKO0FBQ0QsR0FMRCxDQUtFLE9BQU9DLEtBQVAsRUFBYztBQUNkQyxXQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBSyxDQUFDRSxPQUFwQjtBQUVBLFdBQU9WLEdBQUcsQ0FBQ0csTUFBSixDQUFXSyxLQUFLLENBQUNMLE1BQU4sSUFBZ0JDLDBFQUEzQixFQUE2REcsR0FBN0QsQ0FBaUVDLEtBQUssQ0FBQ0UsT0FBdkUsQ0FBUDtBQUNEO0FBQ0YsQ0FYaUMsQ0FBbEMiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL211c2hyb29tcy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhBcGlBdXRoUmVxdWlyZWQgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcblxuaW1wb3J0IG11c2hyb29tc0ZpbmRlciBmcm9tICcuLi8uLi8uLi9GdW5ndXMvTXVzaHJvb21zL0FwcGxpY2F0aW9uL0ZpbmQnO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBpQXV0aFJlcXVpcmVkKGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG11c2hyb29tc0ZpbmRlci5ydW4oKTtcblxuICAgIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbihyZXN1bHQubXVzaHJvb21zKTtcbiAgICByZXMuZW5kKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCBodHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuZW5kKGVycm9yLm1lc3NhZ2UpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/mushrooms/index.ts\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("http-status");;

/***/ }),

/***/ "readline":
/*!***************************!*\
  !*** external "readline" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("readline");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["src_Fungus_Shared_Domain_AggregateRoot_ts-src_Fungus_Shared_Domain_Id_ts-src_Fungus_Shared_In-7397e3"], function() { return __webpack_exec__("./src/pages/api/mushrooms/index.ts"); });
module.exports = __webpack_exports__;

})();