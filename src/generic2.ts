interface DB<T> {
    add(v: T): void;
    get(): T;
}
class Other<T> implements DB<T> {
    add(v: T): void {
        throw new Error("Method not implemented.");
    }
    get(): T {
        throw new Error("Method not implemented.");
    }
}

interface JSONSerialier {
    serialize(): string;
}

class LocalDB<T extends JSONSerialier> implements DB<T>{
    constructor(private localStroageKey: string) {
    }

    add(v: T) {
        v.serialize()
        localStorage.setItem(this.localStroageKey, v.serialize())
    }
    get(): T {
        const v = localStorage.getItem(this.localStroageKey);
        return (v) ? JSON.parse(v) : null
    }
}

interface Veigtable {
    v: string;
}
interface Meat {
    m: string;
}
interface Cart2<T> {
    getItem(): T extends Veigtable ? Veigtable : Meat
}

const cart: Cart2<Veigtable> = {
    getItem() {
        return {
            v: ''
        }
    }
}

cart.getItem()