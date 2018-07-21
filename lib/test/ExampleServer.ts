import { Server } from "../decorators/server.decorator";
import { ExampleModule } from "./TestModule";
import { ExampleService } from "./ExampleService";

@Server({
    port: 8080,
    imports: [
        ExampleModule
    ],
    providers: [
        ExampleService
    ]
})
export class ExampleServer {}