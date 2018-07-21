"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injectable_decorator_1 = require("./injectable.decorator");
function Module(settings) {
    return (target) => {
        injectable_decorator_1.makeInjectable(target);
        target.prototype.controllers = settings.controllers;
        target.prototype.middlewares = settings.middlewares;
        target.prototype.providers = settings.providers;
    };
}
exports.Module = Module;
//# sourceMappingURL=module.decorator.js.map