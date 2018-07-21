"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InjectableCollection {
    constructor() {
        this.unresolvedInjectables = [];
        this.resolvedInjectables = [];
    }
    addInjectable(injectable) {
        this.unresolvedInjectables.push(injectable);
    }
    isInjectable(injectable) {
        return injectable.isInjectable === true;
    }
}
const injectables = new InjectableCollection();
exports.default = injectables;
//# sourceMappingURL=dependency-collection.js.map