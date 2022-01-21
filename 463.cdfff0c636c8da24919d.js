(self["webpackChunkproyecto"] = self["webpackChunkproyecto"] || []).push([[463],{

/***/ 7984:
/*!*************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/peces/peces-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PecesRoutingModule": () => (/* binding */ PecesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _peces_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peces.component */ 7535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{
  path: '',
  component: _peces_component__WEBPACK_IMPORTED_MODULE_0__.PecesComponent
}];
let PecesRoutingModule = /*#__PURE__*/(() => {
  class PecesRoutingModule {}

  PecesRoutingModule.ɵfac = function PecesRoutingModule_Factory(t) {
    return new (t || PecesRoutingModule)();
  };

  PecesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PecesRoutingModule
  });
  PecesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return PecesRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PecesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9463:
/*!*****************************************************************!*\
  !*** ./src/app/Components/tipos-animales/peces/peces.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PecesModule": () => (/* binding */ PecesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _peces_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peces-routing.module */ 7984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



let PecesModule = /*#__PURE__*/(() => {
  class PecesModule {}

  PecesModule.ɵfac = function PecesModule_Factory(t) {
    return new (t || PecesModule)();
  };

  PecesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PecesModule
  });
  PecesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _peces_routing_module__WEBPACK_IMPORTED_MODULE_0__.PecesRoutingModule]]
  });
  return PecesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PecesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _peces_routing_module__WEBPACK_IMPORTED_MODULE_0__.PecesRoutingModule]
  });
})();

/***/ })

}]);