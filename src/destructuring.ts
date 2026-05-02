//? object Destructuring
//? array Destructuring

const user = {
     name: "John",
     middleName: "Doe",
     lastName: "Smith",
     age: 30,
     address: {
          city: "New York",
          country: "USA"
     },
     gender: "male",
     favoriteColors: "black"
}
const {favoriteColors : amarColor, address, address: {city, country}, age} = user
// console.log(age) 


//? array Destructuring
const colors : string[] = ["red", "green", "blue", "yellow", "black"];


const [, secondColor] = colors
console.log(secondColor)