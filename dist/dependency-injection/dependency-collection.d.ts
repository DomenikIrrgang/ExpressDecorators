declare class InjectableCollection {
    private unresolvedInjectables;
    private resolvedInjectables;
    addInjectable(injectable: any): void;
    isInjectable(injectable: any): boolean;
}
declare const injectables: InjectableCollection;
export default injectables;
