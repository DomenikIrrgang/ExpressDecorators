import { DecoratorApp } from "./decorator-app";
import { Request, Response, NextFunction } from "express";
import * as express from "express";
import { DecoratorModule } from "./decorator-module";
import { ENGINE_METHOD_CIPHERS } from "constants";

export class ExpressApp extends DecoratorApp {

    public start(success: (server) => void, error: (error) => void): void {
        const app = express();
        this.initServerMiddlewares(app);
        this.mountModules(app);
        app.listen(this.server.settings.port, success);
    }

    private initServerMiddlewares(app: any): void {
        for (const middleware of this.server.middlewares) {
            app.use((request: Request, response: Response, next: NextFunction) => {
                middleware.onRequest(request, response, next);
            })
        }
    }

    private mountModules(app: any): void {
        for (const module of this.server.modules) {
            this.mountModule(app, module);
        }
    }

    private mountModule(app: any, module: DecoratorModule): any {
        for (const controller of module.controllers) {
            const path = module.settings.path + controller.settings.path;
            for (const endpoint of controller.endpoints) {
                app[endpoint.settings.method](path + endpoint.settings.path, (request: Request, response: Response) => {
                    controller[endpoint.descriptor.value.name](request, response);
                });
            }
        }
    }
}