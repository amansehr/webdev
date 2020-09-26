let productlist = $('#productlist')
function fetchProducts(done) {
    $.get('/api/products', (data) => {
        done(data)
    })
}

function createproductcard(product) {
    return $(`
        <div class="col-4 card m-4 p-4">
            <h4 class="product-name">${product.name}</h4>
            <small>
                <div class="product-manufacturer">${product.manufacturer}</div>
            </small>
            <div class="row">
                <div class="col m-3 p-3">
                    <b>${product.price}</b>
                </div>
                <button class="col btn btn-danger m-3">Buy</button>

            </div>
        </div>

`)
}

function done(products) {
    productlist.empty()
    for (let prod of products) {
        productlist.append(createproductcard(prod))
    }
}
function addproducts(name, manufacturer, price) {
    $.post('/api/products', {
        name: name,
        manufacturer: manufacturer,
        price: price
    }, () => {
        done(data)
    })
}