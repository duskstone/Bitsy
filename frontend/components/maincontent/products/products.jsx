import React from 'react';

class Products extends React.Component{
    constructor(props){
        super(props)
    }
    
    render() {
    debugger
       return ( 
        <div className="products-index-section">
            <div className="products-index-header">
                <h1>Popular right now</h1>
            </div>
            {/* {this.props.products.forEach( product => (
                <li className="splash-products">
                    {product}
                </li>
            ))} */}
        </div>
       )}
}

export default Products;