"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injector_1 = require("./injector");
const module_decorator_1 = require("../decorators/module.decorator");
const controller_injector_1 = require("./controller-injector");
class ModuleInjector {
    constructor() { }
    getModule(module) {
        if (module_decorator_1.isModule(module)) {
            let moduleInstance = injector_1.default.getInstance(module);
            const settings = Reflect.getMetadata("custom:settings", module);
            moduleInstance.settings = settings;
            moduleInstance.middlewares = [];
            moduleInstance.controllers = [];
            if (moduleInstance.settings.middlewares) {
                for (const middleware of moduleInstance.settings.middlewares) {
                    moduleInstance.middlewares.push(injector_1.default.getInstance(middleware));
                }
            }
            if (moduleInstance.settings.controllers) {
                const controllerInjector = new controller_injector_1.ControllerInjector();
                for (const controller of moduleInstance.settings.controllers) {
                    moduleInstance.controllers.push(controllerInjector.getController(controller));
                }
            }
            return moduleInstance;
        }
        else {
            throw new Error(module.name + " is not a module. Did you add the @Module decorator?");
        }
    }
}
exports.ModuleInjector = ModuleInjector;
//# sourceMappingURL=module-injector.js.map