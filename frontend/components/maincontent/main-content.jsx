import React from 'react';
import EverydayFinds from './everyday-finds';
import Products from './products/products';
import BitsyStory from './bitsy-story';

class MainContent extends React.Component {
    render(){
       return ( <div className="main-content">
            <EverydayFinds />
            <Products />
            {/* <BitsyStory /> */}
        </div> )
    }
}

export default MainContent;