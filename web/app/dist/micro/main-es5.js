function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"width:80%; margin: auto;\">\n  <mat-toolbar style=\"padding: 1em; background-color: white\">\n    <mat-toolbar-row>\n      <button mat-icon-button (click)=\"sidenav.toggle()\" fxHide.gt-sm>\n        <mat-icon>menu</mat-icon>&nbsp;&nbsp;&nbsp;\n      </button>\n      <img routerLink=\"/\" style=\"height: 100%\" src=\"/assets/logo.png\" />\n      <span routerLink=\"/\" style=\"font-size: 1.5em; font-weight: 600\">&nbsp; Micro</span>\n      <span class=\"menu-spacer\"></span>\n      <div style=\"padding-top: 4px;\" fxShow=\"true\" fxHide.lt-md>\n        <!-- The following menu items will be hidden on both SM and XS screen sizes -->\n        <a href=\"/about\" mat-button>About</a>\n        <a href=\"/blog\" mat-button>Blog</a>\n        <a href=\"#\" mat-button>Docs</a>\n        <a href=\"#\" mat-button>Explore</a>\n        <a href=\"#\" mat-button>Slack</a>\n        <a href=\"#\" mat-button>Tools</a>\n      \n        <mat-menu #menu=\"matMenu\">\n          <button class=\"logout\" id=\"logout\" *ngIf=\"user && user.name\" mat-menu-item (click)=\"us.logout()\">\n            <mat-icon style=\"color: #F44336\">power_settings_new</mat-icon>\n            Logout&nbsp;&nbsp;&nbsp;&nbsp;\n          </button>\n        </mat-menu>\n        <span fxHide=\"false\" fxHide.lt-md>\n          <button *ngIf=\"user && user.name\" mat-button [matMenuTriggerFor]=\"menu\" class=\"dropdown-menu\" id=\"dropdown-menu\">\n              {{user.name}}\n            <mat-icon>keyboard_arrow_down</mat-icon>\n          </button>\n  \n          <ng-container *ngIf=\"!us.loggedIn() || !user || !user.name\">\n            <a routerLink=\"/login\" color=\"accent\" mat-raised-button>Login</a>\n          </ng-container>\n        </span>\n  \n        <span fxHide=\"false\" fxHide.gt-sm>\n          <button style=\"padding-right: 0; margin-right: 0;\" mat-button [matMenuTriggerFor]=\"menu\">\n            <mat-icon style=\"color: white\">dehaze</mat-icon>\n          </button>\n        </span>\n        \n  \n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-sidenav-container style=\"height: 100%\" fxFlexFill>\n    <mat-sidenav style=\"width: 100px\" #sidenav>\n      <mat-nav-list>\n        <div><a (click)=\"sidenav.toggle()\" href=\"\" mat-list-item>Close</a></div>\n        <div><a href=\"#\" mat-button>About</a></div>\n        <div><a href=\"#\" mat-button>Blog</a></div>\n        <div><a href=\"#\" mat-button>Docs</a></div>\n        <div><a href=\"#\" mat-button>Explore</a></div>\n        <div><a href=\"#\" mat-button>Slack</a></div>\n        <div><a href=\"#\" mat-button>Tools</a></div>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content style=\"padding: 1em; background: white;\" fxFlexFill>\n      <simple-notifications></simple-notifications>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n    <div fxHide.gt-xs>\n        <button mat-icon-button (click)=\"onToggleSidenav()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n    </div>\n    <div>\n        <a routerLink=\"/home\">Owner-Account</a>\n    </div>\n    <div fxFlex fxLayout fxLayoutAlign=\"end\" fxHide.xs>\n        <ul fxLayout fxLayoutGap=\"15px\" class=\"navigation-items\">\n            <li>\n                <a routerLink=\"/owner\">Owner Actions</a>\n            </li>\n            <li>\n                <a routerLink=\"/account\">Account Actions</a>\n            </li>\n        </ul>\n    </div>\n  </mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"padding-left: 1.75em; margin: auto;\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div\n      style=\"margin: 2em 0\"\n      fxLayoutGap=\"2em\"\n      fxLayout.lt-sm=\"column\"\n      fxLayout=\"row\"\n    >\n      <div fxFlex=\"50%\" style=\"padding-top: 1em;\">\n        <h1 class=\"mat-display-1\">\n          The simplest way to build, share and collaborate on microservices\n        </h1>\n        <h2 class=\"mat-headline\">\n          Micro empowers developers to build microservices in the cloud and\n          beyond without thinking about the underlying infrastructure.\n        </h2>\n        <br />\n        <p>\n          Micro is built with a developer first focus.\n        </p>\n        <br /><br />\n        <p>\n          <button mat-raised-button color=\"primary\">Learn More</button>\n        </p>\n      </div>\n\n      <div fxFlex=\"50%\" style=\"text-align: center\">\n        <img width=\"250px\" src=\"/assets/circle.png\" />\n      </div>\n    </div>\n  </div>\n  <div style=\"padding-top: 7em;\">\n    <h1 class=\"mat-display-1\" style=\"font-size: 2em; text-align: center;\">\n      What we're building\n    </h1>\n  </div>\n\n  <div\n    style=\"width: 70%; margin: auto; border-top: 1px solid #ccc; padding: 3em;\"\n  >\n    <div style=\"text-align: center\">\n      <span class=\"mat-display-2\">\n        M3O\n      </span>\n      <h3 style=\"color: grey;\" class=\"mat-subheading-2\">\n        (pronounced \"em-3-oh\")\n      </h3>\n      <span>A global microservices platform </span>\n    </div>\n\n    <div style=\"padding-top: 2em; text-align: left\">\n      M3O is a serverless platform for microservices development in the cloud\n      and beyond. For the past few years cloud-native technology has added\n      significant complexity to software development and largely increased the\n      barrier to entry for developers to get started.\n    </div>\n    <div style=\"padding-top: 1em; text-align: center\">\n      <h2\n        class=\"mat-display-1\"\n        style=\"margin-bottom: 1em; color: grey; font-size: 1.5em; font-style: italic\"\n      >\n        <i\n          >&#8220;Building cloud-native services should be <br />easier not\n          harder&#8221;</i\n        >\n      </h2>\n    </div>\n    <p>\n      Small teams and individual developers must be empowered to build software\n      at an accelerated pace but instead are forced to reason about\n      infrastructure and operations.\n    </p>\n    <br />\n    <p>\n      Micro is redefining the way we build software by focusing entirely on the\n      needs of developers and providing an environment in which we can realise\n      the true potential of the cloud.\n    </p>\n    <div style=\"padding-top: 1em; text-align: center\">\n      We'll be revealing more soon. Join the\n      <a href=\"https://micro.mu/#community\">community</a> to learn more now.\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"margin: auto;\" fxFlexFill fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <div\n    fxFlex=\"40px\"\n    style=\"height: 40px; background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=')\"\n  ></div>\n  <div style=\"padding: 0.5em; padding-left: 1em;\">\n    <a href=\"#\" click=\"githubLogin()\">Log in with Github</a>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-service/new-service.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-service/new-service.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewServiceNewServiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"padding-left: 1em; margin: auto;\">\n  <mat-card class=\"mat-card-flat\">\n    <mat-card-title>\n      <a routerLink=\"/services\">services</a> &gt; new\n    </mat-card-title>\n  </mat-card>\n  <mat-card>\n    <mat-card-title>\n      New service\n    </mat-card-title>\n    <mat-card-subtitle>\n      Running a new service on the micro platform\n    </mat-card-subtitle>\n    <p>\n      Step into the folder containing your micro service and issue the following\n      command:\n    </p>\n    <pre style=\"padding: 1em; background: #f6f6f6;\">micro run .</pre>\n    <br />\n    <p>\n      This page will redirect you to your service once it's up and running.s\n    </p>\n    <p *ngIf=\"false\">\n      <br />\n      We are waiting for your service to come up.<br /><br />\n      Progress:<br />\n      <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n    </p>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/service/service.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/service/service.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServiceServiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <mat-spinner\n    [diameter]=\"70\"\n    style=\"margin: auto;\"\n    *ngIf=\"!services\"\n  ></mat-spinner>\n</div>\n<div *ngIf=\"services\" style=\"padding-left: 1em; margin: auto;\">\n  <mat-card class=\"mat-card-flat\">\n    <mat-card-title>\n      <a routerLink=\"/services\">services</a>&nbsp; &gt;\n      <mat-icon style=\"color: green; vertical-align: middle;\"\n        >fiber_manual_record</mat-icon\n      >\n      {{ serviceName }}\n    </mat-card-title>\n    <mat-tab-group>\n      <mat-tab style=\"padding-top: 1em;\" label=\"Endpoints\">\n        <br />\n        <form class=\"example-form\">\n          <mat-form-field class=\"example-full-width\">\n            <input\n              name=\"query\"\n              matInput\n              [(ngModel)]=\"endpointQuery\"\n              placeholder=\"Search endpoints\"\n            />\n          </mat-form-field>\n        </form>\n        <ng-container *ngFor=\"let service of services\">\n          <div\n            *ngFor=\"\n              let endpoint of service.endpoints | search: 'name':endpointQuery\n            \"\n          >\n            <div style=\"padding-left: 2px; padding-right: 2px;\">\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    {{ endpoint.name }}\n                  </mat-panel-title>\n                  <mat-panel-description>\n                    {{ endpoint.title }}\n                  </mat-panel-description>\n                </mat-expansion-panel-header>\n\n                <pre style=\"padding: 1em; background: #f6f6f6;\">{{\n                  valueToString(endpoint.request, 1)\n                }}</pre>\n                <br />\n                <pre style=\"padding: 1em; background: #f6f6f6;\">{{\n                  valueToString(endpoint.response, 1)\n                }}</pre>\n              </mat-expansion-panel>\n            </div>\n            <br />\n          </div>\n        </ng-container>\n      </mat-tab>\n      <mat-tab label=\"Logs\">\n        <pre>\n            <div *ngFor=\"let log of logs\">{{ log.message }}</div></pre>\n      </mat-tab>\n      <mat-tab label=\"Stats\">\n        <br />\n\n          <div style=\"display: block;\">\n            <canvas\n              baseChart\n              width=\"400\"\n              height=\"400\"\n              [datasets]=\"requestRates.data\"\n              [options]=\"requestRates.options\"\n              [chartType]=\"requestRates.lineChartType\"\n            ></canvas>\n          </div>\n          <div style=\"display: block;\">\n            <canvas\n              baseChart\n              width=\"400\"\n              height=\"400\"\n              [datasets]=\"memoryRates.data\"\n              [options]=\"memoryRates.options\"\n              [chartType]=\"memoryRates.lineChartType\"\n            ></canvas>\n          </div>\n          <div style=\"display: block;\">\n            <canvas\n              baseChart\n              width=\"400\"\n              height=\"400\"\n              [datasets]=\"errorRates.data\"\n              [options]=\"errorRates.options\"\n              [chartType]=\"errorRates.lineChartType\"\n            ></canvas>\n          </div>\n          <div style=\"display: block;\">\n            <canvas\n              baseChart\n              width=\"400\"\n              height=\"400\"\n              [datasets]=\"concurrencyRates.data\"\n              [options]=\"concurrencyRates.options\"\n              [chartType]=\"concurrencyRates.lineChartType\"\n            ></canvas>\n          </div>\n          <div style=\"display: block;\">\n            <canvas\n              baseChart\n              width=\"400\"\n              height=\"400\"\n              [datasets]=\"gcRates.data\"\n              [options]=\"gcRates.options\"\n              [chartType]=\"gcRates.lineChartType\"\n            ></canvas>\n          </div>\n      </mat-tab>\n      <mat-tab label=\"Nodes\">\n        <br />\n        Nodes coming soon.\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServicesServicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <mat-spinner\n    [diameter]=\"70\"\n    style=\"margin: auto;\"\n    *ngIf=\"!services\"\n  ></mat-spinner>\n</div>\n<div *ngIf=\"services\" style=\"padding-left: 1em; margin: auto;\">\n  <mat-card class=\"mat-card-flat\">\n    <mat-card-title>\n      <a routerLink=\"/services\">services</a>\n      &nbsp;\n      <button\n        routerLink=\"/service/new\"\n        mat-mini-fab\n        aria-label=\"Add new service\"\n      >\n        <mat-icon>add</mat-icon>\n      </button>\n    </mat-card-title>\n    <form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input\n          name=\"query\"\n          matInput\n          [(ngModel)]=\"query\"\n          placeholder=\"Search services\"\n        />\n      </mat-form-field>\n    </form>\n\n    <br />\n    <mat-card\n      *ngFor=\"let service of services | keyvalue | search: 'key':query\"\n      style=\"margin-bottom: 1em; background: #fbfbfb\"\n    >\n      <mat-card-title style=\"font-size: 1.25em;\">\n        <mat-icon style=\"color: green; vertical-align: middle;\"\n          >fiber_manual_record</mat-icon\n        >\n        &nbsp;<a href=\"#\" routerLink=\"/service/{{ service.key }}\">{{\n          service.key\n        }}</a>\n        <mat-chip-list aria-label=\"Versions\">\n          <mat-chip *ngFor=\"let serv of service.value\">{{\n            serv.version\n          }}</mat-chip>\n        </mat-chip-list>\n      </mat-card-title>\n    </mat-card>\n    <br />&nbsp;\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

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

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts");
    /* harmony import */


    var _service_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service/service.component */
    "./src/app/service/service.component.ts");
    /* harmony import */


    var _new_service_new_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./new-service/new-service.component */
    "./src/app/new-service/new-service.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'services',
      component: _services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"]
    }, {
      path: 'service/new',
      component: _new_service_new_service_component__WEBPACK_IMPORTED_MODULE_7__["NewServiceComponent"]
    }, {
      path: 'service/:id',
      component: _service_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\nmat-sidenav-content {\n  height: 100%;\n}\n\n*[ng-reflect-router-link] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBYztVQUFkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxubWF0LXNpZGVuYXYtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuKltuZy1yZWZsZWN0LXJvdXRlci1saW5rXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/user.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(cookie, us) {
        _classCallCheck(this, AppComponent);

        this.cookie = cookie;
        this.us = us;
        this.title = 'micro';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.us.user;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! angular2-notifications */
    "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");
    /* harmony import */


    var _service_service_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./service/service.component */
    "./src/app/service/service.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _search_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./search.pipe */
    "./src/app/search.pipe.ts");
    /* harmony import */


    var _new_service_new_service_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./new-service/new-service.component */
    "./src/app/new-service/new-service.component.ts");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"], _service_service_component__WEBPACK_IMPORTED_MODULE_16__["ServiceComponent"], _search_pipe__WEBPACK_IMPORTED_MODULE_18__["SearchPipe"], _new_service_new_service_component__WEBPACK_IMPORTED_MODULE_19__["NewServiceComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], angular2_notifications__WEBPACK_IMPORTED_MODULE_15__["SimpleNotificationsModule"].forRoot(), _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_20__["NgxChartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_21__["ChartsModule"]],
      providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"], _user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.sass":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.sass ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zYXNzIn0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(us) {
        _classCallCheck(this, LoginComponent);

        this.us = us;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "githubLogin",
        value: function githubLogin(event) {
          this.us.logout();
          document.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/v1/github/login';
          return false;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"])], LoginComponent.prototype, "githubLogin", null);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.sass */
      "./src/app/login/login.component.sass")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/new-service/new-service.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/new-service/new-service.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewServiceNewServiceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1zZXJ2aWNlL25ldy1zZXJ2aWNlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/new-service/new-service.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/new-service/new-service.component.ts ***!
    \******************************************************/

  /*! exports provided: NewServiceComponent */

  /***/
  function srcAppNewServiceNewServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewServiceComponent", function () {
      return NewServiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NewServiceComponent =
    /*#__PURE__*/
    function () {
      function NewServiceComponent() {
        _classCallCheck(this, NewServiceComponent);
      }

      _createClass(NewServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewServiceComponent;
    }();

    NewServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-service',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-service.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-service/new-service.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-service.component.css */
      "./src/app/new-service/new-service.component.css")).default]
    })], NewServiceComponent);
    /***/
  },

  /***/
  "./src/app/search.pipe.ts":
  /*!********************************!*\
    !*** ./src/app/search.pipe.ts ***!
    \********************************/

  /*! exports provided: SearchPipe */

  /***/
  function srcAppSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
      return SearchPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    function index(obj, is, value) {
      if (typeof is == 'string') return index(obj, is.split('.'), value);else if (is.length == 1 && value !== undefined) return obj[is[0]] = value;else if (is.length == 0) return obj;else return index(obj[is[0]], is.slice(1), value);
    }

    var SearchPipe =
    /*#__PURE__*/
    function () {
      function SearchPipe() {
        _classCallCheck(this, SearchPipe);
      }

      _createClass(SearchPipe, [{
        key: "transform",
        value: function transform(value, keys, term) {
          if (!term) return value;
          return (value || []).filter(function (item) {
            return keys.split(",").some(function (key) {
              return new RegExp(term, "gi").test(index(item, key));
            });
          });
        }
      }]);

      return SearchPipe;
    }();

    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: "search"
    })], SearchPipe);
    /***/
  },

  /***/
  "./src/app/service.service.ts":
  /*!************************************!*\
    !*** ./src/app/service.service.ts ***!
    \************************************/

  /*! exports provided: ServiceService */

  /***/
  function srcAppServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceService", function () {
      return ServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/user.service.ts");

    var ServiceService =
    /*#__PURE__*/
    function () {
      function ServiceService(us, http) {
        _classCallCheck(this, ServiceService);

        this.us = us;
        this.http = http;
      }

      _createClass(ServiceService, [{
        key: "list",
        value: function list() {
          var _this = this;

          return new Promise(function (resolve, reject) {
            return _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/v1/services?token=' + _this.us.token()).toPromise().then(function (servs) {
              resolve(servs);
            });
          });
        }
      }, {
        key: "logs",
        value: function logs(service) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            return _this2.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/v1/service/logs?service=' + service + '&token=' + _this2.us.token()).toPromise().then(function (servs) {
              resolve(servs);
            });
          });
        }
      }, {
        key: "stats",
        value: function stats(service) {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            return _this3.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/v1/service/stats?service=' + service + '&token=' + _this3.us.token()).toPromise().then(function (servs) {
              resolve(servs);
            });
          });
        }
      }]);

      return ServiceService;
    }();

    ServiceService.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ServiceService);
    /***/
  },

  /***/
  "./src/app/service/service.component.css":
  /*!***********************************************!*\
    !*** ./src/app/service/service.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppServiceServiceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2Uvc2VydmljZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/service/service.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/service.component.ts ***!
    \**********************************************/

  /*! exports provided: ServiceComponent */

  /***/
  function srcAppServiceServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceComponent", function () {
      return ServiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service.service */
    "./src/app/service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ServiceComponent =
    /*#__PURE__*/
    function () {
      function ServiceComponent(ses, activeRoute) {
        _classCallCheck(this, ServiceComponent);

        this.ses = ses;
        this.activeRoute = activeRoute;
        this.memoryRates = this.options("memory usage (MB)");
        this.requestRates = this.options("requests/second");
        this.errorRates = this.options("errors/second");
        this.concurrencyRates = this.options("goroutines");
        this.gcRates = this.options("garbage collection (nanoseconds/seconds)");
      }

      _createClass(ServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.activeRoute.params.subscribe(function (p) {
            if (_this4.intervalId) {
              clearInterval(_this4.intervalId);
            }

            _this4.serviceName = p["id"];

            _this4.ses.list().then(function (servs) {
              _this4.services = servs.filter(function (s) {
                return s.name == _this4.serviceName;
              });
            });

            _this4.ses.logs(_this4.serviceName).then(function (logs) {
              _this4.logs = logs;
            });

            _this4.ses.stats(_this4.serviceName).then(function (stats) {
              _this4.stats = stats;

              _this4.processStats();
            });

            _this4.intervalId = setInterval(function () {
              _this4.ses.stats(_this4.serviceName).then(function (stats) {
                _this4.stats = stats;

                _this4.processStats();
              });
            }, 5000);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.intervalId) {
            clearInterval(this.intervalId);
          }
        }
      }, {
        key: "valueToString",
        value: function valueToString(input, indentLevel) {
          var _this5 = this;

          if (!input) return "";
          var indent = Array(indentLevel).join("    ");
          var fieldSeparator = ",\n";

          if (input.values) {
            return "".concat(indent).concat(input.type, " ").concat(input.name, " {\n").concat(input.values.map(function (field) {
              return _this5.valueToString(field, indentLevel + 1);
            }).join(fieldSeparator), "\n").concat(indent, "}");
          }

          return "".concat(indent).concat(input.type, " ").concat(input.name);
        } // Stats/ Chart related things

      }, {
        key: "processStats",
        value: function processStats() {
          var _this6 = this;

          function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
          }

          var nodes = this.stats.map(function (stat) {
            return stat.service.node.id;
          }).filter(onlyUnique);
          this.requestRates.data = nodes.map(function (node) {
            return {
              label: node,
              type: "line",
              pointRadius: 0,
              fill: false,
              lineTension: 0,
              borderWidth: 2,
              data: _this6.stats.filter(function (stat) {
                return stat.service.node.id == node;
              }).map(function (stat, i) {
                var value = stat.requests;

                if (i == 0 && _this6.stats.length > 0) {
                  var first = _this6.stats[0].requests ? _this6.stats[0].requests : 0;
                  value = _this6.stats[1].requests - first;
                } else {
                  var prev = _this6.stats[i - 1].requests ? _this6.stats[i - 1].requests : 0;
                  value = _this6.stats[i].requests - prev;
                }

                return {
                  x: new Date(stat.timestamp * 1000),
                  y: value ? value : 0
                };
              })
            };
          });
          this.memoryRates.data = nodes.map(function (node) {
            return {
              label: node,
              type: "line",
              pointRadius: 0,
              fill: false,
              lineTension: 0,
              borderWidth: 2,
              data: _this6.stats.filter(function (stat) {
                return stat.service.node.id == node;
              }).map(function (stat, i) {
                var value = stat.memory;
                return {
                  x: new Date(stat.timestamp * 1000),
                  y: value ? value / (1000 * 1000) : 0
                };
              })
            };
          });
          this.errorRates.data = nodes.map(function (node) {
            return {
              label: node,
              type: "line",
              pointRadius: 0,
              fill: false,
              lineTension: 0,
              borderWidth: 2,
              data: _this6.stats.filter(function (stat) {
                return stat.service.node.id == node;
              }).map(function (stat, i) {
                var value = stat.errors;

                if (i == 0 && _this6.stats.length > 0) {
                  var first = _this6.stats[0].errors ? _this6.stats[0].errors : 0;
                  value = _this6.stats[1].errors - first;
                } else {
                  var prev = _this6.stats[i - 1].errors ? _this6.stats[i - 1].errors : 0;
                  value = _this6.stats[i].errors - prev;
                }

                return {
                  x: new Date(stat.timestamp * 1000),
                  y: value ? value : 0
                };
              })
            };
          });
          var concMax = 0;
          this.concurrencyRates.data = nodes.map(function (node) {
            return {
              label: node,
              type: "line",
              pointRadius: 0,
              fill: false,
              lineTension: 0,
              borderWidth: 2,
              data: _this6.stats.filter(function (stat) {
                return stat.service.node.id == node;
              }).map(function (stat, i) {
                var value = stat.threads;

                if (value > concMax) {
                  concMax = value;
                }

                return {
                  x: new Date(stat.timestamp * 1000),
                  y: value ? value : 0
                };
              })
            };
          }); //this.concurrencyRates.options.scales.yAxes[0].ticks.max = concMax * 1.5;

          this.gcRates.data = nodes.map(function (node) {
            return {
              label: node,
              type: "line",
              pointRadius: 0,
              fill: false,
              lineTension: 0,
              borderWidth: 2,
              data: _this6.stats.filter(function (stat) {
                return stat.service.node.id == node;
              }).map(function (stat, i) {
                var value = stat.gc;

                if (i == 0 && _this6.stats.length > 0) {
                  var first = _this6.stats[0].gc ? _this6.stats[0].gc : 0;
                  value = _this6.stats[1].gc - first;
                } else {
                  var prev = _this6.stats[i - 1].gc ? _this6.stats[i - 1].gc : 0;
                  value = _this6.stats[i].gc - prev;
                }

                return {
                  x: new Date(stat.timestamp * 1000),
                  y: value ? value : 0
                };
              })
            };
          });
        } // config options taken from https://www.chartjs.org/samples/latest/scales/time/financial.html

      }, {
        key: "options",
        value: function options(ylabel, distribution) {
          if (!distribution) {
            distribution = "series";
          }

          return {
            options: {
              animation: {
                duration: 0
              },
              scales: {
                xAxes: [{
                  type: "time",
                  distribution: distribution,
                  offset: true,
                  ticks: {
                    major: {
                      enabled: true,
                      fontStyle: "bold"
                    },
                    source: "data",
                    autoSkip: true,
                    autoSkipPadding: 75,
                    maxRotation: 0,
                    sampleSize: 100
                  }
                }],
                yAxes: [{
                  gridLines: {
                    drawBorder: false
                  },
                  scaleLabel: {
                    display: true,
                    labelString: ylabel
                  }
                }]
              },
              tooltips: {
                intersect: false,
                mode: "index",
                callbacks: {
                  label: function label(tooltipItem, myData) {
                    var label = myData.datasets[tooltipItem.datasetIndex].label || "";

                    if (label) {
                      label += ": ";
                    }

                    label += parseFloat(tooltipItem.value).toFixed(2);
                    return label;
                  }
                }
              }
            },
            data: [],
            lineChartType: "line"
          };
        }
      }]);

      return ServiceComponent;
    }();

    ServiceComponent.ctorParameters = function () {
      return [{
        type: _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-service",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./service.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/service/service.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./service.component.css */
      "./src/app/service/service.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../node_modules/nvd3/build/nv.d3.css */
      "./node_modules/nvd3/build/nv.d3.css")).default]
    })], ServiceComponent);
    /***/
  },

  /***/
  "./src/app/services/services.component.css":
  /*!*************************************************!*\
    !*** ./src/app/services/services.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesServicesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/services/services.component.ts":
  /*!************************************************!*\
    !*** ./src/app/services/services.component.ts ***!
    \************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service.service */
    "./src/app/service.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var groupBy = function groupBy(xs, key) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };

    var ServicesComponent =
    /*#__PURE__*/
    function () {
      function ServicesComponent(activeRoute, cookie, ses, us) {
        _classCallCheck(this, ServicesComponent);

        this.activeRoute = activeRoute;
        this.cookie = cookie;
        this.ses = ses;
        this.us = us;
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          // This should not really happen here but hey... will do for now
          var queryParams = this.activeRoute.snapshot.queryParams;
          var token = queryParams["token"];

          if (token && token.length > 0) {
            this.cookie.set("token", token);
            this.us.get();
          }

          this.ses.list().then(function (servs) {
            _this7.services = groupBy(servs, "name");
          });
        }
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-services",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.component.css */
      "./src/app/services/services.component.css")).default]
    })], ServicesComponent);
    /***/
  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular2-notifications */
    "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http, cookie, notif) {
        var _this8 = this;

        _classCallCheck(this, UserService);

        this.http = http;
        this.cookie = cookie;
        this.notif = notif;
        this.user = {};
        this.get().then(function (user) {
          for (var _i = 0, _Object$keys = Object.keys(user); _i < _Object$keys.length; _i++) {
            var k = _Object$keys[_i];
            _this8.user[k] = user[k];
          }
        }).catch(function (e) {
          console.log(e);
        });
      }

      _createClass(UserService, [{
        key: "loggedIn",
        value: function loggedIn() {
          return this.token() && this.token().length > 0;
        }
      }, {
        key: "logout",
        value: function logout() {
          // todo We are nulling out the name here because that's what we use
          // for user existence checks.
          this.user.name = '';
          this.cookie.set("token", "");
          document.location.href = "/";
        }
      }, {
        key: "token",
        value: function token() {
          return this.cookie.get("token");
        } // gets current user

      }, {
        key: "get",
        value: function get() {
          var _this9 = this;

          return new Promise(function (resolve, reject) {
            if (!_this9.token() || _this9.token().length === 0) {
              setTimeout(function () {
                resolve({});
              }, 1); // hack to get around navbar router.isActive not being ready immediately

              return;
            }

            return _this9.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/v1/user?token=' + _this9.token()).toPromise().then(function (user) {
              for (var _i2 = 0, _Object$keys2 = Object.keys(user); _i2 < _Object$keys2.length; _i2++) {
                var k = _Object$keys2[_i2];
                _this9.user[k] = user[k];
              }

              resolve(user);
            }).catch(function (e) {
              if (e && e.error && e.error.error == "not found") {
                return;
              }

              console.log(e);

              _this9.notif.error("User load error", JSON.stringify(e));
            });
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      backendUrl: "http://127.0.0.1:6060"
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/crufter/code/src/github.com/micro/platform/web/web/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map