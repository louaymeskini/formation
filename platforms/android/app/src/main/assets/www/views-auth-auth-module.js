(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/auth.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/auth.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                <form #authForm=\"ngForm\" (ngSubmit)=\"onLogin(authForm)\">\n                  <h1>Se Connecter</h1>\n                  <p class=\"text-muted\">Voulez-vous connecter à votre compte.</p>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                    </div>\n                    <input type=\"text\"\n                           class=\"form-control\"\n                           placeholder=\"Nom Utilisateur\"\n                           autocomplete=\"username\"\n                           ngModel\n                           name=\"username\"\n                           required>\n                  </div>\n                  <div class=\"input-group mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                    </div>\n                    <input type=\"password\"\n                           class=\"form-control\"\n                           placeholder=\"Mot De Passe\"\n                           autocomplete=\"current-password\"\n                           ngModel\n                           name=\"password\"\n                           required>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button type=\"submit\"\n                              class=\"btn btn-primary px-4\"\n                              [disabled]=\"!authForm.valid\">Login\n                      </button>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                                            <button type=\"button\" [routerLink]=\"['/register']\" class=\"btn btn-link px-0\">Créer un compte</button>\n                    </div>\n                  </div>\n                </form>\n                <div *ngIf=\"error !== null\">\n                <div *ngFor=\"let alert of alertsError\">\n                  <alert [type]=\"alert.type\"\n                         [dismissOnTimeout]=\"alert.timeout\"><strong>{{ alert.msg | titlecase }}</strong></alert>\n                </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n              <div class=\"card-body text-center\">\n                <div>\n                  <h2>Inscrivez-vous</h2>\n                  <p>Vous n'avez pas encore un compte! Créez-le maintenant.</p>\n                  <button type=\"button\" class=\"btn btn-primary active mt-3\" routerLink=\"/register\">S'inscrire!</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"default\" type=\"ball-spin-clockwise\">\n  <p style=\"color: white\">Attendez SVP... </p>\n</ngx-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\" style=\"display: contents;\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-10 mx-auto\">\n\n          <div class=\"card mx-4\">\n            <form class=\"form-horizontal\" [formGroup]=\"benevoleForm\" (submit)=\"register()\">\n              <div class=\"card-body p-4\">\n                <h1>Inscription</h1>\n                <p class=\"text-muted\">Créer votre compte</p>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-6\">\n                    <div class=\"input-prepend input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                      </div>\n                      <input class=\"form-control\"\n                             [ngClass]=\"{error: ((nom.dirty || nom.touched) && nom.invalid && nom.errors)}\"\n                             size=\"16\" type=\"text\"\n                             placeholder=\"Votre Nom\"\n                             formControlName=\"nom\"\n                             required>\n                    </div>\n                    <small class=\"help-block red\"\n                           *ngIf=\"(nom.dirty || nom.touched) && nom.invalid && nom.errors\">\n                      Vérifier votre nom!</small>\n                  </div>\n                  <div class=\"form-group col-sm-6\">\n                    <div class=\"controls\">\n                      <div class=\"input-prepend input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                        </div>\n                        <input class=\"form-control\"\n                               [ngClass]=\"{error: ((prenom.dirty || prenom.touched) && prenom.invalid && prenom.errors)}\"\n                               size=\"16\"\n                               type=\"text\"\n                               placeholder=\"Votre Prenom\"\n                               formControlName=\"prenom\"\n                               required>\n                      </div>\n                      <small class=\"help-block red\"\n                             *ngIf=\"(prenom.dirty || prenom.touched) && prenom.invalid && prenom.errors\">\n                        Vérifier votre prenom!</small>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"inline-radios\">Genre</label>\n                  <div class=\"col-md-9 col-form-label\">\n                    <div class=\"col-md-4 form-check form-check-inline mr-1\" id=\"inline-radios\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"sexe\" formControlName=\"sexe\" id=\"homme\"\n                             value=\"homme\">\n                      <label class=\"form-check-label\" for=\"homme\">Homme</label>\n                    </div>\n                    <div class=\"col-md-4 form-check form-check-inline mr-1\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"sexe\" formControlName=\"sexe\" id=\"femme\"\n                             value=\"femme\">\n                      <label class=\"form-check-label\" for=\"femme\">Femme</label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-6\">\n                    <div class=\"input-prepend input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"icon-map\"></i></span>\n                      </div>\n                      <input class=\"form-control\"\n                             [ngClass]=\"{error: ((ville.dirty || ville.touched) && ville.invalid && ville.errors)}\"\n                             size=\"16\"\n                             type=\"text\"\n                             placeholder=\"Votre Ville\"\n                             formControlName=\"ville\"\n                             required>\n                    </div>\n                    <small class=\"help-block red\"\n                           *ngIf=\"(ville.dirty || ville.touched) && ville.invalid && ville.errors\">\n                      Vérifier votre ville!</small>\n                  </div>\n                  <div class=\"form-group col-sm-6\">\n                    <div class=\"input-prepend input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                      </div>\n                      <input class=\"form-control\"\n                             [ngClass]=\"{error: ((codePostale.dirty || codePostale.touched) && codePostale.invalid && codePostale.errors)}\"\n                             size=\"16\"\n                             type=\"text\"\n                             placeholder=\"Code Postale\"\n                             formControlName=\"codePostale\"\n                             required>\n                    </div>\n                    <small class=\"help-block red\"\n                           *ngIf=\"(codePostale.dirty || codePostale.touched) && codePostale.invalid && codePostale.errors\">\n                      Vérifier votre code Postale!</small>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-6\">\n                    <div class=\"input-prepend input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"icon-directions\"></i></span>\n                      </div>\n                      <input class=\"form-control\"\n                             [ngClass]=\"{error: ((adresse.dirty || adresse.touched) && adresse.invalid && adresse.errors)}\"\n                             size=\"16\"\n                             type=\"text\"\n                             placeholder=\"Votre Adresse\"\n                             formControlName=\"adresse\"\n                             required>\n                    </div>\n                    <small class=\"help-block red\"\n                           *ngIf=\"(adresse.dirty || adresse.touched) && adresse.invalid && adresse.errors\">\n                      Vérifier votre adresse!</small>\n                  </div>\n                  <div class=\"form-group col-sm-6\">\n                    <div class=\"controls\">\n                      <div class=\"input-prepend input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"icon-phone\"></i></span>\n                        </div>\n                        <input class=\"form-control\"\n                               [ngClass]=\"{error: ((tel.dirty || tel.touched) && tel.invalid && tel.errors)}\"\n                               size=\"16\" type=\"text\"\n                               placeholder=\"Votre téléphone\"\n                               formControlName=\"tel\"\n                               required>\n                      </div>\n                      <small class=\"help-block red\"\n                             *ngIf=\"(tel.dirty || tel.touched) && tel.invalid && tel.errors\">\n                        Vérifier votre Téléphone!</small>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-prepend input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                    </div>\n                    <input class=\"form-control\"\n                           [ngClass]=\"{error: ((username.dirty || username.touched) && username.invalid && username.errors)}\"\n                           size=\"16\" type=\"text\"\n                           placeholder=\"Username\"\n                           formControlName=\"username\"\n                           required>\n                  </div>\n                  <small class=\"help-block red\"\n                         *ngIf=\"(username.dirty || username.touched) && username.invalid && username.errors\">\n                    Vérifier votre username!</small>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-prepend input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">@</span>\n                    </div>\n                    <input class=\"form-control\"\n                           [ngClass]=\"{error: ((email.dirty || email.touched) && email.invalid && email.errors)}\"\n                           size=\"16\" type=\"text\"\n                           placeholder=\"Email\"\n                           formControlName=\"email\"\n                           required>\n                  </div>\n                  <small class=\"help-block red\"\n                         *ngIf=\"(email.dirty || email.touched) && email.invalid && email.errors\">\n                    Vérifier votre email!</small>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-prepend input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                    </div>\n                    <input class=\"form-control\"\n                           [ngClass]=\"{error: ((password.dirty || password.touched) && password.invalid && password.errors)}\"\n                           size=\"16\"\n                           type=\"password\"\n                           placeholder=\"Password\"\n                           formControlName=\"password\"\n                           required>\n                  </div>\n                  <small class=\"help-block red\"\n                         *ngIf=\"(password.dirty || password.touched) && password.invalid && password.errors\">\n                    Vérifier votre password!</small>\n                </div>\n\n                <div *ngFor=\"let alert of alertsError\">\n                  <alert [type]=\"alert.type\"\n                         [dismissOnTimeout]=\"alert.timeout\"><strong>{{ alert.msg }}</strong></alert>\n                </div>\n\n              </div>\n              <div class=\"card-footer p-4\">\n                <div class=\"row\">\n                  <button [disabled]=\"!benevoleForm.valid\" type=\"submit\" class=\"btn btn-block btn-success\">Create Account</button>\n\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n\n<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"default\" type=\"ball-spin-clockwise\">\n  <p style=\"color: white\">Attendez SVP... </p>\n</ngx-spinner>\n");

/***/ }),

/***/ "./src/app/views/auth/auth-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/auth/auth-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/views/auth/auth.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/views/auth/register/register.component.ts");





var routes = [{
        path: '',
        data: {
            title: 'Welcome'
        },
        children: [
            {
                path: 'login',
                component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
                data: {
                    title: 'login'
                }
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                data: {
                    title: 'register'
                }
            }
        ]
    }];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/auth/auth.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/auth/auth.component.ts ***!
  \**********************************************/
/*! exports provided: getAlertConfig, AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlertConfig", function() { return getAlertConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/views/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







function getAlertConfig() {
    return Object.assign(new ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["AlertConfig"](), { type: 'warning' });
}
var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService, router, spinnerService) {
        this.authService = authService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.error = null;
        this.alertsError = [];
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.authService.autoLogin();
        // localStorage.clear();
        // console.log('logged ', this.authService.logged);
        // console.log('type ', this.authService.role);
    };
    AuthComponent.prototype.onLogin = function (form) {
        var _this = this;
        this.spinnerService.show();
        // console.log(form);
        var username = form.value.username;
        var password = form.value.password;
        // console.log(username, password);
        this.authService.login(username, password).subscribe(function (resData) {
            console.log('component', resData);
            if (resData.status === 'success') {
                _this.spinnerService.hide();
            }
            else {
                console.log('invalidddddd');
                _this.error = 'username / mot de passe invalide !';
                _this.errorNotif(_this.error);
                _this.spinnerService.hide();
            }
        }, function (error1) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error1);
            var errorMsg = 'Erreur Interne :(';
            _this.spinnerService.hide();
            _this.errorNotif(errorMsg);
        });
        form.reset();
    };
    AuthComponent.prototype.errorNotif = function (errorMsg) {
        this.alertsError.push({
            type: 'danger',
            msg: errorMsg + ' ' + new Date().toLocaleTimeString(),
            timeout: 6000
        });
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/auth.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/views/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/views/auth/auth.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/views/auth/auth-routing.module.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/views/auth/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");









var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["AlertModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
            ],
            providers: [
                { provide: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["AlertConfig"],
                    useFactory: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["getAlertConfig"] }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/views/auth/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/auth/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-valid,\n.ng-valid.required {\n  /*background-color: lightgreen;*/\n  border: 1px solid lightgreen\n}\n\n/*.ng-invalid:not(form) {*/\n\n/*  border: 1px solid lightcoral;*/\n\n/*}*/\n\n.error {\n  border: 1px solid lightcoral;\n}\n\n.red {\n  color: lightcoral;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdDQUFnQztFQUNoQztBQUNGOztBQUVBLDBCQUEwQjs7QUFDMUIsa0NBQWtDOztBQUNsQyxJQUFJOztBQUVKO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXZhbGlkLFxuLm5nLXZhbGlkLnJlcXVpcmVkIHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuOyovXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW5cbn1cblxuLyoubmctaW52YWxpZDpub3QoZm9ybSkgeyovXG4vKiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDsqL1xuLyp9Ki9cblxuLmVycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiBsaWdodGNvcmFsO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/views/auth/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/auth/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: getAlertConfig, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlertConfig", function() { return getAlertConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_layer_store_benevole_services_benevole_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service-layer/store/benevole/services/benevole.service */ "./src/app/service-layer/store/benevole/services/benevole.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");








function getAlertConfig() {
    return Object.assign(new ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["AlertConfig"](), { type: 'warning' });
}
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(benevoleService, fb, router, spinnerService) {
        this.benevoleService = benevoleService;
        this.fb = fb;
        this.router = router;
        this.spinnerService = spinnerService;
        this.alertsError = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.validate();
    };
    RegisterComponent.prototype.validate = function () {
        this.benevoleForm = this.fb.group({
            nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[A-Za-z]+$/)]],
            prenom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[A-Za-z]+$/)]],
            sexe: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ville: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[A-Za-z]+$/)]],
            codePostale: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern((/^-?(0|[1-9]\d*)?$/)),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(9999)]],
            adresse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern((/^-?(0|[1-9]\d*)?$/)),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(20000000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(99999999)]],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]]
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log('benevoleForm ', this.benevoleForm.value);
        console.log('before', this.errorMsg);
        this.spinnerService.show();
        this.benevoleService.createBenevole(this.benevoleForm.value).subscribe(function (res) {
            console.log('res', res);
            if (res.state === 'ok') {
                _this.router.navigate(['/']);
                _this.spinnerService.hide();
            }
            else {
                var errorMsg = 'Opération Impossible :( ';
                _this.errorNotif(errorMsg);
                _this.spinnerService.hide();
                console.log('inside', _this.errorMsg);
            }
        }, function (error) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            // this.errorMsg = error.statusText;
            var errorMsg = 'Erreur Interne :(';
            _this.spinnerService.hide();
            _this.errorNotif(errorMsg);
        });
        // this.spinnerService.hide();
        // setTimeout(() => {
        //   console.log('after', this.errorMsg);
        // }, 2000);
    };
    RegisterComponent.prototype.errorNotif = function (errorMsg) {
        this.alertsError.push({
            type: 'warning',
            nom: errorMsg.toUpperCase(),
            msg: errorMsg.toUpperCase() + ' ' + new Date().toLocaleTimeString(),
            timeout: 6000
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "nom", {
        get: function () {
            return this.benevoleForm.get('nom');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "prenom", {
        get: function () {
            return this.benevoleForm.get('prenom');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "sexe", {
        get: function () {
            return this.benevoleForm.get('sexe');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "ville", {
        get: function () {
            return this.benevoleForm.get('ville');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "codePostale", {
        get: function () {
            return this.benevoleForm.get('codePostale');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "adresse", {
        get: function () {
            return this.benevoleForm.get('adresse');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "tel", {
        get: function () {
            return this.benevoleForm.get('tel');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "username", {
        get: function () {
            return this.benevoleForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.benevoleForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.benevoleForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.ctorParameters = function () { return [
        { type: _service_layer_store_benevole_services_benevole_service__WEBPACK_IMPORTED_MODULE_2__["BenevoleService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
    ]; };
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/register/register.component.html")).default,
            providers: [{ provide: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["AlertConfig"], useFactory: getAlertConfig }],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.css */ "./src/app/views/auth/register/register.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_layer_store_benevole_services_benevole_service__WEBPACK_IMPORTED_MODULE_2__["BenevoleService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-auth-auth-module.js.map