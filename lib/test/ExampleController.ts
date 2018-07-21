import { Controller } from "../decorators/controller.decorator";
import { ExampleService } from "./ExampleService";
import { Get } from "../decorators/get.decorator";
import { Response, Request } from "express";

@Controller({
    path: "/"
})
export class ExampleController {

    constructor(private exampleService: ExampleService) {}

    @Get({
        path: ""
    })
    public getExampleData(request: Request, response: Response): void {
        response.send(this.exampleService.getData());
    }
}