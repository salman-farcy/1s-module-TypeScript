// keyOff constraint : type operator
// type RicePeoplesVehicle = {
//      car: string;
//      bike: string;
//      cnb: string;
// }

// type MyVehicle = "car" | "bike" | "cnb";
// type MyVehicle2 = keyof RicePeoplesVehicle; // "car" | "bike" | "cnb"
// const myVehicle : MyVehicle2 = "car"; // valid



type RichPeoplesVehicle = {
     car: string;
     bick: string;
     cng: string;
}

// type MyVehicle1 = "bick" | "car" | "cng";
// type MyVehicle2 = keyof RichPeoplesVehicle


// const myVechicle : MyVehicle2 = "cng"

type User = {
     id: number;
     name: string;
     address : {
          city: string
     }
}
const user = {
     id: 123,
     name: "Mezba",
     address: {
          city: "ctg"
     }
}
const getPropertyFromObject = <T> (obj : T,  key: keyof T) => {
     return  obj[key]
}
const result = getPropertyFromObject(user, 'name')

const product = {
     brand: 'hp'
}

const student = {
     name: 'rohim',
     roll: 2312,
     class: 6,
     id: '03942423'
}

const result2 = getPropertyFromObject(product, 'brand')
const result3 = getPropertyFromObject(student, 'name')