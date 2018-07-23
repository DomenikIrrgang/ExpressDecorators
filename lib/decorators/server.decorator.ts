import { makeInjectable } from "./injectable.decorator";
import { Middleware } from "../routing/Middleware";

export function Server(settings: ServerSettings) {
    return (target: any) => {
        makeInjectable(target);
        Reflect.defineMetadata("custom:type", "server", target);
        Reflect.defineMetadata("custom:settings", settings, target);
    }
}

export function isServer(object: any): boolean {
    return Reflect.getMetadata("custom:type", object) === "server";
}

export interface ServerSettings {
    port: number;
    middlewares?: Middleware[];
    imports: any[];
    providers?: any[];
}