(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/add-subscription/add-subscription.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/add-subscription/add-subscription.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Add subscriptions -->\r\n<div class=\"modal\" id=\"myModal\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n            <!-- Add subscriptions Header -->\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Add subscriptions</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            </div>\r\n\r\n\r\n            <!-- Add subscriptions body -->\r\n            <div class=\"modal-body\">\r\n\r\n                <form [formGroup]=\"FormAddSub\">\r\n                    <input type=\"text\" name=\"sub-name\" formControlName=\"SubscriptionName\"\r\n                           placeholder=\"Name of subscription\"\r\n                           class=\"form-control form-control-sm my-3\">\r\n                    <div *ngIf=\"FormAddSub.controls['SubscriptionName'].invalid &&\r\n          FormAddSub.controls['SubscriptionName'].touched\">\r\n                        <p class=\"text-danger font-weight-bold ml-1 small\"> Enter a Name Subscription</p>\r\n                    </div>\r\n\r\n                    <input type=\"number\" name=\"cost\" formControlName=\"SubscriptionCost\" placeholder=\"Cost\"\r\n                           class=\"form-control form-control-sm my-3\">\r\n                    <div *ngIf=\"FormAddSub.controls['SubscriptionCost'].invalid &&\r\n           FormAddSub.controls['SubscriptionCost'].touched\">\r\n                        <p class=\"text-danger font-weight-bold ml-1 small\"> Enter a Cost Subscription</p>\r\n                    </div>\r\n\r\n                </form>\r\n            </div>\r\n\r\n            <!-- Add subscriptions footer -->\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!FormAddSub.valid\"\r\n                        (click)=\"userService.addSubscription(FormAddSub.controls['SubscriptionName'].value,\r\n                 FormAddSub.controls['SubscriptionCost'].value)\"\r\n                        data-dismiss=\"modal\" [routerLink]=\"['/products', 0]\">Add\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<button class=\"btn btn-success m-3 small\" type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n    Add subscription\r\n</button>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/admin/admin.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/admin/admin.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar [nameNavBar]=\"nameComponent\"></app-nav-bar>\r\n<app-server-error *ngIf=\"error\" [nameError]=\"'List with users not available'\"></app-server-error>\r\n\r\n\r\n<!--Table with user-->\r\n<div *ngIf=\"!error\">\r\n    <span class=\"badge badge-warning mt-3 ml-3\">Users Information</span>\r\n    <div class=\"shadow-lg p-3 bg-white ml-3 mr-3\">\r\n        <table class=\"table table-hover\">\r\n            <thead class=\"thead-light\">\r\n            <tr>\r\n                <th>Number</th>\r\n                <th>Last Name</th>\r\n                <th>Count ON Subscriptions</th>\r\n                <th>Balance</th>\r\n                <th>Status</th>\r\n                <th>User Subscription</th>\r\n                <th>Management Status</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let user of Users; let idx = index\">\r\n                <td>{{idx + usersPerPage * (page - 1) + 1}}</td>\r\n                <td><b> {{user.lastName}}</b></td>\r\n                <td><div *ngIf=\"!user.admin\">{{user?.subscriptions.length}}</div></td>\r\n                <td>\r\n                    <div *ngIf=\"!user.admin\">{{user.billingAccounts[0].amount}} $</div>\r\n                </td>\r\n                <td><p [class]=\"getClassMap(idx)\"> {{userStatus(idx)}} </p></td>\r\n                <td>\r\n                    <div *ngIf=\"!user.admin\">\r\n                        <button type=\"button\" class=\"btn btn-outline-dark btn-sm\" [routerLink]=\"['/products', user.id]\">\r\n                            User Subscription\r\n                        </button>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <div class=\"d-flex justify-content-start\">\r\n                        <app-management-users *ngIf=\"!user.admin\" [idUser]=\"idx\" [users]=\"Users\"></app-management-users>\r\n                        <div class=\"custom-control custom-switch ml-1\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"switch + {{idx}}\"\r\n                                   [(ngModel)]=\"user.admin\" name=\"example\" (click)=\"managementUser(idx)\">\r\n                            <label class=\"custom-control-label\" for=\"switch + {{idx}}\">Admin</label>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <div *ngIf=\"users && count\">\r\n        <div class=\"d-flex my-2\">\r\n            <div class=\"dropup dropright ml-3\">\r\n                <button type=\"button\" class=\"btn btn-outline-success dropdown-toggle small\" data-toggle=\"dropdown\">\r\n                    {{usersPerPage}}\r\n                </button>\r\n                <div class=\"dropdown-menu\">\r\n                    <a class=\"dropdown-item\" (click)=\"changePageSize(3)\">3</a>\r\n                    <a class=\"dropdown-item\" (click)=\"changePageSize(5)\">5</a>\r\n                    <a class=\"dropdown-item\" (click)=\"changePageSize(7)\">7</a>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"btn-group btn-group-sm ml-auto mr-3\">\r\n                <button *ngFor=\"let page of pageNumbers\" (click)=\"changePage(page)\"\r\n                        class=\"btn btn-outline-success\" [class.active]=\"page == selectedPage\">\r\n                    {{page}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <app-add-subscription></app-add-subscription>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"userService.updateSubscriptions()\"\r\n                [routerLink]=\"['/products', 0]\">View Subscriptions\r\n        </button>\r\n    </div>\r\n\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/authorization/authorization.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/authorization/authorization.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--NavBar-->\r\n<nav class=\"jnavbar navbar-expand-sm bg-dark navbar-dark d-flex\">\r\n    <a class=\"navbar-brand mr-auto\" href=\"\">Simple Charging</a>\r\n    <app-register></app-register>\r\n    <button class=\"btn btn-success btn-sm mr-5 my-1\" type=\"button\" data-toggle=\"modal\" data-target=\"#registerModal\">\r\n        Sign In\r\n    </button>\r\n</nav>\r\n\r\n<app-view-all-subscriptions></app-view-all-subscriptions>\r\n<app-server-error *ngIf=\"error\" [nameError]=\"'Authorization failed'\"></app-server-error>\r\n\r\n<!-- Sign In -->\r\n<div class=\"modal\" id=\"registerModal\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n            <!-- Register Header -->\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Sign In</h4>\r\n                <button type=\"button\" class=\"close\" id=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            </div>\r\n\r\n            <!-- Register body -->\r\n            <div class=\"modal-body\">\r\n                <p><input [(ngModel)]=\"login\" class=\"form-control\" type=\"text\" name=\"login\" placeholder=\"Login\"></p>\r\n                <p><input [(ngModel)]=\"passwd\" class=\"form-control\" type=\"password\" name=\"password\"\r\n                          placeholder=\"Password\"></p>\r\n                <div *ngIf=\"emptyField\">\r\n                    <p class=\"text-danger small font-weight-bold\">Enter the login and password</p>\r\n                </div>\r\n                <div *ngIf=\"failedData\">\r\n                    <p class=\"text-danger small font-weight-bold\" data-dismiss=\"modal\">Invalid login or password</p>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Register footer -->\r\n            <div class=\"modal-footer\">\r\n                <button type=\"submit\" class=\"btn btn-success btn-sm ml-1\" (click)=\"authorization()\">\r\n                    Submit\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/billingaccount/billingaccount.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/billingaccount/billingaccount.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar [nameNavBar]=\"nameComponent\"></app-nav-bar>\r\n<app-server-error *ngIf=\"error\" [nameError]=\"'Account not available'\"></app-server-error>\r\n\r\n<div *ngIf=\"!error\">\r\n    <!-- Balance -->\r\n    <div class=\"d-flex\">\r\n        <div class=\"card m-3\">\r\n            <div class=\"card-body\">\r\n                <div><label>Number card: <b>{{User?.billingAccounts[0].numberCard}}</b></label></div>\r\n                <div class=\"balance\">\r\n                    <label>Balance on account: <b>{{User?.billingAccounts[0].amount}} $</b></label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Transfer of money -->\r\n    <span class=\"badge badge-warning mt-3 ml-3\">Transfer of money</span>\r\n    <div class=\"d-flex\">\r\n        <div class=\"shadow-lg p-4 mb-4 bg-white ml-3 mr-3\">\r\n            <input [(ngModel)]=\"amountTransfer\" type=\"number\" name=\"number-card\"\r\n                   placeholder=\"Amount\" class=\"form-control form-controlmb-3 my-3\">\r\n            <button class=\"btn btn-success\" type=\"button\" (click)=\"transferMoney()\">Transfer</button>\r\n            <div *ngIf=\"emptyField\">\r\n                <p class=\"text-danger font-weight-bold small my-1\">Enter the number card and amount</p>\r\n            </div>\r\n            <div *ngIf=\"!correctData\">\r\n                <p class=\"text-danger font-weight-bold small my-1\">The number entered is not correct</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <button class=\"btn btn-success btn-sm ml-3\" type=\"button\" (click)=\"usersService.updateUser()\"\r\n            routerLink=\"/account\">Return to account\r\n    </button>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/information/information.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/information/information.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar [nameNavBar]=\"nameComponent\"></app-nav-bar>\r\n<app-server-error *ngIf=\"error\" [nameError]=\"'Account not available'\"></app-server-error>\r\n\r\n<div *ngIf=\"error\" class = \"d-flex justify-content-center my-5\" >\r\n    <div class=\"spinner-grow text-success my-5\"></div>\r\n    <div class=\"spinner-grow text-info my-5\"></div>\r\n    <div class=\"spinner-grow text-warning my-5\"></div>\r\n</div>\r\n\r\n<div *ngIf=\"!error\">\r\n    <!--User Information-->\r\n    <span class=\"badge badge-warning mt-3 ml-3\">User Information</span>\r\n    <div class=\"shadow-lg p-4 mb-4 bg-white ml-3 mr-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"last-name\">\r\n                    <label>Last Name: <b> {{User?.lastName}} </b> </label>\r\n                </div>\r\n                <div class=\"first-name\">\r\n                    <label>First Name: <b> {{User?.firstName}} </b> </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <label>Balance: <b> {{User?.billingAccounts[0].amount}} $</b> </label>\r\n                <div>\r\n                    <button class=\"btn btn-success\" type=\"button\" routerLink=\"/billingaccount\">E-wallet</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <app-subscription [user]=\"User\"></app-subscription>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/management-subscription/management-subscription.component.html": 
        /*!******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/management-subscription/management-subscription.component.html ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user\">\r\n\r\n    <div class=\"row\">\r\n        <div *ngIf=\"!subscription.status\">\r\n            <button type=\"button\" class=\"btn btn-outline-success btn-sm\" (click)=\"changeStatus()\"\r\n                    [disabled]=\"user.blocked\">ON\r\n            </button>\r\n        </div>\r\n        <div *ngIf=\"subscription.status\">\r\n            <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"changeStatus()\"\r\n                    [disabled]=\"user.blocked\">OFF\r\n            </button>\r\n        </div>\r\n\r\n\r\n        <div class=\"d-inline-flex\" *ngIf=\"!subscription.status\">\r\n            <p class=\"text-black-50 ml-3 font-italic font-weight-bold mr-2\">Period:</p>\r\n            <div class=\"dropdown dropright\">\r\n                <button type=\"button\" class=\"btn btn-outline-dark dropdown-toggle btn-sm\" data-toggle=\"dropdown\"\r\n                        [disabled]=\"user.blocked\">\r\n                    {{getPeriodOn()}} min\r\n                </button>\r\n                <div class=\"dropdown-menu dropdown-menu-sm-left\">\r\n                    <a class=\"dropdown-item\" (click)=\"setPeriodOn(1)\">1 min</a>\r\n                    <a class=\"dropdown-item\" (click)=\"setPeriodOn(5)\">5 min</a>\r\n                    <a class=\"dropdown-item\" (click)=\"setPeriodOn(10)\">10 min</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/management-users/management-users.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/management-users/management-users.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" [class]=getClassButton() (click)=\"invertUserStatus()\">\r\n  {{getNameManagementButton()}}\r\n</button>\r\n\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/nav-bar/nav-bar.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/nav-bar/nav-bar.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"jnavbar navbar-expand-sm bg-dark navbar-dark d-flex\">\r\n  <a class=\"navbar-brand ml-2 mr-auto\" routerLink=\"**\">{{nameNavBar}}</a>\r\n  <button class=\"btn btn-success btn-sm mr-5 my-1\" type=\"button\" (click)=\"logOut()\"\r\n          routerLink=\"/**\">Exit</button>\r\n</nav>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--Register users-->\r\n\r\n<button type=\"button\" class=\"btn btn-secondary btn-sm my-1 mr-2\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n    Register\r\n</button>\r\n\r\n<!-- Register -->\r\n<div class=\"modal\" id=\"myModal\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n            <!-- Register Header -->\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Register</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" id = \"closeRegister\">&times;</button>\r\n            </div>\r\n\r\n            <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"onSubmit()\">\r\n                <!-- Register body -->\r\n                <div class=\"modal-body\">\r\n\r\n\r\n                    <input type=\"text\" name=\"firstname\" formControlName=\"firstName\" placeholder=\"First Name\"\r\n                           class=\"form-control form-control-sm my-3\">\r\n                    <div *ngIf=\"myForm.controls['firstName'].invalid && myForm.controls['firstName'].touched\">\r\n                        <p class=\"text-danger font-weight-bold ml-1 small\"> Enter a First Name</p>\r\n                    </div>\r\n\r\n                    <input type=\"text\" name=\"lname\" formControlName=\"lastName\" placeholder=\"Last Name\"\r\n                           class=\"form-control form-control-sm my-3\">\r\n                    <div *ngIf=\"myForm.controls['lastName'].invalid && myForm.controls['lastName'].touched\">\r\n                        <p class=\"text-danger font-weight-bold small ml-1\"> Enter a Last Name</p>\r\n                    </div>\r\n\r\n                    <input type=\"text\" id=\"card\" name=\"card\" formControlName=\"numCard\" placeholder=\"Number of card\"\r\n                           class=\"form-control form-control-sm my-3\" [textMask]=\"{mask: mask}\">\r\n                    <div *ngIf=\"myForm.controls['numCard'].invalid && myForm.controls['numCard'].touched\">\r\n                        <p class=\"text-danger font-weight-bold small ml-1\"> Card number entered incorrectly, example:\r\n                            **** **** **** ****</p>\r\n                    </div>\r\n\r\n                    <input type=\"email\" name=\"email\" formControlName=\"userEmail\" placeholder=\"Email\"\r\n                           class=\"form-control form-control-sm my-3\">\r\n                    <div *ngIf=\"myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched\">\r\n                        <p class=\"text-danger font-weight-bold small ml-1\"> Email entered incorrectly, example:\r\n                            example@mail.com</p>\r\n                    </div>\r\n\r\n                    <input type=\"text\" name=\"login\" formControlName=\"userLogin\" placeholder=\"Login\"\r\n                           class=\"form-control form-control-sm my-3\">\r\n                    <div *ngIf=\"myForm.controls['userLogin'].invalid && myForm.controls['userLogin'].touched\">\r\n                        <p class=\"text-danger font-weight-bold small ml-1\"> Enter a Login </p>\r\n                    </div>\r\n\r\n\r\n                    <input type=\"password\" formControlName=\"userPassword\" name=\"passwd\" placeholder=\"Password\"\r\n                           class=\"form-control form-control-sm my-3\">\r\n                    <div *ngIf=\"myForm.controls['userPassword'].invalid && myForm.controls['userPassword'].touched\">\r\n                        <p class=\"text-danger font-weight-bold small ml-1\"> Enter a Password</p>\r\n                    </div>\r\n\r\n                    <input type=\"password\" formControlName=\"reUserPassword\" name=\"passwd1\"\r\n                           placeholder=\"Re-entry Password\"\r\n                           class=\"form-control form-control-sm my-3\">\r\n\r\n                    <script>$('#myModal').modal('hide')</script>\r\n\r\n                    <div *ngIf=\"passwordOK(myForm.controls['userPassword'].value, myForm.controls['reUserPassword'].value)\">\r\n                        <p class=\"text-danger font-weight-bold small ml-1\"> Password dont equals</p>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"failedLogin\"><p class=\"text-danger font-weight-bold small ml-1\"> Enter a different\r\n                        login</p></div>\r\n                </div>\r\n            </form>\r\n\r\n            <!-- Register footer -->\r\n            <div class=\"modal-footer\">\r\n                <button type=\"submit\" [disabled]=\"!myForm.valid || !canRegister\" [class]=\"getClassMap()\"\r\n                        (click)=\"Register(myForm.controls['firstName'].value, myForm.controls['lastName'].value,\r\n                myForm.controls['userLogin'].value, myForm.controls['userPassword'].value,\r\n                myForm.controls['numCard'].value, myForm.controls['userEmail'].value)\">\r\n                    OK\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/server-error/server-error.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/server-error/server-error.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-end\">\r\n    <div class=\"alert alert-danger\">\r\n        <strong>Server Error! </strong> {{nameError}}\r\n    </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/subscription/subscription.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/subscription/subscription.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<span class=\"badge badge-info ml-3\">Subscriptions</span>\r\n<app-server-error *ngIf=\"error\" [nameError]=\"'Subscriptions not available'\"></app-server-error>\r\n\r\n<div class=\"d-flex\">\r\n    <p><input type=\"text\" class=\"form-control form-control-sm ml-3\" [(ngModel)] = \"findSubscriptions\"\r\n              placeholder=\"Find subscription\"></p>\r\n</div>\r\n<!--Subscription-->\r\n<div *ngIf=\"countProducts && products && !error && user\">\r\n\r\n    <div class=\"shadow-lg p-4 bg-white mb-2 ml-3 mr-3\">\r\n        <table class=\"table table-hover\">\r\n            <thead class=\"thead-light\">\r\n            <tr>\r\n                <th>Number</th>\r\n                <th>Name of subscription</th>\r\n                <th>Status</th>\r\n                <th>Cost (1 min)</th>\r\n                <th>Time left</th>\r\n                <th>Management</th>\r\n                <th></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let product of products; let idx = index\">\r\n                <td>{{idx + productPerPage * (page - 1) + 1}}</td>\r\n                <td>{{product.name}}</td>\r\n                <td>\r\n                    <div *ngIf=product.id>\r\n                        <p [class]=\"getClassMap()\">\r\n                            Subscription <b> {{getStatusSubscription(idx)}}</b></p>\r\n                    </div>\r\n                </td>\r\n                <td>{{product.cost}} $</td>\r\n                <td>{{product.period}} min</td>\r\n                <td>\r\n                    <app-management-subscription\r\n                            [subscription]=\"product\" [user]=\"user\"></app-management-subscription>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"!findSubscriptions\" class=\"d-flex\">\r\n        <div class=\"dropup dropright ml-3\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary dropdown-toggle small\" data-toggle=\"dropdown\">\r\n                {{productPerPage}}\r\n            </button>\r\n            <div class=\"dropdown-menu\">\r\n                <a class=\"dropdown-item\" (click)=\"changePageSize(3)\">3</a>\r\n                <a class=\"dropdown-item\" (click)=\"changePageSize(5)\">5</a>\r\n                <a class=\"dropdown-item\" (click)=\"changePageSize(7)\">7</a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn-group btn-group-sm ml-auto mr-3\">\r\n            <button *ngFor=\"let page of pageNumbers\" (click)=\"changePage(page)\"\r\n                    class=\"btn btn-outline-primary\" [class.active]=\"page == selectedPage\">\r\n                {{page}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/view-all-subscriptions/view-all-subscriptions.component.html": 
        /*!****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/view-all-subscriptions/view-all-subscriptions.component.html ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-end\">\r\n    <div *ngIf=\"error\" class=\"alert alert-danger\">\r\n        <strong>Server Error!</strong> Subscriptions not available\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"!error\" class=\"alert alert-secondary mr-3 ml-3 my-3\">\r\n    <h2>Subscriptions Charging Service</h2>\r\n</div>\r\n<div *ngIf=\"!error\" class=\"shadow-lg bg-white mr-3 ml-3\">\r\n    <table class=\"table table-sm table-borderless\">\r\n        <thead class=\"thead-light\">\r\n        <tr>\r\n            <th>Number</th>\r\n            <th>Name of subscription</th>\r\n            <th>Cost $</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let product of products; let idx = index\">\r\n            <td>{{idx + productPerPage * (page - 1) + 1}}</td>\r\n            <td>\r\n                <div><b>{{product.name}}</b></div>\r\n            </td>\r\n            <td>{{product.cost}}</td>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!error && countProducts && products\">\r\n\r\n    <div class=\"d-flex flex-row-reverse\">\r\n\r\n        <div class=\"btn-group btn-group-sm ml-auto mr-3\">\r\n            <button *ngFor=\"let page of pageNumbers\" (click)=\"changePage(page)\"\r\n                    class=\"btn btn-outline-success\" [class.active]=\"page == selectedPage\">\r\n                {{page}}\r\n            </button>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/view-subscription-admin/view-subscription-admin.component.html": 
        /*!******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/view-subscription-admin/view-subscription-admin.component.html ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-server-error *ngIf=\"error\" [nameError]=\"'Subscriptions not available'\"></app-server-error>\r\n\r\n<span class=\"badge badge-info ml-3\">Subscriptions</span>\r\n<div *ngIf=\"!error\" class=\"shadow-lg p-4 mb-4 bg-white ml-3 mr-3\">\r\n    <table class=\"table\">\r\n        <thead class=\"thead-light\">\r\n        <tr>\r\n            <th>Number</th>\r\n            <th>Name of subscription</th>\r\n            <th>\r\n                <div *ngIf=\"id > 0\">Status</div>\r\n            </th>\r\n            <th>Cost</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let product of products; let idx = index\">\r\n            <td>{{idx + productPerPage * (page - 1) + 1}}</td>\r\n            <td>{{product.name}}</td>\r\n            <td>\r\n                <div *ngIf=\"id > 0\">\r\n                    <div *ngIf=\"product.status\"><b>ON</b></div>\r\n                    <div *ngIf=\"!product.status\"><b>OFF</b></div>\r\n                </div>\r\n            </td>\r\n            <td>{{product.cost}}</td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<div *ngIf=\"countProducts && products\">\r\n    <div class=\"d-flex\">\r\n        <div class=\"dropup dropright ml-3\">\r\n            <button type=\"button\" class=\"btn btn-outline-danger dropdown-toggle small\" data-toggle=\"dropdown\">\r\n                {{productPerPage}}\r\n            </button>\r\n            <div class=\"dropdown-menu\">\r\n                <a class=\"dropdown-item\" (click)=\"changePageSize(3)\">3</a>\r\n                <a class=\"dropdown-item\" (click)=\"changePageSize(5)\">5</a>\r\n                <a class=\"dropdown-item\" (click)=\"changePageSize(7)\">7</a>\r\n                <a class=\"dropdown-item\" (click)=\"changePageSize(10)\">10</a>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn-group btn-group-sm ml-auto mr-3\">\r\n            <button *ngFor=\"let page of pageNumbers\" (click)=\"changePage(page)\"\r\n                    class=\"btn btn-outline-danger\" [class.active]=\"page == selectedPage\">\r\n                {{page}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<button class=\"btn btn-danger btn-sm ml-3 my-3\" type=\"button\" routerLink=\"/admin\">Return to Admin Account</button>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/HttpService.ts": 
        /*!********************************!*\
          !*** ./src/app/HttpService.ts ***!
          \********************************/
        /*! exports provided: HttpService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function () { return HttpService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var HttpService = /** @class */ (function () {
                function HttpService(httpClient) {
                    this.httpClient = httpClient;
                }
                HttpService.prototype.get = function (url) {
                    return this.httpClient.get(url);
                };
                return HttpService;
            }());
            HttpService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], HttpService);
            /***/ 
        }),
        /***/ "./src/app/account/account.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/account/account.module.ts ***!
          \*******************************************/
        /*! exports provided: AccountModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function () { return AccountModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription/subscription.component */ "./src/app/account/subscription/subscription.component.ts");
            /* harmony import */ var _information_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./information/information.component */ "./src/app/account/information/information.component.ts");
            /* harmony import */ var _model_model_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/model.module */ "./src/app/model/model.module.ts");
            /* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authorization/authorization.component */ "./src/app/account/authorization/authorization.component.ts");
            /* harmony import */ var _billingaccount_billingaccount_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./billingaccount/billingaccount.component */ "./src/app/account/billingaccount/billingaccount.component.ts");
            /* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/account/admin/admin.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _management_subscription_management_subscription_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./management-subscription/management-subscription.component */ "./src/app/account/management-subscription/management-subscription.component.ts");
            /* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/account/nav-bar/nav-bar.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/account/register/register.component.ts");
            /* harmony import */ var _management_users_management_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./management-users/management-users.component */ "./src/app/account/management-users/management-users.component.ts");
            /* harmony import */ var _view_subscription_admin_view_subscription_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view-subscription-admin/view-subscription-admin.component */ "./src/app/account/view-subscription-admin/view-subscription-admin.component.ts");
            /* harmony import */ var _add_subscription_add_subscription_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-subscription/add-subscription.component */ "./src/app/account/add-subscription/add-subscription.component.ts");
            /* harmony import */ var _view_all_subscriptions_view_all_subscriptions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view-all-subscriptions/view-all-subscriptions.component */ "./src/app/account/view-all-subscriptions/view-all-subscriptions.component.ts");
            /* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
            /* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/account/server-error/server-error.component.ts");
            var AccountModule = /** @class */ (function () {
                function AccountModule() {
                }
                return AccountModule;
            }());
            AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _model_model_module__WEBPACK_IMPORTED_MODULE_7__["ModelModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        angular2_text_mask__WEBPACK_IMPORTED_MODULE_19__["TextMaskModule"]
                    ],
                    declarations: [_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_5__["SubscriptionComponent"], _information_information_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"], _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_8__["AuthorizationComponent"], _billingaccount_billingaccount_component__WEBPACK_IMPORTED_MODULE_9__["BillingaccountComponent"],
                        _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"], _management_subscription_management_subscription_component__WEBPACK_IMPORTED_MODULE_12__["ManagementSubscriptionComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], _management_users_management_users_component__WEBPACK_IMPORTED_MODULE_15__["ManagementUsersComponent"], _view_subscription_admin_view_subscription_admin_component__WEBPACK_IMPORTED_MODULE_16__["ViewSubscriptionAdminComponent"], _add_subscription_add_subscription_component__WEBPACK_IMPORTED_MODULE_17__["AddSubscriptionComponent"], _view_all_subscriptions_view_all_subscriptions_component__WEBPACK_IMPORTED_MODULE_18__["ViewAllSubscriptionsComponent"], _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_20__["ServerErrorComponent"]],
                    exports: [_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_5__["SubscriptionComponent"], _information_information_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"], _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_8__["AuthorizationComponent"],
                        _billingaccount_billingaccount_component__WEBPACK_IMPORTED_MODULE_9__["BillingaccountComponent"]]
                })
            ], AccountModule);
            /***/ 
        }),
        /***/ "./src/app/account/add-subscription/add-subscription.component.css": 
        /*!*************************************************************************!*\
          !*** ./src/app/account/add-subscription/add-subscription.component.css ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWRkLXN1YnNjcmlwdGlvbi9hZGQtc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/account/add-subscription/add-subscription.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/account/add-subscription/add-subscription.component.ts ***!
          \************************************************************************/
        /*! exports provided: AddSubscriptionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubscriptionComponent", function () { return AddSubscriptionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _model_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/user.service */ "./src/app/model/user.service.ts");
            var AddSubscriptionComponent = /** @class */ (function () {
                function AddSubscriptionComponent(userService) {
                    this.userService = userService;
                    this.FormAddSub = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        SubscriptionName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        SubscriptionCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                    });
                }
                AddSubscriptionComponent.prototype.ngOnInit = function () {
                };
                return AddSubscriptionComponent;
            }());
            AddSubscriptionComponent.ctorParameters = function () { return [
                { type: _model_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            AddSubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-subscription',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-subscription.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/add-subscription/add-subscription.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-subscription.component.css */ "./src/app/account/add-subscription/add-subscription.component.css")).default]
                })
            ], AddSubscriptionComponent);
            /***/ 
        }),
        /***/ "./src/app/account/admin/admin.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/account/admin/admin.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/account/admin/admin.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/account/admin/admin.component.ts ***!
          \**************************************************/
        /*! exports provided: AdminComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function () { return AdminComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _model_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/user.service */ "./src/app/model/user.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var AdminComponent = /** @class */ (function () {
                function AdminComponent(userService) {
                    this.userService = userService;
                    this.nameComponent = 'Admin Account';
                    this.usersStorage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
                    this.page = 1;
                    this.usersPerPage = 7;
                    this.selectedPage = 1;
                    this.error = false;
                }
                AdminComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.idInterval = setInterval(function () {
                        _this.userService.updateUser();
                        _this.error = false;
                    }, 5000);
                };
                Object.defineProperty(AdminComponent.prototype, "Users", {
                    get: function () {
                        var _this = this;
                        this.usersStorage.add(this.userService.getUsers((this.page - 1) * this.usersPerPage, this.usersPerPage).subscribe(function (users) {
                            _this.users = users;
                        }, function (err) {
                            _this.error = true;
                        }));
                        this.usersStorage.add(this.userService.countUsers().subscribe(function (count) {
                            _this.count = count;
                        }, function (err) {
                            _this.error = true;
                        }));
                        return this.users;
                    },
                    enumerable: true,
                    configurable: true
                });
                AdminComponent.prototype.userStatus = function (id) {
                    if (!this.users[id].blocked && !this.users[id].admin) {
                        return 'Active';
                    }
                    else if (this.users[id].blocked && !this.users[id].admin) {
                        return 'Blocked';
                    }
                    else {
                        return "Admin";
                    }
                };
                AdminComponent.prototype.getClassMap = function (id) {
                    if (this.userStatus(id) === 'Active' && !this.users[id].admin) {
                        return 'text-success font-weight-bold';
                    }
                    else if (this.userStatus(id) !== 'Active' && !this.users[id].admin) {
                        return 'text-danger font-weight-bold';
                    }
                    else {
                        return "text-primary font-weight-bold";
                    }
                };
                // Pagination
                // Changing page number
                AdminComponent.prototype.changePage = function (newPage) {
                    this.page = newPage;
                    this.selectedPage = this.page;
                    this.users = null;
                    this.userService.updateUser();
                };
                // Changing the number of items on the page
                AdminComponent.prototype.changePageSize = function (newSize) {
                    this.usersPerPage = Number(newSize);
                    this.userService.updateUser();
                };
                Object.defineProperty(AdminComponent.prototype, "pageNumbers", {
                    // Calculating page number
                    get: function () {
                        return Array(Math.ceil(this.count / this.usersPerPage))
                            .fill(0).map(function (x, i) { return i + 1; });
                    },
                    enumerable: true,
                    configurable: true
                });
                AdminComponent.prototype.managementUser = function (id) {
                    this.userService.managementAdmin(this.users[id].id, !this.users[id].admin);
                };
                AdminComponent.prototype.ngOnDestroy = function () {
                    this.usersStorage.unsubscribe();
                    clearInterval(this.idInterval);
                };
                return AdminComponent;
            }());
            AdminComponent.ctorParameters = function () { return [
                { type: _model_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/admin/admin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/account/admin/admin.component.css")).default]
                })
            ], AdminComponent);
            /***/ 
        }),
        /***/ "./src/app/account/auth.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/account/auth.service.ts ***!
          \*****************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AuthService = /** @class */ (function () {
                function AuthService(http) {
                    this.http = http;
                }
                AuthService.prototype.attemptAuth = function (username, password) {
                    var credentials = { username: username, password: password };
                    return this.http.post('http://localhost:8080/token/generate-token', credentials);
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/account/authorization/authorization.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/account/authorization/authorization.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/account/authorization/authorization.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/account/authorization/authorization.component.ts ***!
          \******************************************************************/
        /*! exports provided: AuthorizationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationComponent", function () { return AuthorizationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _model_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/user.service */ "./src/app/model/user.service.ts");
            /* harmony import */ var _model_Users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/Users */ "./src/app/model/Users.ts");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/account/auth.service.ts");
            var AuthorizationComponent = /** @class */ (function () {
                function AuthorizationComponent(router, userService, authService) {
                    this.router = router;
                    this.userService = userService;
                    this.authService = authService;
                    this.buttonReturn = false;
                }
                AuthorizationComponent.prototype.ngOnInit = function () {
                    var user = sessionStorage.getItem('username');
                    var id = sessionStorage.getItem('id');
                    if (id !== null) {
                        this.buttonReturn = true;
                        this.userService.idUser = Number(id);
                        this.userService.updateSubscriptions();
                        this.userService.updateUser();
                        if (Number(id) === 0) {
                            this.router.navigateByUrl('/admin');
                        }
                        else if (Number(id) > 0) {
                            this.router.navigateByUrl('/account');
                        }
                    }
                };
                // Authorization User or Admin
                AuthorizationComponent.prototype.authorization = function () {
                    var _this = this;
                    this.emptyField = false;
                    this.failedData = false;
                    if (this.login != null && this.passwd != null) {
                        // Create User for api
                        var user_1 = new _model_Users__WEBPACK_IMPORTED_MODULE_4__["Users"](null, null, this.login, this.passwd, null, null);
                        this.authService.attemptAuth(this.login, this.passwd).subscribe(function (data) {
                            //this.token.saveToken(data.token);
                            //this.router.navigate(['user']);
                            sessionStorage.setItem('username', _this.login);
                            var tokenStr = 'Bearer ' + data.token;
                            sessionStorage.setItem('token', tokenStr);
                            _this.userService.authorizationUser(user_1).subscribe(function (id) {
                                console.log("id:", id);
                                if (id === 0) {
                                    _this.userService.updateUser();
                                    _this.router.navigateByUrl('/admin');
                                    document.getElementById("close").click();
                                    sessionStorage.setItem('id', id.toString());
                                }
                                else if (id === -1) {
                                    _this.failedData = true;
                                }
                                else if (id > 0) {
                                    _this.userService.updateUser();
                                    _this.userService.updateSubscriptions();
                                    _this.router.navigateByUrl('/account');
                                    document.getElementById("close").click();
                                    sessionStorage.setItem('id', id.toString());
                                }
                                else {
                                    _this.emptyField = true;
                                }
                            });
                        }, function (err) {
                            console.log(err);
                            //this.error = true;
                            _this.failedData = true;
                        });
                    }
                };
                return AuthorizationComponent;
            }());
            AuthorizationComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _model_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
            ]; };
            AuthorizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-authorization',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./authorization.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/authorization/authorization.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./authorization.component.css */ "./src/app/account/authorization/authorization.component.css")).default]
                })
            ], AuthorizationComponent);
            /***/ 
        }),
        /***/ "./src/app/account/billingaccount/billingaccount.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/account/billingaccount/billingaccount.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYmlsbGluZ2FjY291bnQvYmlsbGluZ2FjY291bnQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/account/billingaccount/billingaccount.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/account/billingaccount/billingaccount.component.ts ***!
          \********************************************************************/
        /*! exports provided: BillingaccountComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingaccountComponent", function () { return BillingaccountComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _model_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/user.service */ "./src/app/model/user.service.ts");
            var BillingaccountComponent = /** @class */ (function () {
                function BillingaccountComponent(usersService) {
                    this.usersService = usersService;
                    this.nameComponent = 'Billing Account';
                    this.correctData = true;
                    this.billingStorage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
                }
                BillingaccountComponent.prototype.ngOnInit = function () {
                    this.usersService.updateUser();
                };
                Object.defineProperty(BillingaccountComponent.prototype, "User", {
                    get: function () {
                        var _this = this;
                        this.billingStorage.add(this.usersService.getUser(this.usersService.idUser)
                            .subscribe(function (user) {
                            _this.user = user;
                        }, function (err) {
                            _this.error = true;
                        }));
                        return this.user;
                    },
                    enumerable: true,
                    configurable: true
                });
                BillingaccountComponent.prototype.transferMoney = function () {
                    var _this = this;
                    if (this.amountTransfer == null) {
                        this.emptyField = true;
                    }
                    else {
                        this.user.amountTransfer = this.amountTransfer;
                        this.billingStorage.add(this.usersService.transferMoney(this.user, this.user.id)
                            .subscribe(function (transfer) {
                            if (transfer === 1) {
                                _this.correctData = true;
                            }
                            else {
                                _this.correctData = false;
                            }
                            _this.emptyField = false;
                            _this.usersService.updateUser();
                        }, function (err) {
                            _this.error = true;
                        }));
                    }
                    this.amountTransfer = null;
                };
                BillingaccountComponent.prototype.ngOnDestroy = function () {
                    this.billingStorage.unsubscribe();
                };
                return BillingaccountComponent;
            }());
            BillingaccountComponent.ctorParameters = function () { return [
                { type: _model_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BillingaccountComponent.prototype, "user", void 0);
            BillingaccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-billingaccount',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./billingaccount.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/billingaccount/billingaccount.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./billingaccount.component.css */ "./src/app/account/billingaccount/billingaccount.component.css")).default]
                })
            ], BillingaccountComponent);
            /***/ 
        }),
        /***/ "./src/app/account/information/information.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/account/information/information.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/account/information/information.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/account/information/information.component.ts ***!
          \**************************************************************/
        /*! exports provided: InformationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function () { return InformationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _model_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/user.service */ "./src/app/model/user.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var InformationComponent = /** @class */ (function () {
                function InformationComponent(userService) {
                    this.userService = userService;
                    this.nameComponent = 'Account';
                    this.userStorage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
                }
                InformationComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.idInterval = setInterval(function () {
                        _this.userService.updateUser();
                        _this.error = false;
                    }, 5000);
                };
                Object.defineProperty(InformationComponent.prototype, "User", {
                    get: function () {
                        var _this = this;
                        this.userStorage.add(this.userService.getUser(this.userService.idUser).subscribe(function (user) {
                            _this.user = user;
                        }, function (err) {
                            console.log(err);
                            _this.error = true;
                        }));
                        return this.user;
                    },
                    enumerable: true,
                    configurable: true
                });
                InformationComponent.prototype.isUserLoggedIn = function () {
                    var user = sessionStorage.getItem('username');
                    //console.log(!(user === null))
                    return (user === null);
                };
                InformationComponent.prototype.ngOnDestroy = function () {
                    this.userStorage.unsubscribe();
                    clearInterval(this.idInterval);
                };
                return InformationComponent;
            }());
            InformationComponent.ctorParameters = function () { return [
                { type: _model_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            InformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-information',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/information/information.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./information.component.css */ "./src/app/account/information/information.component.css")).default]
                })
            ], InformationComponent);
            /***/ 
        }),
        /***/ "./src/app/account/management-subscription/management-subscription.component.css": 
        /*!***************************************************************************************!*\
          !*** ./src/app/account/management-subscription/management-subscription.component.css ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbWFuYWdlbWVudC1zdWJzY3JpcHRpb24vbWFuYWdlbWVudC1zdWJzY3JpcHRpb24uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/account/management-subscription/management-subscription.component.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/account/management-subscription/management-subscription.component.ts ***!
          \**************************************************************************************/
        /*! exports provided: ManagementSubscriptionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementSubscriptionComponent", function () { return ManagementSubscriptionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _model_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/user.service */ "./src/app/model/user.service.ts");
            var ManagementSubscriptionComponent = /** @class */ (function () {
                function ManagementSubscriptionComponent(userService) {
                    this.userService = userService;
                    this.periodOn = 1;
                }
                ManagementSubscriptionComponent.prototype.ngOnInit = function () { };
                // Change products status
                ManagementSubscriptionComponent.prototype.changeStatus = function () {
                    if (this.subscription.status === true) {
                        this.periodOn = 1;
                    }
                    this.subscription.period = this.periodOn;
                    this.subscription.status = !this.subscription.status;
                    this.userService.modifyUserSubscription(this.subscription);
                };
                ManagementSubscriptionComponent.prototype.setPeriodOn = function (period) {
                    this.periodOn = period;
                };
                ManagementSubscriptionComponent.prototype.getPeriodOn = function () {
                    return this.periodOn;
                };
                return ManagementSubscriptionComponent;
            }());
            ManagementSubscriptionComponent.ctorParameters = function () { return [
                { type: _model_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ManagementSubscriptionComponent.prototype, "subscription", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ManagementSubscriptionComponent.prototype, "user", void 0);
            ManagementSubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-management-subscription',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./management-subscription.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/management-subscription/management-subscription.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./management-subscription.component.css */ "./src/app/account/management-subscription/management-subscription.component.css")).default]
                })
            ], ManagementSubscriptionComponent);
            /***/ 
        }),
        /***/ "./src/app/account/management-users/management-users.component.css": 
        /*!*************************************************************************!*\
          !*** ./src/app/account/management-users/management-users.component.css ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbWFuYWdlbWVudC11c2Vycy9tYW5hZ2VtZW50LXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/account/management-users/management-users.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/account/management-users/management-users.component.ts ***!
          \************************************************************************/
        /*! exports provided: ManagementUsersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementUsersComponent", function () { return ManagementUsersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _model_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/user.service */ "./src/app/model/user.service.ts");
            var ManagementUsersComponent = /** @class */ (function () {
                function ManagementUsersComponent(userService) {
                    this.userService = userService;
                }
                ManagementUsersComponent.prototype.ngOnInit = function () { };
                ManagementUsersComponent.prototype.invertUserStatus = function () {
                    this.users[this.idUser].blocked = !this.users[this.idUser].blocked;
                    this.userService.modifyUser(this.idUser, this.users[this.idUser]);
                };
                ManagementUsersComponent.prototype.getClassButton = function () {
                    return (this.users[this.idUser].blocked === true ? 'btn btn-outline-success btn-sm' :
                        'btn btn-outline-danger btn-sm');
                };
                ManagementUsersComponent.prototype.getNameManagementButton = function () {
                    if (this.users[this.idUser].blocked === false) {
                        return 'Blocked';
                    }
                    else {
                        return 'Activate';
                    }
                };
                return ManagementUsersComponent;
            }());
            ManagementUsersComponent.ctorParameters = function () { return [
                { type: _model_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ManagementUsersComponent.prototype, "idUser", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ManagementUsersComponent.prototype, "users", void 0);
            ManagementUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-management-users',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./management-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/management-users/management-users.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./management-users.component.css */ "./src/app/account/management-users/management-users.component.css")).default]
                })
            ], ManagementUsersComponent);
            /***/ 
        }),
        /***/ "./src/app/account/nav-bar/nav-bar.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/account/nav-bar/nav-bar.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/account/nav-bar/nav-bar.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/account/nav-bar/nav-bar.component.ts ***!
          \******************************************************/
        /*! exports provided: NavBarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () { return NavBarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavBarComponent = /** @class */ (function () {
                function NavBarComponent() {
                }
                NavBarComponent.prototype.ngOnInit = function () {
                };
                NavBarComponent.prototype.logOut = function () {
                    sessionStorage.removeItem('username');
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("id");
                };
                return NavBarComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NavBarComponent.prototype, "nameNavBar", void 0);
            NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav-bar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/nav-bar/nav-bar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/account/nav-bar/nav-bar.component.css")).default]
                })
            ], NavBarComponent);
            /***/ 
        }),
        /***/ "./src/app/account/register/register.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/account/register/register.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/account/register/register.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/account/register/register.component.ts ***!
          \********************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _model_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/user.service */ "./src/app/model/user.service.ts");
            /* harmony import */ var _model_Users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/Users */ "./src/app/model/Users.ts");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/account/auth.service.ts");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(router, userService, authService) {
                    this.router = router;
                    this.userService = userService;
                    this.authService = authService;
                    this.failedLogin = false;
                    this.mask = [/[1-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ',
                        /\d/, /\d/, /\d/, /\d/];
                    this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
                        ]),
                        numCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}')
                        ]),
                        userLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        userPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        reUserPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    });
                }
                RegisterComponent.prototype.ngOnInit = function () { };
                RegisterComponent.prototype.passwordOK = function (pass1, pass2) {
                    if (pass1 === pass2) {
                        this.canRegister = true;
                        return false;
                    }
                    else {
                        this.canRegister = false;
                        return true;
                    }
                };
                RegisterComponent.prototype.Register = function (fName, lName, Login, passw, numCard, email) {
                    var _this = this;
                    this.firstName = String(fName);
                    this.lastName = String(lName);
                    this.newLogin = String(Login);
                    this.newPassword = String(passw);
                    this.numberCard = String(numCard);
                    this.newEmail = String(email);
                    var newUser = new _model_Users__WEBPACK_IMPORTED_MODULE_5__["Users"](this.firstName, this.lastName, this.newLogin, this.newPassword, this.numberCard, this.newEmail);
                    this.userService.registerUser(newUser).subscribe(function (id) {
                        if (id === -1) {
                            _this.failedLogin = true;
                        }
                        else if (id > 0) {
                            _this.authService.attemptAuth(_this.newLogin, _this.newPassword).subscribe(function (data) {
                                //this.token.saveToken(data.token);
                                //this.router.navigate(['user']);
                                sessionStorage.setItem('username', _this.newLogin);
                                var tokenStr = 'Bearer ' + data.token;
                                sessionStorage.setItem('token', tokenStr);
                                _this.userService.updateSubscriptions();
                                _this.userService.updateUser();
                                _this.router.navigateByUrl('/account');
                            }, function (err) {
                                console.log(err);
                                _this.failedLogin = true;
                            });
                            document.getElementById("closeRegister").click();
                            sessionStorage.setItem('id', id.toString());
                        }
                    }, function (err) {
                        _this.error = true;
                    });
                };
                RegisterComponent.prototype.getClassMap = function () {
                    return (this.myForm.valid && this.canRegister ? 'btn btn-success' :
                        'btn btn-secondary');
                };
                RegisterComponent.prototype.onSubmit = function () {
                    // console.log(this.myForm);
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _model_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/account/register/register.component.css")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/account/server-error/server-error.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/account/server-error/server-error.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/account/server-error/server-error.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/account/server-error/server-error.component.ts ***!
          \****************************************************************/
        /*! exports provided: ServerErrorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function () { return ServerErrorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ServerErrorComponent = /** @class */ (function () {
                function ServerErrorComponent() {
                }
                ServerErrorComponent.prototype.ngOnInit = function () {
                };
                return ServerErrorComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ServerErrorComponent.prototype, "nameError", void 0);
            ServerErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-server-error',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./server-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/server-error/server-error.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./server-error.component.css */ "./src/app/account/server-error/server-error.component.css")).default]
                })
            ], ServerErrorComponent);
            /***/ 
        }),
        /***/ "./src/app/account/subscription/subscription.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/account/subscription/subscription.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/account/subscription/subscription.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/account/subscription/subscription.component.ts ***!
          \****************************************************************/
        /*! exports provided: SubscriptionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function () { return SubscriptionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _model_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/user.service */ "./src/app/model/user.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var SubscriptionComponent = /** @class */ (function () {
                function SubscriptionComponent(userService) {
                    this.userService = userService;
                    this.productPerPage = 5;
                    this.selectedPage = 1;
                    //private user: Users;
                    this.subscriptionStorage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
                    this.page = 1;
                    this.findSubscriptions = "";
                    this.find = "";
                }
                SubscriptionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.idInterval = setInterval(function () {
                        _this.userService.updateSubscriptions();
                    }, 20000);
                };
                Object.defineProperty(SubscriptionComponent.prototype, "products", {
                    // Get Products with pagination
                    get: function () {
                        var _this = this;
                        if (this.find !== this.findSubscriptions) {
                            this.userService.updateSubscriptions();
                            this.find = this.findSubscriptions;
                            this.page = 1;
                            this.selectedPage = this.page;
                        }
                        this.subscriptionStorage.add(this.userService.getUserSubscription(this.userService.idUser, (this.page - 1) * this.productPerPage, this.productPerPage, this.findSubscriptions).subscribe(function (subscriptions) {
                            _this.subscriptions = subscriptions;
                        }, function (err) {
                            _this.error = true;
                        }));
                        return this.subscriptions;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SubscriptionComponent.prototype, "countProducts", {
                    get: function () {
                        var _this = this;
                        this.subscriptionStorage.add(this.userService.countSubscription(this.userService.idUser).subscribe(function (count) {
                            _this.count = count;
                        }, function (err) {
                            _this.error = true;
                        }));
                        return this.count;
                    },
                    enumerable: true,
                    configurable: true
                });
                // Changing page number
                SubscriptionComponent.prototype.changePage = function (newPage) {
                    this.page = newPage;
                    this.selectedPage = this.page;
                    this.subscriptions = null;
                    this.userService.updateSubscriptions();
                };
                // Changing the number of items on the page
                SubscriptionComponent.prototype.changePageSize = function (newSize) {
                    this.productPerPage = Number(newSize);
                    this.userService.updateSubscriptions();
                };
                Object.defineProperty(SubscriptionComponent.prototype, "pageNumbers", {
                    // Calculating page number
                    get: function () {
                        return Array(Math.ceil(this.countProducts / this.productPerPage))
                            .fill(0).map(function (x, i) { return i + 1; });
                    },
                    enumerable: true,
                    configurable: true
                });
                SubscriptionComponent.prototype.getStatusSubscription = function (idS) {
                    if (this.subscriptions[idS].status === true && this.user.blocked === false) {
                        return 'ON';
                    }
                    else if (this.user.blocked === true) {
                        return 'Blocked';
                    }
                    else {
                        return 'OFF';
                    }
                };
                SubscriptionComponent.prototype.getClassMap = function () {
                    return (this.user.blocked === true ? 'text-danger' :
                        'text-dark');
                };
                SubscriptionComponent.prototype.ngOnDestroy = function () {
                    this.subscriptionStorage.unsubscribe();
                    clearInterval(this.idInterval);
                };
                return SubscriptionComponent;
            }());
            SubscriptionComponent.ctorParameters = function () { return [
                { type: _model_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SubscriptionComponent.prototype, "user", void 0);
            SubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-subscription',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subscription.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/subscription/subscription.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subscription.component.css */ "./src/app/account/subscription/subscription.component.css")).default]
                })
            ], SubscriptionComponent);
            /***/ 
        }),
        /***/ "./src/app/account/view-all-subscriptions/view-all-subscriptions.component.css": 
        /*!*************************************************************************************!*\
          !*** ./src/app/account/view-all-subscriptions/view-all-subscriptions.component.css ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvdmlldy1hbGwtc3Vic2NyaXB0aW9ucy92aWV3LWFsbC1zdWJzY3JpcHRpb25zLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/account/view-all-subscriptions/view-all-subscriptions.component.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/account/view-all-subscriptions/view-all-subscriptions.component.ts ***!
          \************************************************************************************/
        /*! exports provided: ViewAllSubscriptionsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllSubscriptionsComponent", function () { return ViewAllSubscriptionsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _model_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/user.service */ "./src/app/model/user.service.ts");
            var ViewAllSubscriptionsComponent = /** @class */ (function () {
                function ViewAllSubscriptionsComponent(userService) {
                    this.userService = userService;
                    this.subscriptionStorage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
                    this.productPerPage = 10;
                    this.selectedPage = 1;
                    this.page = 1;
                    this.error = false;
                }
                ViewAllSubscriptionsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.updateSubscriptions();
                    this.subscriptionStorage.add(this.userService.countSubscription(0).subscribe(function (count) {
                        _this.count = count;
                    }, function (err) {
                        _this.error = true;
                    }));
                };
                Object.defineProperty(ViewAllSubscriptionsComponent.prototype, "products", {
                    get: function () {
                        var _this = this;
                        this.subscriptionStorage.add(this.userService.getUserSubscription(0, (this.page - 1) * this.productPerPage, this.productPerPage, "").subscribe(function (subscriptions) {
                            _this.subscriptions = subscriptions;
                        }, function (err) {
                            _this.error = true;
                        }));
                        return this.subscriptions;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ViewAllSubscriptionsComponent.prototype, "countProducts", {
                    get: function () {
                        return this.count;
                    },
                    enumerable: true,
                    configurable: true
                });
                // Changing page number
                ViewAllSubscriptionsComponent.prototype.changePage = function (newPage) {
                    this.page = newPage;
                    this.selectedPage = this.page;
                    this.subscriptions = null;
                    this.userService.updateSubscriptions();
                };
                Object.defineProperty(ViewAllSubscriptionsComponent.prototype, "pageNumbers", {
                    get: function () {
                        return Array(Math.ceil(this.countProducts / this.productPerPage))
                            .fill(0).map(function (x, i) { return i + 1; });
                    },
                    enumerable: true,
                    configurable: true
                });
                ViewAllSubscriptionsComponent.prototype.ngOnDestroy = function () {
                    this.subscriptionStorage.unsubscribe();
                };
                return ViewAllSubscriptionsComponent;
            }());
            ViewAllSubscriptionsComponent.ctorParameters = function () { return [
                { type: _model_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            ViewAllSubscriptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-view-all-subscriptions',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-all-subscriptions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/view-all-subscriptions/view-all-subscriptions.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-all-subscriptions.component.css */ "./src/app/account/view-all-subscriptions/view-all-subscriptions.component.css")).default]
                })
            ], ViewAllSubscriptionsComponent);
            /***/ 
        }),
        /***/ "./src/app/account/view-subscription-admin/view-subscription-admin.component.css": 
        /*!***************************************************************************************!*\
          !*** ./src/app/account/view-subscription-admin/view-subscription-admin.component.css ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvdmlldy1zdWJzY3JpcHRpb24tYWRtaW4vdmlldy1zdWJzY3JpcHRpb24tYWRtaW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/account/view-subscription-admin/view-subscription-admin.component.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/account/view-subscription-admin/view-subscription-admin.component.ts ***!
          \**************************************************************************************/
        /*! exports provided: ViewSubscriptionAdminComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSubscriptionAdminComponent", function () { return ViewSubscriptionAdminComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _model_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/user.service */ "./src/app/model/user.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var ViewSubscriptionAdminComponent = /** @class */ (function () {
                function ViewSubscriptionAdminComponent(userService, activatedRoute) {
                    this.userService = userService;
                    this.activatedRoute = activatedRoute;
                    this.subscriptionStorage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
                    this.productPerPage = 10;
                    this.selectedPage = 1;
                    this.page = 1;
                }
                ViewSubscriptionAdminComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
                    this.userService.updateSubscriptions();
                    this.subscriptionStorage.add(this.userService.countSubscription(0).subscribe(function (count) {
                        _this.count = count;
                    }, function (err) {
                        _this.error = true;
                    }));
                };
                Object.defineProperty(ViewSubscriptionAdminComponent.prototype, "products", {
                    get: function () {
                        var _this = this;
                        this.subscriptionStorage.add(this.userService.getUserSubscription(this.id, (this.page - 1) * this.productPerPage, this.productPerPage, "").subscribe(function (subscriptions) {
                            _this.subscriptionsUser = subscriptions;
                        }, function (err) {
                            _this.error = true;
                        }));
                        return this.subscriptionsUser;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ViewSubscriptionAdminComponent.prototype, "countProducts", {
                    // Pagination
                    get: function () {
                        return this.count;
                    },
                    enumerable: true,
                    configurable: true
                });
                // Changing page number
                ViewSubscriptionAdminComponent.prototype.changePage = function (newPage) {
                    this.page = newPage;
                    this.selectedPage = this.page;
                    this.subscriptionsUser = null;
                    this.userService.updateSubscriptions();
                };
                Object.defineProperty(ViewSubscriptionAdminComponent.prototype, "pageNumbers", {
                    get: function () {
                        return Array(Math.ceil(this.countProducts / this.productPerPage))
                            .fill(0).map(function (x, i) { return i + 1; });
                    },
                    enumerable: true,
                    configurable: true
                });
                ViewSubscriptionAdminComponent.prototype.changePageSize = function (newSize) {
                    this.productPerPage = Number(newSize);
                    this.userService.updateSubscriptions();
                };
                ViewSubscriptionAdminComponent.prototype.ngOnDestroy = function () {
                    this.subscriptionStorage.unsubscribe();
                };
                return ViewSubscriptionAdminComponent;
            }());
            ViewSubscriptionAdminComponent.ctorParameters = function () { return [
                { type: _model_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            ViewSubscriptionAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-view-subscription-admin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-subscription-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/view-subscription-admin/view-subscription-admin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-subscription-admin.component.css */ "./src/app/account/view-subscription-admin/view-subscription-admin.component.css")).default]
                })
            ], ViewSubscriptionAdminComponent);
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'dev1';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.interceptor.ts": 
        /*!************************************!*\
          !*** ./src/app/app.interceptor.ts ***!
          \************************************/
        /*! exports provided: Interceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function () { return Interceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var TOKEN_HEADER_KEY = 'Authorization';
            var Interceptor = /** @class */ (function () {
                function Interceptor(router) {
                    this.router = router;
                }
                Interceptor.prototype.intercept = function (req, next) {
                    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
                        req = req.clone({
                            setHeaders: {
                                Authorization: sessionStorage.getItem('token')
                            }
                        });
                    }
                    return next.handle(req);
                };
                return Interceptor;
            }());
            Interceptor.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            Interceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], Interceptor);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
            /* harmony import */ var _account_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/authorization/authorization.component */ "./src/app/account/authorization/authorization.component.ts");
            /* harmony import */ var _account_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/admin/admin.component */ "./src/app/account/admin/admin.component.ts");
            /* harmony import */ var _account_billingaccount_billingaccount_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account/billingaccount/billingaccount.component */ "./src/app/account/billingaccount/billingaccount.component.ts");
            /* harmony import */ var _account_information_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account/information/information.component */ "./src/app/account/information/information.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _account_view_subscription_admin_view_subscription_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account/view-subscription-admin/view-subscription-admin.component */ "./src/app/account/view-subscription-admin/view-subscription-admin.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _chargingFirst_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chargingFirst.guard */ "./src/app/chargingFirst.guard.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _HttpService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HttpService */ "./src/app/HttpService.ts");
            /* harmony import */ var _account_view_all_subscriptions_view_all_subscriptions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./account/view-all-subscriptions/view-all-subscriptions.component */ "./src/app/account/view-all-subscriptions/view-all-subscriptions.component.ts");
            /* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
            /* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var _app_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.interceptor */ "./src/app/app.interceptor.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _account_account_module__WEBPACK_IMPORTED_MODULE_4__["AccountModule"],
                        angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__["TextMaskModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([
                            {
                                path: 'account', component: _account_information_information_component__WEBPACK_IMPORTED_MODULE_8__["InformationComponent"],
                                canActivate: [_chargingFirst_guard__WEBPACK_IMPORTED_MODULE_12__["ChargingFirstGuard"]]
                            },
                            {
                                path: 'billingaccount', component: _account_billingaccount_billingaccount_component__WEBPACK_IMPORTED_MODULE_7__["BillingaccountComponent"],
                                canActivate: [_chargingFirst_guard__WEBPACK_IMPORTED_MODULE_12__["ChargingFirstGuard"]]
                            },
                            { path: 'admin', component: _account_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], canActivate: [_chargingFirst_guard__WEBPACK_IMPORTED_MODULE_12__["ChargingFirstGuard"]] },
                            { path: 'authorization', component: _account_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_5__["AuthorizationComponent"], canActivate: [_chargingFirst_guard__WEBPACK_IMPORTED_MODULE_12__["ChargingFirstGuard"]] },
                            { path: 'products/:id', component: _account_view_subscription_admin_view_subscription_admin_component__WEBPACK_IMPORTED_MODULE_10__["ViewSubscriptionAdminComponent"], canActivate: [_chargingFirst_guard__WEBPACK_IMPORTED_MODULE_12__["ChargingFirstGuard"]] },
                            { path: 'allsubscriptions', component: _account_view_all_subscriptions_view_all_subscriptions_component__WEBPACK_IMPORTED_MODULE_15__["ViewAllSubscriptionsComponent"] },
                            { path: '**', redirectTo: '/authorization', canActivate: [_chargingFirst_guard__WEBPACK_IMPORTED_MODULE_12__["ChargingFirstGuard"]] },
                        ]),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
                    ],
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                    providers: [_chargingFirst_guard__WEBPACK_IMPORTED_MODULE_12__["ChargingFirstGuard"], _HttpService__WEBPACK_IMPORTED_MODULE_14__["HttpService"], {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _app_interceptor__WEBPACK_IMPORTED_MODULE_17__["Interceptor"], multi: true
                        }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/chargingFirst.guard.ts": 
        /*!****************************************!*\
          !*** ./src/app/chargingFirst.guard.ts ***!
          \****************************************/
        /*! exports provided: ChargingFirstGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargingFirstGuard", function () { return ChargingFirstGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _account_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/authorization/authorization.component */ "./src/app/account/authorization/authorization.component.ts");
            var ChargingFirstGuard = /** @class */ (function () {
                function ChargingFirstGuard(router) {
                    this.router = router;
                    this.firstNavigation = true;
                }
                ChargingFirstGuard.prototype.canActivate = function (route, state) {
                    if (this.firstNavigation) {
                        this.firstNavigation = false;
                        if (route.component !== _account_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_3__["AuthorizationComponent"]) {
                            this.router.navigateByUrl('/');
                            return false;
                        }
                    }
                    return true;
                };
                return ChargingFirstGuard;
            }());
            ChargingFirstGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            ChargingFirstGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ChargingFirstGuard);
            /***/ 
        }),
        /***/ "./src/app/model/Subscriptions.ts": 
        /*!****************************************!*\
          !*** ./src/app/model/Subscriptions.ts ***!
          \****************************************/
        /*! exports provided: Subscriptions */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscriptions", function () { return Subscriptions; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Subscriptions = /** @class */ (function () {
                function Subscriptions() {
                }
                return Subscriptions;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/Users.ts": 
        /*!********************************!*\
          !*** ./src/app/model/Users.ts ***!
          \********************************/
        /*! exports provided: Users */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function () { return Users; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Users = /** @class */ (function () {
                function Users(firstName, lastName, login, password, numberCard, email) {
                    this.numberCard = '';
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.login = login;
                    this.password = password;
                    this.numberCard = numberCard;
                    this.email = email;
                }
                return Users;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/model.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/model/model.module.ts ***!
          \***************************************/
        /*! exports provided: ModelModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelModule", function () { return ModelModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/model/user.service.ts");
            var ModelModule = /** @class */ (function () {
                function ModelModule() {
                }
                return ModelModule;
            }());
            ModelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    providers: [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ]
                })
            ], ModelModule);
            /***/ 
        }),
        /***/ "./src/app/model/user.service.ts": 
        /*!***************************************!*\
          !*** ./src/app/model/user.service.ts ***!
          \***************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _HttpService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HttpService */ "./src/app/HttpService.ts");
            /* harmony import */ var _Subscriptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Subscriptions */ "./src/app/model/Subscriptions.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var UserService = /** @class */ (function () {
                function UserService(http, httpClient, router) {
                    this.http = http;
                    this.httpClient = httpClient;
                    this.router = router;
                    this.userStorage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
                    this.updateUsers = true;
                    this.updateUserID = true;
                    this.updateSubscription = true;
                    this.updateCount = true;
                    this.updateCountUsers = true;
                }
                /////////////////////////////////////////////////////////
                // Get all users for admin
                UserService.prototype.getUsers = function (offset, limit) {
                    var _this = this;
                    if (this.updateUsers) {
                        this.users = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
                        this.http.get('http://localhost:8080/api/users?offset=' + offset + '&limit=' + limit)
                            .subscribe(function (users) {
                            _this.users.next(users);
                        }, function (err) {
                            _this.users.error(err);
                        });
                    }
                    this.updateUsers = false;
                    return this.users.asObservable();
                };
                // Get user_ID (User Account)
                UserService.prototype.getUser = function (id) {
                    var _this = this;
                    this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
                    if (this.updateUserID) {
                        this.userStorage = this.http.get('http://localhost:8080/api/users/' + id)
                            .subscribe(function (user) {
                            _this.user.next(user);
                        }, function (err) {
                            _this.user.error(err);
                        });
                    }
                    this.updateUserID = false;
                    return this.user.asObservable();
                };
                UserService.prototype.getUserSubscription = function (id, offset, limit, name) {
                    var _this = this;
                    if (this.updateSubscription) {
                        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
                        this.http.get('http://localhost:8080/api/users/' + id + '/products?offset=' + offset + '&limit=' + limit +
                            '&name=' + name)
                            .subscribe(function (subscription) {
                            _this.subscription.next(subscription);
                        }, function (err) {
                            _this.subscription.error(err);
                        });
                    }
                    //this.idUser = id;
                    this.updateSubscription = false;
                    return this.subscription.asObservable();
                };
                UserService.prototype.countUsers = function () {
                    var _this = this;
                    if (this.updateCountUsers) {
                        this.count = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
                        this.httpClient.get('http://localhost:8080/api/users/count').subscribe(function (count) {
                            _this.count.next(count);
                        }, function (err) {
                            _this.count.error(err);
                        });
                    }
                    this.updateCountUsers = false;
                    return this.count.asObservable();
                };
                UserService.prototype.countSubscription = function (id) {
                    var _this = this;
                    if (this.updateCount) {
                        this.subsID = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
                        this.httpClient.get('http://localhost:8080/api/users/' + id + '/products/count').subscribe(function (count) {
                            _this.subsID.next(count);
                        }, function (err) {
                            _this.subscription.error(err);
                        });
                    }
                    this.updateCount = false;
                    return this.subsID.asObservable();
                };
                // id = -1 failed authorization
                UserService.prototype.authorizationUser = function (user) {
                    var _this = this;
                    this.subsID = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
                    this.httpClient.get('http://localhost:8080/api/users/login/' + user.login).subscribe(function (id) {
                        _this.idUser = id;
                        _this.subsID.next(id);
                    }, function (err) {
                        _this.subsID.error(err);
                    });
                    this.updateUser();
                    this.updateSubscriptions();
                    return this.subsID.asObservable();
                };
                UserService.prototype.registerUser = function (user) {
                    var _this = this;
                    this.subsID = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
                    this.httpClient.post('http://localhost:8080/api/users/up', user).subscribe(function (id) {
                        _this.idUser = id;
                        _this.subsID.next(id);
                    }, function (err) {
                        _this.subsID.error(err);
                    });
                    this.updateUser();
                    this.updateSubscriptions();
                    return this.subsID.asObservable();
                };
                UserService.prototype.transferMoney = function (user, id) {
                    var _this = this;
                    this.transfer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
                    this.httpClient.post('http://localhost:8080/api/users/billing/' + id, user).subscribe(function (transfer) {
                        _this.transfer.next(transfer);
                    }, function (err) {
                        _this.transfer.error(err);
                    });
                    return this.transfer.asObservable();
                };
                // Modify information on user_ID (E_wallet, Blocked user)
                UserService.prototype.modifyUser = function (id, user) {
                    this.httpClient.put('http://localhost:8080/api/users/' + id, user).subscribe();
                };
                // ON/OFF user Subscription_id
                UserService.prototype.modifyUserSubscription = function (subscription) {
                    this.httpClient.post('http://localhost:8080/api/users/' + this.idUser + '/product', subscription)
                        .subscribe();
                };
                // ON/OFF subscription user_ID
                UserService.prototype.addSubscription = function (name, cost) {
                    var newSubscription = new _Subscriptions__WEBPACK_IMPORTED_MODULE_4__["Subscriptions"]();
                    newSubscription.name = name;
                    newSubscription.cost = cost;
                    this.httpClient.post('http://localhost:8080/api/users/products', newSubscription)
                        .subscribe();
                    this.updateSubscriptions();
                };
                // Modify information on user_ID (E_wallet, Blocked user)
                UserService.prototype.managementAdmin = function (id, status) {
                    this.httpClient.put('http://localhost:8080/api/users/' + id + '/admins', status).subscribe();
                };
                UserService.prototype.updateUser = function () {
                    this.updateUsers = true;
                    this.updateUserID = true;
                    this.updateCountUsers = true;
                };
                // Update Subscription
                UserService.prototype.updateSubscriptions = function () {
                    this.updateSubscription = true;
                    this.updateCount = true;
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _HttpService__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], UserService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\Projects\TestProject\Charging\Charging\frontend\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map