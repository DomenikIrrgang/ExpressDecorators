"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Marks a function to be mounted as an endpoint for requests.
 *
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
function Endpoint(options) {
    return function (target, propertyKey, descriptor) {
        markEndpoint(options, target, propertyKey, descriptor);
    };
}
exports.Endpoint = Endpoint;
function markEndpoint(settings, target, propertyKey, descriptor) {
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
exports.markEndpoint = markEndpoint;
function markMethodEndpoint(options, method, target, propertyKey, descriptor) {
    markEndpoint({
        method: method,
        middlewares: options.middlewares,
        path: options.path
    }, target, propertyKey, descriptor);
}
exports.markMethodEndpoint = markMethodEndpoint;
//# sourceMappingURL=endpoint.decorator.js.map