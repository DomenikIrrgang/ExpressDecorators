declare class InjectableCollection {
    private injectables;
    addInjectable(injectable: any): void;
    isInjectable(injectable: any): boolean;
}
declare const injectables: InjectableCollection;
export default injectables;
