

let p = document.getElementById('para')

console.log(p.innerText)
console.log(p.innerHTML)
console.log(p.outerHTML)

p.innerText = "hello <b> bold </b> aman"
p.innerHTML = "hello <b> bold </b> aman"

console.log(p.getAttribute('id'))
console.log(p.getAttribute('class'))


p.setAttribute('contenteditable',true)
p.setAttribute('spellcheck',true)

console.log(p.innerHTML)

let input = document.getElementById('idinput')
console.log(input.value) //innerText kam nahi kra gha

input.setAttribute('placeholder',"input")
console.log(input.validity) //check the validity of diff parameter like input shi liya h yha nhi etc


let btnid = document.getElementById('btnid')

console.log(btnid)
btnid.innerText = "babbi"
btnid.innerHTML =  " <b>bbabi </b>" //agar html bhi specify karna h toh ye use kar
