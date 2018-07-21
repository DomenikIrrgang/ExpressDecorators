import { App } from "../lib/index";
import { expect } from "chai";

describe('getName function Test', () => {
    it('should return ExpressApp', () => {
        let result = new App().getName();
        expect(result).to.equal('ExpressApp');
    });
});