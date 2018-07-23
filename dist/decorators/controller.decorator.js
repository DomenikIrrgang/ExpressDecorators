"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injectable_decorator_1 = require("./injectable.decorator");
function Controller(settings) {
    return (target) => {
        injectable_decorator_1.makeInjectable(target);
        Reflect.defineMetadata("custom:type", "controller", target);
        Reflect.defineMetadata("custom:settings", settings, target);
    };
}
exports.Controller = Controller;
function isController(object) {
    return Reflect.getMetadata("custom:type", object) === "controller";
}
exports.isController = isController;
//# sourceMappingURL=controller.decorator.js.map