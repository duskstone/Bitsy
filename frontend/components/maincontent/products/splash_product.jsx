import React from 'react';
import { checkMark2 } from "../../../../app/assets/images/icons"
import { handmadeIcon } from "../../../../app/assets/images/icons"
import { starIcon } from "../../../../app/assets/images/icons"

class SplashProduct extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getAllProducts();
        this.props.getProduct();
    }

    render(){
        const product = this.props.product
        if (!product) {
            
            return null
        }
        
        return (
            <div className="big-show-page-container">
                <div className="show-page-container-limit">
                    <div className="show-page-container">
                        <div>
                            <img className="splash-show-container" src={product.imageUrl}/>
                        </div>
                        <div className="show-page-details">
                            <li className="store-name">8-bit Store</li>
                            <div className="sales-star-combo">
                               <li>24 sales </li> 
                               <li className="star-row">
                                {starIcon}
                                {starIcon}
                                {starIcon}
                                {starIcon}
                                {starIcon} 
                               </li>
                            </div>
                            
                            <li className="show-product-title">{product.name}</li>
                            
                            <div className="price-checkmark-box"> 
                                <li className="show-product-price">${product.price}</li>
                                <div className="check-mark-stock-pair">
                                    { checkMark2 }
                                    <h5 className="in-stock-sent">In stock</h5> 
                                </div>
                            </div>
                            <div>
                                <button className="add-to-cart-button">Add to Cart</button>
                                    <div className="handmade-pair">
                                        {handmadeIcon}
                                        <h4 className="handmade-sent">Handmade</h4>
                                    </div>
                                    <div className="material-combo">
                                        <h4 className="material-title">Material</h4>
                                        <h4 className="material-type">vinyl</h4>
                                    </div>
                                    <div className="dimension-combo">
                                       <h4 className="dimensions-title">Dimensions</h4> 
                                       <h4 className="dimensions-measures">smol :3 x smoller :3</h4>
                                    </div>
                                    
                            </div>
                            <h1 className="description-title">Description</h1>
                            <li className="text-description">{product.description}</li>
                        </div>    
                    </div>
                </div>
        </div>   
        )
    }
}

export default SplashProduct;