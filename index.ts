namespace('a.b.c.d.e') // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"

function namespace(string:String): Object{
    const arr: Array<string> = string.split('.')
    let res = {}
    let temp ={}
    for (let i = arr.length-1; i >= 0; i--) {
        // console.log(i)
        
        const element = arr[i];
        //  console.log(element)
        if(i===arr.length-1){
            res[element]={}
            console.log(res)
        }
        Object.assign(temp,res)
        res[element]=temp
        console.log(res)
        temp = {}
        // Object.assign(temp, res)
    }
    // // return arr.reduceRight((acc,cur) => {
    // //     const entries = {};
    // //     console.log(entries)
        
    //     // console.log(Object.fromEntries([entries]))
    //     // return Object.fromEntries([entries])
    //     return {}
    // }, {})
    return res
}

export default namespace