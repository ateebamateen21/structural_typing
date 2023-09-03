// structural typing ________
//if it looks like a duck, it is a duck. 

interface inn1 {
    name: string,
    age: number,
    isActive: boolean
}

// let userAccount: inn2 = {
//     name: "Ateeba",
//     age: 19,
//     isActive: true
// }

interface inn2{
    name: string
    language: string
    country: string
}

// let userAccount2: inn2= {
//     name: "Aree",
//     age:12,
//     isActive: false
// }

// userAccount: inn1 = {
//     name: "Arkam",
//     age: 18,
//     isActive: true
// }


// ---------------- intersection

// math != computer

let detail: string | number  //union

let detail2: inn1 & inn2 //intersection 

detail2 = {
    name: "ateeba",
    age: 24,
    isActive: true,
    language: "English",
    country: "Pakistan"
}

let detail3: inn1 & {
    area: string,
    class: string
}

type var1 = {
    name: string
}

interface var2 {
    class: number
}



interface var3 {
    section: number
}


function add (b:var3):number{
return 34
}

//-------------------tuples

// let myArray: ( string | number | boolean)[] = ["a", "b", 23]


// let myArray2 : [string, boolean, number, ]
// = [
//      "a",  23, true,
// ] //won't work, strict structure. 



// type casting ------ type converting

// casting  "as"

let var4: number = 23;
(var4 as unknown as string).toLowerCase //temporarily changes type
// console.log(typeof var4)

let var5 =var4.toString() 
console.log(typeof var5) //permanently changes type

let var6 = Number.parseInt(var5)
console.log(typeof var6)
console.log(typeof var6)
