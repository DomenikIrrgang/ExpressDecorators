"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InjectableCollection {
    constructor() {
        this.injectables = [];
    }
    addInjectable(injectable) {
        this.injectables.push(injectable);
    }
    isInjectable(injectable) {
        return injectable.isInjectable === true;
    }
}
const injectables = new InjectableCollection();
exports.default = injectables;
//# sourceMappingURL=injectable-collection.js.map