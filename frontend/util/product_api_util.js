export const getAllProducts = () => {
    return $.ajax({
        method: 'GET',
        url: "api/products"
    })
};

export const getProduct = (productId) => {
    return $.ajax({
        method: 'GET',
        url: `api/products/${productId}`
    })
};
