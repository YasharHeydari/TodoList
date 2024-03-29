(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-edit/add-edit.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-edit/add-edit.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"Submit()\">\n        <div *ngIf=\"submitted && TaskName.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"TaskName.errors.required\">\n                Task Name is Required\n            </div>\n        </div>\n        <div *ngIf=\"submitted && TaskStatus.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"TaskStatus.errors.required\">\n                Please Specify Task Status\n            </div>\n        </div>\n        <div *ngIf=\"submitted && TaskGroup.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"TaskGroup.errors.required\">\n                Please Specify Task Group\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"TaskName\">Task Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"TaskName\" placeholder=\"Task Description\" required formControlName=\"Name\"> \n        </div>\n        <div class=\"form-group\">\n            <label for=\"TaskGroupType\">Task Group</label>\n            <select id=\"TaskGroupType\" class=\"form-control\" name=\"TaskGroup\" formControlName=\"TaskGroup\" required>\n\n                <option *ngFor=\"let x of taskGroupKeys; index as i \" [value]=\"i\" [label]=\"taskGroups[x]\">\n                </option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"Task Status\">Initial Status</label>\n            <select id=\"Task Status\" class=\"form-control\" name=\"TaskStatus\" formControlName=\"TaskStatus\">\n                <option *ngFor=\"let x of taskStatusKeys; index as i \" [value]=\"i\" [label]=\"taskStates[x]\">\n                </option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"DueDate\">Due Date</label>\n            <input id=\"DueDate\" class=\"form-control\" type=\"date\" name=\"DueDate\"  formControlName=\"DueDate\">\n        </div>\n        <div class=\"from-group col-auto\">\n            <button type=\"submit\" class=\"btn btn-primary mb-2\">Submit </button>\n        </div>\n    </form>\n    <p>\n        <a routerLink=\"/Tasks\"> Back to Tasks List</a>\n    </p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" id=\"NavigationBar\">\n  <app-nav-bar></app-nav-bar>\n\n  <div class=\"row container-fluid\">\n    <div class=\"col-2 bg-dark\">\n      <ul class=\"nav flex-column\">\n        <li class=\"navitem\">\n          <a routerLink=\"/AllTasks\">All Tasks -></a>\n        </li>\n        <li class=\"navitem\">\n          <a routerLink=\"/MonthTasks\">Next Month Tasks -></a>\n        </li>\n        <li class=\"navitem\">\n          <a routerLink=\"/UrgentTasks\">Urgent Tasks -></a>\n        </li>\n      </ul>\n    </div>\n    <div calss=\"col-10\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\n    <a class=\"navbar-brand\">Todo List</a>\n    <div class=\"navbar-collapse collapse\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <a routerLink=\"AddEdit\" class=\"nav-link\"> Add Task </a>\n            </li>\n        </ul>\n    </div>\n    <form class=\"form-inline\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngIf=\"!todoTasks\"> Loading...</p>\n<div class=\"table-responsive\">\n    <table class=\"table table-striped\" *ngIf=\"todoTasks\">\n        <thead>\n            <th>Task Name</th>\n            <th>Task Group</th>\n            <th>Task Status</th>\n            <th>Task Due Date</th>\n            <!-- <th>Task Creation Date</th> -->\n            <th>Operations</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of todoTasks\" [ngSwitch]=\"item.taskGroup\">\n                <td>{{item.taskName}}</td>\n                <td [ngSwitch]=\"item.taskGroup\">\n                    <button class=\"btn btn-outline-danger\" disabled *ngSwitchCase=\"0\">Urgent and\n                        Important</button>\n                    <button class=\"btn btn-outline-warning\" disabled *ngSwitchCase=\"1\">Urgent and Not\n                        Important</button>\n                    <button class=\"btn btn-outline-primary\" disabled *ngSwitchCase=\"2\">Not Urgent But\n                        Important</button>\n                    <button class=\"btn btn-outline-dark\" disabled *ngSwitchCase=\"3\">Forget About\n                        it!!</button>\n                </td>\n                <td>\n\n                    <div ngbDropdown class=\"d-inline-block\">\n                        <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle\n                            dropdown</button>\n                        <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdownBasic1\">\n                            <button ngbDropdownItem>Action - 1</button>\n                            <button ngbDropdownItem>Another Action</button>\n                            <button ngbDropdownItem>Something else is here</button>\n                        </div>\n                    </div>\n\n                    <!-- <div class=\"dropdown\">\n                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\n                            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            {{stateKeys[item.taskStatus]}}\n                        </button>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                            <a class=\"dropdown-item\" href=\"#\">Action</a>\n                            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                        </div>\n                    </div> -->\n                </td>\n                <td>{{item.dueDate| date:'shortDate'}}</td>\n                <!-- <td>{{item.registerDate}}</td> -->\n                <td>\n                    <button class=\"btn btn-warning\" routerLink=\"/AddEdit/{{item.taskId}}\">Edit</button> |\n                    <button class=\"btn btn-danger\" (click)=\"OnBtnDelete(item.taskId)\">Delete</button> |\n                    <button class=\"btn btn-success\" (click)=\"OnBtnComplete(item.taskId)\">Done!</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/ITaskService.ts":
/*!*********************************!*\
  !*** ./src/app/ITaskService.ts ***!
  \*********************************/
/*! exports provided: ServiceMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMap", function() { return ServiceMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _task_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-service.service */ "./src/app/task-service.service.ts");
/* harmony import */ var _urgent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urgent.service */ "./src/app/urgent.service.ts");
/* harmony import */ var _last_month_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./last-month.service */ "./src/app/last-month.service.ts");




const ServiceMap = new Map().set('MonthTasks', _last_month_service__WEBPACK_IMPORTED_MODULE_3__["LastMonthService"])
    .set('UrgentTasks', _urgent_service__WEBPACK_IMPORTED_MODULE_2__["UrgentService"])
    .set('AllTasks', _task_service_service__WEBPACK_IMPORTED_MODULE_1__["TaskServiceService"]);


/***/ }),

/***/ "./src/app/LoggerInterceptor.ts":
/*!**************************************!*\
  !*** ./src/app/LoggerInterceptor.ts ***!
  \**************************************/
/*! exports provided: LoggingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingInterceptor", function() { return LoggingInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


 // fancy pipe-able operators
let LoggingInterceptor = class LoggingInterceptor {
    intercept(request, next) {
        console.log(request);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => console.log("Oh boy we got an answer"), error => console.log("Something might be burning back there")));
    }
};
LoggingInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoggingInterceptor);



/***/ }),

/***/ "./src/app/Model/TodoTask.ts":
/*!***********************************!*\
  !*** ./src/app/Model/TodoTask.ts ***!
  \***********************************/
/*! exports provided: TaskGroupType, TaskStatus, TodoTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskGroupType", function() { return TaskGroupType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatus", function() { return TaskStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoTask", function() { return TodoTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TaskGroupType;
(function (TaskGroupType) {
    TaskGroupType["ImmediateImportant"] = "Immediate And Important";
    TaskGroupType["ImmediateNotImportant"] = "Immediate But Not Important";
    TaskGroupType["NotImmediateImportant"] = "Not Immediate But Important";
    TaskGroupType["NotImmediateNotImportant"] = " Neither Immediate Nor Important";
})(TaskGroupType || (TaskGroupType = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["New"] = "New";
    TaskStatus["InProgress"] = "In Progress";
    TaskStatus["Completed"] = "Completed";
})(TaskStatus || (TaskStatus = {}));
class TodoTask {
}


/***/ }),

/***/ "./src/app/add-edit/add-edit.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-edit/add-edit.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1lZGl0L2FkZC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/add-edit/add-edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-edit/add-edit.component.ts ***!
  \************************************************/
/*! exports provided: AddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditComponent", function() { return AddEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Model_TodoTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/TodoTask */ "./src/app/Model/TodoTask.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _task_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-service.service */ "./src/app/task-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AddEditComponent = class AddEditComponent {
    constructor(formBuilder, taskService, router, route) {
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.router = router;
        this.route = route;
        this.taskGroups = _Model_TodoTask__WEBPACK_IMPORTED_MODULE_2__["TaskGroupType"];
        this.taskStates = _Model_TodoTask__WEBPACK_IMPORTED_MODULE_2__["TaskStatus"];
        this.taskGroupKeys = Object.keys(this.taskGroups);
        this.taskStatusKeys = Object.keys(this.taskStates);
        this.submitted = false;
        this.todoTask = new _Model_TodoTask__WEBPACK_IMPORTED_MODULE_2__["TodoTask"]();
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            TaskGroup: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            TaskStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            DueDate: ['']
        });
        this.route.params.subscribe((params) => {
            this.id = +params["id"];
            console.log(" id is " + this.id);
        });
        if (this.id != null) {
            this.taskService.GetTaskById(this.id).subscribe((res) => {
                this.todoTask = res;
                this.registerForm.patchValue({
                    Name: this.todoTask.taskName,
                    TaskGroup: this.todoTask.taskGroup,
                    TaskStatus: this.todoTask.taskStatus,
                    DueDate: this.todoTask.dueDate,
                });
            });
        }
    }
    get TaskName() { return this.registerForm.get('Name'); }
    ;
    get TaskGroup() { return this.registerForm.get('TaskGroup'); }
    get TaskStatus() { return this.registerForm.get('TaskStatus'); }
    Submit() {
        this.submitted = true;
        this.todoTask.taskName = this.registerForm.value.Name;
        this.todoTask.taskGroup = this.registerForm.value.TaskGroup;
        this.todoTask.taskStatus = this.registerForm.value.TaskStatus;
        this.todoTask.dueDate = this.registerForm.value.DueDate;
        console.log(JSON.stringify(this.todoTask));
        if (this.registerForm.invalid) {
            console.log('Form is Invalid');
            return;
        }
        this.todoTask.taskName = this.registerForm.value.Name;
        this.todoTask.taskGroup = this.registerForm.value.TaskGroup;
        this.todoTask.taskStatus = this.registerForm.value.TaskStatus;
        this.todoTask.dueDate = this.registerForm.value.DueDate;
        //going to call Service
        if (this.todoTask.taskId > 0) {
            this.taskService.EditTask(this.todoTask)
                .subscribe((data) => {
                console.log(data);
                this.router.navigate(['/Tasks']);
            });
        }
        else {
            this.taskService.AddTask(this.todoTask)
                .subscribe((data) => {
                console.log(data);
                this.router.navigate(['/Tasks']);
            });
        }
    }
};
AddEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _task_service_service__WEBPACK_IMPORTED_MODULE_4__["TaskServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
AddEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-edit/add-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-edit.component.css */ "./src/app/add-edit/add-edit.component.css")).default]
    })
], AddEditComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit/add-edit.component */ "./src/app/add-edit/add-edit.component.ts");
/* harmony import */ var _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasklist/tasklist.component */ "./src/app/tasklist/tasklist.component.ts");





const routes = [
    { path: '', component: _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_4__["TasklistComponent"] },
    { path: 'MonthTasks', component: _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_4__["TasklistComponent"] },
    { path: 'UrgentTasks', component: _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_4__["TasklistComponent"] },
    { path: 'AllTasks', component: _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_4__["TasklistComponent"] },
    { path: 'AddEdit', component: _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_3__["AddEditComponent"] },
    { path: 'AddEdit/:id', component: _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_3__["AddEditComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ClientApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit/add-edit.component */ "./src/app/add-edit/add-edit.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_LoggerInterceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/LoggerInterceptor */ "./src/app/LoggerInterceptor.ts");
/* harmony import */ var _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tasklist/tasklist.component */ "./src/app/tasklist/tasklist.component.ts");











const LOGGING_INTERCEPTOR_PROVIDER = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
    useClass: src_app_LoggerInterceptor__WEBPACK_IMPORTED_MODULE_9__["LoggingInterceptor"],
    multi: true
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["AddEditComponent"],
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
            _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_10__["TasklistComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/last-month.service.ts":
/*!***************************************!*\
  !*** ./src/app/last-month.service.ts ***!
  \***************************************/
/*! exports provided: LastMonthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastMonthService", function() { return LastMonthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let LastMonthService = class LastMonthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getTasks() {
        console.log("Calling Service GetLastMonthTasks ");
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBase + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '?Days=30').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.ErrorHandler));
    }
    ErrorHandler(error) {
        console.log("Error Occured!!!" + error);
        let errorMessage;
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code : ${error.status} , Error Message : ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
};
LastMonthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LastMonthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LastMonthService);



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavBarComponent = class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/task-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/task-service.service.ts ***!
  \*****************************************/
/*! exports provided: TaskServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskServiceService", function() { return TaskServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let TaskServiceService = class TaskServiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
    }
    AddTask(task) {
        console.log("Before Calling POST");
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBase + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, JSON.stringify(task), this.httpOptions).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.ErrorHandler));
    }
    EditTask(task) {
        console.log("Before Calling POST");
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBase + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, JSON.stringify(task), this.httpOptions).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.ErrorHandler));
    }
    getTasks() {
        console.log("Calling Service GetTasks");
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBase + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.ErrorHandler));
    }
    GetTaskById(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBase + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.ErrorHandler));
    }
    DeleteTask(taskId) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBase + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + taskId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.ErrorHandler));
    }
    ErrorHandler(error) {
        console.log("Error Occured!!!" + error);
        let errorMessage;
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code : ${error.status} , Error Message : ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
};
TaskServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TaskServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TaskServiceService);



/***/ }),

/***/ "./src/app/tasklist/tasklist.component.css":
/*!*************************************************!*\
  !*** ./src/app/tasklist/tasklist.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tsaXN0L3Rhc2tsaXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/tasklist/tasklist.component.ts":
/*!************************************************!*\
  !*** ./src/app/tasklist/tasklist.component.ts ***!
  \************************************************/
/*! exports provided: TasklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklistComponent", function() { return TasklistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task-service.service */ "./src/app/task-service.service.ts");
/* harmony import */ var _Model_TodoTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/TodoTask */ "./src/app/Model/TodoTask.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ITaskService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ITaskService */ "./src/app/ITaskService.ts");






let TasklistComponent = class TasklistComponent {
    constructor(injector, route) {
        this.injector = injector;
        this.route = route;
        this.taskGroups = _Model_TodoTask__WEBPACK_IMPORTED_MODULE_3__["TaskGroupType"];
        this.taskStates = _Model_TodoTask__WEBPACK_IMPORTED_MODULE_3__["TaskStatus"];
        this.stateKeys = Object.values(this.taskStates);
        this.groupKeys = Object.keys(this.taskGroups);
    }
    ngOnInit() {
        this.route.url.subscribe((url) => {
            console.log("Url is :", url.toString());
            this.param = url.toString();
        });
        if (this.param == undefined) {
            this.param = "AllTasks";
        }
        console.log("TaskComponent called with param", this.param);
        this.loadTasks(this.param);
    }
    loadTasks(param) {
        const injectable = _ITaskService__WEBPACK_IMPORTED_MODULE_5__["ServiceMap"].get(param);
        this.service = this.injector.get(injectable);
        this.service.getTasks().subscribe((res) => { this.todoTasks = res; });
    }
    OnBtnDelete(taskId) {
        console.log("Going to Delete task with Id" + taskId);
        let service = this.injector.get(_task_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskServiceService"]);
        service.DeleteTask(taskId).subscribe((res) => {
            this.loadTasks(this.param);
        });
    }
};
TasklistComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
TasklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tasklist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tasklist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasklist/tasklist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tasklist.component.css */ "./src/app/tasklist/tasklist.component.css")).default]
    })
], TasklistComponent);



/***/ }),

/***/ "./src/app/urgent.service.ts":
/*!***********************************!*\
  !*** ./src/app/urgent.service.ts ***!
  \***********************************/
/*! exports provided: UrgentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrgentService", function() { return UrgentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UrgentService = class UrgentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getTasks() {
        console.log("Calling Service GetUrgentTasks");
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlBase + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '?Severity=1').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.ErrorHandler));
    }
    ErrorHandler(error) {
        console.log("Error Occured!!!" + error);
        let errorMessage;
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code : ${error.status} , Error Message : ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
UrgentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UrgentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UrgentService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    urlBase: 'https://localhost:44344',
    apiUrl: '/api/tasks/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace\Git\Todos\Todos.Web\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map