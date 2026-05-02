// Type Aliases in TypeScript
type User = {
     id : number;
     name: {
          firstName: string;
          lastName: string;
     };
     gender: "maile" | "female";
     contact: string,
     address: {
          city: string;
          country: string;
     };
}

const user : User = {
      id: 1,
      name: {
          firstName: "John",
          lastName: "Smith"
      },
      gender: "maile",
      contact: "john.smith@example.com",
      address: {
          city: "New York",
          country: "USA"
      }
}

const user2 : User = {
      id: 1,
      name: {
          firstName: "John",
          lastName: "Smith"
      },
      gender: "maile",
      address: {
          city: "New York",
          country: "USA"
      },
      contact: "john.smith@example.com"
}



// function ar khatre Type Aliases user kora

type AddFn = (n1 : number, n2 : number) => number

const add : AddFn = (n1, n2) => {
    return n1 + n2
}