window.onload = function (){
    let inputid = document.getElementById('inputid')
    let buttonid = document.getElementById('submitid')
    let olid = document.getElementById('olid')
    
    buttonid.onclick = function (){
        let items = document.createElement('li')
        items.innerText = inputid.value
        
        inputid.value = ''
        //using innerhtml
        // olid.innerHTML = `<li>${inputid.value}</li>`

        //upbtn
        let upbtn = document.createElement('button')
        upbtn.innerText = 'up'
        upbtn.onclick = function (event){
            event.target.parentElement.parentElement.insertBefore(event.target.parentElement,event.target.parentElement.previousElementSibling)
        }

        //downbtn
        let downbtn = document.createElement('button')
        downbtn.innerText = 'Down'
        downbtn.onclick = function (event){
            event.target.parentElement.parentElement.insertBefore(event.target.parentElement.nextElementSibling,event.target.parentElement) //insert after doesnt exists
        }


        //created a button to delete 
        let btn = document.createElement('button')
        btn.innerText = "Delete Task"
        btn.onclick  = function (event){
            event.target.parentElement.remove()
        }
        items.appendChild(btn)
        items.appendChild(upbtn)
        items.appendChild(downbtn)
        olid.appendChild(items)

    }
}