import React from 'react';
import { Link } from 'react-router-dom';


class Catergories extends React.Component{ 
    render(){
        return (
            <div>
                <ul className="catergory-tabs">
                    <Link className="link-tabs">Everyday Finds</Link>
                    <Link className="link-tabs">Jewlery & Accessories</Link>
                    <Link className="link-tabs">Clothing & Shoes</Link>
                    <Link className="link-tabs">Home & Living</Link>
                    <Link className="link-tabs">Wedding & Party</Link>
                    <Link className="link-tabs">Toys & Entertainment</Link>
                    <Link className="link-tabs">Art & Collectibles</Link>
                    <Link className="link-tabs">Craft SuppLinkes</Link>
                    <Link className="link-tabs">Gifts</Link>
                </ul>
            </div>
        )
    }
}

export default Catergories;