import { Middleware } from "../routing/Middleware";
import { HttpMethod } from "../routing/http-method";
/**
 * Marks a function to be mounted as an endpoint for requests.
 *
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export declare function Endpoint(options: EndpointSettings): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare function markEndpoint(settings: EndpointSettings, target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
export declare function markMethodEndpoint(options: MethodEndpointSettings, method: HttpMethod, target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
export interface MethodEndpointSettings {
    path: string;
    middlewares?: Middleware[];
}
export interface EndpointSettings extends MethodEndpointSettings {
    method: HttpMethod;
}
