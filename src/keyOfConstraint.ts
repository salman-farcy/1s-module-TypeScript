// keyOff : type operator
type RicePeoplesVehicle = {
     car: string;
     bike: string;
     cnb: string;
}

type MyVehicle = "car" | "bike" | "cnb";
type MyVehicle2 = keyof RicePeoplesVehicle; // "car" | "bike" | "cnb"
const myVehicle : MyVehicle2 = "car"; // valid