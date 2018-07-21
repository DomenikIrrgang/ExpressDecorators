"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injectable_decorator_1 = require("../decorators/injectable.decorator");
class InjectableRegistry {
    constructor() {
        this.injectables = [];
    }
    addInjectable(injectable) {
        if (injectable_decorator_1.isInjectable(injectable)) {
            this.injectables.push(injectable);
        }
        else {
            throw Error("Cannot add a non injectable object to the injectable registry.");
        }
    }
}
const injectables = new InjectableRegistry();
exports.default = injectables;
//# sourceMappingURL=injectable-registry.js.map