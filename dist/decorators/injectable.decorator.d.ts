import "reflect-metadata";
export declare function Injectable(): (target: any) => void;
export declare function makeInjectable(target: any): void;
export declare function isInjectable(object: any): boolean;
export interface InjectableObject {
    isInjectable?: boolean;
}
