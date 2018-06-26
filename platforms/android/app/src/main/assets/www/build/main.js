webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};



/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, navParams, dataProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.toastCtrl = toastCtrl;
        this.getOrders();
    }
    OrdersPage.prototype.getOrders = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataProvider.getOrders()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersPage.prototype.deleteOrder = function (orderid) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataProvider.deleteOrder(orderid)];
                    case 1:
                        _a.sent();
                        this.getOrders();
                        this.presentToast("commande supprimée");
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.presentToast("Il y a eu une erreur");
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OrdersPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
        });
        toast.present();
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"C:\Users\Kevin.JORDIL\Documents\MOB1\myApp\src\pages\orders\orders.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Commandes</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <ion-list *ngIf="dataProvider.orders != null">\n        <ion-item *ngFor="let order of dataProvider.orders">\n          <p>Commande de {{ order.productName }}<br/> chez {{ order.companyName }}<br/> par {{ order.placed_by }} </p>\n          <ion-icon *ngIf="order.placed_by == dataProvider.firstname" name="trash" (click)="deleteOrder(order.id)"></ion-icon>\n        </ion-item>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin.JORDIL\Documents\MOB1\myApp\src\pages\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};




/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilPage = /** @class */ (function () {
    function ProfilPage(navCtrl, navParams, formBuilder, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.dataProvider = dataProvider;
        this.getFirstname();
        this.initForm();
    }
    ProfilPage.prototype.initForm = function () {
        this.firstname = this.dataProvider.firstname;
        this.profilForm = this.formBuilder.group({
            firstname: [this.firstname]
        });
    };
    ProfilPage.prototype.getFirstname = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataProvider.getFirstname()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilPage.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.profilForm.controls.firstname.value);
                        return [4 /*yield*/, this.dataProvider.setFirstname(this.profilForm.controls.firstname.value)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dataProvider.getFirstname()];
                    case 2:
                        _a.sent();
                        this.initForm();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"C:\Users\Kevin.JORDIL\Documents\MOB1\myApp\src\pages\profil\profil.html"*/'<!--\n  Generated template for the ProfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="profilForm">\n    <ion-item>\n      <ion-label >Prénom</ion-label>\n      <ion-input formControlName="firstname" type="text"></ion-input>\n    </ion-item>\n  </form>\n  <div *ngIf="profilForm.dirty">\n    <button ion-button (click)="save()">Save</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin.JORDIL\Documents\MOB1\myApp\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};



/**
 * Generated class for the SyncroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SyncroPage = /** @class */ (function () {
    function SyncroPage(navCtrl, navParams, dataProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.toastCtrl = toastCtrl;
        try {
            this.updateProducts();
        }
        catch (error) {
            alert(JSON.stringify(error));
        }
    }
    SyncroPage.prototype.updateProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.dataProvider.isUpToDate()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        console.log('update');
                        return [4 /*yield*/, this.dataProvider.updateLocal()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.dataProvider.getProducts()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        console.log('Nupdate');
                        return [4 /*yield*/, this.dataProvider.getProducts()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_1 = _a.sent();
                        alert(JSON.stringify(error_1));
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    SyncroPage.prototype.uploadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var updatedProducts, _i, _a, product, _b, _c, product, error_2;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        updatedProducts = [];
                        for (_i = 0, _a = this.dataProvider.products; _i < _a.length; _i++) {
                            product = _a[_i];
                            if (product.edited) {
                                updatedProducts.push(product);
                            }
                        }
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.dataProvider.setEditInProgress(false)];
                    case 2:
                        _d.sent();
                        return [4 /*yield*/, this.dataProvider.setProducts()];
                    case 3:
                        _d.sent();
                        return [4 /*yield*/, this.dataProvider.updateProducts(updatedProducts)];
                    case 4:
                        _d.sent();
                        for (_b = 0, _c = this.dataProvider.products; _b < _c.length; _b++) {
                            product = _c[_b];
                            if (product.edited) {
                                product.edited = false;
                            }
                        }
                        this.presentToast("Eléments mis à jour !");
                        return [3 /*break*/, 6];
                    case 5:
                        error_2 = _d.sent();
                        this.presentToast("Il y a eu une erreur");
                        console.log(error_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SyncroPage.prototype.cancelData = function () {
        this.dataProvider.updateLocal();
        this.presentToast("Eléments réinitialisés !");
    };
    SyncroPage.prototype.presentToast = function (givemessage) {
        var toast = this.toastCtrl.create({
            message: givemessage,
            duration: 3000,
        });
        toast.present();
    };
    SyncroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-syncro',template:/*ion-inline-start:"C:\Users\Kevin.JORDIL\Documents\MOB1\myApp\src\pages\syncro\syncro.html"*/'<!--\n  Generated template for the SyncroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Syncro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n    <ion-list *ngIf="dataProvider.products != null">\n        <div *ngFor="let product of dataProvider.products" >\n          <ion-item *ngIf="product.edited == true">\n            {{ product.name }}, nouveau stock de {{ product.stock }}\n          </ion-item>\n        </div>\n      </ion-list>\n      <button ion-button (click)="uploadData()">Envoi modification(s)</button>\n      <button ion-button (click)="cancelData()">Annuler modification(s)</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin.JORDIL\Documents\MOB1\myApp\src\pages\syncro\syncro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], SyncroPage);
    return SyncroPage;
}());

//# sourceMappingURL=syncro.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/orders/orders.module": [
		290,
		2
	],
	"../pages/profil/profil.module": [
		291,
		1
	],
	"../pages/syncro/syncro.module": [
		292,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, dataProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.dataProvider = dataProvider;
        this.toastCtrl = toastCtrl;
        try {
            this.updateProducts();
        }
        catch (error) {
            alert(JSON.stringify(error));
        }
    }
    HomePage.prototype.openProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_product__["a" /* ProductPage */], { 'product': product });
    };
    HomePage.prototype.updateProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, this.dataProvider.isUpToDate()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        this.presentToast("Mise à jour effectuée !");
                        return [4 /*yield*/, this.dataProvider.updateLocal()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.dataProvider.getProducts()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, this.dataProvider.getEditInProgress()];
                    case 5:
                        if (_a.sent()) {
                            this.presentToast("Modification en cours ! Gestion dans la page Synchronisation");
                        }
                        else {
                            this.presentToast("Aucune mise à jour !");
                        }
                        return [4 /*yield*/, this.dataProvider.getProducts()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_1 = _a.sent();
                        this.presentToast("Une erreur s'est produite !");
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.resetDate = function () {
        this.dataProvider.setLastUpdate(new Date('2015-01-01 12:00:00'));
    };
    HomePage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.updateProducts()];
                    case 1:
                        _a.sent();
                        refresher.complete();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        alert(JSON.stringify(error_2));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.presentToast = function (givemessage) {
        var toast = this.toastCtrl.create({
            message: givemessage,
            duration: 3000,
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Kevin.JORDIL\Documents\MOB1\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Vedjiz</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list *ngIf="dataProvider.products != null">\n    <ion-item *ngFor="let product of dataProvider.products" (click)="openProduct(product)">\n      <img class="images" center src="{{ product.picture }}" /> <h2 class="text"> {{ product.name }} ({{ product.price }} chf/{{ product.unit }})  <ion-icon *ngIf="product.stock < product.minstock" name="alert"></ion-icon> </h2>\n    </ion-item>\n  </ion-list>\n  <button ion-button (click)="resetDate()">Reset Date (DEV)</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Kevin.JORDIL\Documents\MOB1\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__supplier_supplier__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductPage = /** @class */ (function () {
    function ProductPage(navCtrl, navParams, formBuilder, toastCtrl, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.dataProvider = dataProvider;
        this.product = navParams.get('product');
        this.initForm();
    }
    ProductPage.prototype.cancel = function () {
        this.initForm();
    };
    ProductPage.prototype.save = function () {
        this.product.price = this.productForm.controls.price.value;
        this.product.unit = this.productForm.controls.unit.value;
        this.product.stock = this.productForm.controls.stock.value;
        this.product.edited = true;
        this.dataProvider.setProducts();
        this.dataProvider.setEditInProgress(true);
        this.initForm();
    };
    ProductPage.prototype.ionViewCanLeave = function () {
        if (this.productForm.dirty) {
            this.presentToast();
        }
        return !this.productForm.dirty;
    };
    ProductPage.prototype.initForm = function () {
        this.productForm = this.formBuilder.group({
            price: [this.product.price],
            unit: [this.product.unit],
            stock: [this.product.stock]
        });
    };
    ProductPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Vous devez enregistrer ou annuler les modifications en cours.',
            duration: 3000,
        });
        toast.present();
    };
    // Open page supplier
    ProductPage.prototype.openSupplier = function (supplier) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__supplier_supplier__["a" /* SupplierPage */], { 'supplier': supplier, 'product': this.product });
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"C:\Users\Kevin.JORDIL\Documents\MOB1\myApp\src\pages\product\product.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Vedjiz</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="head">\n    <img center src="{{ product.picture }}" />\n    <h3>{{ product.name }}</h3>\n  </div>\n\n  <form [formGroup]="productForm">\n    <ion-item>\n      <ion-label >Prix</ion-label>\n      <ion-input formControlName="price" type="number" step="0.10" [readonly]="!dataProvider.isAdmin"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label >Unité</ion-label>\n      <ion-input formControlName="unit" type="text" [readonly]="!dataProvider.isAdmin"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Stock</ion-label>\n      <ion-input formControlName="stock" type="text" [readonly]="!dataProvider.isAdmin"></ion-input>\n    </ion-item>\n  </form>\n  <div *ngIf="productForm.dirty">\n    <button *ngIf="dataProvider.isAdmin" ion-button (click)="save()">Save</button>\n    <button ion-button (click)="cancel()">Cancel</button>\n  </div>\n  <h4>Fournisseur</h4>\n  <ion-list *ngIf="product.suppliers.length > 0">\n    <ion-item *ngFor="let supplier of product.suppliers" (click)="openSupplier(supplier)">\n      {{ supplier.firstName }} {{ supplier.lastName }} de {{ supplier.companyName }}\n    </ion-item>\n  </ion-list>\n  <p *ngIf="product.suppliers.length == 0">Aucun fournisseur</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin.JORDIL\Documents\MOB1\myApp\src\pages\product\product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};




/**
 * Generated class for the SupplierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupplierPage = /** @class */ (function () {
    function SupplierPage(navCtrl, navParams, formBuilder, toastCtrl, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.dataProvider = dataProvider;
        this.quantity = 1;
        this.supplier = navParams.get('supplier');
        this.product = navParams.get('product');
        this.initForm();
    }
    SupplierPage.prototype.save = function () {
        this.supplier.firstName = this.supplierForm.controls.firstName.value;
        this.supplier.lastName = this.supplierForm.controls.lastName.value;
        this.supplier.phone = this.supplierForm.controls.phone.value;
        this.supplier.address = this.supplierForm.controls.address.value;
        this.supplier.companyName = this.supplierForm.controls.companyName.value;
        this.dataProvider.setProducts();
        this.initForm();
    };
    SupplierPage.prototype.ionViewCanLeave = function () {
        if (this.supplierForm.dirty) {
            this.presentToast('Vous devez enregistrer ou annuler les modifications en cours.');
        }
        return !this.supplierForm.dirty;
    };
    SupplierPage.prototype.cancel = function () {
        this.initForm();
    };
    SupplierPage.prototype.initForm = function () {
        this.supplierForm = this.formBuilder.group({
            firstName: [this.supplier.firstName],
            lastName: [this.supplier.lastName],
            phone: [this.supplier.phone],
            address: [this.supplier.address],
            companyName: [this.supplier.companyName]
        });
    };
    SupplierPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
        });
        toast.present();
    };
    SupplierPage.prototype.order = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataProvider.sendOrder(this.product.id, this.supplier.id, this.dataProvider.firstname, this.quantity)];
                    case 1:
                        _a.sent();
                        this.presentToast("Commande effecuée");
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.presentToast("Il y a eu une erreur");
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SupplierPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-supplier',template:/*ion-inline-start:"C:\Users\Kevin.JORDIL\Documents\MOB1\myApp\src\pages\supplier\supplier.html"*/'<!--\n  Generated template for the SupplierPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Supplier</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="supplierForm">\n    <ion-item>\n      <ion-label >Prénom</ion-label>\n      <ion-input formControlName="firstName" type="text" [readonly]="!dataProvider.isAdmin"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label >Nom</ion-label>\n      <ion-input formControlName="lastName" type="text" [readonly]="!dataProvider.isAdmin"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Tel</ion-label>\n      <ion-input formControlName="phone" type="text" [readonly]="!dataProvider.isAdmin"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Adresse</ion-label>\n      <ion-input formControlName="address" type="text" [readonly]="!dataProvider.isAdmin"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Companie</ion-label>\n      <ion-input formControlName="companyName" type="text" [readonly]="!dataProvider.isAdmin"></ion-input>\n    </ion-item>\n  </form>\n  <div *ngIf="supplierForm.dirty">\n    <button *ngIf="dataProvider.isAdmin" ion-button (click)="save()">Save</button>\n    <button ion-button (click)="cancel()">Cancel</button>\n  </div>\n  <div *ngIf="product.stock < product.minstock"> \n    <ion-title>Commandes</ion-title> \n    <div>\n      <ion-item>\n        <ion-input [(ngModel)]="quantity" type="number" min=1 max=1000></ion-input>\n      </ion-item>\n    </div>\n    <button ion-button (click)="order()">Commander</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kevin.JORDIL\Documents\MOB1\myApp\src\pages\supplier\supplier.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], SupplierPage);
    return SupplierPage;
}());

//# sourceMappingURL=supplier.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_syncro_syncro__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_product_product__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_supplier_supplier__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profil_profil__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_orders_orders__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_syncro_syncro__["a" /* SyncroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_supplier_supplier__["a" /* SupplierPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_orders_orders__["a" /* OrdersPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profil/profil.module#ProfilPageModule', name: 'ProfilPage', segment: 'profil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/syncro/syncro.module#SyncroPageModule', name: 'SyncroPage', segment: 'syncro', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_syncro_syncro__["a" /* SyncroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_supplier_supplier__["a" /* SupplierPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_orders_orders__["a" /* OrdersPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_data_data__["a" /* DataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, name, price, unit, stock, minstock, picture, suppliers) {
        if (suppliers === void 0) { suppliers = []; }
        this.id = id;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.stock = stock;
        this.minstock = minstock;
        this.picture = picture;
        this.suppliers = suppliers;
        this.edited = false;
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = /** @class */ (function () {
    function Order(id, productName, quantity, companyName, placed_by) {
        this.id = id;
        this.productName = productName;
        this.quantity = quantity;
        this.companyName = companyName;
        this.placed_by = placed_by;
    }
    return Order;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_order__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_supplier__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};







/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    function DataProvider(storage, httpClient) {
        this.storage = storage;
        this.httpClient = httpClient;
        this.endpoint = "http://vedjserver.mycpnv.ch/api/v1/";
        this.products = [];
        this.orders = [];
        this.setStatus();
        this.getFirstname();
    }
    DataProvider.prototype.getProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('products')];
                    case 1:
                        _a.products = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataProvider.prototype.setProducts = function () {
        return this.storage.set('products', this.products);
    };
    DataProvider.prototype.getProductsFromApi = function () {
        var _this = this;
        var products = [];
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.endpoint + "vegetables")
                .subscribe(function (data) {
                Object.keys(data).forEach(function (key) {
                    var suppliers = [];
                    data[key].suppliers.forEach(function (supplier) {
                        suppliers.push(new __WEBPACK_IMPORTED_MODULE_6__models_supplier__["a" /* Supplier */](supplier.id, supplier.firstName, supplier.lastName, '', '', supplier.companyName));
                    });
                    products.push(new __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* Product */](data[key].id, data[key].productName, data[key].price, data[key].unit, data[key].stock, data[key].low_stock_threshold, data[key].image64, suppliers));
                });
                resolve(products);
            }, function (error) {
                reject(error);
            });
        });
    };
    DataProvider.prototype.getLastUpdateFromApi = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.endpoint + "lastupdate")
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    // On prod must be private
    DataProvider.prototype.setLastUpdate = function (date) {
        if (date === void 0) { date = new Date(); }
        return this.storage.set('lastUpdate', date);
    };
    DataProvider.prototype.getLastUpdate = function () {
        return this.storage.get('lastUpdate');
    };
    DataProvider.prototype.clear = function () {
        return this.storage.clear();
    };
    DataProvider.prototype.updateLocal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, lastUpdateApi;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.clear()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.getProductsFromApi()];
                    case 2:
                        _a.products = _b.sent();
                        return [4 /*yield*/, this.setProducts()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.getLastUpdateFromApi()];
                    case 4:
                        lastUpdateApi = _b.sent();
                        return [4 /*yield*/, this.setLastUpdate(new Date(lastUpdateApi.updated_at))];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, this.setEditInProgress(false)];
                    case 6:
                        _b.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    DataProvider.prototype.isUpToDate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lastUpdateApi, lastUpdateLocal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEditInProgress()];
                    case 1:
                        if (_a.sent()) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.getLastUpdateFromApi()];
                    case 2:
                        lastUpdateApi = _a.sent();
                        lastUpdateApi = new Date(lastUpdateApi.updated_at);
                        return [4 /*yield*/, this.getLastUpdate()];
                    case 3:
                        lastUpdateLocal = _a.sent();
                        lastUpdateLocal = new Date(lastUpdateLocal);
                        return [2 /*return*/, (lastUpdateApi.getTime() > lastUpdateLocal.getTime())];
                }
            });
        });
    };
    DataProvider.prototype.updateProducts = function (changes) {
        return this.httpClient.patch(this.endpoint + "newstock", { changes: changes }).toPromise();
    };
    DataProvider.prototype.getEditInProgress = function () {
        return this.storage.get('editInProgress');
    };
    DataProvider.prototype.setEditInProgress = function (state) {
        return this.storage.set('editInProgress', state);
    };
    // Get info from status user in the storage
    DataProvider.prototype.getAdmin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.storage.get('adminUser')];
            });
        });
    };
    // Set the user status
    DataProvider.prototype.setAdmin = function (userStatus) {
        if (userStatus === void 0) { userStatus = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set('adminUser', userStatus)];
                    case 1:
                        _a.sent();
                        this.setStatus();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Set status string
    DataProvider.prototype.setStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAdmin()];
                    case 1:
                        if (_a.sent()) {
                            this.status = 'Admin';
                            this.isAdmin = true;
                        }
                        else {
                            this.status = 'Standard';
                            this.isAdmin = false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DataProvider.prototype.getFirstname = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('firstName')];
                    case 1:
                        _a.firstname = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataProvider.prototype.setFirstname = function (firstName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.storage.set('firstName', firstName)];
            });
        });
    };
    DataProvider.prototype.sendOrder = function (productid, providerid, placedby, quantity) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.httpClient.post(this.endpoint + "order", { productid: productid, providerid: providerid, placedby: placedby, quantity: quantity }).toPromise()];
            });
        });
    };
    DataProvider.prototype.getOrdersFromApi = function () {
        var _this = this;
        var orders = [];
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.endpoint + "orders")
                .subscribe(function (data) {
                Object.keys(data).forEach(function (key) {
                    orders.push(new __WEBPACK_IMPORTED_MODULE_2__models_order__["a" /* Order */](data[key].id, data[key].productName, data[key].quantity, data[key].companyName, data[key].placed_by));
                });
                resolve(orders);
            }, function (error) {
                reject(error);
            });
        });
    };
    DataProvider.prototype.getOrders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getOrdersFromApi()];
                    case 1:
                        _a.orders = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataProvider.prototype.deleteOrder = function (orderid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.httpClient.post(this.endpoint + "withdraw", { orderid: orderid }).toPromise()];
            });
        });
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Supplier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(263);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Supplier = /** @class */ (function (_super) {
    __extends(Supplier, _super);
    function Supplier(id, firstName, lastName, phone, address, companyName) {
        var _this = _super.call(this, id, firstName, lastName, phone, address) || this;
        _this.companyName = companyName;
        return _this;
    }
    return Supplier;
}(__WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */]));

//# sourceMappingURL=supplier.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(id, firstName, lastName, phone, address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profil_profil__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_syncro_syncro__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_orders_orders__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};









var MyApp = /** @class */ (function () {
    function MyApp(dataProvider, platform, statusBar, splashScreen) {
        this.dataProvider = dataProvider;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation and for all
        this.pages = [
            { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], onlyAdmin: false },
            { title: 'Profil', component: __WEBPACK_IMPORTED_MODULE_6__pages_profil_profil__["a" /* ProfilPage */], onlyAdmin: false },
            { title: 'Commandes', component: __WEBPACK_IMPORTED_MODULE_8__pages_orders_orders__["a" /* OrdersPage */], onlyAdmin: false },
            { title: 'Synchronisation', component: __WEBPACK_IMPORTED_MODULE_7__pages_syncro_syncro__["a" /* SyncroPage */], onlyAdmin: true },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    // Switch to another status
    MyApp.prototype.switchStatus = function (adminUser) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataProvider.setAdmin(adminUser)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        alert(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Kevin.JORDIL\Documents\MOB1\myApp\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n        <ion-title>{{ dataProvider.status }}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n        <div *ngFor="let p of pages">\n          <button menuClose ion-item (click)="openPage(p)" *ngIf="dataProvider.isAdmin == p.onlyAdmin || !p.onlyAdmin">{{p.title}}</button>\n        </div>\n      </ion-list>\n      <button ion-button (click)="switchStatus(true)">Admin</button>\n      <button ion-button (click)="switchStatus(false)">Standard</button>\n    </ion-content>\n  \n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Kevin.JORDIL\Documents\MOB1\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map