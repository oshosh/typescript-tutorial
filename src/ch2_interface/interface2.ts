interface Shape {
    getArea() : number;
}

class Circle implements Shape {
    constructor(public radius: number){
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width: number;
    height:number;

    constructor(width:number, height:number){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }
}

const circle : Circle = new Circle(5);
console.log(circle.radius)
console.log("-------------------")

const rectangle : Rectangle = new Rectangle(2,5);

function getCircleArea(circle:Circle) {
    return circle.getArea();
}

console.log(circle.getArea())
console.log(getCircleArea(new Circle(5)))
console.log(rectangle)

const shapes: Shape[] = [circle, rectangle];
shapes.forEach(item => {
    console.log(item.getArea())
})


interface A {
    fn() :void
}

class B implements A {
    fn() {
        console.log("B")
    }
}

class C implements A {
    fn() {
        console.log("C")
    }
}

class D  {
    fn() {
        console.log("D")
    }
}

function makeSomeNoiseWith(call: A): void {
    call.fn()
  }

console.log('--------------------------------')
makeSomeNoiseWith(new B())
makeSomeNoiseWith(new D()) // 덕 타이핑