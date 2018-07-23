"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injector_1 = require("./injector");
const controller_decorator_1 = require("../decorators/controller.decorator");
const decorator_endpoint_1 = require("../routing/decorator-endpoint");
class ControllerInjector {
    constructor() { }
    getController(controller) {
        if (controller_decorator_1.isController(controller)) {
            let controllerInstance = injector_1.default.getInstance(controller);
            const settings = Reflect.getMetadata("custom:settings", controller);
            controllerInstance.settings = settings;
            controllerInstance.middlewares = [];
            controllerInstance.endpoints = [];
            if (controllerInstance.settings.middlewares) {
                for (const middleware of controllerInstance.settings.middlewares) {
                    controllerInstance.middlewares.push(injector_1.default.getInstance(middleware));
                }
            }
            const endpoints = Reflect.getMetadata("custom:endpoints", controller.prototype);
            if (endpoints) {
                for (const endpoint of endpoints) {
                    const tmpEndpoint = new decorator_endpoint_1.DecoratorEndpoint();
                    tmpEndpoint.settings = endpoint.settings;
                    tmpEndpoint.descriptor = endpoint.descriptor;
                    tmpEndpoint.middlewares = [];
                    if (tmpEndpoint.settings.middlewares) {
                        for (const middleware of tmpEndpoint.settings.middlewares) {
                            tmpEndpoint.middlewares.push(injector_1.default.getInstance(middleware));
                        }
                    }
                    controllerInstance.endpoints.push(tmpEndpoint);
                }
            }
            return controllerInstance;
        }
        else {
            throw new Error(controller.name + " is not a controller. Did you add the @Controller decorator?");
        }
    }
}
exports.ControllerInjector = ControllerInjector;
//# sourceMappingURL=controller-injector.js.map