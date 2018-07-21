import { ExampleApp } from "./test/ExampleApp";

let app = new ExampleApp();
app.start(server => console.log(server), error => console.log(error));