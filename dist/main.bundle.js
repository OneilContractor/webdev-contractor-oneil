webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_sortable_directive__ = __webpack_require__("../../../../../src/app/directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_28__directives_sortable_directive__["a" /* SortableDirective */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_29_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_23__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_31__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_32__services_auth_guard_service__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/**
 * Created by sesha on 7/26/17.
 */





















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    // { path : 'user/:uid' , component: ProfileComponent, canActivate: [AuthGuard]},
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/website', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/website/new', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/website/:wid', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__["a" /* PageListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_11__components_page_page_new_page_new_component__["a" /* PageNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/website/:wid/page/:pid/widget/new/header', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/website/:wid/page/:pid/widget/new/youtube', component: __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/website/:wid/page/:pid/widget/new/image', component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/website/:wid/page/:pid/widget/new/html', component: __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/website/:wid/page/:pid/widget/new/text', component: __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>\r\n    Angular 4 MEAN stack app\r\n  </h1>\r\n\r\n\r\n  <h3>\r\n    App works\r\n  </h3>\r\n\r\n\r\n  <h4>\r\n    <a href=\"test\">Test MongoDB</a>\r\n  </h4>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"editPage()\" #f=\"ngForm\">\r\n  <nav class=\"navbar navbar-default bg-primary navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <p class=\"navbar-text pull-left\">\r\n        <a [routerLink]=\"['/user', 'website', websiteId, 'page']\" class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-chevron-left glyphicon-black\" ></span>\r\n        </a>\r\n      </p>\r\n\r\n      <!--heading on the nav bar-->\r\n      <p class=\"navbar-header pull-left\">\r\n        <a class=\"navbar-brand thick\">\r\n          <b class=\"titlePages\">Edit Page</b>\r\n        </a>\r\n      </p>\r\n\r\n      <!--tick mark-->\r\n      <p class=\"navbar-text pull-right\">\r\n        <a [routerLink]=\"['/user', 'website', websiteId, 'page']\" (click)=\"editPage()\" class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-ok glyphicon-black\" ></span>\r\n        </a>\r\n      </p>\r\n\r\n    </div>\r\n  </nav>\r\n\r\n  <br/>\r\n\r\n  <div class=\"container-fluid scroller\">\r\n      <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input class=\"form-control margin-top\"\r\n               placeholder=\"Name\"\r\n               type=\"text\"\r\n               [(ngModel)]=\"currPage['name']\"\r\n               id=\"name\"\r\n               name=\"name\"/>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Title</label>\r\n        <textarea class=\"form-control margin-top\"\r\n                  name=\"description\"\r\n                  id=\"description\"\r\n                  [(ngModel)]=\"currPage['description']\"\r\n                  placeholder=\"Description\"></textarea>\r\n      </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <a class=\"btn btn-danger btn-block\" [routerLink]=\"['/user', 'website', websiteId, 'page']\" (click)=\"deletePage()\" >Delete</a>\r\n    </div>\r\n\r\n    <nav class=\"navbar navbar-default bg-primary navbar-fixed-bottom\">\r\n      <div class=\"container-fluid\">\r\n        <p class=\"navbar-text pull-right\">\r\n          <a [routerLink]=\"['/user']\">\r\n            <span class=\"glyphicon glyphicon-user glyphicon-user-blue\"></span>\r\n          </a>\r\n        </p>\r\n      </div>\r\n    </nav>\r\n\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageEditComponent = (function () {
    function PageEditComponent(router, pageService, userService, activatedRoute) {
        this.router = router;
        this.pageService = pageService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.websitePages = [{}];
        this.currPage = {};
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.pageService.findPageById(this.pageId)
            .subscribe(function (page) {
            _this.currPage = page;
        });
        this.pageService.findPageByWebsiteId(this.websiteId)
            .subscribe(function (pages) {
            _this.websitePages = pages;
        });
    };
    PageEditComponent.prototype.editPage = function () {
        var _this = this;
        var editedPage = { '_id': this.pageId, 'websiteId': this.websiteId,
            'name': this.pageEditForm.value.name,
            'description': this.pageEditForm.value.description };
        this.pageService.updatePage(this.pageId, editedPage)
            .subscribe(function (page) {
            _this.router.navigate(['/user', 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId)
            .subscribe(function (page) {
            _this.router.navigate(['/user', 'website', _this.websiteId, 'page']);
        });
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "pageEditForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], PageEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user', 'website']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left glyphicon-black\" ></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class=\"titlePages\">Pages</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', 'website', wid, 'page', 'new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus glyphicon-black\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<br/>\n\n\n<div class=\"container-fluid scroller\">\n  <ul class=\"list-group\">\n    <div *ngFor=\"let page of websitePages\">\n      <li class=\"list-group-item\">\n        <a [routerLink]=\"[page._id, 'widget']\">\n          {{page.name}}\n        </a>\n        <a [routerLink]=\"[page._id]\"\n           class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </li>\n    </div>\n  </ul>\n  </div>\n\n  <nav class=\"navbar navbar-default bg-primary navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user']\">\n          <span class=\"glyphicon glyphicon-user glyphicon-user-blue\"></span>\n        </a>\n      </p>\n\n    </div>\n  </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageListComponent = (function () {
    function PageListComponent(activatedRoute, userService, pageService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.pageService = pageService;
        this.websitePages = [{}];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.wid = params['wid'];
        });
        this.pageService.findPageByWebsiteId(this.wid)
            .subscribe(function (pages) {
            _this.websitePages = pages;
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object])
], PageListComponent);

var _a, _b, _c;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default bg-primary navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <p class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/user', 'website', websiteId, 'page']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left glyphicon-black\" ></span>\r\n      </a>\r\n    </p>\r\n\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b class=\"titlePages\">New Page</b>\r\n      </a>\r\n    </p>\r\n\r\n    <!--tick mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a (click)=\"createPage()\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok glyphicon-black\" ></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<br/>\r\n\r\n<div class=\"container-fluid scroller\">\r\n  <form #f=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <input type=\"text\"\r\n             id=\"name\"\r\n             ngModel\r\n             required\r\n             class=\"form-control\"\r\n             placeholder=\"name\"\r\n             name=\"name\"\r\n             #name=\"ngModel\"/>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Title</label>\r\n      <textarea class=\"form-control\"\r\n                id=\"description\"\r\n                name=\"description\"\r\n                required\r\n                placeholder=\"Description\"\r\n                #description=\"ngModel\"\r\n                ngModel></textarea>\r\n    </div>\r\n  </form>\r\n\r\n  <nav class=\"navbar navbar-default bg-primary navbar-fixed-bottom\">\r\n    <div class=\"container-fluid\">\r\n      <p class=\"navbar-text pull-right\">\r\n        <a [routerLink]=\"['/user']\">\r\n          <span class=\"glyphicon glyphicon-user glyphicon-user-blue\"></span>\r\n        </a>\r\n      </p>\r\n\r\n    </div>\r\n  </nav>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageNewComponent = (function () {
    function PageNewComponent(activatedRoute, userService, router, pageService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.pageService = pageService;
        this.webSitePages = [{}];
        this.page = {};
        this.error = '';
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.wid = params['wid'];
        });
        this.pageService.findPageByWebsiteId(this.wid)
            .subscribe(function (pages) {
            _this.webSitePages = pages;
        });
    };
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        if (this.pageForm.value.name) {
            var newPage = {
                'name': this.pageForm.value.name,
                'description': this.pageForm.value.description
            };
            this.page = this.pageService.createPage(this.wid, newPage)
                .subscribe(function (page) {
                _this.router.navigate(['/user', 'website', _this.wid, 'page']);
            });
        }
        else {
            this.error = 'Please enter name of the page';
        }
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "pageForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _e || Object])
], PageNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>Test</h1>\r\n\r\n  <div *ngIf=\"alertMessage\"\r\n       class=\"alert alert-danger\">\r\n    \"Failed to create\"\r\n  </div>\r\n\r\n  <div *ngIf=\"successMessage\"\r\n       class=\"alert alert-success\">\r\n    \"Succesfully created/deleted\"\r\n  </div>\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th>Test Message</th>\r\n      <th>&nbsp;</th>\r\n    </tr>\r\n\r\n\r\n    <tr>\r\n      <td>\r\n        <input [(ngModel)]=\"message\"\r\n               placeholder=\"message\"\r\n               class=\"form-control\"/>\r\n      </td>\r\n\r\n\r\n      <td>\r\n        <button (click)=\"createMessage()\"\r\n                class=\"btn btn-primary pull-right\">\r\n          <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </thead>\r\n\r\n\r\n    <tbody>\r\n    <tr *ngFor=\"let message of messages\">\r\n      <td>\r\n        {{message.message}}\r\n      </td>\r\n      <td>\r\n        <button (click)=\"deleteMessage(message._id)\"\r\n                class=\"btn btn-danger pull-right\">\r\n          <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n\n      <h1>Login</h1>\n      <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <input name=\"username\"\n                 placeholder=\"username\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 ngModel=\"\"\n                 required\n                 #username=\"ngModel\"/>\n          <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n            Please enter correct username!\n          </span>\n\n        </div>\n        <div class=\"form-group\">\n          <input name=\"password\"\n                 placeholder=\"password\"\n                 type=\"password\"\n                 class=\"form-control\"\n                 ngModel=\"\"\n                 required\n                 #password=\"ngModel\"/>\n          <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n            Please enter correct password!\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!f.valid\">\n            Login\n          </button>\n        </div>\n        <!--<div class=\"form-group\">-->\n          <!--<a href=\"http://localhost:3100/auth/facebook\" class=\"btn btn-primary btn-block\">-->\n            <!--<span class=\"fa fa-facebook\"></span>-->\n            <!--Login with Facebook-->\n          <!--</a>-->\n        <!--</div>-->\n        <div class=\"form-group\">\n          <a class=\"btn btn-success btn-block\" [routerLink]=\"['/register']\">\n            Register\n          </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        if (this.username && this.password) {
            this.userService.login(this.username, this.password)
                .subscribe(function (user) {
                if (user) {
                    _this.sharedService.user = user;
                    _this.errorFlag = false;
                    _this.router.navigate(['/user']);
                }
                else {
                    _this.errorFlag = true;
                }
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"editProfile()\" #f=\"ngForm\">\n  <div *ngIf=\"error\"\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n<nav class=\"navbar navbar-default navbar-fixed-top blue\" >\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class=\"titles\">Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user']\" (click)=\"editProfile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\" ></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<!--<div *ngIf=\"errorFlag\"-->\n     <!--class=\"alert alert-danger\">-->\n  <!--{{errorMsg}}-->\n<!--</div>-->\n\n<div class=\"container-fluid scroller\">\n  <label for=\"username\" class=\"margin-top\">Username</label>\n  <input type=\"text\"\n         id=\"username\"\n         name=\"username\"\n         [(ngModel)]=\"username\"\n         class=\"form-control\" />\n\n  <label for=\"password\" class=\"margin-top\">Password</label>\n  <input\n    [(ngModel)]= 'password'\n    type=\"password\"\n    class=\"form-control\"\n    id=\"password\"\n    name=\"password\"\n    disabled=\"disabled\">\n\n  <label for=\"email\"  class=\"margin-top\">Email address</label>\n  <input\n    [(ngModel)]= 'email'\n    type=\"email\"\n    class=\"form-control\"\n    id=\"email\"\n    name=\"email\">\n\n  <label for=\"first-name\"  class=\"margin-top\">First Name</label>\n  <input\n    [(ngModel)]= 'firstName'\n    type=\"text\"\n    class=\"form-control\"\n    id=\"first-name\"\n    name=\"first-name\">\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/user', 'website']\">\n      Websites\n    </button>\n  </div>\n  <div class=\"form-group\">\n    <a class=\"btn btn-danger btn-block\"\n       [routerLink]=\"['/login']\" >Logout</a>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom blue\" >\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(sharedService, userService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.error = '';
    }
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        this.username = this.user.username;
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
        this.email = this.user.email;
        this.password = this.user.password;
        this.userId = this.user._id;
    };
    ProfileComponent.prototype.editProfile = function () {
        var _this = this;
        this.user.username = this.profileForm.value.username;
        this.user.password = this.profileForm.value.password;
        this.user.email = this.profileForm.value.email;
        this.user.firstname = this.profileForm.value.firstName;
        this.user.lastName = this.profileForm.value.lastName;
        if (this.user.username && this.user.password) {
            this.userService.updateUser(this.userId, this.user)
                .subscribe(function (user) {
                _this.user = user;
                _this.username = _this.user.username;
                _this.firstName = _this.user.firstName;
                _this.lastName = _this.user.lastName;
                _this.email = _this.user.email;
                _this.password = _this.user.password;
            });
        }
        else {
            this.error = 'Please enter value for username and password';
        }
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"register()\" #f=\"ngForm\">\r\n<div class=\"container-fluid\">\r\n  <h1>Register</h1>\r\n  <div *ngIf=\"error\"\r\n       class=\"alert alert-danger\">\r\n    {{error}}\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n  <input placeholder=\"username\"\r\n         type=\"text\"\r\n         class=\"form-control margin-top\"\r\n         name=\"username\"\r\n         required\r\n         ngModel\r\n         #username=\"ngModel\"\r\n         placeholder=\"Enter a Username\"/>\r\n  <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n      Please enter username!\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n  <input placeholder=\"password\"\r\n         type=\"password\"\r\n         class=\"form-control margin-top\"\r\n         ngModel\r\n         #password=\"ngModel\"\r\n         name=\"password\"\r\n         placeholder=\"Choose a password\"\r\n         required/>\r\n  <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n      Please enter password!\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n  <input type=\"password\"\r\n         ngModel\r\n         required\r\n         name=\"verifyPassword\"\r\n         #verifyPassword=\"ngModel\"\r\n         class=\"form-control margin-top\"\r\n         placeholder=\"Verify Password\"\r\n         id = \"verifyPassword\"/>\r\n  <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\r\n      Please verify the password!\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n  <input placeholder=\"Enter First Name\"\r\n         type=\"text\"\r\n         class=\"form-control margin-top\"\r\n         name=\"firstName\"\r\n         required\r\n         ngModel\r\n         #firstName=\"ngModel\"/>\r\n  <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\r\n      Please enter first name!\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n  <input placeholder=\"Enter Last name\"\r\n         type=\"text\"\r\n         class=\"form-control margin-top\"\r\n         name=\"lastName\"\r\n         required\r\n         ngModel\r\n         #lastName=\"ngModel\"/>\r\n  <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\r\n      Please enter last name!\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n  <input placeholder=\"Enter your email\"\r\n         type=\"email\"\r\n         class=\"form-control margin-top\"\r\n         name=\"email\"\r\n         required\r\n         ngModel\r\n         #email=\"ngModel\"/>\r\n  <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\r\n      Please enter your email!!\r\n    </span>\r\n  </div>\r\n\r\n    <div class=\"form-group\">\r\n      <a type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"register()\">\r\n        Register\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <a class=\"btn btn-danger btn-block\"\r\n         [routerLink]=\"['/login']\">\r\n        Cancel\r\n      </a>\r\n    </div>\r\n</div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(sharedService, router, userService) {
        this.sharedService = sharedService;
        this.router = router;
        this.userService = userService;
        this.error = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var username = this.registerForm.value.username;
        var password = this.registerForm.value.password;
        if (username && password) {
            if (this.registerForm.value.password === this.registerForm.value.verifyPassword) {
                var user = {
                    username: this.registerForm.value.username,
                    password: this.registerForm.value.password,
                    firstName: this.registerForm.value.firstName,
                    lastName: this.registerForm.value.lastName,
                    email: this.registerForm.value.email
                };
                this.userService.register(user)
                    .subscribe(function (regUser) {
                    alert('registered');
                    _this.sharedService.user = regUser;
                    _this.router.navigate(['/login']);
                });
            }
            else {
                this.error = 'Passwords do not match!';
            }
        }
        else {
            this.error = 'Please enter value for username and password';
        }
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"updateWebsite()\" #f=\"ngForm\">\n<nav class=\"navbar navbar-default navbar-fixed-top blue\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <div class=\"navbar-text pull-left\" style=\"margin-left: 0px;\">\n        <a [routerLink]=\"['/user', 'website']\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" style=\"color: white;\">\n          Websites\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user', 'website', 'new']\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"navbar-text pull-left websites\">\n        <a [routerLink]=\"['/user', 'website']\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right websites\">\n        <a (click)=\"updateWebsite()\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" style=\"color: white;\">\n          Edit Website\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row container-fluid\">\n  <div class=\"col-sm-4 hidden-xs hidden-nav\">\n    <ul class=\"list-group\">\n      <div *ngFor=\"let website of userWebsites\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['/user', userId, 'website', website._id,'page']\">\n            {{website.name}}\n          </a>\n          <a [routerLink]=\"['/user', userId, 'website', website._id]\"\n             class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </div>\n    </ul>\n  </div>\n  <div class=\"col-xs-12 col-sm-8 pull-right\">\n      <div class=\"form-group\" style=\"margin-top: 70px;\">\n        <label class=\"margin-top\">Website Name</label>\n        <input class=\"form-control\"\n               type=\"text\"\n               id = \"name\"\n               [(ngModel)] = \"webName\"\n               placeholder=\"Name\"\n               name=\"name\"\n               required/>\n        <label class=\"margin-top\">Website Description</label>\n        <textarea class=\"form-control\"\n                  id=\"description\"\n                  name=\"description\"\n                  [(ngModel)] = \"webDescription\"\n                  placeholder=\"Description\">\n        </textarea>\n      </div>\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block \"\n         (click)=\"deleteWebsite()\"\n         [routerLink]=\"['/user', 'website']\">\n        Delete\n      </a>\n    </div>\n\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom blue\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(webService, activatedRoute, userService, router, sharedService) {
        this.webService = webService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.userWebsites = [{}];
    }
    WebsiteEditComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        console.log(this.user);
        this.userId = this.user['_id'];
        console.log(this.userId);
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.wid = params['wid'];
        });
        this.webService.findWebsiteById(this.wid)
            .subscribe(function (website) {
            _this.webName = website.name;
            _this.webDescription = website.description;
        });
        this.webService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.userWebsites = websites;
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        var editedWebsite = { '_id': this.wid,
            'name': this.websiteEditForm.value.name,
            'developerId': this.userId,
            'description': this.websiteEditForm.value.description };
        this.webService.updateWebsite(this.wid, editedWebsite)
            .subscribe(function (websites) {
            _this.userWebsites = websites;
            _this.router.navigate(['/user', 'website']);
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.webService.deleteWebsite(this.wid)
            .subscribe(function (website) {
            _this.router.navigate(['/user', 'website']);
        });
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "websiteEditForm", void 0);
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]) === "function" && _f || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default bg-primary navbar-fixed-top blue\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\" ></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b class=\"titles\">Websites</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', 'website','new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\" ></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<br/>\n\n<div class=\"container-fluid scroller\">\n  <ul class=\"list-group\">\n    <div *ngFor=\"let website of userWebsites\">\n      <li class=\"list-group-item\">\n        <a [routerLink]=\"['/user', 'website', website._id,'page']\">\n          {{website.name}}\n        </a>\n        <a [routerLink]=\"['/user', 'website', website._id]\"\n           class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </li>\n    </div>\n  </ul>\n\n  <nav class=\"navbar navbar-default navbar-fixed-bottom blue\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user']\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </p>\n\n    </div>\n  </nav>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteListComponent = (function () {
    function WebsiteListComponent(userService, websiteService, activatedRoute, sharedService) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.user = {};
        this.userWebsites = [{}];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.userWebsites = websites;
        });
    };
    WebsiteListComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], WebsiteListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top blue\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <div class=\"navbar-text pull-left websites\">\n        <a [routerLink]=\"['/user', 'website']\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" style=\"color: white;\">\n          Websites\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user', 'website', 'new']\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"navbar-text pull-left websites\">\n        <a [routerLink]=\"['/user', 'website']\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right websites\">\n        <a (click)=\"createWebsite()\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" style=\"color: white;\">\n          New Website\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row container-fluid\">\n  <div class=\"col-sm-4 hidden-xs hidden-nav\">\n    <ul class=\"list-group\">\n      <div *ngFor=\"let website of websites\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['/user', 'website', website._id,'page']\">\n            {{website.name}}\n          </a>\n          <a [routerLink]=\"['/user', 'website', website._id]\"\n             class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </div>\n    </ul>\n\n  </div>\n  <div class=\"col-xs-12 col-sm-8 pull-right\">\n    <form #f=\"ngForm\">\n      <div class=\"form-group form-padding\">\n        <label for=\"name\">Name</label>\n        <input ngModel\n               name=\"name\"\n               #name = \"ngModel\"\n               required\n               type=\"text\"\n               class=\"form-control mr-5\"\n               id=\"name\"\n               placeholder=\"Website Name\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <textarea ngModel\n                  name=\"description\"\n                  #description = \"ngModel\"\n                  required\n                  class=\"form-control mr-5\"\n                  id=\"description\"\n                  rows=\"5\" placeholder=\"Description\"></textarea>\n      </div>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom blue\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(activatedRoute, userService, webService, router, sharedService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.webService = webService;
        this.router = router;
        this.sharedService = sharedService;
        this.user = {};
        this.userWebsites = [{}];
        this.error = '';
    }
    WebsiteNewComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.webService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.userWebsites = websites;
        });
        this.user = this.userService.findUserById(this.userId);
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        if (this.websiteForm.value.name) {
            var newWebsite = {
                'name': this.websiteForm.value.name,
                'description': this.websiteForm.value.description
            };
            this.webService.createWebsite(this.userId, newWebsite)
                .subscribe(function (new_website) {
                _this.router.navigate(['/user', 'website']);
            });
        }
        else {
            this.error = 'Please enter name of website';
        }
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "websiteForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]) === "function" && _f || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default bg-primary navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <p class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/user', 'website' , websiteId, 'page' , pageId, 'widget']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left glyphicon-black\" ></span>\r\n      </a>\r\n    </p>\r\n\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b class=\"titlePages\">Choose Widget</b>\r\n      </a>\r\n    </p>\r\n\r\n\r\n  </div>\r\n</nav>\r\n\r\n<br/>\r\n\r\n<div class=\"container-fluid scroller\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <a (click)=\"createWidget('HTML')\" [routerLink]=\"['/user', 'website' , websiteId, 'page' , pageId, 'widget', 'new', 'html']\">\r\n        <span class=\"indexLinks\">\r\n          <b>HTML</b>\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <a (click)=\"createWidget('HEADING')\" [routerLink]=\"['/user', 'website' , websiteId, 'page' , pageId, 'widget', 'new', 'header']\">\r\n        <span class=\"indexLinks\">\r\n          <b>Header</b>\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <a (click)=\"createWidget('IMAGE')\" [routerLink]=\"['/user', 'website' , websiteId, 'page' , pageId, 'widget', 'new', 'image']\">\r\n        <span class=\"indexLinks\">\r\n          <b>Image</b>\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <a (click)=\"createWidget('YOUTUBE')\" [routerLink]=\"['/user', 'website' , websiteId, 'page' , pageId, 'widget', 'new', 'youtube']\">\r\n        <span class=\"indexLinks\">\r\n          <b>Youtube</b>\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <a (click)=\"createWidget('TEXT')\"  [routerLink]=\"['/user', 'website' , websiteId, 'page' , pageId, 'widget', 'new', 'text']\">\r\n        <span class=\"indexLinks\">\r\n          <b>Text</b>\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <nav class=\"navbar navbar-default bg-primary navbar-fixed-bottom\">\r\n    <div class=\"container-fluid\">\r\n      <p class=\"navbar-text pull-right\">\r\n        <a [routerLink]=\"['/user']\">\r\n          <span class=\"glyphicon glyphicon-user glyphicon-user-blue\"></span>\r\n        </a>\r\n      </p>\r\n\r\n    </div>\r\n  </nav>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(activatedRoute, userService, router, widgetService, sharedService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.widgetService = widgetService;
        this.sharedService = sharedService;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
    };
    WidgetChooserComponent.prototype.createWidget = function (type) {
        var _this = this;
        var widget = { 'widgetType': type };
        this.widgetService.createWidget(this.pid, widget)
            .subscribe(function (new_widget) {
            _this.router.navigate(['user/', 'website', _this.wid, 'page', _this.pid, 'widget', new_widget['_id']]);
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _e || Object])
], WidgetChooserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget['widgetType']\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.type = widget['widgetType'];
            });
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetEditComponent);

var _a, _b;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-default bg-primary navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"navbar-brand pull-right right-margin-fix\">\r\n        <a (click)=\"updateWidget()\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-ok glyphicon-black\"></span>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"navbar-brand pull-left left-margin-fix\">\r\n        <a [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget']\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-chevron-left glyphicon-black\"></span>\r\n        </a>\r\n      </div>\r\n\r\n      <p class=\"navbar-header pull-left\">\r\n        <a class=\"navbar-brand titlePages\">\r\n          <b>Widget Edit</b>\r\n        </a>\r\n      </p>\r\n    </div>\r\n  </nav>\r\n\r\n<div class=\"container-fluid scroller\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"textHeader\">\r\n        Text\r\n      </label>\r\n      <input [(ngModel)]=\"textHeader\"\r\n             name=\"textHeader\"\r\n             required\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"textHeader\"\r\n             placeholder=\"Home Page\">\r\n    </div>\r\n  </form>\r\n\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"sizeHeader\">\r\n        Size\r\n      </label>\r\n      <input [(ngModel)]=\"sizeHeader\"\r\n             required\r\n             name=\"sizeHeader\"\r\n             type=\"number\"\r\n             class=\"form-control\"\r\n             id=\"sizeHeader\"\r\n             placeholder=\"3\">\r\n    </div>\r\n  </form>\r\n\r\n    <div class=\"form-group\">\r\n      <a (click)=\"deleteWidget()\" [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget']\"\r\n         class=\"btn btn-danger btn-block\">\r\n        Delete\r\n      </a>\r\n    </div>\r\n</div>\r\n\r\n\r\n<nav class=\"navbar navbar-default bg-primary navbar-fixed-bottom\">\r\n  <p class=\"navbar-brand pull-right\">\r\n    <a [routerLink]=\"['/user']\">\r\n      <span class=\"glyphicon glyphicon-user glyphicon-user-blue\"></span>\r\n    </a>\r\n  </p>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.widget = {};
        this.widgets = [{}];
        this.error = '';
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.textHeader = _this.widget['text'];
                _this.sizeHeader = _this.widget['size'];
            });
        });
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.textHeader) {
            this.widget['widgetType'] = 'HEADING';
            this.widget['text'] = this.textHeader;
            this.widget['size'] = this.sizeHeader;
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
                _this.router.navigate(['/user', 'website', _this.wid, 'page', _this.pid, 'widget']);
            });
        }
        else {
            this.error = 'Please enter header text';
        }
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-default bg-primary navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-brand pull-right right-margin-fix\">\r\n        <a (click)=\"updateWidget()\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-ok glyphicon-black\"></span>\r\n        </a>\r\n      </div>\r\n      <div class=\"navbar-brand pull-left left-margin-fix\">\r\n        <a [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget']\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-chevron-left glyphicon-black\"></span>\r\n        </a>\r\n      </div>\r\n      <p class=\"navbar-header pull-left\">\r\n        <a class=\"navbar-brand titlePages\">\r\n          <b>Widget Edit</b>\r\n        </a>\r\n      </p>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n<div class=\"container-fluid scroller\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label>\r\n        Text\r\n      </label>\r\n      <quill-editor [(ngModel)]=\"text\"\r\n                    name=\"textHtml\" id=\"textHtml\"></quill-editor>\r\n    </div>\r\n  </form>\r\n\r\n    <div class=\"form-group\">\r\n      <a (click)=\"deleteWidget()\" [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget']\"\r\n         class=\"btn btn-danger btn-block\">\r\n        Delete\r\n      </a>\r\n    </div>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default bg-primary navbar-fixed-bottom\">\r\n  <p class=\"navbar-brand pull-right\">\r\n    <a [routerLink]=\"['/user']\">\r\n      <span class=\"glyphicon glyphicon-user glyphicon-user-blue\"></span>\r\n    </a>\r\n  </p>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.widget = {};
        this.widgets = [{}];
        this.error = '';
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wid)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.text = widget['text'];
            });
        });
    };
    WidgetHtmlComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.text) {
            this.widget['widgetType'] = 'HTML';
            this.widget['text'] = this.text;
            this.widgetService.updateWidget(this.wid, this.widget)
                .subscribe(function (widgets) {
                _this.router.navigate(['user/', 'website', _this.wid, 'page', _this.pid, 'widget']);
            });
        }
        else {
            this.error = 'Please enter text of the HTML';
        }
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wid)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['user/', 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetHtmlComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-default bg-primary navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-brand pull-right right-margin-fix\">\r\n        <a (click)=\"updateWidget()\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-ok glyphicon-black\"></span>\r\n        </a>\r\n      </div>\r\n      <div class=\"navbar-brand pull-left left-margin-fix\">\r\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-chevron-left glyphicon-black\"></span>\r\n        </a>\r\n      </div>\r\n      <p class=\"navbar-header pull-left\">\r\n        <a class=\"navbar-brand titlePages\">\r\n          <b>Widget Edit</b>\r\n        </a>\r\n      </p>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n <div class=\"container-fluid scroller\">\r\n   <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\r\n     <div class=\"form-group\">\r\n       <label>\r\n         Upload Image\r\n       </label>\r\n       <input name=\"myFile\" type=\"file\" class=\"form-control\"/>\r\n     </div>\r\n\r\n     <div class=\"form-group\">\r\n       <label for=\"url\">URL</label>\r\n       <input type=\"text\" class=\"form-control\" id=\"url\" placeholder=\"https://www.youtube.com/watch?v=WD0eofKKH4c\" name=\"url\" [(ngModel)]=\"url\">\r\n     </div>\r\n\r\n     <div class=\"form-group\">\r\n       <label for=\"width\">Width</label>\r\n       <input [(ngModel)]=\"widthImage\"\r\n              name=\"width\"\r\n              required\r\n              type=\"text\"\r\n              required\r\n              class=\"form-control\"\r\n              id=\"width\"\r\n              placeholder=\"100%\">\r\n     </div>\r\n     <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\r\n     <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\r\n     <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\r\n     <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\r\n     <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\r\n     <br/>\r\n     <a class=\"btn btn-primary btn-block margin-flick-button-bottom\"\r\n        [routerLink]=\"['/user/' + '/website/'+websiteId+'/page/'+pageId+'/widget/'+widgetId+'/flickr']\" >Choose From Flickr</a>\r\n     <div class=\"form-group\">\r\n       <a (click)=\"deleteWidget()\"\r\n          class=\"btn btn-danger btn-block \">\r\n         Delete\r\n       </a>\r\n     </div>\r\n   </form>\r\n </div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default bg-primary navbar-fixed-bottom\">\r\n  <p class=\"navbar-brand pull-right\">\r\n    <a [routerLink]=\"['/user', userId]\">\r\n      <span class=\"glyphicon glyphicon-user glyphicon-user-blue\"></span>\r\n    </a>\r\n  </p>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.widget = {};
        this.widgets = [{}];
        this.error = '';
        this.baseUrl = 'http://localhost:3100';
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.widthImage = _this.widget['width'];
                _this.url = _this.widget['url'];
            });
        });
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.url) {
            this.widget['widgetType'] = 'IMAGE';
            this.widget['width'] = this.widthImage;
            this.widget['url'] = this.url;
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
                _this.router.navigate(['user/', 'website', _this.widgetId, 'page', _this.pageId, 'widget']);
            });
        }
        else {
            this.error = 'Please enter the URL of the image';
        }
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['user/', 'website', _this.widgetId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-default bg-primary navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-brand pull-right right-margin-fix\">\r\n        <a (click)=\"updateWidget()\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-ok glyphicon-black\"></span>\r\n        </a>\r\n      </div>\r\n      <div class=\"navbar-brand pull-left left-margin-fix\">\r\n        <a [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget']\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-chevron-left glyphicon-black\"></span>\r\n        </a>\r\n      </div>\r\n      <p class=\"navbar-header pull-left\">\r\n        <a class=\"navbar-brand titlePages\">\r\n          <b>Widget Edit</b>\r\n        </a>\r\n      </p>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n<div class=\"container-fluid scroller\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label>\r\n        Text\r\n      </label>\r\n      <input [(ngModel)]=\"text\"\r\n             class=\"form-control\"\r\n             name=\"text\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>\r\n        Rows\r\n      </label>\r\n      <input [(ngModel)]=\"rows\" class=\"form-control\" type=\"number\" name=\"rows\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>\r\n        Name\r\n      </label>\r\n      <input [(ngModel)]=\"name\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"Name\"\r\n             name=\"name\"\r\n             placeholder=\"Name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>\r\n        Placeholder\r\n      </label>\r\n      <input [(ngModel)]=\"placeholder\" class=\"form-control\" name=\"placeholder\" required/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"text\"\r\n             readonly\r\n             value=\"Formatted\"\r\n             class=\"form-control\"/>\r\n      <span class=\"input-group-addon\">\r\n         <input [(ngModel)]=\"formatted\"\r\n                type=\"checkbox\"\r\n                name=\"formatted\"/>\r\n      </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <a (click)=\"deleteWidget()\" [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget']\"\r\n         class=\"btn btn-danger btn-block \">\r\n        Delete\r\n      </a>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default bg-primary navbar-fixed-bottom\">\r\n  <p class=\"navbar-brand pull-right\">\r\n    <a [routerLink]=\"['/user']\">\r\n      <span class=\"glyphicon glyphicon-user glyphicon-user-blue\"></span>\r\n    </a>\r\n  </p>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetTextComponent = (function () {
    function WidgetTextComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.widgets = [{}];
        this.error = '';
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.rows = widget.rows;
                _this.text = widget.text;
                _this.placeholder = widget.placeholder;
                _this.formatted = widget.formatted;
                _this.name = widget.name;
            });
        });
    };
    WidgetTextComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.text) {
            this.widget.widgetType = 'TEXT';
            this.widget.rows = this.rows;
            this.widget.text = this.text;
            this.widget.name = this.name;
            this.widget.formatted = this.formatted;
            this.widget.placeholder = this.placeholder;
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
                _this.router.navigate(['/user', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
        else {
            this.error = 'Please enter text of the widget';
        }
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-default bg-primary navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-brand pull-right right-margin-fix\">\r\n        <a (click)=\"updateWidget()\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-ok glyphicon-black\"></span>\r\n        </a>\r\n      </div>\r\n      <div class=\"navbar-brand pull-left left-margin-fix\">\r\n        <a [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget']\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-chevron-left glyphicon-black\"></span>\r\n        </a>\r\n      </div>\r\n      <p class=\"navbar-header pull-left\">\r\n        <a class=\"navbar-brand titlePages\">\r\n          <b>Widget Edit</b>\r\n        </a>\r\n      </p>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n <div class=\"container-fluid scroller\">\r\n   <form>\r\n     <div class=\"form-group\">\r\n       <label for=\"url\">URL</label>\r\n       <input type=\"url\"\r\n              class=\"form-control\"\r\n              id= \"url\"\r\n              placeholder=\"www.youtube.com\"\r\n              name=\"url\"\r\n              [(ngModel)]=\"url\">\r\n     </div>\r\n   </form>\r\n\r\n   <form>\r\n     <div class=\"form-group\">\r\n       <label for=\"width\">Width</label>\r\n       <input [(ngModel)]=\"width\"\r\n              name=\"width\"\r\n              required\r\n              type=\"text\"\r\n              required\r\n              class=\"form-control\"\r\n              id=\"width\"\r\n              placeholder=\"100%\">\r\n     </div>\r\n   </form>\r\n   <div class=\"form-group\">\r\n     <a (click)=\"deleteWidget()\"\r\n        class=\"btn btn-danger btn-block \"\r\n        [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget']\">\r\n       Delete\r\n     </a>\r\n   </div>\r\n </div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default bg-primary navbar-fixed-bottom\">\r\n  <p class=\"navbar-brand pull-right\">\r\n    <a [routerLink]=\"['/user']\">\r\n      <span class=\"glyphicon glyphicon-user glyphicon-user-blue\"></span>\r\n    </a>\r\n  </p>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.widget = {};
        this.widgets = [{}];
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.width = _this.widget['width'];
                _this.url = _this.widget['url'];
            });
        });
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widget['widgetType'] = 'YOUTUBE';
        this.widget['width'] = this.width;
        this.widget['url'] = this.url;
        this.widgetService.updateWidget(this.wgid, this.widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default bg-primary navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <p class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/user', 'website', websiteId, 'page']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left glyphicon-black\"></span>\r\n      </a>\r\n    </p>\r\n\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b class=\"titlePages\">Widgets</b>\r\n      </a>\r\n    </p>\r\n\r\n    <!--tick mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget', 'new']\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-plus glyphicon-black\" ></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<br/>\r\n\r\n<div class=\"container-fluid scroller\">\r\n\r\n  <div *ngFor=\"let widget of pageWidgets\">\r\n\r\n\r\n  <div [ngSwitch]=\"widget['widgetType']\">\r\n    <div *ngSwitchCase=\"'HEADING'\">\r\n      <div class= \"toolbar\">\r\n        <a [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget', widget['_id']]\">\r\n          <span class=\"glyphicon glyphicon-cog\"></span>\r\n        </a>\r\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n      </div>\r\n      <h1>{{widget['text']}}</h1>\r\n    </div>\r\n\r\n    <div *ngSwitchCase=\"'HTML'\">\r\n      <div class= \"toolbar\">\r\n        <a [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget', widget['_id']]\">\r\n          <span class=\"glyphicon glyphicon-cog\"></span>\r\n        </a>\r\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n      </div>\r\n      <div [innerHtml]=\"widget['text']\"></div>\r\n    </div>\r\n\r\n    <div *ngSwitchCase=\"'TEXT'\">\r\n      <div class=\"toolbar\">\r\n        <a [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget', widget['_id']]\">\r\n          <span class=\"glyphicon glyphicon-cog\"></span>\r\n        </a>\r\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n      </div>\r\n      <div *ngIf=\"widget['formatted']\">\r\n        <quill-editor [(ngModel)]=\"widget['text']\" name=\"text\"></quill-editor>\r\n      </div>\r\n      <input *ngIf=\"!widget['formatted'] && (!widget['rows'] || widget['rows']===1)\"\r\n             placeholder=\"{{widget['placeholder']}}\" class=\"form-control\"/>\r\n\r\n      <textarea *ngIf=\"!widget['formatted'] && (widget['rows'] > 1)\"\r\n                rows=\"{{widget['rows']}}\" placeholder=\"{{widget['placeholder']}}\"\r\n                class=\"form-control\">{{widget['text']}}</textarea>\r\n    </div>\r\n\r\n\r\n    <div *ngSwitchCase=\"'IMAGE'\">\r\n      <div class= \"toolbar\">\r\n        <a [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget', widget['_id']]\">\r\n          <span class=\"glyphicon glyphicon-cog\"></span>\r\n        </a>\r\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n      </div>\r\n      <img class=\"sadaab-content\" src=\"{{widget['url']}}\" />\r\n    </div>\r\n\r\n    <div *ngSwitchCase=\"'YOUTUBE'\" class=\"youtube-widget\">\r\n      <div class= \"toolbar\">\r\n        <a [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget', widget['_id']]\">\r\n          <span class=\"glyphicon glyphicon-cog\"></span>\r\n        </a>\r\n        <span class=\"glyphicon glyphicon-list\"></span>\r\n      </div>\r\n      <iframe [width]=\"widget['width']\" height=\"315\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(widget['url'])\" frameborder=\"0\" allowfullscreen></iframe>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  </div>\r\n\r\n\r\n  <nav class=\"navbar navbar-default bg-primary navbar-fixed-bottom\">\r\n    <div class=\"container-fluid\">\r\n      <p class=\"navbar-text pull-left\">\r\n        <a [routerLink]=\"['/user']\">\r\n          <span class=\"glyphicon glyphicon-play glyphicon-black\"></span>\r\n        </a>\r\n        <a [routerLink]=\"['/user']\">\r\n          <span class=\"glyphicon glyphicon-eye-open glyphicon-black\"></span>\r\n        </a>\r\n      </p>\r\n\r\n      <p class=\"navbar-text pull-right\">\r\n        <a [routerLink]=\"['/user']\">\r\n          <span class=\"glyphicon glyphicon-user glyphicon-user-blue\"></span>\r\n        </a>\r\n      </p>\r\n\r\n    </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetListComponent = (function () {
    function WidgetListComponent(userService, sanitizer, activatedRoute, widgetService, sharedService) {
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.sharedService = sharedService;
        this.pageWidgets = [{}];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.pageWidgets = widgets;
        });
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]) === "function" && _e || Object])
], WidgetListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "newIndexes", void 0);
SortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var PageService = (function () {
    function PageService(http) {
        this.http = http;
        this.api = {
            'createPage': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page.websiteId = websiteId;
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.post(url, page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/website/' + websiteId + '/page')
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/page/' + pageId, page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return res.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// injecting service into module
var UserService = (function () {
    function UserService(router, http, sharedService) {
        this.router = router;
        this.http = http;
        this.sharedService = sharedService;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.users = [
            { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', email: 'alice@webdev.com' },
            { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: 'bob@webdev.com' },
            { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', email: 'charly@webdev.com' },
            { _id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi', email: 'jannunzi@webdev.com' }
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById
        };
    }
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/logout', {}, this.options)
            .map(function (res) {
            return res;
        });
    };
    UserService.prototype.register = function (newUser) {
        this.options.withCredentials = true;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/register', newUser, this.options)
            .map(function (res) {
            alert('entered');
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true; // jga
        var body = {
            username: username,
            password: password
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/login', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.createUser = function (user) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/user';
        return this.http.post(url, user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/user/' + userId, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/user/' + userId;
        return this.http.delete(url);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WebsiteService = (function () {
    function WebsiteService(http) {
        this.http = http;
        this.userWebsites = [
            { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '123', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '123', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' }
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website.developerId = userId;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/user/' + userId + '/website', website)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/website/' + websiteId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/website/' + websiteId;
        return this.http.put(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            return res.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WidgetService = (function () {
    function WidgetService(http) {
        this.http = http;
        this.widgets = [
            { '_id': '123', 'widgetType': 'HEADING', 'pageId': '890', 'size': 2, 'text': 'GIZMODO' },
            { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '890', 'width': '100%',
                'url': 'http://lorempixel.com/400/200/' },
            { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' },
            { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '890', 'width': '100%',
                'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E' },
            { '_id': '789', 'widgetType': 'HTML', 'pageId': '890', 'text': '<p>Lorem ipsum</p>' }
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget.pageId = pageId;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/page/' + pageId + '/widget', widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/page/' + pageId + '/widget')
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/widget/' + widgetId, widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map