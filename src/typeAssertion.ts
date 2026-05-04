// Type Assertion in TypeScript

let farcy : any;

farcy = "Hello, World!";

(farcy as string)


const kgToGMConverter = (input : string | number):string | number | undefined => {
     if(typeof input === 'number'){
          return input * 1000;
     }else if(typeof input === 'string'){
          const [value] = input.split('')
          return `Converted value is ${Number(value) * 1000} gm`
     }
}

const result1 = kgToGMConverter(2) as number;
const result2 = kgToGMConverter('2 kg') as string;

console.log(result1, result2);