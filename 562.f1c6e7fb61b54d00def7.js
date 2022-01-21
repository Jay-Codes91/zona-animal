(self["webpackChunkproyecto"] = self["webpackChunkproyecto"] || []).push([[562],{

/***/ 7197:
/*!***********************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/crustaceos/crustaceos-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrustaceosRoutingModule": () => (/* binding */ CrustaceosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _crustaceos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crustaceos.component */ 1285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{
  path: '',
  component: _crustaceos_component__WEBPACK_IMPORTED_MODULE_0__.CrustaceosComponent
}];
let CrustaceosRoutingModule = /*#__PURE__*/(() => {
  class CrustaceosRoutingModule {}

  CrustaceosRoutingModule.ɵfac = function CrustaceosRoutingModule_Factory(t) {
    return new (t || CrustaceosRoutingModule)();
  };

  CrustaceosRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CrustaceosRoutingModule
  });
  CrustaceosRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return CrustaceosRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CrustaceosRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3562:
/*!***************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/crustaceos/crustaceos.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrustaceosModule": () => (/* binding */ CrustaceosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _crustaceos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crustaceos-routing.module */ 7197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



let CrustaceosModule = /*#__PURE__*/(() => {
  class CrustaceosModule {}

  CrustaceosModule.ɵfac = function CrustaceosModule_Factory(t) {
    return new (t || CrustaceosModule)();
  };

  CrustaceosModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CrustaceosModule
  });
  CrustaceosModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _crustaceos_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrustaceosRoutingModule]]
  });
  return CrustaceosModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CrustaceosModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _crustaceos_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrustaceosRoutingModule]
  });
})();

/***/ })

}]);