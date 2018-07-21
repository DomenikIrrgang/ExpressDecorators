export declare function Module(settings: ModuleSettings): (target: any) => void;
export interface ModuleSettings {
    controllers: any[];
    middlewares?: any[];
    providers?: any[];
}
