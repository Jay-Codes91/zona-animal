(self["webpackChunkproyecto"] = self["webpackChunkproyecto"] || []).push([[159],{

/***/ 6326:
/*!**************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/aves/ave/ave-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AveRoutingModule": () => (/* binding */ AveRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ave_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ave.component */ 9647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{
  path: '',
  component: _ave_component__WEBPACK_IMPORTED_MODULE_0__.AveComponent
}];
let AveRoutingModule = /*#__PURE__*/(() => {
  class AveRoutingModule {}

  AveRoutingModule.ɵfac = function AveRoutingModule_Factory(t) {
    return new (t || AveRoutingModule)();
  };

  AveRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AveRoutingModule
  });
  AveRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return AveRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AveRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 159:
/*!******************************************************************!*\
  !*** ./src/app/Components/tipos-animales/aves/ave/ave.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AveModule": () => (/* binding */ AveModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ave_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ave-routing.module */ 6326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



let AveModule = /*#__PURE__*/(() => {
  class AveModule {}

  AveModule.ɵfac = function AveModule_Factory(t) {
    return new (t || AveModule)();
  };

  AveModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AveModule
  });
  AveModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ave_routing_module__WEBPACK_IMPORTED_MODULE_0__.AveRoutingModule]]
  });
  return AveModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AveModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ave_routing_module__WEBPACK_IMPORTED_MODULE_0__.AveRoutingModule]
  });
})();

/***/ })

}]);