class person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    isadult(){
        return this.age >= 18
    }
}

let p = new person('aman sehrawat','19')
let p1 = new person('renu sehrawat','22')


console.log(typeof person) /// function ; there is no new datatype called class
console.log(p.__proto__ == person.prototype) // true
console.log(p.__proto__.__proto__ == Object.prototype) // true
console.log(p.isadult == p1.isadult) // b/c both refrencing to same memory

console.log(p.__proto__.isadult)
console.log(person.prototype)


class student extends person{
    constructor(name,age,grade){
        super(name,age)
        this.grade = grade
    }
}

let s1 = new student('Aman Sehrawat','19','12th')
console.log(s1)
console.log(s1.isadult())

console.log(s1.__proto__ == student.prototype)
console.log(s1.__proto__.__proto__ == person.prototype)
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)

//inheritance chain
//Object.prototype ---> person.prototype ---> Student.prototype
//no inheritance b/w the classes (actually they are functions)
// Object  -x---> person -x--> student  

