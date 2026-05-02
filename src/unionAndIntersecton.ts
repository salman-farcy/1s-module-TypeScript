//? union and intersection types


// ! union types (|)
type UserRole = "admin" | "user" | "guest";
const getDashbord = (role: UserRole) => {
     if(role === 'admin'){
          return 'admin dashboard';
     }
     else if(role === 'user') {
          return 'user dashboard';
     }
     else {
          return 'guest dashboard';
     }    
}
getDashbord("guest")


//! intersection types (&)

type Employee = {
     name: string;
     age: number;
     phone: string;
}

type Manager = {
     designation: string;
     timeSize: number;
}

type EmployeeManager = Employee & Manager;


const salamn : EmployeeManager = {
     name: "salman",
     age : 30,
     phone: "1234567890",
     designation: "manager",
     timeSize: 8
}
