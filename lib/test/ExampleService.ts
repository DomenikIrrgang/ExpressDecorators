import { Injectable } from "../decorators/injectable.decorator";

@Injectable()
export class ExampleService {
    public getData(): any {
        return {
            message: "You are awesome!"
        };
    }
}