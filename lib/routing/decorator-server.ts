import { ServerSettings } from "../decorators/server.decorator";
import { DecoratorModule } from "./decorator-module";
import { Middleware } from "./Middleware";

export class DecoratorServer {
    public settings: ServerSettings;
    public modules: DecoratorModule[] = [];
    public middlewares: Middleware[] = [];
}