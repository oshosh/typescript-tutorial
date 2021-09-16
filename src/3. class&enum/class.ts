interface User {
    name: string;
}
interface Product {
    id: string,
    price: number
}
interface Store2 {
    [index: string]: object
}
class Cart {
    // protected user: User;
    // private store2: Store2;

    constructor(protected user: User, private store2: { [index: string]: object } = {}) {
        // this.user = user;
        // this.store2 = {};
    }
    public put(id: string | number, product: Product) {
        this.store2[id] = product;
    }
    public get(id: string | number) {
        return this.store2[id];
    }
}

class PromotionCart extends Cart {
    addPromotion() {
        this.user
    }
}
const cart2 = new PromotionCart({ name: 'john' })

const cartJohn = new Cart({ name: 'john' });


cartJohn.put(1, { id: 'apple', price: 1111111 })
console.log(cartJohn.get(1))

const cartJay = new Cart({ name: 'jay' });


interface Person3 {
    name: string;
    say(message: string): void;
}
interface Programmer {
    writeCode(requirment: string): string
}

class Korean implements Person3, Programmer {
    constructor(public name: string) {

    }
    say(message: string): void {
        console.log(message);
    }

    writeCode(requirment: string): string {
        console.log(requirment);
        return requirment + '......'
    }

    loveKimchi() {
        console.log('love~ kimchi~')
    }
}

const jay = new Korean('jay')

abstract class KoreanAbstract implements Person3 {

    public abstract jumin: number;

    constructor(public name: string) {

    }
    say(message: string): void {
        console.log(message)
    }
    abstract loveKimchi(): void
}

class Korean2 extends KoreanAbstract implements Programmer {

    constructor(public name: string, public jumin: number) {
        super(name);
    }
    say(message: string): void {
        console.log(message);
    }

    writeCode(requirment: string): string {
        console.log(requirment);
        return requirment + '......'
    }

    loveKimchi(): void {
        console.log('love~ kimchi~')
    }
}