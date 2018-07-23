import { AppSettings } from "../decorators/app.decorator";
export declare class DecoratorApp {
    protected server: any;
    constructor();
    getSettings(): AppSettings;
    private initServer;
}
