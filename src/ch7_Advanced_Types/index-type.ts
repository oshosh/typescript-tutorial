interface Props {
    //인덱스 시그니처 매개 변수 형식은 'string', 'number', 'symbol' 또는 템플릿 리터럴 형식이어야 합니다
    [key: string]: string;
}

interface Props2 {
    [key: number]: string;
}
const indexProps: Props = {
    a: 'd',
    b: 'e',
    3: 'e',
}

const indexProps2: Props2 = {
    3: 'indexProps2',
}

console.log(indexProps['b'])
console.log(indexProps.b)

console.log(indexProps2[3])

interface Props3 {
    name: string
    [key: number]: string;
}

// const indexProps3: Props3 = {
//     name: 'name',
//     'a': 'indexProps3_A',
//     0: 'indexProps3_0'
// }

let keys: keyof Props3;
type keyTpye = keyof Props3;

interface UserIndexType {
    name: string;
    age: number;
    hello(msg: string): void;
}

let keysOfUser: keyof UserIndexType
keysOfUser = "age"
console.log(keysOfUser)

let hellowMethod: UserIndexType["hello"]

hellowMethod = function (msg: string) {
    console.log('hello world')
}

console.log(hellowMethod("hi"))