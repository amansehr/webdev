let num = document.getElementById('num')
let btnprint = document.getElementById('btnprint')
let ulnumlist = document.getElementById('ulnumlist')

btnprint.onclick = function (){
    ulnumlist.innerHTML = ''
    for (let x = 1;x <= num.value;x++){
        let li = document.createElement('li')
        if(x%15 == 0 ) li.textContent = 'fizzBuzz'
        else if(x%3 == 0) li.textContent = 'fizz'
        else if(x%5 == 0) li.textContent = 'Buzz'
        else li.textContent = x

        ulnumlist.appendChild(li)
    }
}
// web dev me complexity khali algo pe depend nhi karti
/* 
    complexity of a + b
    if n = max num of bits in a and b
    +,- : o(n)
    *,/,% = o(n^2)
*/
