export const interface_and_type = () => {

    type Role = "Admin" | "User" | "Guest"
    type Command = "fly" | "Hit"

    interface User {
        ID: number
        name: string
        role: Role
    }

    interface Admin extends User {
        command:Command
        email:string
    } 

    const admin:Admin = {
        ID:111,
        name:"Narinee",
        role:"Admin",
        command:"fly",
        email:"nry@dev.dev"
    }


    const userID: User = {
        ID: 1,
        name: 'Tuschy',
        role: "Admin"
    }
    console.log(userID)
    console.log(admin)

}

export default interface_and_type