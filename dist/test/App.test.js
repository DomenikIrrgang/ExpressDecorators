"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("../lib/App");
const chai_1 = require("chai");
describe('getName function Test', () => {
    it('should return ExpressApp', () => {
        let result = new App_1.App().getName();
        chai_1.expect(result).to.equal('ExpressApp');
    });
});
//# sourceMappingURL=App.test.js.map