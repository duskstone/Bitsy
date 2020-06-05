import React from 'react';

class BitsyStory extends React.Component{
    render(){
        return (
            <div className="story-section">
                <div className="story-header">
                    <h1>What is Bitsy?</h1>
                </div>
                <div className="story-link">
                    <a>Read our wondeful weird story</a>
                </div>
                <div>
                    <ul className="three-quirps">
                        <li>
                            <h4>A one-of-a-kind-Community</h4>
                            <p>Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.</p>
                        </li>
                        <li>
                            <h4>Support indenpendent creators</h4>
                            <p>There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
                        </li>
                        <li>
                            <h4>Peace of mind</h4>
                            <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
                        </li>
                    </ul>
                </div>
                <section className="help-center">
                    <div>
                        <h3>Have a question? Well, we've got some answers.</h3>
                    </div>
                    <div className="help-center-button">
                        <h4>Got to Help Center</h4>
                    </div>
                </section>
            </div>
            
        )
    };
};

export default BitsyStory;