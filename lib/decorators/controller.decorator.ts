import { makeInjectable } from "./injectable.decorator";

export function Controller(settings: ControllerSettings) {
    return (target: any) => {
        makeInjectable(target);
        target.prototype.isController = true;
        target.prototype.settings = settings;
    }
}

export function isController(object: any): boolean {
    return object.isController !== undefined;
}

export interface ControllerSettings {
    middlewares?: any[];
    path: string;
}