function makeKeyValue<K, V>(key: K, value: V): { key: K; value: V } {
    return { key, value };
}

const pair = makeKeyValue('days', ['ПН', 'ВТ']);
pair.value.push('СР', 'ЧТ', 'ПТ', 'СБ', 'ВС');  // OK
pair.value.push('42');   // Error: cannot push a number 
console.log(pair)