import React from 'react';
import EverydayFinds from './everyday-finds';
import ProductsContainer from './products/products_container';
import BitsyStory from './bitsy-story';


class MainContent extends React.Component {
    render(){
       return ( <div className="main-content">
            <EverydayFinds />
            <ProductsContainer />
            <BitsyStory />
        </div> )
    }
}

export default MainContent;