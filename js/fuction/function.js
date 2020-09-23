console.log(beta())

function beta(){
    return true
}
console.log(beta())
console.log(alpha())
function alpha(){
    return 'aman'
}
console.log(alpha())


let a  /* it will be undefined */
console.log(a)
b = 5  /* no need to specify data type jashi val dala gha vasha ban jaye gha  */
console.log(b)

function area(height,width){  /* same thing function area( let height, let width) */

    if( typeof width == 'undefined'){  /* way to do fn polymorphism in js  can be written as  if(!width){}   same kaam kara ghi  -- bas asha hi kar sakhta h polymorphism   */
        return Math.PI * height * height
    }
    return height * width
}

console.log(area(3,4))
console.log(area(4))

function hello(){
    console.log("HELLO WORLD " + arguments[0] , arguments[1])
    console.log(arguments)
}

hello(1,2)
hello("Aman","Sehrawat")

/* arguments ek function ka local array h jab hum ko arg pass nhi karta but value de deta h toh ye arguemnts me jati h */
/* ye fn overwrite kar deh gha argument ki default defn ko and fir hum jo value define kara gha uska hisab se kaam kara gha */
function atr(){
    let arguments
 /*   console.log("HELLO WORLD " + arguments[0] , arguments[1]) */
    console.log(arguments)
}

atr("1","2")