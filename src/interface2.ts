interface Person  {
    name: string;
    age?: number;
}

interface Developer extends Person {
    skills: string[]
}

const person: Person = {
    name: '김이름',
}

const expert: Developer = {
    name: '김개발',
    skills: ['js', 'react', 'typescript']
}