function merge<T1, T2, T3>(a: T1, b: T2, c: T3) {
    return {
        ...a,
        ...b,
        'stringType': c
    };
}

const merged = merge({ foo: 1 }, { bar: 2, foobar: 3 }, "string")
console.log(merged)

function wrap<T>(param: T) {
    console.log(typeof param)

    return {
        param
    }
}

const wrapped = wrap(10);
console.log(wrapped)
interface Items<T> {
    list: T[]
}
const items: Items<string> = {
    list: ['a', 'b', 'c']
}

type ItemsTypeAlias<T> = {
    list: T[]
}
const itemsTypeAlias: ItemsTypeAlias<number> = {
    list: [1, 2, 3, 4]
}