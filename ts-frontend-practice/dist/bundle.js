/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Router.ts":
/*!***********************!*\
  !*** ./src/Router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Router = void 0;
const Home_1 = __webpack_require__(/*! ./components/Home */ "./src/components/Home.ts");
const Login_1 = __webpack_require__(/*! ./components/Login */ "./src/components/Login.ts");
class Router {
    constructor() {
        this.mainElement = document.getElementById('main-container');
    }
    handleRequest() {
        var _a, _b;
        const location = this.getRoute();
        console.log(`Handling request for: ${location}`);
        switch (location) {
            case '/login':
                (_a = this.mainElement) === null || _a === void 0 ? void 0 : _a.append(new Login_1.Login().render());
                break;
            default:
                (_b = this.mainElement) === null || _b === void 0 ? void 0 : _b.append(new Home_1.Home().render());
                break;
        }
    }
    getRoute() {
        return window.location.pathname;
    }
}
exports.Router = Router;


/***/ }),

/***/ "./src/components/Home.ts":
/*!********************************!*\
  !*** ./src/components/Home.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Home = void 0;
class Home {
    constructor() {
        this.container = document.createElement('div');
    }
    render() {
        const pageLabel = document.createElement('label');
        pageLabel.innerText = 'Welcome to the Home page!!!';
        this.container.append(pageLabel);
        return this.container;
    }
}
exports.Home = Home;


/***/ }),

/***/ "./src/components/Login.ts":
/*!*********************************!*\
  !*** ./src/components/Login.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Login = void 0;
class Login {
    constructor() {
        this.container = document.createElement('div');
    }
    render() {
        const pageLabel = document.createElement('label');
        pageLabel.innerText = 'Welcome to the Login page!!!';
        this.container.append(pageLabel);
        return this.container;
    }
}
exports.Login = Login;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/Launcher.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Router_1 = __webpack_require__(/*! ./Router */ "./src/Router.ts");
class Launcher {
    constructor() {
        this.router = new Router_1.Router();
    }
    launchApp() {
        console.log('App started');
        this.router.handleRequest();
    }
}
new Launcher().launchApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBeUM7QUFDekMsMkZBQTJDO0FBRTNDLE1BQWEsTUFBTTtJQUFuQjtRQUVZLGdCQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBbUJwRSxDQUFDO0lBakJVLGFBQWE7O1FBQ2hCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELFFBQVEsUUFBUSxFQUFFO1lBQ2QsS0FBSyxRQUFRO2dCQUNULFVBQUksQ0FBQyxXQUFXLDBDQUFFLE1BQU0sQ0FBQyxJQUFJLGFBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQy9DLE1BQU07WUFFVjtnQkFDSSxVQUFJLENBQUMsV0FBVywwQ0FBRSxNQUFNLENBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRU8sUUFBUTtRQUNaLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztDQUNKO0FBckJELHdCQXFCQzs7Ozs7Ozs7Ozs7Ozs7QUN4QkQsTUFBYSxJQUFJO0lBQWpCO1FBRVksY0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFTdEQsQ0FBQztJQVBHLE1BQU07UUFDRixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELFNBQVMsQ0FBQyxTQUFTLEdBQUcsNkJBQTZCLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Q0FDSjtBQVhELG9CQVdDOzs7Ozs7Ozs7Ozs7OztBQ1hELE1BQWEsS0FBSztJQUFsQjtRQUVZLGNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBU3RELENBQUM7SUFQRyxNQUFNO1FBQ0YsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxTQUFTLENBQUMsU0FBUyxHQUFHLDhCQUE4QixDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWpDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0NBQ0o7QUFYRCxzQkFXQzs7Ozs7OztVQ1hEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSx3RUFBa0M7QUFFbEMsTUFBTSxRQUFRO0lBQWQ7UUFDWSxXQUFNLEdBQVcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQU0xQyxDQUFDO0lBSlUsU0FBUztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0NBQ0o7QUFFRCxJQUFJLFFBQVEsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZnJvbnRlbmQtcHJhY3RpY2UvLi9zcmMvUm91dGVyLnRzIiwid2VicGFjazovL3RzLWZyb250ZW5kLXByYWN0aWNlLy4vc3JjL2NvbXBvbmVudHMvSG9tZS50cyIsIndlYnBhY2s6Ly90cy1mcm9udGVuZC1wcmFjdGljZS8uL3NyYy9jb21wb25lbnRzL0xvZ2luLnRzIiwid2VicGFjazovL3RzLWZyb250ZW5kLXByYWN0aWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWZyb250ZW5kLXByYWN0aWNlLy4vc3JjL0xhdW5jaGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWUgfSBmcm9tIFwiLi9jb21wb25lbnRzL0hvbWVcIjtcclxuaW1wb3J0IHsgTG9naW4gfSBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcclxuXHJcbiAgICBwcml2YXRlIG1haW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyk7XHJcblxyXG4gICAgcHVibGljIGhhbmRsZVJlcXVlc3QoKSB7XHJcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmdldFJvdXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEhhbmRsaW5nIHJlcXVlc3QgZm9yOiAke2xvY2F0aW9ufWApO1xyXG4gICAgICAgIHN3aXRjaCAobG9jYXRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAnL2xvZ2luJzpcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkVsZW1lbnQ/LmFwcGVuZChuZXcgTG9naW4oKS5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkVsZW1lbnQ/LmFwcGVuZChuZXcgSG9tZSgpLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJvdXRlKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSG9tZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBwYWdlTGFiZWwuaW5uZXJUZXh0ID0gJ1dlbGNvbWUgdG8gdGhlIEhvbWUgcGFnZSEhISc7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHBhZ2VMYWJlbCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIExvZ2luIHtcclxuXHJcbiAgICBwcml2YXRlIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBwYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIHBhZ2VMYWJlbC5pbm5lclRleHQgPSAnV2VsY29tZSB0byB0aGUgTG9naW4gcGFnZSEhISc7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHBhZ2VMYWJlbCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuL1JvdXRlclwiO1xyXG5cclxuY2xhc3MgTGF1bmNoZXIge1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuXHJcbiAgICBwdWJsaWMgbGF1bmNoQXBwKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHAgc3RhcnRlZCcpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLmhhbmRsZVJlcXVlc3QoKTtcclxuICAgIH1cclxufVxyXG5cclxubmV3IExhdW5jaGVyKCkubGF1bmNoQXBwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9