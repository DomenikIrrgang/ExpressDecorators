import { Middleware } from "../routing/Middleware";
export declare function Server(settings: ServerSettings): (target: any) => void;
export declare function isServer(object: any): boolean;
export interface ServerSettings {
    port: number;
    middlewares?: Middleware[];
    imports: any[];
    providers?: any[];
}
