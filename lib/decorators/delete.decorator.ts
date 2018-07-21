import { MethodEndpointOptions, markEndpoint, markMethodEndpoint } from "./endpoint.decorator";
import { HttpMethod } from "../routing/http-method";

/**
 * Marks a function to be mounted as an endpoint for DELETE requests.
 * 
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export function Delete(options: MethodEndpointOptions) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
       markMethodEndpoint(options, HttpMethod.DELETE, target, propertyKey, descriptor);
    }
}