(self["webpackChunkproyecto"] = self["webpackChunkproyecto"] || []).push([[561],{

/***/ 2667:
/*!**************************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/anfibios/anfibio/anfibio-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnfibioRoutingModule": () => (/* binding */ AnfibioRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _anfibio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anfibio.component */ 6390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{
  path: '',
  component: _anfibio_component__WEBPACK_IMPORTED_MODULE_0__.AnfibioComponent
}];
let AnfibioRoutingModule = /*#__PURE__*/(() => {
  class AnfibioRoutingModule {}

  AnfibioRoutingModule.ɵfac = function AnfibioRoutingModule_Factory(t) {
    return new (t || AnfibioRoutingModule)();
  };

  AnfibioRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AnfibioRoutingModule
  });
  AnfibioRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return AnfibioRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnfibioRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4561:
/*!******************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/anfibios/anfibio/anfibio.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnfibioModule": () => (/* binding */ AnfibioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _anfibio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anfibio-routing.module */ 2667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



let AnfibioModule = /*#__PURE__*/(() => {
  class AnfibioModule {}

  AnfibioModule.ɵfac = function AnfibioModule_Factory(t) {
    return new (t || AnfibioModule)();
  };

  AnfibioModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AnfibioModule
  });
  AnfibioModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _anfibio_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnfibioRoutingModule]]
  });
  return AnfibioModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnfibioModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _anfibio_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnfibioRoutingModule]
  });
})();

/***/ })

}]);