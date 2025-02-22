export const Class_Ob = () => {

    class Person {
        name: string

        constructor(name: string) {
            this.name = name
        }

        greet(): string {
            return `Hello ${this.name}`
        }
    }

    class Car {
        private speed: number = 0

        constructor(public brand: string) { }

        accelerate(amount: number): void {
            this.speed += amount
            console.log(`this ${this.brand} speed ${this.speed} km/h`)
        }
    }

    class Animal {
        protected name: string

        constructor(name: string) {
            this.name = name
        }

        makeSound(): void {
            console.log('Some Sound')
        }
    }
    class Dog extends Animal {
        private age: number

        constructor(name: string, age: number) {
            super(name)
            this.age = age
        }

        makeSound(): void {
            console.log("Woof!")
        }

        getInfo(): string {
            return `${this.name} is ${this.age} `
        }
    }

    const obj = new Person("Tuschy")
    // console.log(obj.name)
    // console.log(obj.greet())

    const obj1 = new Car("Toyota")
    // obj1.accelerate(2)s
    
    const obj2 = new Dog("BOB",2)
    obj2.makeSound()
    console.log(obj2.getInfo())
    
}

export default Class_Ob