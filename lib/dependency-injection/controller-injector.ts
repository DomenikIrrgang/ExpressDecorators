import injector, { Injector } from "./injector";
import { DecoratorController } from "../routing/decorator-controller";
import { isController, ControllerSettings } from "../decorators/controller.decorator";
import { DecoratorEndpoint } from "../routing/decorator-endpoint";

export class ControllerInjector {

    constructor() { }

    public getController(controller: any): DecoratorController {
        if (isController(controller)) {
            let controllerInstance = <DecoratorController>injector.getInstance(controller);
            const settings = <ControllerSettings>Reflect.getMetadata("custom:settings", controller);
            controllerInstance.settings = settings;
            controllerInstance.middlewares = [];
            controllerInstance.endpoints = [];

            if (controllerInstance.settings.middlewares) {
                for (const middleware of controllerInstance.settings.middlewares) {
                    controllerInstance.middlewares.push(injector.getInstance(middleware));
                }
            }

            const endpoints = Reflect.getMetadata("custom:endpoints", controller.prototype);
            if (endpoints) {
                for (const endpoint of endpoints) {
                    const tmpEndpoint = new DecoratorEndpoint();
                    tmpEndpoint.settings = endpoint.settings;
                    tmpEndpoint.descriptor = endpoint.descriptor;
                    tmpEndpoint.middlewares = [];
                    if (tmpEndpoint.settings.middlewares) {
                        for (const middleware of tmpEndpoint.settings.middlewares) {
                            tmpEndpoint.middlewares.push(injector.getInstance(middleware));
                        }
                    }
                    controllerInstance.endpoints.push(tmpEndpoint);
                }
            }

            return controllerInstance;
        } else {
            throw new Error(controller.name + " is not a controller. Did you add the @Controller decorator?");
        }
    }
}