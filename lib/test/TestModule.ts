import { Module } from "../decorators/module.decorator";
import { ExampleController } from "./ExampleController";

@Module({
    controllers: [ExampleController],
    path: "",
})
export class ExampleModule {}