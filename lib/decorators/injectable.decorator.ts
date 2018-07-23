import "reflect-metadata";

export function Injectable() {
    return (target: any) => {
        makeInjectable(target);
    }
}

export function makeInjectable(target: any): void {
    Reflect.defineMetadata("custom:injectable", true, target);
}

export function isInjectable(object: any): boolean {
    return Reflect.getMetadata("custom:injectable", object) === true;
}