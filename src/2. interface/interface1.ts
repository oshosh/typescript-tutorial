interface Person {
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

interface Cell {
    row: number,
    col: number,
    piece?: Piece,
}

interface Piece {
    move(from: Cell, to: Cell): boolean
}

function createBoard() {
    const cells: Cell[] = []
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({ row, col })
        }
    }
    return cells;
}

const board = createBoard();

board[0].piece = {
    move(form: Cell, to: Cell) {
        return true
    }
}