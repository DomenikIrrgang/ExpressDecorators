"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_decorator_1 = require("../decorators/controller.decorator");
const ExampleService_1 = require("./ExampleService");
const get_decorator_1 = require("../decorators/get.decorator");
let ExampleController = class ExampleController {
    constructor(exampleService) {
        this.exampleService = exampleService;
    }
    getExampleData(request, response) {
        response.send(this.exampleService.getData());
    }
};
__decorate([
    get_decorator_1.Get({
        path: ""
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ExampleController.prototype, "getExampleData", null);
ExampleController = __decorate([
    controller_decorator_1.Controller({
        path: "/"
    }),
    __metadata("design:paramtypes", [ExampleService_1.ExampleService])
], ExampleController);
exports.ExampleController = ExampleController;
//# sourceMappingURL=ExampleController.js.map