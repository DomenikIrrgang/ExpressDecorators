import { EndpointSettings } from "../decorators/endpoint.decorator";
import { Middleware } from "./Middleware";
export declare class DecoratorEndpoint {
    settings: EndpointSettings;
    middlewares: Middleware[];
    descriptor: PropertyDescriptor;
}
