let btnwait = document.getElementById('btnwait')
let btncount = document.getElementById('btncount')
let divstatus = document.getElementById('divstatus')
let divval = document.getElementById('divval')

let count = 0

btncount.onclick = function (){
    count++
    divval.textContent = count
}

btnwait.onclick = function (){
    divstatus.textContent = 'waiting'
    
    setTimeout(() => { divstatus.textContent = 'Done'},5000) //best way of delaying in js //this is b/c of event loop hum interpreter ka bhina delay set kar pata h or issh time me interpreter kuch or kam bhi kar sakta h 
    // eventloop by philip robert ki video h jsconf ki
    // let tme = Date.now()
    // while( tme + 5000 > Date.now()   ){ /* Do Nothing */} //this is not a good way of creating delay   
    //   Js me interpreter process in single thread only doesnt means ki browser ke pass ek hi thread bas ek js file ko run karna ke liya ek hi thread mila gha
}


//interpreter jya karta h ki fun me jitna change hona h uno ko ek sath fn ke last me karta h is called batching
//eg:
function fun(){
    divstatus.textContent = 'x'
    divstatus.textContent = 'y' 
} // ye fn sidha y hi change kara gha batching ke logic ki waje se