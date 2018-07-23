import { ControllerSettings } from "../decorators/controller.decorator";
import { Middleware } from "./Middleware";
import { EndpointSettings } from "../decorators/endpoint.decorator";
import { DecoratorEndpoint } from "./decorator-endpoint";

export class DecoratorController {
    public settings: ControllerSettings;
    public middlewares: Middleware[] = [];
    public endpoints: DecoratorEndpoint[] = [];
}