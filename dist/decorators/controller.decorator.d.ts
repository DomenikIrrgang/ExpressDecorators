export declare function Controller(settings: ControllerSettings): (target: any) => void;
export declare function isController(object: any): boolean;
export interface ControllerSettings {
    middlewares?: any[];
    path: string;
}
