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
function markEndpoint(options, target, propertyKey, descriptor) {
    if (target.endpoints === undefined) {
        target.endpoints = [];
    }
    target.endpoints.push({
        options,
        descriptor
    });
}
exports.markEndpoint = markEndpoint;
//# sourceMappingURL=endpoint.decorator.js.map