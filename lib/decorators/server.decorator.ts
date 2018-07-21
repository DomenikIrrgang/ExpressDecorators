import { makeInjectable } from "./injectable.decorator";
import { Middleware } from "../routing/Middleware";

export function Server(settings: ServerSettings) {
    return (target: any) => {
        makeInjectable(target);
        target.isServer = true;
        target.prototype.settings = settings;
    }
}

export function isServer(object: any): boolean {
    return object.isServer !== undefined;
}

export interface ServerSettings {
    port: number;
    middlewares?: Middleware[];
    imports: any[];
    providers?: any[];
}