"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_decorator_1 = require("../decorators/app.decorator");
const ExampleServer_1 = require("./ExampleServer");
const express_app_1 = require("../routing/express-app");
let ExampleApp = class ExampleApp extends express_app_1.ExpressApp {
};
ExampleApp = __decorate([
    app_decorator_1.App({
        bootstrap: ExampleServer_1.ExampleServer
    })
], ExampleApp);
exports.ExampleApp = ExampleApp;
//# sourceMappingURL=ExampleApp.js.map