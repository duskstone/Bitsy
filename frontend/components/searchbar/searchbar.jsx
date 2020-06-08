import React from 'react';
import { searchIcon } from "../../../app/assets/images//icons"

class SearchBar extends React.Component {
    render(){
        return (
            <div className="mid-nav-items">
                <div className="search-bar-div">
                <input type="text" placeholder="Search for items of shops"
                className="search-bar" results="0"/>
                </div>
                <button className="mag-button">
                    <span className="mag-span">
                        <div className="search-bar-mag-icon">
                        { searchIcon }
                        </div>
                    </span>
                </button>
                
            </div>                        
        )
    }
}

export default SearchBar 