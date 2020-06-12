import React from 'react';

class BitsyStory extends React.Component{
    render(){
        return (
            <div className="story-section">
                <div className="story-body">
                    <div className="story-header-pair">
                         <h1 className="story-title">What is Bitsy?</h1>
                        {/* <a className="story-link">Read our wondeful weird story</a> */}
                    </div>
                    <div>
                        <ul className="three-quirps">
                            <li>
                                <h4 className="quirp-titles">A one-of-a-kind-Community</h4>
                                <p className="quirp-body">Bitsy is a global online marketplace, where people come together to make, sell, buy, and collect pixels.</p>
                            </li>
                            <li>
                                <h4 className="quirp-titles">Support indenpendent creators</h4>
                                <p className="quirp-body">There’s no Bitsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
                            </li>
                            <li>
                                <h4 className="quirp-titles">Peace of mind</h4>
                                <p className="quirp-body">Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step out for lunch.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        )
    };
};

export default BitsyStory;