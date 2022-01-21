(self["webpackChunkproyecto"] = self["webpackChunkproyecto"] || []).push([[753],{

/***/ 4979:
/*!*******************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/anfibios/anfibios-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnfibiosRoutingModule": () => (/* binding */ AnfibiosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _anfibios_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anfibios.component */ 3948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{
  path: '',
  component: _anfibios_component__WEBPACK_IMPORTED_MODULE_0__.AnfibiosComponent
}];
let AnfibiosRoutingModule = /*#__PURE__*/(() => {
  class AnfibiosRoutingModule {}

  AnfibiosRoutingModule.ɵfac = function AnfibiosRoutingModule_Factory(t) {
    return new (t || AnfibiosRoutingModule)();
  };

  AnfibiosRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AnfibiosRoutingModule
  });
  AnfibiosRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return AnfibiosRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnfibiosRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4753:
/*!***********************************************************************!*\
  !*** ./src/app/Components/tipos-animales/anfibios/anfibios.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnfibiosModule": () => (/* binding */ AnfibiosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _anfibios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anfibios-routing.module */ 4979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



let AnfibiosModule = /*#__PURE__*/(() => {
  class AnfibiosModule {}

  AnfibiosModule.ɵfac = function AnfibiosModule_Factory(t) {
    return new (t || AnfibiosModule)();
  };

  AnfibiosModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AnfibiosModule
  });
  AnfibiosModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _anfibios_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnfibiosRoutingModule]]
  });
  return AnfibiosModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnfibiosModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _anfibios_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnfibiosRoutingModule]
  });
})();

/***/ })

}]);