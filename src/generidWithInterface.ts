// Interface with generics

interface Devloper <T, X, Y = null> { 
     name: string;
     salary: number;
     device: {
          brand: string;
          model: string;
          releasedYear: string;
     },
     smartWatch: T;
     car: X;
     bate: Y
     
}

// type nonBrand = {model: string, price: number, heartRate: string, stopeWatch: boolean}
interface NoenBrand {model: string, price: number, heartRate: string, stopeWatch: boolean}

const poorDevloper : Devloper <NoenBrand , boolean, string> = {
     name: "Mr. rohim",
     device: {
          brand: "walton",
          model: "ghs",
          releasedYear: "sdjfasld"
     },
     salary: 20000,
     smartWatch: {
          model:"dfjalsdjf",
          price: 324323,
          heartRate: '120',
          stopeWatch: true
     },
     car: false,
     bate: "yes"
}


const reachDevlper : Devloper<boolean, boolean, string> = {
     smartWatch: true,

     bate: 'SA'
}