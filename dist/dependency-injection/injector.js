"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injectable_decorator_1 = require("../decorators/injectable.decorator");
class Injector {
    constructor() {
        this.instances = [];
    }
    getInstance(target) {
        if (injectable_decorator_1.isInjectable(target)) {
            return this.createInstance(target, []);
        }
        else {
            throw new Error("Cannot get an instance of a non injectable object.");
        }
    }
    createInstance(target, callstack) {
        if (callstack.findIndex((value, index) => {
            return value === target;
        }) !== -1) {
            throw new Error("Circular dependency of " + target.name + " detected. Cannot instanciate object.");
        }
        if (!this.instances[target]) {
            callstack.push(target);
            let paramList = Reflect.getMetadata("design:paramtypes", target);
            let params = [];
            if (paramList) {
                for (let param of paramList) {
                    if (injectable_decorator_1.isInjectable(param)) {
                        params.push(this.createInstance(param, callstack));
                    }
                    else {
                        params.push(undefined);
                    }
                }
            }
            this.instances[target] = new target(...params);
            callstack.pop();
        }
        return this.instances[target];
    }
}
exports.Injector = Injector;
//# sourceMappingURL=injector.js.map