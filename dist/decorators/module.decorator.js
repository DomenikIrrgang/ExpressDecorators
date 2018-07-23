"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injectable_decorator_1 = require("./injectable.decorator");
function Module(settings) {
    return (target) => {
        injectable_decorator_1.makeInjectable(target);
        Reflect.defineMetadata("custom:type", "module", target);
        Reflect.defineMetadata("custom:settings", settings, target);
    };
}
exports.Module = Module;
function isModule(object) {
    return Reflect.getMetadata("custom:type", object) === "module";
}
exports.isModule = isModule;
//# sourceMappingURL=module.decorator.js.map