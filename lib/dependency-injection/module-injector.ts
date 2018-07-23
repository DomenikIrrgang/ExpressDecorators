import injector, { Injector } from "./injector";
import { isModule, ModuleSettings } from "../decorators/module.decorator";
import { DecoratorModule } from "../routing/decorator-module";
import { ControllerInjector } from "./controller-injector";

export class ModuleInjector {

    constructor() { }

    public getModule(module: any): DecoratorModule {
        if (isModule(module)) {
            let moduleInstance = <DecoratorModule>injector.getInstance(module);
            const settings = <ModuleSettings>Reflect.getMetadata("custom:settings", module);
            moduleInstance.settings = settings;
            moduleInstance.middlewares = [];
            moduleInstance.controllers = [];

            if (moduleInstance.settings.middlewares) {
                for (const middleware of moduleInstance.settings.middlewares) {
                    moduleInstance.middlewares.push(injector.getInstance(middleware));
                }
            }

            if (moduleInstance.settings.controllers) {
                const controllerInjector = new ControllerInjector();
                for (const controller of moduleInstance.settings.controllers) {
                    moduleInstance.controllers.push(controllerInjector.getController(controller));
                }
            }
            return moduleInstance;
        } else {
            throw new Error(module.name + " is not a module. Did you add the @Module decorator?");
        }
    }
}