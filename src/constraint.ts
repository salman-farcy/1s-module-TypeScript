// constraint : strict rules deya

// type Student = {
//      id: number, 
//      name: string,
//      email: string,
//      userNmae: string
// }
// const addStudentToCourse = <T extends Student> (studentInfo : T) => {
//      return {
//           course: "Next Level Web Development",
//           ...studentInfo
//      }
// }

// const student5 = {
//      id: 5,
//      name: "John Doe",
//      email: "john.doe@example.com",
//      userNmae: "john_doe"
// }


// const student1 = addStudentToCourse(student5)
// console.log(student1)

type StudentMustRequered = {id: number, name: string, }

const myGnericFunction = <T extends StudentMustRequered> (value : T) => {
     return {
          myWold : "Salman farcy wold in Ever"
     }
}

const student5 = {
     id: 3420,
     name: "Salman farcy",
     hasPen: true
}

const student = myGnericFunction(student5)