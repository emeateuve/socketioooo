webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.OnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multiplayerservice_service__ = __webpack_require__("../../../../../src/app/multiplayerservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_chat_global_chat_component__ = __webpack_require__("../../../../../src/app/global-chat/global-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gamelobby_gamelobby_component__ = __webpack_require__("../../../../../src/app/gamelobby/gamelobby.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__management_management_component__ = __webpack_require__("../../../../../src/app/management/management.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__main_main_component__["a" /* MainComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_7__global_chat_global_chat_component__["a" /* GlobalChatComponent */] },
    { path: 'lobby', component: __WEBPACK_IMPORTED_MODULE_11__gamelobby_gamelobby_component__["a" /* GamelobbyComponent */] },
    { path: 'game', component: __WEBPACK_IMPORTED_MODULE_12__game_game_component__["a" /* GameComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a" /* RegisterComponent */] },
    { path: 'management', component: __WEBPACK_IMPORTED_MODULE_14__management_management_component__["a" /* ManagementComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_7__global_chat_global_chat_component__["a" /* GlobalChatComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__gamelobby_gamelobby_component__["a" /* GamelobbyComponent */],
                __WEBPACK_IMPORTED_MODULE_12__game_game_component__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__management_management_component__["a" /* ManagementComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */].forRoot(routes, { enableTracing: false })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__multiplayerservice_service__["a" /* MultiplayerserviceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" >\r\n  <div class=\"container-fluid\" style=\"border-top: 1px solid black; margin-top: 10vh;\">\r\n    <p style=\"text-align: center;\"><a href=\"https://github.com/emeateuve\" style=\"color: #fff; width: 100%\">Github: Miguel Ángel Torres Varo</a></p>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.buttons {\r\n  text-align: center;\r\n}\r\n\r\n.btn-hover {\r\n  width: 200px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  height: 55px;\r\n  text-align:center;\r\n  border: none;\r\n  background-size: 300% 100%;\r\n\r\n  border-radius: 50px;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:hover {\r\n  background-position: 100% 0;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:focus {\r\n  outline: none;\r\n}\r\n\r\n.btn-hover.color-1 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#40e495), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n}\r\n\r\n.btn-hover.color-2 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#f5ce62), color-stop(#e43603), color-stop(#fa7199), to(#e85a19));\r\n  background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n}\r\n\r\n.btn-hover.color-3 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#667eea), color-stop(#764ba2), color-stop(#6B8DD6), to(#8E37D7));\r\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n}\r\n\r\n.btn-hover.color-4 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#fc6076), color-stop(#ff9a44), color-stop(#ef9d43), to(#e75516));\r\n  background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n}\r\n\r\n.btn-hover.color-5 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#0ba360), color-stop(#3cba92), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n}\r\n\r\n.btn-hover.color-6 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#009245), color-stop(#FCEE21), color-stop(#00A8C5), to(#D9E021));\r\n  background-image: linear-gradient(to right, #009245, #FCEE21, #00A8C5, #D9E021);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n}\r\n\r\n.btn-hover.color-7 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#6253e1), color-stop(#852D91), color-stop(#A3A1FF), to(#F24645));\r\n  background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n}\r\n\r\n.btn-hover.color-8 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#29323c), color-stop(#485563), color-stop(#2b5876), to(#4e4376));\r\n  background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n}\r\n\r\n.btn-hover.color-9 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#4481eb), color-stop(#04befe), to(#3f86ed));\r\n  background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n}\r\n\r\n.btn-hover.color-10 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#ed6ea0), color-stop(#ec8c69), color-stop(#f7186a) , to(#FBB03B));\r\n  background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n}\r\n\r\n.btn-hover.color-11 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#eb3941), color-stop(#f15e64), color-stop(#e14e53), to(#e2373f));\r\n  background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);\r\n  -webkit-box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n          box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n}\r\n\r\n#gameMessages li:nth-child(odd) { background: rgba(255,255,255,0.6); }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\"\r\n     *ngIf=\"multiplayer.user && multiplayer.resultGame === 'ingame' && multiplayer.usersInRoom >= 2\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-9\" style=\"height: 100vh;\">\r\n      <div *ngFor=\"let guesser of multiplayer.usersInGame\">\r\n        <div *ngIf=\"guesser.guesser === true && guesser.user === multiplayer.user\"\r\n             style=\"background: rgba(255,255,255,0.4)\">\r\n          <h2 class=\"display-4 ml-4\" *ngIf=\"multiplayer.usersInGame\">You are now the guesser! {{multiplayer.user}}\r\n            Points: {{guesser.points}}</h2>\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button class=\"btn btn-dark\" style=\"float: right\" (click)=\"deleteMen()\">Not a men</button>\r\n              <button class=\"btn btn-light\" style=\"float: right\" (click)=\"deleteWomen()\">Not a women</button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button class=\"btn btn-light\" style=\"float: left\" (click)=\"deleteBlueEyes()\">Delete blue eyes</button>\r\n              <button class=\"btn btn-dark\" style=\"float: left\" (click)=\"deleteBrownEyes()\">Delete brown eyes</button>\r\n            </div>\r\n            <ul>\r\n              <li *ngFor=\"let card of multiplayer.charactersArray\" style=\"display: inline;\">\r\n                <div class=\"card\"\r\n                     style=\"width: 10rem; display: inline-block; background: rgba(255,255,255,0.4)!important\"\r\n                     *ngIf=\"card.display\">\r\n                  <img class=\"card-img-top\" src=\"{{card.image}}\" alt=\"Card image cap\">\r\n                  <div class=\"card-body\">\r\n                    <h5 style=\"text-align: center\" class=\"card-title\">{{card.name}}</h5>\r\n                    <button (click)=\"deleteCharacter(card.name)\" style=\"width: 100%\" class=\"btn btn-danger\">Delete\r\n                    </button>\r\n                    <button (click)=\"thisIsTheOne(card.name)\" style=\"width: 100%\" class=\"btn btn-success\">This is the\r\n                      one\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div> <!--** GUESSER ** -->\r\n\r\n      <div *ngFor=\"let guesser of multiplayer.usersInGame\">\r\n        <div *ngIf=\"guesser.guesser === false && guesser.user === multiplayer.user\">\r\n          <h2 class=\"display-4 ml-3\" *ngIf=\"multiplayer.usersInGame\">You have the card {{multiplayer.user}}! Points:\r\n            {{guesser.points}}</h2>\r\n          <div class=\"row\">\r\n            <div class=\"col-3 col-md-offset-1\">\r\n              <div class=\"card\" style=\"width: 18rem;\">\r\n                <img class=\"card-img-top\" src=\"{{multiplayer.randomCard.image}}\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                  <p style=\"text-align: center;\" class=\"card-text\">{{multiplayer.randomCard.name}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4 col-md-offset-2\">\r\n              <h3 class=\"display-4\">Properties of {{multiplayer.randomCard.name}}:</h3>\r\n              <ul class=\"list-unstyled\">\r\n                <li>Name: {{multiplayer.randomCard.name}}</li>\r\n                <li>Hair color: {{multiplayer.randomCard.hair}}</li>\r\n                <li>Eyes color: {{multiplayer.randomCard.eyes}}</li>\r\n                <li>Skin color: {{multiplayer.randomCard.skin}}</li>\r\n                <li>Gender: {{multiplayer.randomCard.gender}}</li>\r\n                <li>Beard: {{multiplayer.randomCard.beard}}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div> <!--** CARD OWNER ** -->\r\n    </div>\r\n    <div class=\"col-md-3\" style=\"background: rgba(255,255,255, 0.2); height: 100vh\">\r\n      <div class=\"row\">\r\n        <div style=\"height: 94vh\">\r\n          <ul id=\"gameMessages\">\r\n            <li *ngFor=\"let message of roomConversation\" style=\"list-style: none; width: 100%\">{{message}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-2\" style=\"height: 5vh;\">\r\n        <div class=\"input-group\" style=\"width: 100%;\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"basic-addon1\">{{multiplayer.user}}:</span>\r\n          </div>\r\n          <input (keyup)=\"$event.keyCode == 13 && gameMessage()\" [(ngModel)]=\"inputGame\" id=\"gameMessage\"\r\n                 name=\"inputGame\" type=\"text\" class=\"form-control\" placeholder=\"Press enter to send your message!\"\r\n                 aria-label=\"Username\">\r\n        </div>\r\n      </div>\r\n    </div> <!--** ROOM CHAT ** -->\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"multiplayer.resultGame === 'win'\">\r\n  <div class=\"row mt-5\">\r\n    <p style=\"text-align: center\" class=\"display-2\">CONGRATULATIONS!</p>\r\n    <hr>\r\n    <p style=\"text-align: center\"><img class=\"card-img-top\" style=\"height: 300px; width: 200px\"\r\n                                       src=\"./../../assets/marcianito.gif\"></p>\r\n  </div>\r\n  <div class=\"row mt-5\" style=\"background: rgba(255,255,255,0.5); height: 40vh\">\r\n    <p style=\"text-align: center\" class=\"display-3\">{{multiplayer.winner.user}} won the game with\r\n      {{multiplayer.winner.points}} points!</p>\r\n    <hr>\r\n    <button style=\"width: 100%\" class=\"btn-hover color-2\" (click)=\"backToMenu()\" routerLink=\"/menu\">BACK TO MENU</button>\r\n  </div>\r\n\r\n</div> <!--** SOMEONE WIN ** -->\r\n<div *ngIf=\"multiplayer.resultGame === 'tied'\">\r\n  <div class=\"row mt-5\">\r\n    <p style=\"text-align: center\" class=\"display-2\">Oh no! You tied!</p>\r\n    <hr>\r\n    <p style=\"text-align: center\"><img class=\"card-img-top\" style=\"height: 300px; width: 200px\"\r\n                                       src=\"./../../assets/marcianito.gif\"></p>\r\n  </div>\r\n  <div class=\"row mt-5\" style=\"background: rgba(255,255,255,0.5); height: 40vh\">\r\n    <p style=\"text-align: center\" class=\"display-3\">I wish you more luck the next time!</p>\r\n    <hr>\r\n    <button style=\"width: 100%\" class=\"btn-hover color-2\" (click)=\"backToMenu()\" routerLink=\"/menu\">BACK TO MENU</button>\r\n  </div>\r\n</div> <!--** TIED GAME ** -->\r\n\r\n<div class=\"container mt-5\" *ngIf=\"!multiplayer.user\">\r\n  <p style=\"text-align: center\"><img class=\"card-img-top\" style=\"height: 200px; width: 200px;\"\r\n                                     src=\"./../../assets/nouser.png\"></p>\r\n  <hr>\r\n  <p style=\"text-align: center\">\r\n  <h1 class=\"display-4\">There must be a problem with your user! Try to login again.\r\n    <button class=\"btn-hover color-3 ml-5\" style=\"float: right\" routerLink=\"\">Back to Login</button>\r\n  </h1>\r\n  <p>\r\n</div> <!--** NOT USER ** -->\r\n\r\n<div class=\"container mt-5\" *ngIf=\"multiplayer.user && multiplayer.usersInRoom < 2\">\r\n  <p style=\"text-align: center\"><img class=\"card-img-top\" style=\"height: 200px; width: 200px;\"\r\n                                     src=\"./../../assets/619.gif\"></p>\r\n  <hr>\r\n  <p style=\"text-align: center\">\r\n  <h1 class=\"display-4\">HA! Your enemy left the game. YOU WIN THIS TIME.\r\n    <button class=\"btn-hover color-3 ml-5\" style=\"float: right\" routerLink=\"/menu\">Back to Menu</button>\r\n  </h1>\r\n  <p>\r\n</div> <!--** ENEMY LEFT THE GAME ** -->\r\n"

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multiplayerservice_service__ = __webpack_require__("../../../../../src/app/multiplayerservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameComponent = /** @class */ (function () {
    function GameComponent(multiplayer, router) {
        this.multiplayer = multiplayer;
        this.router = router;
        this.roomConversation = [];
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.multiplayer.backToLogin().subscribe(function () { });
        this.newGameMessage = this.multiplayer.newGameMessage().subscribe(function (data) {
            _this.roomConversation.push(data);
        });
        this.deletedMen = this.multiplayer.deletedMen().subscribe(function (data) { });
        this.deletedWomen = this.multiplayer.deletedWomen().subscribe(function (data) { });
        this.deletedBlueEyes = this.multiplayer.deletedBlueEyes().subscribe(function (data) { });
        this.deletedBrownEyes = this.multiplayer.deletedBrownEyes().subscribe(function (data) { });
        this.deletedCharacter = this.multiplayer.deletedCharacter().subscribe(function (data) { });
        this.correctAnswer = this.multiplayer.correctAnswer().subscribe(function (data) { });
        this.wrongAnswer = this.multiplayer.wrongAnswer().subscribe(function (data) {
            _this.roomConversation.push(data.message);
        });
        this.gameEnd = this.multiplayer.gameEnd().subscribe(function (data) { });
        this.gameEndTied = this.multiplayer.gameEndTied().subscribe(function (data) { });
        this.disconnectedGame = this.multiplayer.disconnectedGame().subscribe(function (data) {
            _this.roomConversation.push(data.message);
        });
    };
    GameComponent.prototype.gameMessage = function () {
        this.multiplayer.sendGameMessage(this.inputGame);
        this.inputGame = '';
    };
    GameComponent.prototype.deleteCharacter = function (card) {
        this.multiplayer.deleteCharacter(card, this.multiplayer.charactersArray);
    };
    GameComponent.prototype.deleteMen = function () {
        this.multiplayer.deleteMen(this.multiplayer.charactersArray);
    };
    GameComponent.prototype.deleteWomen = function () {
        this.multiplayer.deleteWomen(this.multiplayer.charactersArray);
    };
    GameComponent.prototype.deleteBlueEyes = function () {
        this.multiplayer.deleteBlueEyes(this.multiplayer.charactersArray);
    };
    GameComponent.prototype.deleteBrownEyes = function () {
        this.multiplayer.deleteBrownEyes(this.multiplayer.charactersArray);
    };
    GameComponent.prototype.thisIsTheOne = function (card) {
        this.multiplayer.thisIsTheOne(card);
    };
    GameComponent.prototype.backToMenu = function () {
        this.multiplayer.backToMenu();
    };
    GameComponent.prototype.ngOnDestroy = function () {
        this.newGameMessage.unsubscribe();
        this.deletedMen.unsubscribe();
        this.deletedWomen.unsubscribe();
        this.deletedBlueEyes.unsubscribe();
        this.deletedBrownEyes.unsubscribe();
        this.deletedCharacter.unsubscribe();
        this.correctAnswer.unsubscribe();
        this.wrongAnswer.unsubscribe();
        this.gameEnd.unsubscribe();
        this.gameEndTied.unsubscribe();
        this.disconnectedGame.unsubscribe();
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("../../../../../src/app/game/game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__multiplayerservice_service__["a" /* MultiplayerserviceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gamelobby/gamelobby.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.buttons {\r\n  text-align: center;\r\n}\r\n\r\n.btn-hover {\r\n  width: 200px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  height: 55px;\r\n  text-align:center;\r\n  border: none;\r\n  background-size: 300% 100%;\r\n\r\n  border-radius: 50px;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:hover {\r\n  background-position: 100% 0;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:focus {\r\n  outline: none;\r\n}\r\n\r\n.btn-hover.color-1 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#40e495), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n}\r\n\r\n.btn-hover.color-2 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#f5ce62), color-stop(#e43603), color-stop(#fa7199), to(#e85a19));\r\n  background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n}\r\n\r\n.btn-hover.color-3 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#667eea), color-stop(#764ba2), color-stop(#6B8DD6), to(#8E37D7));\r\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n}\r\n\r\n.btn-hover.color-4 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#fc6076), color-stop(#ff9a44), color-stop(#ef9d43), to(#e75516));\r\n  background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n}\r\n\r\n.btn-hover.color-5 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#0ba360), color-stop(#3cba92), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n}\r\n\r\n.btn-hover.color-6 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#009245), color-stop(#FCEE21), color-stop(#00A8C5), to(#D9E021));\r\n  background-image: linear-gradient(to right, #009245, #FCEE21, #00A8C5, #D9E021);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n}\r\n\r\n.btn-hover.color-7 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#6253e1), color-stop(#852D91), color-stop(#A3A1FF), to(#F24645));\r\n  background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n}\r\n\r\n.btn-hover.color-8 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#29323c), color-stop(#485563), color-stop(#2b5876), to(#4e4376));\r\n  background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n}\r\n\r\n.btn-hover.color-9 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#4481eb), color-stop(#04befe), to(#3f86ed));\r\n  background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n}\r\n\r\n.btn-hover.color-10 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#ed6ea0), color-stop(#ec8c69), color-stop(#f7186a) , to(#FBB03B));\r\n  background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n}\r\n\r\n.btn-hover.color-11 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#eb3941), color-stop(#f15e64), color-stop(#e14e53), to(#e2373f));\r\n  background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);\r\n  -webkit-box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n          box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gamelobby/gamelobby.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid mt-5\" *ngIf=\"multiplayer.user\" style=\"background: rgba(255,255,255,0.4)\">\r\n  <div class=\"container-fluid\">\r\n    <h1 class=\"display-4\" style=\"text-align: center\">{{multiplayer.user}} - Room: {{this.multiplayer.roomName}} - Players ready:\r\n      {{multiplayer.usersInRoom}}/2</h1>\r\n    <p class=\"lead\" style=\"text-align: center\">Waiting for more players to be ready.</p>\r\n    <p style=\"text-align: center\">\r\n      <img class=\"card-img-top\" style=\"width: 200px; height: 200px;\" src=\"./../../assets/loading.GIF\">\r\n    </p>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-5 ml-5\">\r\n        <button class=\"btn-hover color-5\" (click)=\"imReady()\">I am ready!</button>\r\n      </div>\r\n      <div class=\"col-6 mr-5\">\r\n        <button style=\"float: right\" class=\"btn-hover color-2\" routerLink=\"/menu\">Back to menu</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container mt-5\" *ngIf=\"!multiplayer.user\">\r\n  <p style=\"text-align: center\"><img class=\"card-img-top\" style=\"height: 200px; width: 200px;\" src=\"./../../assets/nouser.png\"></p>\r\n  <hr>\r\n  <p style=\"text-align: center\">\r\n  <h1 class=\"display-4\">There must be a problem with your user! Try to login again.<button class=\"btn-hover color-3 ml-5\" style=\"float: right\" routerLink=\"\">Back to Login</button></h1>\r\n  <p>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/gamelobby/gamelobby.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamelobbyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multiplayerservice_service__ = __webpack_require__("../../../../../src/app/multiplayerservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GamelobbyComponent = /** @class */ (function () {
    function GamelobbyComponent(multiplayer, router) {
        this.multiplayer = multiplayer;
        this.router = router;
        this.userIsReady = false;
    }
    GamelobbyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.multiplayer.backToLogin().subscribe(function () { });
        this.usuarioEstaListo = this.multiplayer.usuarioEstaListo().subscribe(function (data) {
            _this.arrayUsuarios = data;
        });
        this.multiplayer.connectedLobby();
        this.roomIsFull = this.multiplayer.roomIsFull().subscribe(function (data) {
            alert(data + ' room is full! Try with another one.');
            _this.router.navigateByUrl('/menu');
        });
        this.allReady = this.multiplayer.allReady().subscribe(function (data) {
            _this.router.navigateByUrl('/game');
        });
    };
    GamelobbyComponent.prototype.imReady = function () {
        this.multiplayer.usuarioReady();
    };
    GamelobbyComponent.prototype.ngOnDestroy = function () {
        this.usuarioEstaListo.unsubscribe();
        this.roomIsFull.unsubscribe();
        this.allReady.unsubscribe();
    };
    GamelobbyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gamelobby',
            template: __webpack_require__("../../../../../src/app/gamelobby/gamelobby.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gamelobby/gamelobby.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__multiplayerservice_service__["a" /* MultiplayerserviceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], GamelobbyComponent);
    return GamelobbyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/global-chat/global-chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.buttons {\r\n  text-align: center;\r\n}\r\n\r\n.btn-hover {\r\n  width: 200px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  height: 55px;\r\n  text-align:center;\r\n  border: none;\r\n  background-size: 300% 100%;\r\n\r\n  border-radius: 50px;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:hover {\r\n  background-position: 100% 0;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:focus {\r\n  outline: none;\r\n}\r\n\r\n.btn-hover.color-1 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#40e495), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n}\r\n\r\n.btn-hover.color-2 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#f5ce62), color-stop(#e43603), color-stop(#fa7199), to(#e85a19));\r\n  background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n}\r\n\r\n.btn-hover.color-3 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#667eea), color-stop(#764ba2), color-stop(#6B8DD6), to(#8E37D7));\r\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n}\r\n\r\n.btn-hover.color-4 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#fc6076), color-stop(#ff9a44), color-stop(#ef9d43), to(#e75516));\r\n  background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n}\r\n\r\n.btn-hover.color-5 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#0ba360), color-stop(#3cba92), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n}\r\n\r\n.btn-hover.color-6 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#009245), color-stop(#FCEE21), color-stop(#00A8C5), to(#D9E021));\r\n  background-image: linear-gradient(to right, #009245, #FCEE21, #00A8C5, #D9E021);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n}\r\n\r\n.btn-hover.color-7 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#6253e1), color-stop(#852D91), color-stop(#A3A1FF), to(#F24645));\r\n  background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n}\r\n\r\n.btn-hover.color-8 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#29323c), color-stop(#485563), color-stop(#2b5876), to(#4e4376));\r\n  background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n}\r\n\r\n.btn-hover.color-9 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#4481eb), color-stop(#04befe), to(#3f86ed));\r\n  background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n}\r\n\r\n.btn-hover.color-10 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#ed6ea0), color-stop(#ec8c69), color-stop(#f7186a) , to(#FBB03B));\r\n  background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n}\r\n\r\n.btn-hover.color-11 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#eb3941), color-stop(#f15e64), color-stop(#e14e53), to(#e2373f));\r\n  background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);\r\n  -webkit-box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n          box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n}\r\n\r\n#chatMessages li:nth-child(odd) { background: rgba(255,255,255,0.8); }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/global-chat/global-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"multiplayer.user\">\r\n  <div class=\"row mt-3 ml-3\">\r\n    <div class=\"col-8\" style=\"background: rgba(255,255,255,0.5); height: 85vh\">\r\n      <ul id=\"messages\"></ul>\r\n      <ul id=\"chatMessages\">\r\n        <li style=\"list-style: none\" *ngFor=\"let message of allClientMessages\">{{message}}</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-3 ml-5\" style=\"height: 85vh; background: rgba(255,255,255,0.6)\">\r\n      <p style=\"text-align: center\">Connected users:</p>\r\n      <ul>\r\n        <li *ngFor=\"let chatUser of multiplayer.chatUsers\" style=\"list-style: none;\">\r\n          <span class=\"glyphicon glyphicon-user\"></span>\r\n          {{chatUser.username}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row ml-3 mt-2\">\r\n    <div class=\"col-10\" style=\"background: rgba(255,255,255,0.5); height: 6vh\">\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-10 input-group mb-3\" style=\"height: 100%;\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"basic-addon1\">{{multiplayer.user}}:</span>\r\n          </div>\r\n          <input (keyup)=\"$event.keyCode == 13 && sendMessage()\" [(ngModel)]=\"message\" id=\"message\" type=\"text\" class=\"form-control\" placeholder=\"Write your message!\" aria-label=\"Username\">\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <button class=\"btn btn-info w-100\" (click)=\"sendMessage()\">Send</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-2\">\r\n        <button style=\"height: 100%\" class=\"btn-hover color-3\" routerLink=\"/menu\">Back to menu</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container mt-5\" *ngIf=\"!multiplayer.user\">\r\n  <p style=\"text-align: center\"><img class=\"card-img-top\" style=\"height: 200px; width: 200px;\" src=\"./../../assets/nouser.png\"></p>\r\n  <hr>\r\n  <p style=\"text-align: center\">\r\n  <h1 class=\"display-4\">There must be a problem with your user! Try to login again.<button class=\"btn-hover color-3 ml-5\" style=\"float: right\" routerLink=\"\">Back to Login</button></h1>\r\n  <p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/global-chat/global-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multiplayerservice_service__ = __webpack_require__("../../../../../src/app/multiplayerservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalChatComponent = /** @class */ (function () {
    function GlobalChatComponent(multiplayer, router) {
        this.multiplayer = multiplayer;
        this.router = router;
        this.allClientMessages = [];
    }
    GlobalChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.multiplayer.backToLogin().subscribe(function () { });
        this.multiplayer.conexionChat();
        this.connectedChatUser = this.multiplayer.connectedChatUser().subscribe(function (connectedMessage) {
            _this.allClientMessages.push(connectedMessage.message);
        });
        this.usuarioDesconectadoChat = this.multiplayer.usuarioDesconectadoChat().subscribe(function (disconnectMessage) {
            _this.allClientMessages.push(disconnectMessage.message);
        });
        this.newMessage = this.multiplayer.newMessage().subscribe(function (newMessage) {
            _this.allClientMessages.push(newMessage);
        });
    };
    GlobalChatComponent.prototype.sendMessage = function () {
        this.multiplayer.sendMessage(this.message);
        this.message = '';
    };
    GlobalChatComponent.prototype.backToMenu = function () {
        this.router.navigateByUrl('/menu');
    };
    GlobalChatComponent.prototype.ngOnDestroy = function () {
        this.connectedChatUser.unsubscribe();
        this.usuarioDesconectadoChat.unsubscribe();
        this.newMessage.unsubscribe();
    };
    GlobalChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-global-chat',
            template: __webpack_require__("../../../../../src/app/global-chat/global-chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/global-chat/global-chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__multiplayerservice_service__["a" /* MultiplayerserviceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], GlobalChatComponent);
    return GlobalChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  header works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"display-4 mt-5\" style=\"text-align: center\">Guess who! </p>\r\n<div class=\"container\" style=\"background: rgba(255,255,255,0.5); margin-top: 25vh;\">\r\n  <form class=\"col-12 mt-5 pt-3 pb-5\" >\r\n    <div class=\"form-group\">\r\n      <p style=\"text-align: center\" for=\"exampleInputEmail1\">Username</p>\r\n      <input type=\"email\" (keyup)=\"$event.keyCode == 13 && userLogin()\" [(ngModel)]=\"userName\" name=\"userName\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter username...\" required>\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">Be sure that your username is not registered.</small>\r\n      <p style=\"text-align: center\" for=\"exampleInputEmail1\">Username</p>\r\n      <input type=\"password\" (keyup)=\"$event.keyCode == 13 && userLogin()\" [(ngModel)]=\"userPassword\" name=\"userPassword\" class=\"form-control\" id=\"password\" aria-describedby=\"emailHelp\" placeholder=\"Enter password...\" required>\r\n    </div>\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<label for=\"exampleInputPassword1\">Password</label>-->\r\n      <!--<input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">-->\r\n    <!--</div>-->\r\n    <button *ngIf=\"userName && userPassword\" type=\"button\" class=\"btn btn-primary col-12\" (click)=\"userLogin()\">Login</button>\r\n    <div *ngIf=\"alreadyExistsMessage\" class=\"alert alert-danger\" role=\"alert\">{{alreadyExistsMessage}}</div>\r\n\r\n    <hr>\r\n    <button class=\"btn btn-info w-100\" routerLink=\"register\">Not registered yet?</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multiplayerservice_service__ = __webpack_require__("../../../../../src/app/multiplayerservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(multiplayer, router) {
        this.multiplayer = multiplayer;
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.multiplayer.backToLogin().subscribe(function () { });
        this.multiplayer.alreadyExists().subscribe(function (data) {
            _this.alreadyExistsMessage = data;
        });
    };
    MainComponent.prototype.userLogin = function () {
        this.multiplayer.userLogin(this.userName, this.userPassword);
        this.router.navigateByUrl('/menu');
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__multiplayerservice_service__["a" /* MultiplayerserviceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/management/management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/management/management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div id=\"accordion\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" id=\"headingOne\">\r\n        <h5 class=\"mb-0\">\r\n          <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n            Create a new character\r\n          </button>\r\n        </h5>\r\n      </div>\r\n\r\n      <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n        <div class=\"card-body\">\r\n          <form>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <label for=\"inputEmail4\">Name</label>\r\n                <input [(ngModel)]=\"inputName\" name=\"inputName\" type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Character name\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-4\">\r\n                <label for=\"inputHair\">Hair color</label>\r\n                <select [ngModel]=\"inputHair\" (change)=\"changeHair($event.target.value)\" name=\"inputHair\" id=\"inputHair\" class=\"form-control\">\r\n                  <option *ngFor=\"let option of characterExampleHair\" [value]=\"option\">{{option}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group col-md-4\">\r\n                <label for=\"inputEyes\">Eyes color</label>\r\n                <select [ngModel]=\"inputEyes\" (change)=\"changeEyes($event.target.value)\" name=\"inputEyes\" id=\"inputEyes\" class=\"form-control\">\r\n                  <option *ngFor=\"let option of characterExampleEyes\" [value]=\"option\">{{option}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group col-md-4\">\r\n                <label for=\"inputSkin\">Skin color</label>\r\n                <select [ngModel]=\"inputSkin\" (change)=\"changeSkin($event.target.value)\" name=\"inputSkin\" id=\"inputSkin\" class=\"form-control\">\r\n                  <option *ngFor=\"let option of characterExampleSkin\" [value]=\"option\">{{option}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"inputGender\">Gender</label>\r\n                <select [ngModel]=\"inputGender\" (change)=\"changeGender($event.target.value)\" name=\"inputGender\" id=\"inputGender\" class=\"form-control\">\r\n                  <option *ngFor=\"let option of characterExampleGender\" [value]=\"option\">{{option}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"inputBeard\">Has a beard</label>\r\n                <select [ngModel]=\"inputBeard\" (change)=\"changeBeard($event.target.value)\" name=\"inputBeard\" id=\"inputBeard\" class=\"form-control\">\r\n                  <option *ngFor=\"let option of characterExampleBeard\" [value]=\"option\">{{option}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <button *ngIf=\"inputName && inputHair && inputEyes && inputSkin && inputGender && inputBeard\" type=\"button\" class=\"btn btn-primary w-100\" (click)=\"createCharacter()\">Create new character!</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" id=\"headingTwo\">\r\n        <h5 class=\"mb-0\">\r\n          <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n            Account Settings\r\n          </button>\r\n        </h5>\r\n      </div>\r\n      <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n        <div class=\"card-body\">\r\n          <ul>\r\n            <li *ngFor=\"let character of userCharacters\" style=\"display: inline;\">\r\n              <div class=\"card\"\r\n                   style=\"width: 10rem; display: inline-block; background: rgba(255,255,255,0.4)!important\">\r\n                <img class=\"card-img-top\" src=\"{{character.image}}\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                  <h5 style=\"text-align: center\" class=\"card-title\">{{character.name}}</h5>\r\n                  <!--<p style=\"text-align: center\" class=\"card-title\">Created by: {{character.name}}</p>-->\r\n                  <!--<p>Creator's id: {{character.id}}</p>-->\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" id=\"headingThree\">\r\n        <h5 class=\"mb-0\">\r\n          <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n            Collapsible Group Item #3\r\n          </button>\r\n        </h5>\r\n      </div>\r\n      <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n        <div class=\"card-body\">\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/management/management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multiplayerservice_service__ = __webpack_require__("../../../../../src/app/multiplayerservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagementComponent = /** @class */ (function () {
    function ManagementComponent(multiplayer, route) {
        this.multiplayer = multiplayer;
        this.route = route;
        this.characterExampleHair = ['blonde', 'dark', 'red', 'bold'];
        this.characterExampleEyes = ['blue', 'brown'];
        this.characterExampleSkin = ['black', 'white'];
        this.characterExampleGender = ['male', 'female'];
        this.characterExampleBeard = [true, false];
        this.userCharacters = [];
    }
    ManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.multiplayer.loadMyCharacters();
        this.multiplayer.loadedMyCharacters().subscribe(function (data) {
            _this.userCharacters = data;
        });
    };
    ManagementComponent.prototype.changeHair = function (input) {
        this.inputHair = input;
    };
    ManagementComponent.prototype.changeEyes = function (input) {
        this.inputEyes = input;
    };
    ManagementComponent.prototype.changeSkin = function (input) {
        this.inputSkin = input;
    };
    ManagementComponent.prototype.changeGender = function (input) {
        this.inputGender = input;
    };
    ManagementComponent.prototype.changeBeard = function (input) {
        this.inputBeard = input;
    };
    ManagementComponent.prototype.createCharacter = function () {
        this.multiplayer.newCharacter(this.inputName, this.inputHair, this.inputEyes, this.inputSkin, this.inputGender, this.inputBeard);
    };
    ManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-management',
            template: __webpack_require__("../../../../../src/app/management/management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/management/management.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__multiplayerservice_service__["a" /* MultiplayerserviceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ManagementComponent);
    return ManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.buttons {\r\n  text-align: center;\r\n}\r\n\r\n.btn-hover {\r\n  width: 200px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  height: 55px;\r\n  text-align:center;\r\n  border: none;\r\n  background-size: 300% 100%;\r\n\r\n  border-radius: 50px;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:hover {\r\n  background-position: 100% 0;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:focus {\r\n  outline: none;\r\n}\r\n\r\n.btn-hover.color-1 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#40e495), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n}\r\n\r\n.btn-hover.color-2 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#f5ce62), color-stop(#e43603), color-stop(#fa7199), to(#e85a19));\r\n  background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n}\r\n\r\n.btn-hover.color-3 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#667eea), color-stop(#764ba2), color-stop(#6B8DD6), to(#8E37D7));\r\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n}\r\n\r\n.btn-hover.color-4 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#fc6076), color-stop(#ff9a44), color-stop(#ef9d43), to(#e75516));\r\n  background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n}\r\n\r\n.btn-hover.color-5 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#0ba360), color-stop(#3cba92), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n}\r\n\r\n.btn-hover.color-6 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#009245), color-stop(#FCEE21), color-stop(#00A8C5), to(#D9E021));\r\n  background-image: linear-gradient(to right, #009245, #FCEE21, #00A8C5, #D9E021);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n}\r\n\r\n.btn-hover.color-7 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#6253e1), color-stop(#852D91), color-stop(#A3A1FF), to(#F24645));\r\n  background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n}\r\n\r\n.btn-hover.color-8 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#29323c), color-stop(#485563), color-stop(#2b5876), to(#4e4376));\r\n  background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n}\r\n\r\n.btn-hover.color-9 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#4481eb), color-stop(#04befe), to(#3f86ed));\r\n  background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n}\r\n\r\n.btn-hover.color-10 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#ed6ea0), color-stop(#ec8c69), color-stop(#f7186a) , to(#FBB03B));\r\n  background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n}\r\n\r\n.btn-hover.color-11 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#eb3941), color-stop(#f15e64), color-stop(#e14e53), to(#e2373f));\r\n  background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);\r\n  -webkit-box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n          box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"multiplayer.isLogged\" class=\"container\">\r\n  <p class=\"alert alert-success\" style=\"text-align: center\">You are logged as {{multiplayer.user}} !</p>\r\n  <p style=\"text-align: center\">Current online players: {{multiplayer.connectedUsers.length}}</p>\r\n  <div id=\"accordion\" class=\"mt-5\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" id=\"headingOne\">\r\n        <h5 class=\"mb-0\">\r\n          <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\"\r\n                  aria-controls=\"collapseOne\">\r\n            Play the game!\r\n          </button>\r\n        </h5>\r\n      </div>\r\n      <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n        <div class=\"card-body\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">Room name</label>\r\n              <input type=\"email\" [(ngModel)]=\"roomName\" name=\"roomName\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                     aria-describedby=\"emailHelp\" placeholder=\"Enter room name\" required>\r\n            </div>\r\n            <!--<div class=\"form-group\">-->\r\n            <!--<label for=\"exampleInputPassword1\">Password</label>-->\r\n            <!--<input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Enter room password\">-->\r\n            <!--</div>-->\r\n            <button *ngIf=\"roomName\" type=\"button\" (click)=\"goToLobby()\" class=\"btn btn-primary col-12\">Play</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" id=\"headingTwo\">\r\n        <h5 class=\"mb-0\">\r\n          <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\"\r\n                  aria-controls=\"collapseTwo\">\r\n            Chat\r\n          </button>\r\n        </h5>\r\n      </div>\r\n      <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n        <div class=\"card-body\">\r\n          <p>Chat now with everyone who is connected!</p>\r\n          <button type=\"button\" (click)=\"goToChat()\" class=\"btn btn-primary col-12\">Chat now!</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" id=\"headingThree\">\r\n        <h5 class=\"mb-0\">\r\n          <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\"\r\n                  aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n            How to play\r\n          </button>\r\n        </h5>\r\n      </div>\r\n      <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n        <div class=\"card-body\">\r\n          There are 2 roles in this game: Guesser and Card Owner.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" id=\"headingFour\">\r\n        <h5 class=\"mb-0\">\r\n          <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseFour\" aria-expanded=\"false\"\r\n                  aria-controls=\"collapseFour\">\r\n            Accout management <span class=\"badge badge-secondary\">New!</span>\r\n          </button>\r\n        </h5>\r\n      </div>\r\n      <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordion\">\r\n        <div class=\"card-body\">\r\n          <button class=\"btn btn-primary col-12\" routerLink=\"/management\">Go to Accout Management</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"container mt-5\" *ngIf=\"!multiplayer.isLogged\">\r\n  <p style=\"text-align: center\"><img class=\"card-img-top\" style=\"height: 200px; width: 200px;\"\r\n                                     src=\"./../../assets/nouser.png\"></p>\r\n  <hr>\r\n  <p style=\"text-align: center\">\r\n  <h1 class=\"display-4\">There must be a problem with your user! Try to login again.\r\n    <button class=\"btn-hover color-3 ml-5\" style=\"float: right\" (click)=\"goToMain()\">Back to Login</button>\r\n  </h1>\r\n  <p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiplayerservice_service__ = __webpack_require__("../../../../../src/app/multiplayerservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, multiplayer) {
        this.router = router;
        this.multiplayer = multiplayer;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.multiplayer.backToLogin().subscribe(function () { });
        this.successfullLogin = this.multiplayer.successfullLogin().subscribe(function (data) {
            _this.userName = data.user;
            _this.arrayUsernames = data.array;
            _this.connected = _this.multiplayer.isLogged;
        });
    };
    MenuComponent.prototype.goToLobby = function () {
        this.router.navigateByUrl('/lobby');
        this.multiplayer.roomName = this.roomName;
    };
    MenuComponent.prototype.goToChat = function () {
        this.router.navigateByUrl('/chat');
    };
    MenuComponent.prototype.goToMain = function () {
        this.router.navigateByUrl('');
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        this.successfullLogin.unsubscribe();
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__multiplayerservice_service__["a" /* MultiplayerserviceService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/multiplayerservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiplayerserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MultiplayerserviceService = /** @class */ (function () {
    function MultiplayerserviceService(router) {
        var _this = this;
        this.router = router;
        this.url = 'http://localhost:3000';
        this.connectedUsers = [];
        this.chatUsers = [];
        this.isLogged = false;
        this.usersReady = [];
        this.usersInRoom = 0;
        this.usersInGame = [];
        this.charactersArray = [];
        this.resultGame = 'ingame';
        /*                               LOGIN                                  */
        this.backToLogin = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('back-to-login', function () {
                    _this.router.navigateByUrl('/');
                });
            });
        };
        this.successfullLogin = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('successfull-login', function (jsonUser) {
                    _this.connectedUsers = jsonUser.array;
                    _this.user = jsonUser.user;
                    observer.next(jsonUser);
                    _this.isLogged = true;
                });
            });
        };
        this.alreadyExists = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('existing-user', function (data) {
                    observer.next(data);
                    alert(data + ' :(');
                });
            });
        };
        this.connectedChatUser = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('connected-chat-user', function (data) {
                    observer.next(data);
                    _this.chatUsers = data.array;
                });
            });
        };
        this.usuarioDesconectadoChat = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('disconnectedChat', function (data) {
                    observer.next(data);
                    _this.chatUsers = data.array;
                });
            });
        };
        this.newMessage = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('new-message', function (data) {
                    observer.next(data);
                });
            });
        };
        this.loadedMyCharacters = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('loaded-user-characters', function (data) {
                    observer.next(data);
                });
            });
        };
        /*                              GAME LOBBY                                     */
        this.roomIsFull = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('lobby-is-full', function (data) {
                    observer.next(data);
                });
            });
        };
        this.usuarioEstaListo = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('userReady', function (data) {
                    observer.next(data);
                    _this.usersInRoom = data.totalRoom;
                    _this.usersReady = data.readyUsers;
                    if (_this.usersReady.length >= 2) {
                        _this.socket.emit('startTheGameNow', _this.usersReady);
                    }
                });
            });
        };
        this.allReady = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('game-start', function (data) {
                    observer.next(data);
                    _this.randomCard = data.randomCard;
                    _this.charactersArray = data.characters;
                    _this.usersInGame = data.usersReady;
                });
            });
        };
        this.newGameMessage = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('new-game-message', function (data) {
                    observer.next(data);
                });
            });
        };
        this.deletedCharacter = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('deleted-character', function (data) {
                    observer.next(data);
                    _this.charactersArray = data;
                });
            });
        };
        this.deletedBlueEyes = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('deleted-blue-eyes', function (data) {
                    observer.next(data);
                    _this.charactersArray = data;
                });
            });
        };
        this.deletedBrownEyes = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('deleted-brown-eyes', function (data) {
                    observer.next(data);
                    _this.charactersArray = data;
                });
            });
        };
        this.deletedMen = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('deleted-men', function (data) {
                    observer.next(data);
                    _this.charactersArray = data;
                });
            });
        };
        this.deletedWomen = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('deleted-women', function (data) {
                    observer.next(data);
                    _this.charactersArray = data;
                });
            });
        };
        this.correctAnswer = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('correct-answer', function (data) {
                    observer.next(data);
                });
            });
        };
        this.wrongAnswer = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('wrong-answer', function (data) {
                    observer.next(data);
                    _this.usersInGame = data.array;
                });
            });
        };
        this.gameEnd = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('game-end', function (data) {
                    observer.next(data);
                    _this.usersInGame = data.array;
                    _this.resultGame = 'win';
                    _this.winner = data.winner;
                });
            });
        };
        this.gameEndTied = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('game-end-tied', function (data) {
                    observer.next(data);
                    _this.usersInGame = data;
                    _this.winner = null;
                    _this.resultGame = 'tied';
                });
            });
        };
        this.disconnectedGame = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                _this.socket.on('disconnected-game', function (data) {
                    observer.next(data);
                    _this.usersInRoom = data.usersInRoom;
                    _this.usersInGame = data.array;
                });
            });
        };
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(this.url);
    }
    /*                               REGISTER                                 */
    MultiplayerserviceService.prototype.registerMe = function (user, password) {
        this.socket.emit('register-user', user, password);
    };
    MultiplayerserviceService.prototype.userLogin = function (user, password) {
        this.socket.emit('user-login', user, password);
    };
    /*                                 CHAT                                       */
    MultiplayerserviceService.prototype.conexionChat = function () {
        this.socket.emit('conexion-chat');
    };
    MultiplayerserviceService.prototype.sendMessage = function (message) {
        this.socket.emit('message', message);
    };
    ;
    /*                              MANAGEMENT                                     */
    MultiplayerserviceService.prototype.newCharacter = function (name, hair, eyes, skin, gender, beard) {
        this.socket.emit('new-character', name, hair, eyes, skin, gender, beard);
    };
    MultiplayerserviceService.prototype.loadMyCharacters = function () {
        this.socket.emit('load-user-characters');
    };
    MultiplayerserviceService.prototype.connectedLobby = function () {
        this.socket.emit('connected-lobby', this.roomName);
    };
    MultiplayerserviceService.prototype.usuarioReady = function () {
        this.socket.emit('usuarioReady');
    };
    /*                                 GAME                                        */
    MultiplayerserviceService.prototype.sendGameMessage = function (message) {
        this.socket.emit('game-message', message);
    };
    MultiplayerserviceService.prototype.deleteCharacter = function (card, array) {
        this.socket.emit('delete-character', card, array);
    };
    MultiplayerserviceService.prototype.deleteMen = function (array) {
        this.socket.emit('delete-men', array);
    };
    MultiplayerserviceService.prototype.deleteWomen = function (array) {
        this.socket.emit('delete-women', array);
    };
    MultiplayerserviceService.prototype.deleteBlueEyes = function (array) {
        this.socket.emit('delete-blue-eyes', array);
    };
    MultiplayerserviceService.prototype.deleteBrownEyes = function (array) {
        this.socket.emit('delete-brown-eyes', array);
    };
    MultiplayerserviceService.prototype.thisIsTheOne = function (card) {
        this.socket.emit('this-is-the-one', card, this.randomCard, this.usersInGame);
    };
    MultiplayerserviceService.prototype.backToMenu = function () {
        this.socket.emit('back-to-menu');
        this.roomName = null;
        this.usersInRoom = 0;
        this.usersReady = [];
        this.usersInGame = [];
        this.randomCard = null;
        this.resultGame = 'ingame';
        this.winner = null;
    };
    MultiplayerserviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], MultiplayerserviceService);
    return MultiplayerserviceService;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <form>\r\n    <p style=\"text-align: center\" class=\"display-4\">Register</p>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">Username</label>\r\n      <input [(ngModel)]=\"inputUsername\" name=\"inputUsername\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n             placeholder=\"Enter username\">\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">Your username must be unique.</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">Password</label>\r\n      <input *ngIf=\"inputUsername\" [(ngModel)]=\"inputPassword\" name = \"password\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input *ngIf=\"inputUsername\" [(ngModel)]=\"inputPassword2\" name = \"password2\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password again\">\r\n    </div>\r\n\r\n    <button *ngIf=\"inputPassword === inputPassword2\" (click)=\"registerMe()\" type=\"button\" class=\"btn btn-primary\">Register</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multiplayerservice_service__ = __webpack_require__("../../../../../src/app/multiplayerservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(multiplayer, route) {
        this.multiplayer = multiplayer;
        this.route = route;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.multiplayer.successfullLogin().subscribe(function () {
            _this.route.navigateByUrl('/menu');
        });
        this.multiplayer.alreadyExists().subscribe(function () { });
    };
    RegisterComponent.prototype.registerMe = function () {
        this.multiplayer.registerMe(this.inputUsername, this.inputPassword);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__multiplayerservice_service__["a" /* MultiplayerserviceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map