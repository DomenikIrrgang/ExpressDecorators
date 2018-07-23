"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_decorator_1 = require("../decorators/server.decorator");
const TestModule_1 = require("./TestModule");
const ExampleService_1 = require("./ExampleService");
let ExampleServer = class ExampleServer {
};
ExampleServer = __decorate([
    server_decorator_1.Server({
        port: 8080,
        imports: [
            TestModule_1.ExampleModule
        ],
        providers: [
            ExampleService_1.ExampleService
        ]
    })
], ExampleServer);
exports.ExampleServer = ExampleServer;
//# sourceMappingURL=ExampleServer.js.map