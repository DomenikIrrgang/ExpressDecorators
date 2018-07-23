import { ModuleSettings } from "../decorators/module.decorator";
import { Middleware } from "./Middleware";
import { DecoratorController } from "./decorator-controller";

export class DecoratorModule {
    public settings: ModuleSettings;
    public controllers: DecoratorController[];
    public middlewares: Middleware[] = [];

}