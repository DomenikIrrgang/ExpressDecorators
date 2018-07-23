import { ModuleSettings } from "../decorators/module.decorator";
import { Middleware } from "./Middleware";
import { DecoratorController } from "./decorator-controller";
export declare class DecoratorModule {
    settings: ModuleSettings;
    controllers: DecoratorController[];
    middlewares: Middleware[];
}
