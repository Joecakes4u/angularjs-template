/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.bootstrap.js":
/*!******************************!*\
  !*** ./src/app.bootstrap.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ \"./src/app.module.js\");\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_module__WEBPACK_IMPORTED_MODULE_0__);\n\n\n_app_module__WEBPACK_IMPORTED_MODULE_0__[\"app\"].run(function() {\n\n});\n\n//# sourceURL=webpack:///./src/app.bootstrap.js?");

/***/ }),

/***/ "./src/app.config.js":
/*!***************************!*\
  !*** ./src/app.config.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ \"./src/app.module.js\");\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_module__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// define Router\n_app_module__WEBPACK_IMPORTED_MODULE_0__[\"app\"].config(function($routeProvider, $locationProvider) {\n    $routeProvider\n    .when(\"/login\", {\n        templateUrl: \"src/features/login/login.template.html\"\n    })\n    .when(\"/profile\", {\n        templateUrl: \"src/features/profile/profile.template.html\"\n    })\n    .when(\"/binding-example\", {\n        templateUrl: \"src/features/binding-example/binding-example.template.html\"\n    })\n    .when(\"/\", {\n        templateUrl: \"src/features/home/home.template.html\"\n    })\n    .otherwise({\n        templateUrl: \"src/features/home/home.template.html\"\n    });\n\n    $locationProvider\n    .hashPrefix('!');\n});\n\n//# sourceURL=webpack:///./src/app.config.js?");

/***/ }),

/***/ "./src/app.controller.js":
/*!*******************************!*\
  !*** ./src/app.controller.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ \"./src/app.module.js\");\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_module__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// define Controller \"appController\"\n// A Controller CONTROLS Angular\n_app_module__WEBPACK_IMPORTED_MODULE_0__[\"app\"].controller('appController', function($scope) {\n});\n\n//# sourceURL=webpack:///./src/app.controller.js?");

/***/ }),

/***/ "./src/app.module.js":
/*!***************************!*\
  !*** ./src/app.module.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// define Module \"app\"\n// A Module DEFINES Angularjs applications\n\nvar app = angular.module('app', [\"ngRoute\"]);\n\nexports.app = app;\n\n\n//# sourceURL=webpack:///./src/app.module.js?");

/***/ }),

/***/ "./src/features/binding-example/binding-example.controller.js":
/*!********************************************************************!*\
  !*** ./src/features/binding-example/binding-example.controller.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.module */ \"./src/app.module.js\");\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_module__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// define Controller \"bindingController\"\n_app_module__WEBPACK_IMPORTED_MODULE_0__[\"app\"].controller('bindingController', function($scope) {\n    $scope.firstName = \"Joe\";\n    $scope.lastName = \"Wonohadidjojo\";\n});\n\n//# sourceURL=webpack:///./src/features/binding-example/binding-example.controller.js?");

/***/ }),

/***/ "./src/features/home/home.controller.js":
/*!**********************************************!*\
  !*** ./src/features/home/home.controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/features/home/home.controller.js?");

/***/ }),

/***/ "./src/features/login/login.controller.js":
/*!************************************************!*\
  !*** ./src/features/login/login.controller.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.module */ \"./src/app.module.js\");\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_module__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// define Controller \"loginController\"\n_app_module__WEBPACK_IMPORTED_MODULE_0__[\"app\"].controller('loginController', function($scope, $location, RestService) {\n    \n    // Login, calls auth service\n    $scope.login = function() {\n        $scope.dataLoading = true;\n        const response = RestService.login($scope.username, $scope.password);\n        if (response.success) {\n            $location.path('/profile').replace();\n        } else {\n            $scope.dataLoading = false;\n            console.log('asdfasd');\n        }\n    };\n});\n\n//# sourceURL=webpack:///./src/features/login/login.controller.js?");

/***/ }),

/***/ "./src/features/profile/profile.controller.js":
/*!****************************************************!*\
  !*** ./src/features/profile/profile.controller.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/features/profile/profile.controller.js?");

/***/ }),

/***/ "./src/services/rest.service.js":
/*!**************************************!*\
  !*** ./src/services/rest.service.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.module */ \"./src/app.module.js\");\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_module__WEBPACK_IMPORTED_MODULE_0__);\n\n\n_app_module__WEBPACK_IMPORTED_MODULE_0__[\"app\"].factory('RestService', function($http) {\n    let service = {};\n    const urlBase = '/api/v1';\n    let response = '';\n    service.login = function(username, password) {\n        if (username !== null && password=== 'password') {\n            response = { success: true };\n        } else {\n            response = { success: false, message: 'Username or password is incorrect' };\n        }\n        return response;\n    };\n  \n    service.getUser = function(id){\n        return $http.get(urlBase + '/user/' + id);\n    };\n  \n    return service;\n  \n  });\n\n//# sourceURL=webpack:///./src/services/rest.service.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/app.bootstrap.js ./src/app.config.js ./src/app.controller.js ./src/features/binding-example/binding-example.controller.js ./src/features/home/home.controller.js ./src/features/login/login.controller.js ./src/features/profile/profile.controller.js ./src/services/rest.service.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/app.bootstrap.js */\"./src/app.bootstrap.js\");\n__webpack_require__(/*! ./src/app.config.js */\"./src/app.config.js\");\n__webpack_require__(/*! ./src/app.controller.js */\"./src/app.controller.js\");\n__webpack_require__(/*! ./src/features/binding-example/binding-example.controller.js */\"./src/features/binding-example/binding-example.controller.js\");\n__webpack_require__(/*! ./src/features/home/home.controller.js */\"./src/features/home/home.controller.js\");\n__webpack_require__(/*! ./src/features/login/login.controller.js */\"./src/features/login/login.controller.js\");\n__webpack_require__(/*! ./src/features/profile/profile.controller.js */\"./src/features/profile/profile.controller.js\");\nmodule.exports = __webpack_require__(/*! ./src/services/rest.service.js */\"./src/services/rest.service.js\");\n\n\n//# sourceURL=webpack:///multi_./src/app.bootstrap.js_./src/app.config.js_./src/app.controller.js_./src/features/binding-example/binding-example.controller.js_./src/features/home/home.controller.js_./src/features/login/login.controller.js_./src/features/profile/profile.controller.js_./src/services/rest.service.js?");

/***/ })

/******/ });