"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injectable_registry_1 = require("../dependency-injection/injectable-registry");
require("reflect-metadata");
function Injectable() {
    return (target) => {
        makeInjectable(target);
    };
}
exports.Injectable = Injectable;
function makeInjectable(target) {
    target.isInjectable = true;
    injectable_registry_1.default.addInjectable(target);
}
exports.makeInjectable = makeInjectable;
function isInjectable(object) {
    return object.isInjectable !== undefined;
}
exports.isInjectable = isInjectable;
//# sourceMappingURL=injectable.decorator.js.map