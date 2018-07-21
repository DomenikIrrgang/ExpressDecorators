export function App(settings: AppSettings) {
    return (target: any) => {
        target.isApp = true;
        target.prototype.settings = settings;
    }
}

export function isApp(object: any): boolean {
    return object.isApp !== undefined;
}

export interface AppSettings {
    bootstrap: any;
}