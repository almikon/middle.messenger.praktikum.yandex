import { expect } from "chai";
import Sinon from "sinon";
import { EventBus } from "./EventBus"

describe('EventBus',()=>{
    const testBus = new EventBus();
    const spy = Sinon.spy();
    testBus.on('testEvent',spy);
    it('Should emit an event',()=>{
        testBus.emit('testEvent');
        expect(spy.calledOnce).to.eq(true);
    })
    it('Should return undefined if event was removed',()=>{
        testBus.off('testEvent',spy);        
        expect(testBus.emit('testEvent')).to.eq(undefined);
    })
})