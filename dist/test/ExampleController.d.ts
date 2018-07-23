import { ExampleService } from "./ExampleService";
import { Response, Request } from "express";
export declare class ExampleController {
    private exampleService;
    constructor(exampleService: ExampleService);
    getExampleData(request: Request, response: Response): void;
}
