import injector from "./injector";
import { isServer, ServerSettings } from "../decorators/server.decorator";
import { DecoratorServer } from "../routing/decorator-server";
import { ModuleInjector } from "./module-injector";

export class ServerInjector {

    constructor() { }

    public getServer(server: any): DecoratorServer {
        if (isServer(server)) {
            let serverInstance = <DecoratorServer>injector.getInstance(server);
            const settings = <ServerSettings>Reflect.getMetadata("custom:settings", server);
            serverInstance.settings = settings;
            serverInstance.middlewares = [];
            serverInstance.modules = [];

            if (serverInstance.settings.middlewares) {
                for (const middleware of serverInstance.settings.middlewares) {
                    serverInstance.middlewares.push(injector.getInstance(middleware));
                }
            }

            const moduleInjector = new ModuleInjector()
            for (const module of serverInstance.settings.imports) {
                serverInstance.modules.push(moduleInjector.getModule(module));
            }
            return serverInstance;
        } else {
            throw new Error(server.name + " is not a server. Did you add the @Server decorator?");
        }
    }
}