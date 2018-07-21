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
const injectable_decorator_1 = require("./decorators/injectable.decorator");
const injector_1 = require("./dependency-injection/injector");
const endpoint_decorator_1 = require("./decorators/endpoint.decorator");
const http_method_1 = require("./routing/http-method");
let TestClass = class TestClass {
    constructor() { }
    print() {
        console.log("hello world");
    }
};
__decorate([
    endpoint_decorator_1.Endpoint({
        path: "/",
        method: http_method_1.HttpMethod.DELETE
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestClass.prototype, "print", null);
TestClass = __decorate([
    injectable_decorator_1.Injectable(),
    __metadata("design:paramtypes", [])
], TestClass);
let TestClassTwo = class TestClassTwo {
    constructor(test) {
        test.print();
    }
};
TestClassTwo = __decorate([
    injectable_decorator_1.Injectable(),
    __metadata("design:paramtypes", [TestClass])
], TestClassTwo);
let TestClassThree = class TestClassThree {
    constructor(a, c, b) {
        this.a = a;
        this.c = c;
        this.b = b;
    }
};
TestClassThree = __decorate([
    injectable_decorator_1.Injectable(),
    __metadata("design:paramtypes", [TestClass, TestClassThree, TestClassTwo])
], TestClassThree);
let injector = new injector_1.Injector();
let instance = injector.getInstance(TestClass);
console.log(instance);
//# sourceMappingURL=index.js.map