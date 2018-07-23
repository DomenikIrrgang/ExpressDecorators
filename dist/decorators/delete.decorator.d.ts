import { MethodEndpointSettings } from "./endpoint.decorator";
/**
 * Marks a function to be mounted as an endpoint for DELETE requests.
 *
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export declare function Delete(options: MethodEndpointSettings): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
