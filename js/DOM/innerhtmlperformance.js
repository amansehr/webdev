window.onload = function () {
        let inputid = document.getElementById('inputid')
        let buttonid = document.getElementById('buttonid')
        let ulid = document.getElementById('ulid')
        
        buttonid.onclick = function (){
            ulid.innerHTML = ''
            let x = parseInt(inputid.value)

            //not optimised way of doing this thing
            // for(let a = 1;a <= x;a++){
            //     ulid.innerHTML += "<li>" + a + " </li>"  //this is not performance efficient everytime we copy new li last ke sara fir se add hoga
            //     //let str = ulid.innerHTML += "<li>" + a + " </li>"
            //     //ulid.innerHTML = null
            //     //ulid.innerHTML = str
                
            // }

            //always tru to reduce no of time you call .innerHTML
            //better way
            // let str = ''
            // for(let a = 1;a <= x;a++){
            //     str += '<li>' + a +'</li>'
            // }
            // ulid.innerHTML = str

            //one more way

            for(let a = 1;a <= x;a++ ){
                let item = document.createElement('li')
                item.innerText = a
                ulid.appendChild(item)
            }
        }

    
}