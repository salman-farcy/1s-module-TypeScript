//? using Array Spread Operator
const goruColor = ["red", "black", "white", "blackAndWhite", "brown"];

const sagolJat = ["dasheSagol", "ramSagol", "pathaSagol"];

const korbanirPoshu = ["goru", "sagol", "mohise", "ut", "dumba"];

goruColor.push(...sagolJat);
korbanirPoshu.push(...sagolJat)
console.log(goruColor, korbanirPoshu);


//? using Object Spread Operator

const eshat = {
     name: "eshat",
     age: 20,
     profession: "student",
     isMarried: true
}
const sister = {
     sisterName: "eshika",
     sisterAge: 18,
     sisterProfession: "student",
     isSisterMarried: false
}
const twoSisters = {...eshat, ...sister}
console.log(twoSisters);


// ? using Rest Operator
const invitaion = (...friends : string[]) => {
     friends.forEach((friends : string) => console.log(`Dear ${friends}, you are invited to my birthday party!`))
}

invitaion("Rafi", "Safi", "Shafi", "Shafiqul", "Shafik")