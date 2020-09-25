let inpid = $('#newtodo')
let btntodo = $('#addtodo')
let ulid = $('#ulid')

btntodo.click(() => {
    console.log('add')
    //! AJAX post request to send data 
    //* parameter :
    //* 1. path
    //* 2. data to send to the server
    //* 3. callback function
    $.post('/todos/', { task: inpid.val() }, (data) => {
        ulid.empty()
        for (let x of data)
            ulid.append(`<li> ${x.task}</li>`)
    })
    inpid.val('')
})