import { ServerSettings } from "../decorators/server.decorator";
import { DecoratorModule } from "./decorator-module";
import { Middleware } from "./Middleware";
export declare class DecoratorServer {
    settings: ServerSettings;
    modules: DecoratorModule[];
    middlewares: Middleware[];
}
