//same thing can be acheived using fn and setTimeout
let wait = function (timeout){

    return new Promise((resolve,reject) =>{

        if(isNaN(parseInt(timeout))){
            reject(new Error("timeout is not a number"))
        }
        setTimeout(resolve,timeout)
    })
}
let inpid = document.getElementById('inpid')
let btnid = document.getElementById('btnid')

btnid.onclick = function () {

    wait(inpid.value)
    .then(() => {
        console.log(`wait for ${inpid.value} sec`)
    })
    .catch((err) =>{
        console.error(err)
    })
}


//esse error de rha h
// btnid.onclick( () => {

//     wait(inpid.value)
//     .then(() => {
//         console.log(`wait for ${inpid.value} sec`)
//     })
//     .catch((err) =>{
//         console.error(err)
//     })
// })
//way to do using fn
// function wait(timeout,done){
//     if(isNaN.parseInt(timeout)) return done(new error('timeout must be a no'))

//     setTimeout(() =>{
//         done(null)
//     },timeout)
// }

// btnid.click = function (){
//     wait(inpid.value,(err) =>{
//         if(err) console.error(err)
//         else console.log('wait over')
//     })
// }