console.log('Eternal script')


var x = 10;
console.log(x)
if(x == 10){
    var x = 14
    console.log(x)
}

console.log(x)


c = 20; //global scope
var d = 20; //function scope -- > hositing hoti h isme
let a = 20 //block scope

let arr = [1,2,"Aman"]
console.log(arr.length)
// you can check more properties


arr.forEach(function(val,idx){ // check the output
    console.log(idx,val)
})


//standard for loop

for (let val of arr){
    console.log(val)
}
for(let index in arr){
    console.log(index)
}

// 


function helloslayer(){
    console.log('world')
    return 'hello'
}

let z = () => { return 11 } //another way of declaring fn
// isme this fix ho jata h jha per fn declare hota h vaha per hi
console.log(z)

let y = () => { helloslayer() } //making fn using arrow
console.log(y)
console.log(y())
console.log(() =>{
    helloslayer()
})


const a1 = 30
//a1++ //give error

const obj = {
    k1 :'aman',
    k2 : 10,
    k3 : false
};
// adding and deleting ho sakta h const obj meh
obj.k4 = 123
console.log(obj.k4)

delete obj.k1
console.log(obj.k1)

const arr1 =  [1,2,3]
arr1.push(5)
console.log(arr1)

const something = []
//agar hum pura obj change karna chaye toh vo nhi ho sakta h per variable ko delete and add kar sakta h per uski defn change nhi kar sakta h

var mayank = 30

function  nme() {
    var mayank = 10
    if(true){
        var mayank = 40
        console.log(mayank)
    }
    console.log(mayank)
}
nme()
console.log(mayank)
///const has block scope 
// let has block scope
//var has function scope