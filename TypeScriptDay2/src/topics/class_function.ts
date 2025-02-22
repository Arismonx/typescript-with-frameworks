const Hello = (name: string): string => {
    return `Hello ${name}`
}

const Welcome = (name: string = "Guest "): string => {
    return `Welcome ${name}`
}

const Geet = (name: string, title?: string) => {
    return console.log(`Title: ${title || "Guest"} , Name: ${name}`)
}

const sum = (...numbers: number[]): number => {
    return numbers.reduce((prev, current) => prev + current, 0)
}
export default function Class_func() {
    // console.log(Hello("Tuschy"))
    // console.log(Welcome())
    // Geet('Tuschy','MAMA')
    console.log(sum(1, 2, 3, 4, 5))

}