import { MethodEndpointOptions, markEndpoint, markMethodEndpoint } from "./endpoint.decorator";
import { HttpMethod } from "../routing/http-method";

/**
 * Marks a function to be mounted as an endpoint for PUT requests.
 * 
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export function Put(options: MethodEndpointOptions) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
       markMethodEndpoint(options, HttpMethod.PUT, target, propertyKey, descriptor);
    }
}