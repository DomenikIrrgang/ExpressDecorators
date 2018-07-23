import { AppSettings } from "../decorators/app.decorator";
import { ServerInjector } from "../dependency-injection/server-injector";
import { DecoratorServer } from "./decorator-server";

export class DecoratorApp {

    protected server: DecoratorServer;

    constructor() {
        this.initServer();
    }

    public getSettings(): AppSettings {
        return Reflect.getMetadata("custom:settings", DecoratorApp);
    }

    private initServer(): void {
        let serverInjector = new ServerInjector();
        this.server = serverInjector.getServer(this.getSettings().bootstrap);
    }
}