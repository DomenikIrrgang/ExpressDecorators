"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function Injectable() {
    return (target) => {
        makeInjectable(target);
    };
}
exports.Injectable = Injectable;
function makeInjectable(target) {
    Reflect.defineMetadata("custom:injectable", true, target);
}
exports.makeInjectable = makeInjectable;
function isInjectable(object) {
    return Reflect.getMetadata("custom:injectable", object) === true;
}
exports.isInjectable = isInjectable;
//# sourceMappingURL=injectable.decorator.js.map