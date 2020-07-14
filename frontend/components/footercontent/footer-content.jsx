import React from 'react';
import { linkedinIcon, githubIcon, angelList, mySite } from "../../../app/assets/images/icons"

class FooterContent extends React.Component {
    render(){
        return (
            <div className="footer-content">
                <ul className="footer-icons">
                    <a href="https://www.linkedin.com/in/jonathan-romero-ab325a165/" className="icons linkedin-icon">{linkedinIcon}</a>
                    <a href="https://github.com/duskstone" className="icons">{githubIcon}</a>
                    <a href="https://angel.co/u/jonathan-romero-3" className="icons">{angelList}</a>
                    <a href="https://duskstone.github.io/" className="icons">{mySite}</a>   
                </ul>
               
            </div>
            
        )
    }
}

export default FooterContent;