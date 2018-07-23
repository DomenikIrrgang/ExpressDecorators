import { EndpointSettings } from "../decorators/endpoint.decorator";
import { Middleware } from "./Middleware";

export class DecoratorEndpoint {
    public settings: EndpointSettings;
    public middlewares: Middleware[] = [];
    public descriptor: PropertyDescriptor;
}