import { DecoratorApp } from "./decorator-app";
export declare class ExpressApp extends DecoratorApp {
    start(success: (server: any) => void, error: (error: any) => void): void;
    private initServerMiddlewares;
    private mountModules;
    private mountModule;
}
