import { isInjectable } from "../decorators/injectable.decorator";

class InjectableRegistry {
    private injectables: any[] = [];

    public addInjectable(injectable: any): void {
        if (isInjectable(injectable)) {
            this.injectables.push(injectable);
        } else {
            throw Error("Cannot add a non injectable object to the injectable registry.");
        }
    }
}

const injectables: InjectableRegistry = new InjectableRegistry();
export default injectables;