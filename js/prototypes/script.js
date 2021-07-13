let str = "sf" //3 level from null
let num =12    // 3 level from null
let bool = true //3 level from null
let arr = [123,123,12,123] // 3 level from null
let obj = { a : 10,b : 'asdd'} //2 level from null matlab obj.__proto__ asha check kar
// function are 3 level from null

//if x and y are non-primtive
//x == y : true <--- what does it means ? 
// both obj refer to same obj in memory 
console.log("======== TYPES ===========")

console.log(typeof String)
console.log(typeof Boolean)
console.log(typeof Number)
console.log(typeof Array)
console.log(typeof Object)
console.log(typeof Function) 
//agar hum ko bhi chej agar globally call kar pa rha toh iska matlab vo window me exist karta h -- > eg : window.String will also work

let fun = function (){ }


console.log("======== PROTO CHAIN===========")

console.log(str.__proto__.__proto__ == obj.__proto__)

console.log(num.__proto__.__proto__ == obj.__proto__)

console.log(bool.__proto__.__proto__ == obj.__proto__)

console.log(arr.__proto__.__proto__ == obj.__proto__)

console.log(fun.__proto__.__proto__ == obj.__proto__)


// Everything indirectly inherits from the same thing
// that obj inherit from
// i.e  in js everything is essentially an object
//Prototypes are the mechanism by which JavaScript objects inherit features from one another

console.log("======== PROTOTYPES ===========")
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(fun.__proto__ == Function.prototype)

// String.prototype inherits from Object.prototype
// typeof Object.create(Boolean.prototype) will be object
console.log("++++++++++++++++++++++++++++")
let x = Object.create(Boolean.prototype)
console.log(x.__proto__ == bool.__proto__)
//but there typeof is different 
console.log(typeof bool)
console.log(typeof x)
//prototype wali inherit vo datatype ko maintain kara jaruri nhi h
//is .__proto__ (1) is not same as .prototype (2)
// (1) ye ush ko point kara gha jisha inherit kiya h
// (2) ye default chej h, jiska js me jo kuch bhi hm kar te h vo insse inherit hoti h
//oop nature is driven using prototype
// we can change how default class in js behave going into their proto type eg ;
// ye kaam karta h comment ko hata ke chala ke dekh
// String.prototype.charAt = function (){
//     return "Aman"
// }
//string.prototype contain all default string functions
// let str2 = "Bablu"
// console.log(str2.charAt())
let str3 = "Annu"
console.log(str.charAt == str3.charAt)
console.log(str3.__proto__.charAt) // because charat yha per define jo ki h string.prototype
//console.log(str3.__proto__.__proto__,charAt) //this is show not defined 

Array.prototype.joinOriginal = Array.prototype.join

Array.prototype.join = function (){
    console.log("join called on ",this)
    return this.joinOriginal(...arguments)
} /// yha pe this will point to a ho koki vo array ke wara call kiya gya logic samaj

  
