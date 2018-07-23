"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injector_1 = require("./injector");
const server_decorator_1 = require("../decorators/server.decorator");
const module_injector_1 = require("./module-injector");
class ServerInjector {
    constructor() { }
    getServer(server) {
        if (server_decorator_1.isServer(server)) {
            let serverInstance = injector_1.default.getInstance(server);
            const settings = Reflect.getMetadata("custom:settings", server);
            serverInstance.settings = settings;
            serverInstance.middlewares = [];
            serverInstance.modules = [];
            if (serverInstance.settings.middlewares) {
                for (const middleware of serverInstance.settings.middlewares) {
                    serverInstance.middlewares.push(injector_1.default.getInstance(middleware));
                }
            }
            const moduleInjector = new module_injector_1.ModuleInjector();
            for (const module of serverInstance.settings.imports) {
                serverInstance.modules.push(moduleInjector.getModule(module));
            }
            return serverInstance;
        }
        else {
            throw new Error(server.name + " is not a server. Did you add the @Server decorator?");
        }
    }
}
exports.ServerInjector = ServerInjector;
//# sourceMappingURL=server-injector.js.map