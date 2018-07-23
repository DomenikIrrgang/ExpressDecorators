import { AppSettings } from "../decorators/app.decorator";
import { DecoratorServer } from "./decorator-server";
export declare class DecoratorApp {
    protected server: DecoratorServer;
    constructor();
    getSettings(): AppSettings;
    private initServer;
}
