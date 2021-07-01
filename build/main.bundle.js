(self["webpackChunktypescript_blueprint"] = self["webpackChunktypescript_blueprint"] || []).push([["main"],{

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/code/index.ts":
/*!***************************!*\
  !*** ./src/code/index.ts ***!
  \***************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', ready);
function ready() {
    var prelaodEl = document.querySelector('.full-preloader');
    var logoHeader = document.getElementById('header-logo');
    logoHeader.style.opacity = '0';
    setTimeout(function () {
        prelaodEl.classList.add('fade-out');
        logoHeader.style.opacity = '1';
        logoHeader.classList.add('logo-start-anim');
    }, 1000);
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
// code
__webpack_require__(/*! ./code/index */ "./src/code/index.ts");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2JsdWVwcmludC8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz8yMjQ2Iiwid2VicGFjazovL3R5cGVzY3JpcHRfYmx1ZXByaW50Ly4vc3JjL2NvZGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9ibHVlcHJpbnQvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUVyRCxTQUFTLEtBQUs7SUFDWixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDNUQsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxRCxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDL0IsVUFBVSxDQUFDO1FBQ1QsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNYRCwwRUFBNkI7QUFDN0IsT0FBTztBQUNQLCtEQUFzQiIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCByZWFkeSk7XHJcblxyXG5mdW5jdGlvbiByZWFkeSgpIHtcclxuICBjb25zdCBwcmVsYW9kRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnVsbC1wcmVsb2FkZXInKTtcclxuICBjb25zdCBsb2dvSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1sb2dvJyk7XHJcbiAgbG9nb0hlYWRlci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgcHJlbGFvZEVsLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XHJcbiAgICBsb2dvSGVhZGVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICBsb2dvSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2xvZ28tc3RhcnQtYW5pbScpO1xyXG4gIH0sIDEwMDApO1xyXG59XHJcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XHJcbi8vIGNvZGVcclxuaW1wb3J0ICcuL2NvZGUvaW5kZXgnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9