import React from 'react';

class Products extends React.Component {
    constructor(props){
        super(props)
        
        // this.productsList = this.productsList.bind(this);

    }

    componentDidMount(){
        this.props.getAllProducts();
    }
    
    // productsList(){
    //     // debugger
        
    // }
    
    render() {
    // debugger
        const productList = this.props.products.map((product) => {
            // debugger
            return (
                    <li className="splash-boxes" key={product.id}>
                        <img className="splash-product-images" src={product.imageUrl}/>
                        <h2 className="price-tag">${product.price}</h2>
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

export default Products;