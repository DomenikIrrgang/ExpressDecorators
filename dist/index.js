"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExampleApp_1 = require("./test/ExampleApp");
let app = new ExampleApp_1.ExampleApp();
app.start(server => console.log(server), error => console.log(error));
//# sourceMappingURL=index.js.map