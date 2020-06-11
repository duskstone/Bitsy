import { connect } from 'react-redux';
import  SplashProduct from './splash_product';
import { getProduct, getAllProducts } from '../../../actions/product_actions';

const mSTP = ({ entities}, ownProps) =>{
    return{
        product: entities.products[ownProps.match.params.productId]
    }
}

const mDTP = dispatch => {
    return {
        getAllProducts: () => dispatch(getAllProducts()),
        getProduct: productId => dispatch(getProduct(productId))
    }
}

export default connect(mSTP, mDTP)(SplashProduct);