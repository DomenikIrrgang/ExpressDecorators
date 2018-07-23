"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const endpoint_decorator_1 = require("./endpoint.decorator");
const http_method_1 = require("../routing/http-method");
/**
 * Marks a function to be mounted as an endpoint for DELETE requests.
 *
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
function Delete(options) {
    return function (target, propertyKey, descriptor) {
        endpoint_decorator_1.markMethodEndpoint(options, http_method_1.HttpMethod.DELETE, target, propertyKey, descriptor);
    };
}
exports.Delete = Delete;
//# sourceMappingURL=delete.decorator.js.map