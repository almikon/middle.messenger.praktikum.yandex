function queryStringify(data: Record<string, string>) {
    let res = '?'
    for (let key in data) {
        res += key + '='
        res += data[key].toString()
        res += '&'
    }
    return (res.substring(0, res.length - 1))
}

export default queryStringify
