

type GenericArray<T> = Array<T>

const frends : GenericArray<string> = ["salman", 'farcy', 'the greate', 'of'];

const rollNumber : GenericArray<number> = [4, 5, 7, 9, 10];

const isEligibleList: GenericArray<boolean> = [true, false, true];


type Coodfaosj1<x, y> = [x, y]
// type Coodfaosj2 = [string, string]
// type Coodfaosj3 = [boolean, boolean]

const coordinates1 : Coodfaosj1<number, string> = [32, "45"];
const coordinates2 : Coodfaosj1<string, string> = ['salm', 'farcy']
const coordinates3 : Coodfaosj1<boolean, boolean> = [true, false]



type User = {name: string, age: number}

const userList : GenericArray<User>= [
     {
          name: "Mr. x",
          age:  24
     },
     {
          name: "My. Y",
          age: 24
     },
     {
          name: 'black',
          age: 32
     }
]





