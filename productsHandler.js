const retrieveProduct = async (id) => {
    try {
        const product = await fetch(`http://localhost:8080/product/${id}`);
        return Promise.resolve(product.json());
    } catch (e) {
        return Promise.reject(e);
    }
}

retrieveProduct(1)
    .then( product => {

        document.querySelector('#products').innerHTML += `
            <div class="product">
                <img src="/img/${product.path}" alt="jkj"/>
                <h2 class="product__name"> ${product.name} </h2>
                <h2 class="product__category"> ${product.categoryId} </h2>
            </div>
        `

    } )
    .catch( err => {
        console.log('An error occurred.');
        console.log(JSON.stringify(err));
    })

