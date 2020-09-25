let nameid = $('#nameid')
let ageid = $('#ageid')
let cityid = $('#cityid')
let btnid = $('#btnid')
let tableid = $('#tableid')

btnid.click(() => {
    console.log('hii')
    $.post('/api', { name: nameid.val(), age: ageid.val(), city: cityid.val() }, (data) => {
        tableid.empty()
        tableid.append(
            `<tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            </tr>`)
        console.log(data)
        for (let d of data) {
            tableid.append(
                `<tr>
                <td>${d.id}</td>
                <td>${d.name}</td>
                <td>${d.age}</td>
                <td>${d.city}</td>
                </tr>`
            )
        }

        nameid.val('')
        ageid.val('')
        cityid.val('')

    })
})
