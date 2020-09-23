console.log(1 == '1') //true
console.log(1 === '1') //false

 console.log(0 == '') //true ,because toNumber('') == 0
 console.log('false' == false) // false
 console.log('' == false) // true , both typecasted to 0 
 console.log('\n' == 0) //true ,any widespacechar == 0 is true eg : widespacechar = \n \t ' '
 console.log('\n' == '\t')

//this doesnt hold good for abstract equality
//a = b ,b = c ... implies that a = c .
 
console.log([1,2] == [1,2]) //false //because they are not refrencing to same location agar true ata h iska matlab same location pe point kar rha h