import { makeInjectable } from "./injectable.decorator";
import { Middleware } from "../routing/Middleware";

export function Module(settings: ModuleSettings) {
    return (target: any) => {
        makeInjectable(target);
        Reflect.defineMetadata("custom:type", "module", target);
        Reflect.defineMetadata("custom:settings", settings, target);
    }
}

export function isModule(object: any): boolean {
    return Reflect.getMetadata("custom:type", object) === "module";
}

export interface ModuleSettings {
    controllers: any[];
    middlewares?: Middleware[];
    providers?: any[];
    path: string;
}