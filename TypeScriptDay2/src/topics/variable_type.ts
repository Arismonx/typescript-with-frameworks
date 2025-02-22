export const variable = () => {
    const age: number = 22
    const fname: string = "Tuschy"
    const on: boolean = true
    const off: boolean = false

    // console.log(`name: ${fname}`)
    // console.log(`age: ${age}`)
    // console.log(`on: ${on}`)
    // console.log(`off: ${off}`)

    const numbers: number[] = [1, 2, 3, 4]
    const names: string[] = ["tus", "nriny"]
    const peopel: Array<string> = ['T', 'N']
    const isBoolean: boolean[] = [true, false, false]

    // console.log(`numbers: ${numbers[2]}`)
    // console.log(`names: ${names[0]}`)
    // console.log(`people: ${peopel[1]}`)
    // console.log(`isBoolean: ${isBoolean[1]}`)


    const person: [string, number] = ['Tuschy', 22]

    // console.log(`Name: ${person[0]}`)
    // console.log(`Age: ${person[1]}`)

    enum Color {
        Red,
        Blue,
        Green
    }

    const color: Color = Color.Red

    // console.log(color)

    const user: { name: string, age: number }[] = [
        {
            name: 'Tuschy',
            age: 23
        },
        {
            name: 'Nrinee',
            age: 22
        }
    ]

    // console.log(user[0].name, user[0].age)
    // console.log(user[1].name, user[1].age)

    // interface User {
    //     name:string
    //     age:number
    // }
    
    // interface Employee extends User {
    //     position:string
    // }

    // const emp: Employee = {
    //     name: "Tuschy",
    //     age: 22,
    //     position:"Dev"
    // }


    // type Role = "Admin" | "User" | "Guest"

    // interface User {
    //     ID:number
    //     name:string
    //     role:Role
    // }

    // const userID:User = {
    //     ID: 1,
    //     name: 'Tuschy',
    //     role:"Admin"
    // }
    // console.log(userID)
}

export default variable