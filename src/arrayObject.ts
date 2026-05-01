//? array, object

//! array


// let bazarList : string[] = ["banana", "milk", "onion"];
// bazarList.push("grapes");

// 1
// ?last item print করো
// ?length বের করো
// const fruits: string[] = ["apple", "banana", "mango"];
// console.log(fruits[2]); // mango 

// 2
// ?সব নাম uppercase করে print করো
// ?name এর length print করো
// const users: string[] = ["Salman", "Farcy", "Jannat"];
// users.forEach((user) => {
//   console.log(user.toUpperCase());
//   console.log(user.length);
// });


// 3
// ?function বানাও → শুধু 5 letter এর বেশি নাম return করবে
// function printNames(names: string[]): void {
//   names.forEach((name) => {
//      if(name.length > 5) {
//           console.log(name);
//      }
//   });
// }
// printNames(["A", "B", "C", 'salman', 'farcy', 'jannat']);


// 4
// ?সব নাম capital letter করো (map)
// ?short name remove করো (filter)
// const products: string[] = ["laptop", "phone", "tv", "watch", "phone", "voi"];
// const capitalizedProducts = products.map((product) => {
//     return product.toUpperCase()
// })
// console.log(capitalizedProducts);
// const filteredProducts = capitalizedProducts.filter((product) => {
//      return product.length > 3
// })
// console.log(filteredProducts);




// let dueal : (number | string)[] = ["salman", 25, "eshat", 20, "tamim", 24];
// dueal.push("farcy");



//? tuple type
// let coordinates : [number, number, number] = [10, 40, 50];
// let husbentWife : [string, string, string]  = ["salman", "esul", "baby"] 
// let numberAndRoll : [string, number] = ["salman", 2]
// numberAndRoll[1] = 12


//! reference type Object 
// const user : {
//      firstName: string;
//      middleName?: string;
//      lastName: string;
//      isMarried: boolean;
// } = {
//      firstName : "Salman",
//      lastName : "farcy",
//      isMarried : true
// }

// ! Literal type
// const user : {
//      organization: "Programming Hero"; // value ke type hisabe use kora hoyeche
//      firstName: string;
//      middleName?: string;
//      lastName: string;
//      isMarried: boolean;
// } = {
//      organization : "Programming Hero",
//      firstName : "Salman",
//      lastName : "farcy",
//      isMarried : true
// }




// ! access modifier
// const user : {
//     readonly organization: string; 
//      firstName: string;
//      middleName?: string;
//      lastName: string;
//      isMarried: boolean;
// } = {
//      organization : "Programming Hero",
//      firstName : "Salman",
//      lastName : "farcy",
//      isMarried : true
// }


