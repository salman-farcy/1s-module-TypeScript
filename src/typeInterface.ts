type User = {
     name: string;
     age: number;
}
type Role = {
     role: "admin" | "user";
}

interface IUser {
     id: number;
     name: string;
     age: number;
     phone: string;
}


type UserWithRole = User & Role;
interface IUserWithRole extends IUser{
     role: "admin" | 'user'
}

const userRole4 :IUserWithRole  = {
     id: 23,
     role: "admin",
     age: 23,
     phone: "djfalsd032894",
     name: "salman"
}

const user1 : UserWithRole = {
     name: "Alice",
     age: 30,
     role: "admin",
     
}

const user2 : IUser = {
     id: 1,
     name: "Bob",
     age: 25,
     phone: "123-456-7890"
}

const user3 : Role = {
     role: "admin"
}


type IsAdmin = boolean
// interface IsAdmin {
//      isAdmin : boolean
// }

const isAdmin : IsAdmin  = true

// type using function type
// type Connect = (g:number, f:number)=> number

// interface using function type
interface Connect {
     (g: number, f: number) : number
}

const connect : Connect = ( g, f) => {
     return g + f
}
