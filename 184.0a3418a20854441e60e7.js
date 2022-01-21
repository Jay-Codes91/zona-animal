(self["webpackChunkproyecto"] = self["webpackChunkproyecto"] || []).push([[184],{

/***/ 3460:
/*!***************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/animal/animal-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalRoutingModule": () => (/* binding */ AnimalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _animal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animal.component */ 9729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{
  path: '',
  component: _animal_component__WEBPACK_IMPORTED_MODULE_0__.AnimalComponent
}];
let AnimalRoutingModule = /*#__PURE__*/(() => {
  class AnimalRoutingModule {}

  AnimalRoutingModule.ɵfac = function AnimalRoutingModule_Factory(t) {
    return new (t || AnimalRoutingModule)();
  };

  AnimalRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AnimalRoutingModule
  });
  AnimalRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return AnimalRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnimalRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6184:
/*!*******************************************************************!*\
  !*** ./src/app/Components/tipos-animales/animal/animal.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalModule": () => (/* binding */ AnimalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _animal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animal-routing.module */ 3460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



let AnimalModule = /*#__PURE__*/(() => {
  class AnimalModule {}

  AnimalModule.ɵfac = function AnimalModule_Factory(t) {
    return new (t || AnimalModule)();
  };

  AnimalModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AnimalModule
  });
  AnimalModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _animal_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnimalRoutingModule]]
  });
  return AnimalModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnimalModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _animal_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnimalRoutingModule]
  });
})();

/***/ })

}]);