import "reflect-metadata";
export declare function Injectable(): (target: any) => void;
export declare function isInjectable(object: any): object is InjectableObject;
export interface InjectableObject {
    isInjectable?: boolean;
}
