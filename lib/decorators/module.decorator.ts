import { makeInjectable } from "./injectable.decorator";
import { Middleware } from "../routing/Middleware";

export function Module(settings: ModuleSettings) {
    return (target: any) => {
        makeInjectable(target);
        target.prototype.isModule = true;
        target.prototype.settings = settings;
    }
}

export function isModule(object: any): boolean {
    return object.isModule !== undefined;
}

export interface ModuleSettings {
    controllers: any[];
    middlewares?: Middleware[];
    providers?: any[];
}