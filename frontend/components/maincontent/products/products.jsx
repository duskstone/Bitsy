import React from 'react';
import SplashProductContainer from './splash_product_container';
import { withRouter, Link } from 'react-router-dom';

class Products extends React.Component {
    constructor(props){
        super(props)
        
        // this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.props.getAllProducts();
    }

    // handleClick(){
    //     this.props.history.push("/products/:productId")
    // }
   
    render() {
        // onClick={() => this.props.history.push(`/products/${product.id}`)}
        const productList = this.props.products.map((product) => {
            return (
                    <li className="splash-boxes" key={product.id} >
                        <Link to={`/products/${product.id}`}>
                        <img className="splash-product-images" src={product.imageUrl}/>
                        <h2 className="price-tag">${product.price}</h2>
                        </Link>
                        
                    </li>
               
            )
        })
       return ( 
        <div className="products-index-section">
            <div className="products-index-header">
                <h1>Popular right now</h1>
            </div>
            <ul className="splash-image-container">
                {productList}
            </ul>
        </div>
       )}
}

export default withRouter(Products);