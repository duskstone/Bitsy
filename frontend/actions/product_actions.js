import * as ProductAPIUtil from '../util/product_api_util'


export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS"

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

const receiveErrors = (errors) => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
})

export const getProduct = productId => dispatch => {
    return ProductAPIUtil.getProduct(productId)
        .then(product => (dispatch(receiveProduct(product))),
            err => ( dispatch(receiveErrors(err.responseJSON))
        ))
}

export const getAllProducts = () => dispatch => {
    return ProductAPIUtil.getAllProducts()
        .then( products => dispatch(receiveProducts(products)))
}


