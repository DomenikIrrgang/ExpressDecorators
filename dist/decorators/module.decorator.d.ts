import { Middleware } from "../routing/Middleware";
export declare function Module(settings: ModuleSettings): (target: any) => void;
export declare function isModule(object: any): boolean;
export interface ModuleSettings {
    controllers: any[];
    middlewares?: Middleware[];
    providers?: any[];
    path: string;
}
