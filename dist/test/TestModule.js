"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_decorator_1 = require("../decorators/module.decorator");
const ExampleController_1 = require("./ExampleController");
let ExampleModule = class ExampleModule {
};
ExampleModule = __decorate([
    module_decorator_1.Module({
        controllers: [ExampleController_1.ExampleController],
        path: "",
    })
], ExampleModule);
exports.ExampleModule = ExampleModule;
//# sourceMappingURL=TestModule.js.map