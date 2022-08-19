namespace('a.b.c.d.e') // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"

function namespace(string:String): Object{
    console.log(string.split('.'))
    
    return {}
}

export default namespace