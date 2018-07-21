import "reflect-metadata";

export function Injectable() {
    return (target: any) => {
        makeInjectable(target);
    }
}

export function makeInjectable(target: any): void {
    target.isInjectable = true;
}

export function isInjectable(object: any): boolean {
    return object.isInjectable !== undefined;
}