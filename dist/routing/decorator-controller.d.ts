import { ControllerSettings } from "../decorators/controller.decorator";
import { Middleware } from "./Middleware";
import { DecoratorEndpoint } from "./decorator-endpoint";
export declare class DecoratorController {
    settings: ControllerSettings;
    middlewares: Middleware[];
    endpoints: DecoratorEndpoint[];
}
