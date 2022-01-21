(self["webpackChunkproyecto"] = self["webpackChunkproyecto"] || []).push([[597],{

/***/ 8761:
/*!*********************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/mamiferos/mamiferos-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MamiferosRoutingModule": () => (/* binding */ MamiferosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _mamiferos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mamiferos.component */ 5288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{
  path: '',
  component: _mamiferos_component__WEBPACK_IMPORTED_MODULE_0__.MamiferosComponent
}];
let MamiferosRoutingModule = /*#__PURE__*/(() => {
  class MamiferosRoutingModule {}

  MamiferosRoutingModule.ɵfac = function MamiferosRoutingModule_Factory(t) {
    return new (t || MamiferosRoutingModule)();
  };

  MamiferosRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MamiferosRoutingModule
  });
  MamiferosRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return MamiferosRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MamiferosRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9597:
/*!*************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/mamiferos/mamiferos.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MamiferosModule": () => (/* binding */ MamiferosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _mamiferos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mamiferos-routing.module */ 8761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



let MamiferosModule = /*#__PURE__*/(() => {
  class MamiferosModule {}

  MamiferosModule.ɵfac = function MamiferosModule_Factory(t) {
    return new (t || MamiferosModule)();
  };

  MamiferosModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MamiferosModule
  });
  MamiferosModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _mamiferos_routing_module__WEBPACK_IMPORTED_MODULE_0__.MamiferosRoutingModule]]
  });
  return MamiferosModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MamiferosModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _mamiferos_routing_module__WEBPACK_IMPORTED_MODULE_0__.MamiferosRoutingModule]
  });
})();

/***/ })

}]);