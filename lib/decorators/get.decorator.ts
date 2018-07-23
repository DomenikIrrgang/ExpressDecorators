import { markMethodEndpoint, MethodEndpointSettings } from "./endpoint.decorator";
import { HttpMethod } from "../routing/http-method";

/**
 * Marks a function to be mounted as an endpoint for GET requests.
 * 
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export function Get(options: MethodEndpointSettings) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
       markMethodEndpoint(options, HttpMethod.GET, target, propertyKey, descriptor);
    }
}