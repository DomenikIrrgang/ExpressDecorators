"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injectable_decorator_1 = require("./injectable.decorator");
function Server(settings) {
    return (target) => {
        injectable_decorator_1.makeInjectable(target);
        Reflect.defineMetadata("custom:type", "server", target);
        Reflect.defineMetadata("custom:settings", settings, target);
    };
}
exports.Server = Server;
function isServer(object) {
    return Reflect.getMetadata("custom:type", object) === "server";
}
exports.isServer = isServer;
//# sourceMappingURL=server.decorator.js.map