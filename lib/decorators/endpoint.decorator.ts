import { Middleware } from "../routing/Middleware";
import { HttpMethod } from "../routing/http-method";

/**
 * Marks a function to be mounted as an endpoint for requests.
 * 
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export function Endpoint(options: EndpointOptions) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        markEndpoint(options, target, propertyKey, descriptor);
    }
}

export function markEndpoint(options: EndpointOptions, target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    if (target.endpoints === undefined) {
        target.endpoints = [];
    }
    target.endpoints.push({
        options,
        descriptor
    });
}

export function markMethodEndpoint(options: MethodEndpointOptions, method: HttpMethod, target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    markEndpoint({
        method: method,
        middlewares: options.middlewares,
        path: options.path
    }, target, propertyKey, descriptor);
}

export interface MethodEndpointOptions {
    path: string;
    middlewares?: Middleware[];
}

export interface EndpointOptions extends MethodEndpointOptions{
    method: HttpMethod;
}