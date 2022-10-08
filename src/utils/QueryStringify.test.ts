import { expect } from "chai";
import queryStringify from "./QueryStringify";

describe ("QueryStringify",()=>{
    it("should return: ?1=1&2=2&3=3",()=>{
        const testInput = {
            '1':'1',
            '2':'2',
            '3':'3'};
        const testOutput = '?1=1&2=2&3=3';
        const result = queryStringify(testInput);
        expect(result).to.eq(testOutput);
    })
})