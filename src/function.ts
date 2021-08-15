function sum(x: number, y: number): number {
    return x + y;
}

const result = sum(1, 2);

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, cur) => acc + cur, 0)
}

const total = sumArray([1, 2, 3, 4, 5])
console.log(total)


function returnNothing() {
    console.log('블라블라~');
}

returnNothing()

function returnStringOrNumber(): string | number {
    return 4;
}

returnStringOrNumber()

interface Storage {
    a: string
}
interface ColdStorage {
    b: string
}

// 함수 오버로드 시그니처
// 문자열 타입 어노테이션 명시
function store(type: "통조림"): Storage
function store(type: "아이스크림"): ColdStorage

// 각 오버로드에대한 구현체에 or 연산자를 통하여 유니온 타입을 지정
function store(type: "통조림" | "아이스크림") {
    if (type === "통조림") {
        return { a: '통조림' }
    } else if (type === "아이스크림") {
        return { b: '아이스크림' }
    } else {
        throw new Error('unsupported type')
    }
}

const s = store('아이스크림')
s.b