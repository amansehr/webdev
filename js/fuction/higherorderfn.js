function creategreet(greeting){

    function greet(name){
        console.log(greeting,name())
    }
    return greet
}

let g1 = creategreet("Good Morning") 

/*console.log(typeof g1) */


function getname(){
    return document.getElementById('ipt').value
}

function creategreet1(greeting){

    function greet1(name){
        console.log(greeting + " " + name)

    }
    return greet1
}

let g2 = creategreet1("Good Evening")

/* console.log(g2("AMAN")) /* b/c we not returning any thing ish liya ye undefined print kara gha */

function  greet(name){
    console.log("Hello",name) 
}

/*console.log(greet("Aman")) */ 