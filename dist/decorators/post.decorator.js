"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const endpoint_decorator_1 = require("./endpoint.decorator");
const http_method_1 = require("../routing/http-method");
/**
 * Marks a function to be mounted as an endpoint for POST requests.
 *
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
function Post(options) {
    return function (target, propertyKey, descriptor) {
        endpoint_decorator_1.markMethodEndpoint(options, http_method_1.HttpMethod.POST, target, propertyKey, descriptor);
    };
}
exports.Post = Post;
//# sourceMappingURL=post.decorator.js.map