function checkthis(){
    console.log(this)
}

let obj = { /* key: value pair   -- key is actually string*/
    a : 15,
    b : "Aman",
    c : null,
    d : undefined,
    e : function(){
        console.log(this)
    },
    f : {
        l : 5,
        e : function(){
            console.log(this)
        }
    }
}

obj.e()
checkthis()

let var1 = obj.e
var1() /* check the output to understand how this is working noew */
obj.f.e()

let var2 = obj.f.e
var2()


let obj1 = {
    10 : "Aman",
    b : 131,
    true : "yes"
}

 /* obj1.10 and obj.'10' will give Error */

obj1['10']
obj1['b']
obj1.true
obj1['true']


let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
         title  = "ads"
      this.students.forEach(function(student,index) {
        // Error: Cannot read property 'title' of undefined
        alert(this.title + ': ' + student + index)
      });
    }
  };
  
  group.showList();