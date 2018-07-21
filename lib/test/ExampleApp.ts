import { App } from "../decorators/app.decorator";
import { ExampleServer } from "./ExampleServer";
import { ExpressApp } from "../routing/express-app";

@App({
    bootstrap: ExampleServer
})
export class ExampleApp extends ExpressApp {}