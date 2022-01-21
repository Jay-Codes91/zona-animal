(self["webpackChunkproyecto"] = self["webpackChunkproyecto"] || []).push([[332],{

/***/ 3872:
/*!***************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/peces/pez/pez-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PezRoutingModule": () => (/* binding */ PezRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pez_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pez.component */ 2309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{
  path: '',
  component: _pez_component__WEBPACK_IMPORTED_MODULE_0__.PezComponent
}];
let PezRoutingModule = /*#__PURE__*/(() => {
  class PezRoutingModule {}

  PezRoutingModule.ɵfac = function PezRoutingModule_Factory(t) {
    return new (t || PezRoutingModule)();
  };

  PezRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PezRoutingModule
  });
  PezRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return PezRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PezRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1332:
/*!*******************************************************************!*\
  !*** ./src/app/Components/tipos-animales/peces/pez/pez.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PezModule": () => (/* binding */ PezModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _pez_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pez-routing.module */ 3872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



let PezModule = /*#__PURE__*/(() => {
  class PezModule {}

  PezModule.ɵfac = function PezModule_Factory(t) {
    return new (t || PezModule)();
  };

  PezModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PezModule
  });
  PezModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pez_routing_module__WEBPACK_IMPORTED_MODULE_0__.PezRoutingModule]]
  });
  return PezModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PezModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pez_routing_module__WEBPACK_IMPORTED_MODULE_0__.PezRoutingModule]
  });
})();

/***/ })

}]);