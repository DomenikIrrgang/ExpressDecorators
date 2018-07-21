import { Middleware } from "../routing/Middleware";
import { HttpMethod } from "../routing/http-method";
/**
 * Marks a function to be mounted as an endpoint for requests.
 *
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export declare function Endpoint(options: EndpointOptions): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare function markEndpoint(options: EndpointOptions, target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
export interface EndpointOptions {
    path: string;
    method: HttpMethod;
    middlewares?: Middleware[];
}
