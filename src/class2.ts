abstract class Creature {
    constructor(public x: number, public y: number, public age2: number) {

    }
    public age(): void {
        this.age2++
    }

    public move(xDistance: number) {
        this.x += xDistance
    }
    public getX(): number {
        return this.x;
    }
    public setX(x: number): void {
        this.x = x;
    }
    public getY(): number {
        return this.y;
    }
    public setY(y: number): void {
        this.y = y;
    }

    public abstract attack(): void;
    public abstract printInfo(): void;

    public toString2(): String {
        return "x : " + this.x + ", y : " + this.y + ", age : " + this.age2;
    }
}

abstract class Animal extends Creature {

    constructor(x: number, y: number, age: number) {
        super(x, y, age);
    }

    // Creature로 부터 상속
    public attack(): void {
        console.log("몸을 사용하여 공격!!");
    }
}

interface Talkable {
    talk(): void
}

abstract class Human extends Creature implements Talkable {

    constructor(x: number, y: number, age: number) {
        super(x, y, age);
    }

    // Talkable로 부터 상속 
    talk(): void {
        console.log("사람은 의사소통이 가능하다.");
    }

    // Creature로 부터 상속
    public attack(): void {
        console.log("도구 사용하여 공격!!");
    }
}

interface Flyable {
    fly(yDistance: number): void;
    flyMove(xDistance: number, yDistance: number): void;
}


class Pigeon extends Animal implements Flyable {

    constructor(x: number, y: number, age: number) {
        super(x, y, age);
    }

    // Flyable 상속 
    fly(yDistance: number): void {
        // Creature 혼합사용
        this.setY(this.getY() + yDistance);
    }
    flyMove(xDistance: number, yDistance: number): void {
        // Creature 혼합사용
        this.setY(this.getY() + yDistance);
        this.setX(this.getX() + xDistance);
    }

    // Animal => Creature로 부터 상속
    public printInfo(): void {
        console.log("Pigeon -> " + this.toString2());
    }
}

interface Swimable {
    swimDown(yDistance: number): void;
}

class Turtle extends Animal implements Swimable {

    constructor(x: number, y: number, age: number) {
        super(x, y, age);
    }

    swimDown(yDistance: number): void {
        this.setY(this.getY() - yDistance);
    }

    public printInfo(): void {
        console.log("Turtle -> " + this.toString2());
    }
}

interface Programmer5 {
    coding(): void;
}

class Kevin extends Human implements Programmer5, Swimable {


    constructor(x: number, y: number, age: number) {
        super(x, y, age);
    }
    swimDown(yDistance: number): void {
        this.setY(this.getY() - yDistance);
        if (this.getY() < -10) {
            console.log("너무 깊이 들어가면 죽을수도 있어!!");
        }
    }
    coding(): void {
        console.log("Hello World!");
    }
    public printInfo(): void {
        console.log("Kevin -> " + this.toString2());
    }
}

const p: Pigeon = new Pigeon(5, 10, 14);
console.log(p.printInfo())
console.log(p.age());
console.log(p.move(100));
console.log(p.printInfo());
console.log(p.fly(5));
console.log(p.printInfo());
console.log(p.flyMove(10, 20));
console.log(p.printInfo());
console.log(p.attack());
console.log('--------------------------------')

// Kevin kev = new Kevin(0, 0, 35);
// kev.printInfo();
// kev.age();
// kev.move(10);
// kev.printInfo();
// kev.attack();
// kev.coding();
// kev.swimDown(20);
// kev.printInfo();
// kev.talk();
// System.out.println();

// Turtle tur = new Turtle(100, -10, 95);
// tur.printInfo();
// tur.age();
// tur.move(-100);
// tur.printInfo();
// tur.attack();
// tur.swimDown(1000);
// tur.printInfo();