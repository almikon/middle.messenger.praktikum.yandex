import { expect } from "chai"
import { Link } from "."

describe.only('Link',()=>{
    it('should render',()=>{
        new Link({to:'/',label:'test'})
    })

    
    it('should return span', ()=>{
        const link = new Link({to:'/',label:'test'})
        // console.log(link)
        const result = link.element;
        
        expect(result).to.be.instanceOf(window.HTMLSpanElement)
    })
    // it('should go to passed route on click', ()=>{
    //     const link = new Link({to:'/',label:'test'})

    //     const result = link.element;
        
    //     expect(result).to.be.instanceOf(window.HTMLSpanElement)
    // })
})