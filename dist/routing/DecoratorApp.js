"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_injector_1 = require("../dependency-injection/server-injector");
class DecoratorApp {
    constructor() {
        this.initServer();
    }
    getSettings() {
        return Reflect.getMetadata("custom:settings", DecoratorApp);
    }
    initServer() {
        let serverInjector = new server_injector_1.ServerInjector();
        this.server = serverInjector.getServer(this.getSettings().bootstrap);
    }
}
exports.DecoratorApp = DecoratorApp;
//# sourceMappingURL=DecoratorApp.js.map