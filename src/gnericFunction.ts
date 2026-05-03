// generic fuction

// const createArrayWithString = (value : string) => [value];
// const createArrayWithNumber = (value : number) => [value];
// const createArrayWithBoolean = (value : boolean) => [value];
// const createArrayWithObject = (value : {
//      id: number, name: string
// }) => [value];

const createArrayWithGeneric = <T>(value : T) => {
 return [value];
}

const arrayString = createArrayWithGeneric('Hello');
const arrayNumber = createArrayWithGeneric(123);
const arrayBoolean = createArrayWithGeneric(true);
const arrayObject = createArrayWithGeneric({ id: 1, name: 'John' });

console.log(arrayString); // Output: ['Hello']
console.log(arrayNumber); // Output: [123]
console.log(arrayBoolean); // Output: [true]
console.log(arrayObject); // Output: [{ id: 1, name: 'John' }]   


const createArrayWithGeneric2 = <x, y> (prams1: x, prams2: y) => {
     return [prams1, prams2];
}

const res1 = createArrayWithGeneric2('Hello', 123);
const res2 = createArrayWithGeneric2(true, { id: 1, name: 'John' });



const createArrayWithGeneric3 = <T> (student: T) => {
     return {
          cuntry: 'Bangladesh',
          ...student
     }
}

const student1 = {
     id : 1,
     name : 'John',
     age : 20,
     cow: true
}

const student2 = {
     id : 1,
     name : 'John',
     age : 20,
     sagol: true,
     ut: true
}

const res3 = createArrayWithGeneric3(student1);
const res4 = createArrayWithGeneric3(student2);

console.log(res3); // Output: { cuntry: 'Bangladesh', id: 1, name: 'John', age: 20, cow: true }
console.log(res4); // Output: { cuntry: 'Bangladesh', id: 1, name: 'John', age: 20, sagol: true, ut: true }