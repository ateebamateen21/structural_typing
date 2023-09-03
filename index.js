"use strict";
// structural typing ________
//if it looks like a duck, it is a duck. 
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
let detail; //union
let detail2; //intersection 
detail2 = {
    name: "ateeba",
    age: 24,
    isActive: true,
    language: "English",
    country: "Pakistan"
};
let detail3;
function add(b) {
    return 34;
}
//-------------------tuples
// let myArray: ( string | number | boolean)[] = ["a", "b", 23]
// let myArray2 : [string, boolean, number, ]
// = [
//      "a",  23, true,
// ] //won't work, strict structure. 
// type casting ------ type converting
// casting  "as"
let var4 = 23;
var4.toLowerCase;
// console.log(typeof var4)
let var5 = var4.toString();
console.log(typeof var5);
let var6 = Number.parseInt(var5);
console.log(typeof var6);
