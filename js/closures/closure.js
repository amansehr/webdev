function outer(arg1){
    let var1 = 10
    function inner(arg2) {
        let var2 = 20
        let var1 = 23 /* this is known as shadowing variable */
        console.log(arg1,var1,arg2,var2)
        return "DID THE WORK !"
    }

    return inner
}

let g1 = outer("Aman") /* yha pe closure ho jata h inner function has data of outer function*/

console.log(g1("Bablu"))