import { expect } from "chai";
import { Link } from ".";
import sinon from 'sinon';
import Router from "../../utils/Router";

describe.only('Link', () => {
    it('should render', () => {
        new Link({ to: '/' });
    });


    it('should return span', () => {
        const link = new Link({ to: '/' });

        expect(link).to.be.instanceOf(window.HTMLSpanElement);
    });
    it('should go to passed route on click', () => {
        const spy = sinon.spy(Router, 'go');
        const link = new Link({ to: '/' });
        const element = link.element as HTMLSpanElement;
        element.click();

        expect(spy.calledOnce).be.eq(true);
    })
})