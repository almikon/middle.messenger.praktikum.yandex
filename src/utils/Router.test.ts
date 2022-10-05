import Router from "./Router";
import { expect } from "chai";
import Block from "./Block";
import sinon from 'sinon';

describe('Router',()=>{
    global.window.history.back = () =>{
        if(typeof window.onpopstate === 'function'){
            window.onpopstate({currentTarget:window} as unknown as PopStateEvent)
        };
    };
    global.window.history.forward = () =>{
        if(typeof window.onpopstate === 'function'){
            window.onpopstate({currentTarget:window} as unknown as PopStateEvent)
        };
    };

    const getContentFake = sinon.fake.returns(document.createElement('div'));
    const BlockMock = class{
        getContent = getContentFake;
    } as unknown as typeof Block

    describe('.use()', ()=>{
        it('should return Router instance',()=>{
            const result = Router.use('/',BlockMock)
            
            expect(result).to.eq(Router);
        });
    })

    describe.only('.back()', ()=>{
        it('should render a page on history back action',()=>{          
            window.location.pathname = '/settings';
            Router
                .use('/',BlockMock)
                .start();
            window.location.pathname = '/';
            Router.back();
            expect(getContentFake.callCount).to.eq(1);
        });
        });
        describe('.forward()', ()=>{
            it('should render a page on history forward action',()=>{
                window.location.pathname = '/settings'
                Router.use('/',BlockMock)
                .start()
                window.location.pathname = '/'
                Router.forward()

                expect(getContentFake.callCount).to.eq(1)
            });
            });
});