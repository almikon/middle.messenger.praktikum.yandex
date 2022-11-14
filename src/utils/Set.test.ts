import { expect } from "chai";
import set from "./Set";

describe('Set()',()=>{
    const testObj = {};
    const testPath = 'a.b.c';
    const testValue = 15;
    it('Should put a value at specific path in an object',()=>{
        const result = set(testObj,testPath,testValue)
        expect(result).to.deep.eq({a:{b:{c:15}}})
    })
})
