import React from 'react';

class EverydayFinds extends React.Component {
    render(){
        return (
            <div>
                <div className="everyday-finds-section">
                    <h1 className="everyday-finds-header">Find things you'll love. Support independent sellers. Only on Bitsy</h1>
                    <div className="everyday-finds-mid">
                        <h3>Everyday finds</h3>
                    </div>
                    
                    <ul className='everyday-finds-tabs'>
                        <li>Face Masks</li>
                        <li>Self Care</li>
                        <li>Home Decor</li>
                        <li>Gift Ideas</li>
                        <li>DIY crafts</li>
                        <li>Outdoor & Garden</li>
                    </ul>
                </div>
                
                <div className='mid-banner'>
                    <ul className="mid-banner-items">
                        <li>                            
                            <h4>Unique Everything</h4>
                            <p>We have millions of one-of-a-kind items, so you can find whatever you need (or really, really want)</p>
                        </li>
                        <li>
                            <h4>Indpendent Sellers</h4>
                            <p>Buy directly from someone who put their heart and soul into making something special.</p>
                        </li>
                        <li>
                            <h4>Secure Shopping</h4>
                            <p>We use best-in-class technology to protect your transactions.)</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default EverydayFinds;