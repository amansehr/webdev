$(function () {
    let btnid = $('#btnid')
    let name = $('#prodname')
    let manufacturer = $('#prodmanufacturer')
    let price = $('#prodprize')
    btnid.click(() => {
        console.log(price.val())
        addproducts(name.val(), manufacturer.val(), price.val())
        alert(`Added ${name.val()} to database`)
    })
})