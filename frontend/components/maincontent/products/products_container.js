import { connect } from 'react-redux';
import React from 'react';
import { getAllProducts, getProduct } from '../../../actions/product_actions';
import Products from './products';

const mSTP = ({ entities }) => {
    return {
        products: Object.values(entities.products)
    };
};


const mDTP = dispatch => {
    return{
        getAllProducts: () => dispatch(getAllProducts()),
        getProduct: productId => dispatch(getProduct(productId))
    }
}

export default connect(mSTP, mDTP)(Products);