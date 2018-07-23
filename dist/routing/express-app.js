"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_app_1 = require("./decorator-app");
const express = require("express");
class ExpressApp extends decorator_app_1.DecoratorApp {
    start(success, error) {
        const app = express();
        this.initServerMiddlewares(app);
        this.mountModules(app);
        app.listen(this.server.settings.port, success);
    }
    initServerMiddlewares(app) {
        for (const middleware of this.server.middlewares) {
            app.use((request, response, next) => {
                middleware.onRequest(request, response, next);
            });
        }
    }
    mountModules(app) {
        for (const module of this.server.modules) {
            this.mountModule(app, module);
        }
    }
    mountModule(app, module) {
        for (const controller of module.controllers) {
            const path = module.settings.path + controller.settings.path;
            for (const endpoint of controller.endpoints) {
                app[endpoint.settings.method](path + endpoint.settings.path, (request, response) => {
                    controller[endpoint.descriptor.value.name](request, response);
                });
            }
        }
    }
}
exports.ExpressApp = ExpressApp;
//# sourceMappingURL=express-app.js.map