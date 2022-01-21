(self["webpackChunkproyecto"] = self["webpackChunkproyecto"] || []).push([[407],{

/***/ 9713:
/*!********************************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/crustaceos/crustaceo/crustaceo-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrustaceoRoutingModule": () => (/* binding */ CrustaceoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _crustaceo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crustaceo.component */ 5898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{
  path: '',
  component: _crustaceo_component__WEBPACK_IMPORTED_MODULE_0__.CrustaceoComponent
}];
let CrustaceoRoutingModule = /*#__PURE__*/(() => {
  class CrustaceoRoutingModule {}

  CrustaceoRoutingModule.ɵfac = function CrustaceoRoutingModule_Factory(t) {
    return new (t || CrustaceoRoutingModule)();
  };

  CrustaceoRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CrustaceoRoutingModule
  });
  CrustaceoRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return CrustaceoRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CrustaceoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4407:
/*!************************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/crustaceos/crustaceo/crustaceo.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrustaceoModule": () => (/* binding */ CrustaceoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _crustaceo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crustaceo-routing.module */ 9713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



let CrustaceoModule = /*#__PURE__*/(() => {
  class CrustaceoModule {}

  CrustaceoModule.ɵfac = function CrustaceoModule_Factory(t) {
    return new (t || CrustaceoModule)();
  };

  CrustaceoModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CrustaceoModule
  });
  CrustaceoModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _crustaceo_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrustaceoRoutingModule]]
  });
  return CrustaceoModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CrustaceoModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _crustaceo_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrustaceoRoutingModule]
  });
})();

/***/ })

}]);