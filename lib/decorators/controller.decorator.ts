import { makeInjectable } from "./injectable.decorator";

export function Controller(settings: ControllerSettings) {
    return (target: any) => {
        makeInjectable(target);
        Reflect.defineMetadata("custom:type", "controller", target);
        Reflect.defineMetadata("custom:settings", settings, target);
    }
}

export function isController(object: any): boolean {
    return Reflect.getMetadata("custom:type", object) === "controller";
}

export interface ControllerSettings {
    middlewares?: any[];
    path: string;
}