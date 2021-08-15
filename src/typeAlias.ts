type Person2 = {
    name: string;
    age?: number;
}

type Developer2 = Person2 & {
    skills: string[]
}

const person2: Person2 = {
    name: '김이름',
}

const expert2: Developer = {
    name: '김개발',
    skills: ['js', 'react', 'typescript']
}

type People = Person2[];
const people: People = [person2, expert2];

type Color = 'red' | 'orange' | 'yellow';
const color2: Color = 'yellow';
