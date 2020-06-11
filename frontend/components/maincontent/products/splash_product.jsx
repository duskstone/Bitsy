import React from 'react';

class SplashProduct extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        debugger
        this.props.getAllProducts();
        this.props.getProduct();
    }

    render(){
        const product = this.props.product
        if (!product) {
            debugger
            return null
        }
        debugger
        return (
            <div className="splash-show-container">
                {product.name}
                {product.description}
                <img src={product.imageUrl}/>
                {product.price}
            </div>
        )
    }
}

export default SplashProduct;