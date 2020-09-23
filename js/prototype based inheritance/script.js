let obj1 = {
    a :10,
    b : 20,
    c: 30
}

let obj2 = Object.create(obj1) // this is obj to obj inheritance 

console.log(obj2)
console.log(obj2.a)
console.log(obj1)
console.log(obj2.__proto__) // inherit hua hua data obj ke proto me store hota h means inherit hota h agar vaha update hua toh isma bhi update hoga.

obj2 = {
    a : 'asd',
    b : 'asfdas',
    c : 'sadasd'
}

let obj3 = Object.create(obj2)

//obj3.__proto__ = obj2
// obj3.__proto__.__proto__ = obj1

/* 
    obj,a -> it will try to find a in obj2
        ->> if not found,
        ->> it will try to find it in obj2.__proto__
        --> if not found,
        --->  it will try to find it in obj2.__proto__.__proto__
        ---> and so on.,
        --> till .__proto__ becomes null

*/

//obj2.a++  -- > ye obj2 me a var create kar degha obj2.a = obj2.a + 1
//obj1.a++ --> obj1 me value inc hogi and  yha per data shadowing bhi work karra gha