import { Middleware } from "../routing/Middleware";
import { HttpMethod } from "../routing/http-method";

/**
 * Marks a function to be mounted as an endpoint for requests.
 * 
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export function Endpoint(options: EndpointSettings) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        markEndpoint(options, target, propertyKey, descriptor);
    }
}

export function markEndpoint(settings: EndpointSettings, target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    if (Reflect.getMetadata("custom:endpoints", target) === undefined) {
        Reflect.defineMetadata("custom:endpoints", [], target);
    }
    let endpoints = Reflect.getMetadata("custom:endpoints", target);
    endpoints.push({
        settings,
        descriptor
    });
    Reflect.defineMetadata("custom:endpoints", endpoints, target);
}

export function markMethodEndpoint(options: MethodEndpointSettings, method: HttpMethod, target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    markEndpoint({
        method: method,
        middlewares: options.middlewares,
        path: options.path
    }, target, propertyKey, descriptor);
}

export interface MethodEndpointSettings {
    path: string;
    middlewares?: Middleware[];
}

export interface EndpointSettings extends MethodEndpointSettings {
    method: HttpMethod;
}