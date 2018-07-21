import { InjectableObject, isInjectable } from "../decorators/injectable.decorator";

export class Injector {

    private instances: InjectableObject[] = [];

    public getInstance(target: any): any {
        if (isInjectable(target)) {
            return this.createInstance(target, []);
        } else {
            throw new Error("Cannot get an instance of a non injectable object.");
        }
    }

    private createInstance(target: any, callstack: any[]): any {
        if (callstack.findIndex((value, index) => {
            return value === target;
        }) !== -1) {
            throw new Error("Circular dependency of " + target.name + " detected. Cannot instanciate object.");
        }

        if (!this.instances[target]) {
            callstack.push(target);
            let paramList = Reflect.getMetadata("design:paramtypes", target);
            let params = [];
            if (paramList) {
                for (let param of paramList) {
                    if (isInjectable(param)) {
                        params.push(this.createInstance(param, callstack));
                    } else {
                        params.push(undefined);
                    }
                }
            }
            this.instances[target] = new target(...params);
            callstack.pop();
        }
        return this.instances[target];
    }
}