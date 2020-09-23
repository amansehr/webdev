function Person(name,age){
    this.name = name
    this.age = age
    return 10
}

let p = Person('harry portter',20)
console.log(p)
console.log(name)
console.log(age)

//check the diff. Dono alag alag kaam kar rha h.
let q = new Person('Aman',19)
console.log(q)
console.log(JSON.stringify(q))
