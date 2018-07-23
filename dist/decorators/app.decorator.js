"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function App(settings) {
    return (target) => {
        Reflect.defineMetadata("custom:type", "app", target);
        Reflect.defineMetadata("custom:settings", settings, target.__proto__.__proto__);
    };
}
exports.App = App;
function isApp(object) {
    return Reflect.getMetadata("custom:type", object) === "app";
}
exports.isApp = isApp;
//# sourceMappingURL=app.decorator.js.map