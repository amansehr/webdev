let inptask = $('#inptask')
let btnadd = $('#btnadd')
let btnreset = $('#btnreset')
let btnclear = $('#btncleanup')
let btnsort = $('#btnsort')
let ulid = $('#ullist')

function addtask() {
    let li = $('<li>', {
        'class': 'list-group-item',
        text: inptask.val()
    })

    li.click(() => {
        li.toggleClass('disable')
        tooglebuttons()
    })
    ulid.append(li)
    inptask.val('')
    tooglebuttons()
}

function tooglebuttons() {
    btnadd.prop('disabled', inptask.val() == '')
    btnreset.prop('disabled', inptask.val() == '')
    let b = $('#ullist .disable').length
    let a = - b
    btnclear.prop('disabled', b <= 0)
    b <= 0 || a <= 0 ? btnsort.prop('disabled', true) : btnsort.prop('disabled', false)

}
btnadd.click(addtask)

inptask.keypress((event) => {
    if (event.which == 13 && inptask.val() !== '') addtask()
})

btnreset.click(() => {
    inptask.val('')
})

btnsort.click(() => {
    $('#ullist .disable').appendTo(ulid)
})

btnclear.click(() => {
    $('#ullist .disable').remove()
    tooglebuttons()
})

inptask.on('input', () => {
    tooglebuttons()
})

