import { MethodEndpointSettings } from "./endpoint.decorator";
/**
 * Marks a function to be mounted as an endpoint for POST requests.
 *
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export declare function Post(options: MethodEndpointSettings): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
