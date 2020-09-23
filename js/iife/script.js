//normal fn
function aman(){
    console.log("hello")
}

aman(); //yha abhi dena per rha h ;


// IIFE = Immediately invoked function expression

// it help us to create local scope with exploiting global scope
( function () {
        console.log("Hello")
})();

( function sayhello () {
    console.log("Hello")
})();


( function sum () {
    var a = 10
    var b = 20
    console.log(a + b)
})();

//console.log(a + b) //yha nhi chala gha kuki define nhi h yha variable



//this is minification. iife helps in minification
(function (l,p) {
    l(p(2,3))
})(console.log,Math.pow)

//just check output all there for loops .understand asha que ho rha hint : scope ,closure
for(var i = 0; i <10;i++){

    setTimeout(function () {
        console.log(i)
    },100)
}


for(let i = 0; i <10;i++){

    setTimeout(function () {
        console.log(i)
    },100)
}


for(var i = 0; i <10;i++){

    (function (j) {
        setTimeout(function () {
            console.log(j)
        },100)
    })(i)
}


for(var i = 0; i <10;i++){

    setTimeout(console.log,100,i)
}
