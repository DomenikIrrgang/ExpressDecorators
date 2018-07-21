"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injectable_registry_1 = require("../dependency-injection/injectable-registry");
require("reflect-metadata");
const metaDataKey = Symbol("Injectable");
function Injectable() {
    return (target) => {
        target.isInjectable = true;
        injectable_registry_1.default.addInjectable(target);
        Reflect.defineMetadata(metaDataKey, { isInjectable: true }, target);
        let type = Reflect.getMetadata("design:paramtypes", target);
        if (type.length === 1) {
            let instance = new target(new type[0]());
        }
    };
}
exports.Injectable = Injectable;
function isInjectable(object) {
    return object.isInjectable !== undefined;
}
exports.isInjectable = isInjectable;
//# sourceMappingURL=inectable.decorator.js.map