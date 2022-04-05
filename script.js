const retrieveProduct = async (id) => {

    try {
        const product = await fetch(`http://localhost:8080/product/${id}`);
        return Promise.resolve(product.json());
    } catch (e) {
        alert(JSON.stringify(e));
        return Promise.reject(e);
    }

}

retrieveProduct(1)
    .then( product => {
        alert(JSON.stringify(product));
    } )
    .catch( err => {
        alert(JSON.stringify(err));
    });
