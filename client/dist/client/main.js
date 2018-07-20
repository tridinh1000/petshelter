(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addpet/addpet.component.css":
/*!*********************************************!*\
  !*** ./src/app/addpet/addpet.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:10px;\r\n}"

/***/ }),

/***/ "./src/app/addpet/addpet.component.html":
/*!**********************************************!*\
  !*** ./src/app/addpet/addpet.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Know of a pet needing a home?\n</p>\n<p *ngIf=\"status != ''\">{{ status }}</p>\n<form (submit)=\"createPet()\">\n  <!-- <p>{{ newAuthor | json}}</p> -->\n  Pet name:<br><input type=\"text\" name=\"name\" [(ngModel)]=\"newPet.name\"/><br>\n  Pet type:<br><input type=\"text\" name=\"type\" [(ngModel)]=\"newPet.type\"/><br>\n  Description<br><input type=\"text\" name=\"description\" [(ngModel)]=\"newPet.description\"/><br>\n  Skills:<br>\n  Skill 1:<input type=\"text\" name=\"skill1\" [(ngModel)]=\"newPet.skill1\"/><br>\n  Skill 2:<input type=\"text\" name=\"skill2\" [(ngModel)]=\"newPet.skill2\"/><br>\n  Skill 3:<input type=\"text\" name=\"skill3\" [(ngModel)]=\"newPet.skill3\"/>\n  <br><br><input type=\"submit\" value=\"Add pet\">\n  <button [routerLink]=\"['/pets']\">Cancel</button>\n  \n</form>"

/***/ }),

/***/ "./src/app/addpet/addpet.component.ts":
/*!********************************************!*\
  !*** ./src/app/addpet/addpet.component.ts ***!
  \********************************************/
/*! exports provided: AddpetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpetComponent", function() { return AddpetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddpetComponent = /** @class */ (function () {
    function AddpetComponent(_httpservice, _route, _router) {
        this._httpservice = _httpservice;
        this._route = _route;
        this._router = _router;
    }
    AddpetComponent.prototype.ngOnInit = function () {
        this.newPet = {
            name: "",
            type: "",
            description: "",
            skill1: "",
            skill2: "",
            skill3: "",
            likes: 0
        };
        this.status = [];
    };
    AddpetComponent.prototype.createPet = function () {
        var _this = this;
        this.status = [];
        var observable = this._httpservice.addPet(this.newPet);
        observable.subscribe(function (data) {
            console.log("error data is ", data);
            if ("errors" in data) {
                for (var key in data["errors"]) {
                    console.log("data is", data["errors"][key]);
                    console.log("error keys are:", key);
                    _this.status.push(data["errors"][key]['message']);
                }
            }
            else {
                _this.status = [];
                console.log("data from create pet:", data);
                _this._router.navigate(['/pets']);
            }
        });
    };
    AddpetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addpet',
            template: __webpack_require__(/*! ./addpet.component.html */ "./src/app/addpet/addpet.component.html"),
            styles: [__webpack_require__(/*! ./addpet.component.css */ "./src/app/addpet/addpet.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddpetComponent);
    return AddpetComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _addpet_addpet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addpet/addpet.component */ "./src/app/addpet/addpet.component.ts");
/* harmony import */ var _editpet_editpet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editpet/editpet.component */ "./src/app/editpet/editpet.component.ts");
/* harmony import */ var _displaypet_displaypet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displaypet/displaypet.component */ "./src/app/displaypet/displaypet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'pets', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'pets/new', component: _addpet_addpet_component__WEBPACK_IMPORTED_MODULE_3__["AddpetComponent"] },
    { path: 'pets/:id', component: _displaypet_displaypet_component__WEBPACK_IMPORTED_MODULE_5__["DisplaypetComponent"] },
    { path: 'pets/:id/edit', component: _editpet_editpet_component__WEBPACK_IMPORTED_MODULE_4__["EditpetComponent"] },
    { path: "", redirectTo: '/pets', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <h1>\n   {{ title }}\n  </h1>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Pet Shelter';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _addpet_addpet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addpet/addpet.component */ "./src/app/addpet/addpet.component.ts");
/* harmony import */ var _editpet_editpet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editpet/editpet.component */ "./src/app/editpet/editpet.component.ts");
/* harmony import */ var _displaypet_displaypet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./displaypet/displaypet.component */ "./src/app/displaypet/displaypet.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _addpet_addpet_component__WEBPACK_IMPORTED_MODULE_5__["AddpetComponent"],
                _editpet_editpet_component__WEBPACK_IMPORTED_MODULE_6__["EditpetComponent"],
                _displaypet_displaypet_component__WEBPACK_IMPORTED_MODULE_7__["DisplaypetComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/displaypet/displaypet.component.css":
/*!*****************************************************!*\
  !*** ./src/app/displaypet/displaypet.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:10px;\r\n}"

/***/ }),

/***/ "./src/app/displaypet/displaypet.component.html":
/*!******************************************************!*\
  !*** ./src/app/displaypet/displaypet.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a style=\"margin-left:300px\" [routerLink]='[\"/pets\"]'>Home</a>\n<p> Details about {{ pet[\"name\"]}}</p> \n<div>\n  <!-- <table class=\"table table-condensed\"> -->\n  <table>\n    <tr>\n      <td>\n        <h6>Pet Type:</h6>\n      </td>\n      <td>{{ pet[\"type\"]}}</td>\n    </tr>\n    <tr>\n        <td>\n          <h6>Description:</h6>\n        </td>\n        <td>{{ pet[\"description\"]}}</td>\n    </tr>\n    <tr>\n        <td>\n          <h6>Skills:</h6>\n        </td>\n        <td>{{ pet[\"skill1\"]}}</td>\n    </tr>\n    <tr>\n        <td>\n        </td>\n        <td>{{ pet[\"skill2\"]}}</td>\n    </tr>\n    <tr>\n        <td>\n        </td>\n        <td>{{ pet[\"skill3\"]}}</td>\n    </tr>\n    <tr>\n        <td>\n          <h6>Likes:</h6>\n        </td>\n        <td>{{ pet[\"likes\"]}}</td>\n    </tr>\n  </table>\n  <button id=\"btnLike\" [disabled]=\"isDisabled\" (click)=\"likePet()\">Like</button>\n  <button (click)=\"deletePet()\">Adopt this pet!</button>\n</div>"

/***/ }),

/***/ "./src/app/displaypet/displaypet.component.ts":
/*!****************************************************!*\
  !*** ./src/app/displaypet/displaypet.component.ts ***!
  \****************************************************/
/*! exports provided: DisplaypetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaypetComponent", function() { return DisplaypetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplaypetComponent = /** @class */ (function () {
    function DisplaypetComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    DisplaypetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDisabled = false;
        this.petId = "";
        this.pet = {
            name: "",
            type: "",
            description: "",
            skill1: "",
            skill2: "",
            skill3: "",
            likes: []
        };
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.petId = params['id'];
        });
        this.getPet();
    };
    DisplaypetComponent.prototype.getPet = function () {
        var _this = this;
        var observable = this._httpService.getPetById(this.petId);
        observable.subscribe(function (data) {
            // console.log("product is:", data)
            _this.pet = data;
            console.log(_this.pet);
        });
    };
    DisplaypetComponent.prototype.deletePet = function () {
        var observable = this._httpService.deletePet(this.petId);
        observable.subscribe(function (data) {
            console.log("delete data", data);
        });
        this._router.navigate(['/pets']);
    };
    DisplaypetComponent.prototype.likePet = function () {
        var _this = this;
        console.log("in the like function");
        console.log("petid is ", this.petId);
        console.log("pet objecdt is", this.pet);
        var observable = this._httpService.likePet(this.petId, this.pet);
        observable.subscribe(function (data) {
            // console.log("product is:", data)
            _this.pet = data;
            _this.isDisabled = true;
            console.log(_this.pet);
            _this.pet = {
                name: "",
                type: "",
                description: "",
                skill1: "",
                skill2: "",
                skill3: "",
                likes: []
            };
            _this.getPet();
        });
    };
    DisplaypetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-displaypet',
            template: __webpack_require__(/*! ./displaypet.component.html */ "./src/app/displaypet/displaypet.component.html"),
            styles: [__webpack_require__(/*! ./displaypet.component.css */ "./src/app/displaypet/displaypet.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DisplaypetComponent);
    return DisplaypetComponent;
}());



/***/ }),

/***/ "./src/app/editpet/editpet.component.css":
/*!***********************************************!*\
  !*** ./src/app/editpet/editpet.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:10px;\r\n}"

/***/ }),

/***/ "./src/app/editpet/editpet.component.html":
/*!************************************************!*\
  !*** ./src/app/editpet/editpet.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Edit this pet</p>\n<div *ngIf=\"state\">\n  <p *ngIf=\"status != ''\">{{ status }}</p>\n  <form (submit)=\"editPet()\">\n    <!-- <p>{{ newAuthor | json}}</p> -->\n    Pet name:<br><input type=\"text\" name=\"name\" [(ngModel)]=\"pet.name\"/><br>\n    Pet type:<br><input type=\"text\" name=\"type\" [(ngModel)]=\"pet.type\"/><br>\n    Description<br><input type=\"text\" name=\"description\" [(ngModel)]=\"pet.description\"/><br>\n    Skills:<br>\n    Skill 1:<input type=\"text\" name=\"skill1\" [(ngModel)]=\"pet.skill1\"/><br>\n    Skill 2:<input type=\"text\" name=\"skill2\" [(ngModel)]=\"pet.skill2\"/><br>\n    Skill 3:<input type=\"text\" name=\"skill3\" [(ngModel)]=\"pet.skill3\"/>\n    <br><br><input type=\"submit\" value=\"Edit pet\">\n    <button [routerLink]=\"['/pets']\">Cancel</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/editpet/editpet.component.ts":
/*!**********************************************!*\
  !*** ./src/app/editpet/editpet.component.ts ***!
  \**********************************************/
/*! exports provided: EditpetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpetComponent", function() { return EditpetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditpetComponent = /** @class */ (function () {
    function EditpetComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    EditpetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.state = false;
        this.petId = "";
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.petId = params['id'];
        });
        this.status = [];
        this.getPet();
    };
    EditpetComponent.prototype.getPet = function () {
        var _this = this;
        var observable = this._httpService.getPetById(this.petId);
        observable.subscribe(function (data) {
            // console.log("product is:", data)
            _this.pet = data;
            console.log("data of pet is", _this.pet);
            _this.state = true;
        });
    };
    EditpetComponent.prototype.editPet = function () {
        var _this = this;
        this.status = [];
        console.log("in the edit product function");
        var observable = this._httpService.editPet(this.petId, this.pet);
        observable.subscribe(function (data) {
            console.log("error: ", data);
            if ("errors" in data) {
                for (var key in data["errors"]) {
                    console.log("data is", data["errors"][key]);
                    console.log("error keys are:", key);
                    _this.status.push(data["errors"][key]['message']);
                    console.log('status array is:', _this.status);
                }
            }
            else {
                _this.status = [];
                console.log("pet edit data ", data);
                _this._router.navigate(['/pets/' + _this.petId]);
            }
        });
    };
    EditpetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editpet',
            template: __webpack_require__(/*! ./editpet.component.html */ "./src/app/editpet/editpet.component.html"),
            styles: [__webpack_require__(/*! ./editpet.component.css */ "./src/app/editpet/editpet.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditpetComponent);
    return EditpetComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:10px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>These pets are looking for a home!</p>\n<a [routerLink]='[\"/pets/new\"]'>Add a pet to the shelter</a>\n<router-outlet></router-outlet>\n\n<div>\n    <table class=\"table table-striped\">\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Actions Availabe</th>\n      </tr>\n        <tr *ngFor=\"let a of pets\">\n          <td>{{ a[\"name\"] }}</td>\n          <td>{{ a[\"type\"] }}</td>\n          <!-- <td><button (click)=\"editAuthor(a)\">Edit</button> -->\n          <td><button [routerLink]=\"'/pets/'+a._id\">Details</button>\n            <button [routerLink]=\"'/pets/'+a._id+'/edit'\">Edit</button>\n          </td>\n        </tr>\n    </table>\n  </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPetsFromService();
    };
    HomeComponent.prototype.getPetsFromService = function () {
        var _this = this;
        this.pets = [];
        var observable = this._httpService.getPets();
        observable.subscribe(function (data) {
            // console.log("got all pet data:",data)
            for (var a in data) {
                _this.pets.push(data[a]);
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getPets = function () {
        return this._http.get("/api/pets");
    };
    HttpService.prototype.getPetById = function (petId) {
        return this._http.get("/api/pets/" + petId);
    };
    HttpService.prototype.addPet = function (newPet) {
        return this._http.post("/api/pets", newPet);
    };
    HttpService.prototype.editPet = function (id, petToEdit) {
        return this._http.patch("api/pets/" + id, petToEdit);
    };
    HttpService.prototype.deletePet = function (petIdToDelete) {
        return this._http.delete("/api/pets/" + petIdToDelete);
    };
    HttpService.prototype.likePet = function (petId, pet) {
        console.log("in the likePet in the service");
        return this._http.patch("/api/likes/" + petId, pet);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\CodingDojo\Mean\Angular\beltExam\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map