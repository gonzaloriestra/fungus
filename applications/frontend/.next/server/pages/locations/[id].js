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
exports.id = "pages/locations/[id]";
exports.ids = ["pages/locations/[id]"];
exports.modules = {

/***/ "./src/actions/client/harvests/getByLocationId.ts":
/*!********************************************************!*\
  !*** ./src/actions/client/harvests/getByLocationId.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getByLocationId; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ClientFetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ClientFetcher */ \"./src/actions/client/ClientFetcher.ts\");\n\n\nfunction getByLocationId({\n  locationId\n}) {\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(`/harvests?locationId=${locationId}`, _ClientFetcher__WEBPACK_IMPORTED_MODULE_1__.default.get);\n  return {\n    harvests: data,\n    isLoading: !error && !data,\n    error\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jbGllbnQvaGFydmVzdHMvZ2V0QnlMb2NhdGlvbklkLnRzP2JjMjgiXSwibmFtZXMiOlsiZ2V0QnlMb2NhdGlvbklkIiwibG9jYXRpb25JZCIsImRhdGEiLCJlcnJvciIsInVzZVNXUiIsIkNsaWVudEZldGNoZXIiLCJoYXJ2ZXN0cyIsImlzTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBSUE7QUFFZSxTQUFTQSxlQUFULENBQXlCO0FBQUVDO0FBQUYsQ0FBekIsRUFBb0c7QUFDakgsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBa0JDLDBDQUFNLENBQVksd0JBQXVCSCxVQUFXLEVBQTlDLEVBQWlESSx1REFBakQsQ0FBOUI7QUFFQSxTQUFPO0FBQ0xDLFlBQVEsRUFBRUosSUFETDtBQUVMSyxhQUFTLEVBQUUsQ0FBQ0osS0FBRCxJQUFVLENBQUNELElBRmpCO0FBR0xDO0FBSEssR0FBUDtBQUtEIiwiZmlsZSI6Ii4vc3JjL2FjdGlvbnMvY2xpZW50L2hhcnZlc3RzL2dldEJ5TG9jYXRpb25JZC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuaW1wb3J0IEhhcnZlc3RzIGZyb20gJy4uLy4uLy4uL21vZGVscy9IYXJ2ZXN0cyc7XG5cbmltcG9ydCBDbGllbnRGZXRjaGVyIGZyb20gJy4uL0NsaWVudEZldGNoZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCeUxvY2F0aW9uSWQoeyBsb2NhdGlvbklkIH0pOiB7IGhhcnZlc3RzPzogSGFydmVzdHM7IGlzTG9hZGluZzogYm9vbGVhbjsgZXJyb3I6IEVycm9yIH0ge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1I8SGFydmVzdHM+KGAvaGFydmVzdHM/bG9jYXRpb25JZD0ke2xvY2F0aW9uSWR9YCwgQ2xpZW50RmV0Y2hlci5nZXQpO1xuXG4gIHJldHVybiB7XG4gICAgaGFydmVzdHM6IGRhdGEsXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXG4gICAgZXJyb3IsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/actions/client/harvests/getByLocationId.ts\n");

/***/ }),

/***/ "./src/actions/client/locations/getLocation.ts":
/*!*****************************************************!*\
  !*** ./src/actions/client/locations/getLocation.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getLocation; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ClientFetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ClientFetcher */ \"./src/actions/client/ClientFetcher.ts\");\n\n\nfunction getLocation({\n  id\n}) {\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(`/locations/${id}`, _ClientFetcher__WEBPACK_IMPORTED_MODULE_1__.default.get);\n  return {\n    location: data,\n    isLoading: !error && !data,\n    error\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jbGllbnQvbG9jYXRpb25zL2dldExvY2F0aW9uLnRzPzlhZWMiXSwibmFtZXMiOlsiZ2V0TG9jYXRpb24iLCJpZCIsImRhdGEiLCJlcnJvciIsInVzZVNXUiIsIkNsaWVudEZldGNoZXIiLCJsb2NhdGlvbiIsImlzTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBSUE7QUFFZSxTQUFTQSxXQUFULENBQXFCO0FBQUVDO0FBQUYsQ0FBckIsRUFBd0Y7QUFDckcsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBa0JDLDBDQUFNLENBQVksY0FBYUgsRUFBRyxFQUE1QixFQUErQkksdURBQS9CLENBQTlCO0FBRUEsU0FBTztBQUNMQyxZQUFRLEVBQUVKLElBREw7QUFFTEssYUFBUyxFQUFFLENBQUNKLEtBQUQsSUFBVSxDQUFDRCxJQUZqQjtBQUdMQztBQUhLLEdBQVA7QUFLRCIsImZpbGUiOiIuL3NyYy9hY3Rpb25zL2NsaWVudC9sb2NhdGlvbnMvZ2V0TG9jYXRpb24udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBMb2NhdGlvbiBmcm9tICcuLi8uLi8uLi9tb2RlbHMvTG9jYXRpb24nO1xuXG5pbXBvcnQgQ2xpZW50RmV0Y2hlciBmcm9tICcuLi9DbGllbnRGZXRjaGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TG9jYXRpb24oeyBpZCB9KTogeyBsb2NhdGlvbj86IExvY2F0aW9uOyBpc0xvYWRpbmc6IGJvb2xlYW47IGVycm9yOiBFcnJvciB9IHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSPExvY2F0aW9uPihgL2xvY2F0aW9ucy8ke2lkfWAsIENsaWVudEZldGNoZXIuZ2V0KTtcblxuICByZXR1cm4ge1xuICAgIGxvY2F0aW9uOiBkYXRhLFxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxuICAgIGVycm9yLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/actions/client/locations/getLocation.ts\n");

/***/ }),

/***/ "./src/components/HarvestList/HarvestList.tsx":
/*!****************************************************!*\
  !*** ./src/components/HarvestList/HarvestList.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/sergiosanchez/Projects/fungus/applications/frontend/src/components/HarvestList/HarvestList.tsx\";\n\n\n\nconst HarvestList = ({\n  harvests\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {\n    children: harvests.map(harvest => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {\n          as: \"a\",\n          children: harvest.date\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Description, {\n          children: [\"Mushroom - \", harvest.mushroomId]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Description, {\n          children: [\"Quantity \", harvest.quantity]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 11\n      }, undefined)\n    }, harvest.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HarvestList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IYXJ2ZXN0TGlzdC9IYXJ2ZXN0TGlzdC50c3g/Yzg0MSJdLCJuYW1lcyI6WyJIYXJ2ZXN0TGlzdCIsImhhcnZlc3RzIiwibWFwIiwiaGFydmVzdCIsImRhdGUiLCJtdXNocm9vbUlkIiwicXVhbnRpdHkiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBK0I7QUFDakQsc0JBQ0UsOERBQUMsbURBQUQ7QUFBQSxjQUNHQSxRQUFRLENBQUNDLEdBQVQsQ0FBY0MsT0FBRCxpQkFDWiw4REFBQyx3REFBRDtBQUFBLDZCQUNFLDhEQUFDLDJEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsMERBQUQ7QUFBYSxZQUFFLEVBQUMsR0FBaEI7QUFBQSxvQkFBcUJBLE9BQU8sQ0FBQ0M7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLCtEQUFEO0FBQUEsb0NBQThCRCxPQUFPLENBQUNFLFVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLDhEQUFDLCtEQUFEO0FBQUEsa0NBQTRCRixPQUFPLENBQUNHLFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFnQkgsT0FBTyxDQUFDSSxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBYUQsQ0FkRDs7QUFnQkEsK0RBQWVQLFdBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IYXJ2ZXN0TGlzdC9IYXJ2ZXN0TGlzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY29uc3QgSGFydmVzdExpc3QgPSAoeyBoYXJ2ZXN0cyB9KTogSlNYLkVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaXN0PlxuICAgICAge2hhcnZlc3RzLm1hcCgoaGFydmVzdCkgPT4gKFxuICAgICAgICA8TGlzdC5JdGVtIGtleT17aGFydmVzdC5pZH0+XG4gICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgIDxMaXN0LkhlYWRlciBhcz1cImFcIj57aGFydmVzdC5kYXRlfTwvTGlzdC5IZWFkZXI+XG4gICAgICAgICAgICA8TGlzdC5EZXNjcmlwdGlvbj5NdXNocm9vbSAtIHtoYXJ2ZXN0Lm11c2hyb29tSWR9PC9MaXN0LkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPExpc3QuRGVzY3JpcHRpb24+UXVhbnRpdHkge2hhcnZlc3QucXVhbnRpdHl9PC9MaXN0LkRlc2NyaXB0aW9uPlxuICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxuICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICkpfVxuICAgIDwvTGlzdD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhhcnZlc3RMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/HarvestList/HarvestList.tsx\n");

/***/ }),

/***/ "./src/components/HarvestList/index.ts":
/*!*********************************************!*\
  !*** ./src/components/HarvestList/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HarvestList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HarvestList */ \"./src/components/HarvestList/HarvestList.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_HarvestList__WEBPACK_IMPORTED_MODULE_0__.default);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IYXJ2ZXN0TGlzdC9pbmRleC50cz8yNjE2Il0sIm5hbWVzIjpbIkhhcnZlc3RMaXN0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUEsK0RBQWVBLGlEQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGFydmVzdExpc3QvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFydmVzdExpc3QgZnJvbSAnLi9IYXJ2ZXN0TGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IEhhcnZlc3RMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/HarvestList/index.ts\n");

/***/ }),

/***/ "./src/components/Map/index.ts":
/*!*************************************!*\
  !*** ./src/components/Map/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ \"src_components_Map_Map_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./Map */ \"./src/components/Map/Map.tsx\")), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ./Map */ \"./src/components/Map/Map.tsx\")],\n    modules: [\"../components/Map/index.ts -> \" + './Map']\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAvaW5kZXgudHM/NmQ3ZiJdLCJuYW1lcyI6WyJkeW5hbWljIiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBLCtEQUFlQSxtREFBTyxDQUFDLE1BQU0sb0tBQVAsRUFBd0I7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBLHdDQUFWLDJDQUFVO0FBQUEsaURBQVYsT0FBVTtBQUFBO0FBQUEsQ0FBeEIsQ0FBdEIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYXAvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuXG5leHBvcnQgZGVmYXVsdCBkeW5hbWljKCgpID0+IGltcG9ydCgnLi9NYXAnKSwgeyBzc3I6IGZhbHNlIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Map/index.ts\n");

/***/ }),

/***/ "./src/pages/locations/[id].tsx":
/*!**************************************!*\
  !*** ./src/pages/locations/[id].tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"../../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _authentication_withAuthRequired__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../authentication/withAuthRequired */ \"./src/authentication/withAuthRequired.ts\");\n/* harmony import */ var _actions_client_locations_getLocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/client/locations/getLocation */ \"./src/actions/client/locations/getLocation.ts\");\n/* harmony import */ var _actions_client_harvests_getByLocationId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/client/harvests/getByLocationId */ \"./src/actions/client/harvests/getByLocationId.ts\");\n/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Map */ \"./src/components/Map/index.ts\");\n/* harmony import */ var _components_HarvestList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/HarvestList */ \"./src/components/HarvestList/index.ts\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.ts\");\n\n\nvar _jsxFileName = \"/Users/sergiosanchez/Projects/fungus/applications/frontend/src/pages/locations/[id].tsx\";\n\n\n\n\n\n\n\n\n\n\n\nconst LocationDetails = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const {\n    location,\n    isLoading,\n    error\n  } = (0,_actions_client_locations_getLocation__WEBPACK_IMPORTED_MODULE_6__.default)({\n    id: router.query.id\n  }); // To-Do move to another sub component maybe harvestList\n\n  const {\n    harvests,\n    isLoading: isLoadingHarvests,\n    error: errorHarvests\n  } = (0,_actions_client_harvests_getByLocationId__WEBPACK_IMPORTED_MODULE_7__.default)({\n    locationId: router.query.id\n  }); // if (error) {\n  //   // To-Do Implement error behaviour\n  //   return <div>Loading failed: {error.message}</div>;\n  // }\n  //\n\n  if (errorHarvests) {\n    // To-Do Implement error behaviour\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [\"Loading failed: \", errorHarvests.message]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_10__.default, {\n      activePage: _components_Header__WEBPACK_IMPORTED_MODULE_10__.ActivePage.locations\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        height: '500px',\n        padding: '0 100px'\n      },\n      children: location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Map__WEBPACK_IMPORTED_MODULE_8__.default, {\n        location: location\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 22\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Header, {\n      as: \"h2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n        name: \"calendar alternate outline\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Header.Content, {\n        children: \"Harvests\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, undefined), harvests && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HarvestList__WEBPACK_IMPORTED_MODULE_9__.default, {\n      harvests: harvests\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 20\n    }, undefined), location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n      href: `/harvests/new?locationId=${location.id}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n        primary: true,\n        children: \"Add Harvest\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_authentication_withAuthRequired__WEBPACK_IMPORTED_MODULE_5__.withClientAuthRequired)(LocationDetails));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9jYXRpb25zL1tpZF0udHN4P2IxNzEiXSwibmFtZXMiOlsiTG9jYXRpb25EZXRhaWxzIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9jYXRpb24iLCJpc0xvYWRpbmciLCJlcnJvciIsImdldExvY2F0aW9uIiwiaWQiLCJxdWVyeSIsImhhcnZlc3RzIiwiaXNMb2FkaW5nSGFydmVzdHMiLCJlcnJvckhhcnZlc3RzIiwiZ2V0SGFydmVzdHNCeUxvY2F0aW9uSWQiLCJsb2NhdGlvbklkIiwibWVzc2FnZSIsIkFjdGl2ZVBhZ2UiLCJsb2NhdGlvbnMiLCJoZWlnaHQiLCJwYWRkaW5nIiwid2l0aENsaWVudEF1dGhSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsTUFBbUI7QUFDekMsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLFFBQU07QUFBRUMsWUFBRjtBQUFZQyxhQUFaO0FBQXVCQztBQUF2QixNQUFpQ0MsOEVBQVcsQ0FBQztBQUFFQyxNQUFFLEVBQUVOLE1BQU0sQ0FBQ08sS0FBUCxDQUFhRDtBQUFuQixHQUFELENBQWxELENBSHlDLENBS3pDOztBQUNBLFFBQU07QUFDSkUsWUFESTtBQUVKTCxhQUFTLEVBQUVNLGlCQUZQO0FBR0pMLFNBQUssRUFBRU07QUFISCxNQUlGQyxpRkFBdUIsQ0FBQztBQUMxQkMsY0FBVSxFQUFFWixNQUFNLENBQUNPLEtBQVAsQ0FBYUQ7QUFEQyxHQUFELENBSjNCLENBTnlDLENBY3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBSUksYUFBSixFQUFtQjtBQUNqQjtBQUNBLHdCQUFPO0FBQUEscUNBQXNCQSxhQUFhLENBQUNHLE9BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsd0RBQUQ7QUFBUSxnQkFBVSxFQUFFQyxxRUFBb0JDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUNFLFdBQUssRUFBRTtBQUNMQyxjQUFNLEVBQUUsT0FESDtBQUVMQyxlQUFPLEVBQUU7QUFGSixPQURUO0FBQUEsZ0JBT0dmLFFBQVEsaUJBQUksOERBQUMsb0RBQUQ7QUFBSyxnQkFBUSxFQUFFQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBV0UsOERBQUMscURBQUQ7QUFBZ0IsUUFBRSxFQUFDLElBQW5CO0FBQUEsOEJBQ0UsOERBQUMsbURBQUQ7QUFBTSxZQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGLEVBZ0JHTSxRQUFRLGlCQUFJLDhEQUFDLDREQUFEO0FBQWEsY0FBUSxFQUFFQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCZixFQWtCR04sUUFBUSxpQkFDUCw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyw0QkFBMkJBLFFBQVEsQ0FBQ0ksRUFBRyxFQUFwRDtBQUFBLDZCQUNFLDhEQUFDLHFEQUFEO0FBQVEsZUFBTyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQko7QUFBQSxrQkFERjtBQTBCRCxDQWxERDs7QUFvREEsK0RBQWVZLHdGQUFzQixDQUFDbkIsZUFBRCxDQUFyQyIsImZpbGUiOiIuL3NyYy9wYWdlcy9sb2NhdGlvbnMvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEJ1dHRvbiwgSGVhZGVyIGFzIFNlbWFudGljSGVhZGVyLCBJY29uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5pbXBvcnQgeyB3aXRoQ2xpZW50QXV0aFJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vd2l0aEF1dGhSZXF1aXJlZCc7XG5cbmltcG9ydCBnZXRMb2NhdGlvbiBmcm9tICcuLi8uLi9hY3Rpb25zL2NsaWVudC9sb2NhdGlvbnMvZ2V0TG9jYXRpb24nO1xuaW1wb3J0IGdldEhhcnZlc3RzQnlMb2NhdGlvbklkIGZyb20gJy4uLy4uL2FjdGlvbnMvY2xpZW50L2hhcnZlc3RzL2dldEJ5TG9jYXRpb25JZCc7XG5cbmltcG9ydCBNYXAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NYXAnO1xuaW1wb3J0IEhhcnZlc3RMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGFydmVzdExpc3QnO1xuaW1wb3J0IEhlYWRlciwgeyBBY3RpdmVQYWdlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInO1xuXG5jb25zdCBMb2NhdGlvbkRldGFpbHMgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IGxvY2F0aW9uLCBpc0xvYWRpbmcsIGVycm9yIH0gPSBnZXRMb2NhdGlvbih7IGlkOiByb3V0ZXIucXVlcnkuaWQgfSk7XG5cbiAgLy8gVG8tRG8gbW92ZSB0byBhbm90aGVyIHN1YiBjb21wb25lbnQgbWF5YmUgaGFydmVzdExpc3RcbiAgY29uc3Qge1xuICAgIGhhcnZlc3RzLFxuICAgIGlzTG9hZGluZzogaXNMb2FkaW5nSGFydmVzdHMsXG4gICAgZXJyb3I6IGVycm9ySGFydmVzdHMsXG4gIH0gPSBnZXRIYXJ2ZXN0c0J5TG9jYXRpb25JZCh7XG4gICAgbG9jYXRpb25JZDogcm91dGVyLnF1ZXJ5LmlkLFxuICB9KTtcblxuICAvLyBpZiAoZXJyb3IpIHtcbiAgLy8gICAvLyBUby1EbyBJbXBsZW1lbnQgZXJyb3IgYmVoYXZpb3VyXG4gIC8vICAgcmV0dXJuIDxkaXY+TG9hZGluZyBmYWlsZWQ6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcbiAgLy8gfVxuICAvL1xuICBpZiAoZXJyb3JIYXJ2ZXN0cykge1xuICAgIC8vIFRvLURvIEltcGxlbWVudCBlcnJvciBiZWhhdmlvdXJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIGZhaWxlZDoge2Vycm9ySGFydmVzdHMubWVzc2FnZX08L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIGFjdGl2ZVBhZ2U9e0FjdGl2ZVBhZ2UubG9jYXRpb25zfSAvPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogJzUwMHB4JyxcbiAgICAgICAgICBwYWRkaW5nOiAnMCAxMDBweCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHsvKlRvLURvIGltcGxlbWVudCBzcGlubmVyIGhlcmUgZm9yIGlzTG9hZGluZyBvZiBsb2NhdGlvbiovfVxuICAgICAgICB7bG9jYXRpb24gJiYgPE1hcCBsb2NhdGlvbj17bG9jYXRpb259IC8+fVxuICAgICAgPC9kaXY+XG4gICAgICA8U2VtYW50aWNIZWFkZXIgYXM9XCJoMlwiPlxuICAgICAgICA8SWNvbiBuYW1lPVwiY2FsZW5kYXIgYWx0ZXJuYXRlIG91dGxpbmVcIiAvPlxuICAgICAgICA8U2VtYW50aWNIZWFkZXIuQ29udGVudD5IYXJ2ZXN0czwvU2VtYW50aWNIZWFkZXIuQ29udGVudD5cbiAgICAgIDwvU2VtYW50aWNIZWFkZXI+XG4gICAgICB7LypUby1EbyBpbXBsZW1lbnQgc3Bpbm5lciBoZXJlIGZvciBpc0xvYWRpbmcgb2YgaGFydmVzdCovfVxuICAgICAge2hhcnZlc3RzICYmIDxIYXJ2ZXN0TGlzdCBoYXJ2ZXN0cz17aGFydmVzdHN9IC8+fVxuXG4gICAgICB7bG9jYXRpb24gJiYgKFxuICAgICAgICA8TGluayBocmVmPXtgL2hhcnZlc3RzL25ldz9sb2NhdGlvbklkPSR7bG9jYXRpb24uaWR9YH0+XG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PkFkZCBIYXJ2ZXN0PC9CdXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ2xpZW50QXV0aFJlcXVpcmVkKExvY2F0aW9uRGV0YWlscyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/locations/[id].tsx\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-leaflet":
/*!********************************!*\
  !*** external "react-leaflet" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-leaflet");;

/***/ }),

/***/ "react-leaflet-draw":
/*!*************************************!*\
  !*** external "react-leaflet-draw" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-leaflet-draw");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ }),

/***/ "?87c8":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","src_actions_client_ClientFetcher_ts-src_authentication_withAuthRequired_ts-src_components_Hea-21c8c3"], function() { return __webpack_exec__("./src/pages/locations/[id].tsx"); });
module.exports = __webpack_exports__;

})();