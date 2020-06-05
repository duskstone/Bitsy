import React from 'react';
import { Link } from 'react-router-dom';


class Catergories extends React.Component{ 
    render(){
        return (
            <div>
                <ul className="catergory-tabs">
                    <Link to="./" className="link-tabs">Everyday Finds</Link>
                    <Link to="./" className="link-tabs">Jewlery & Accessories</Link>
                    <Link to="./" className="link-tabs">Clothing & Shoes</Link>
                    <Link to="./" className="link-tabs">Home & Living</Link>
                    <Link to="./" className="link-tabs">Wedding & Party</Link>
                    <Link to="./" className="link-tabs">Toys & Entertainment</Link>
                    <Link to="./" className="link-tabs">Art & Collectibles</Link>
                    <Link to="./" className="link-tabs">Craft SuppLinkes</Link>
                    <Link to="./" className="link-tabs">Gifts</Link>
                </ul>
            </div>
        )
    }
}

export default Catergories;