import React from "react";
import './TitleCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function TitleCard(props){
    
    return (    
        <div className="title_003" style={{backgroundImage: `url(${props.image})`, backgroundPosition: '0px 55%'}}>
            <div className="blur">
                <div className="logo left">
                <div className="title" dangerouslySetInnerHTML={{ __html: props.title }}></div>

                </div>

                <div className="logo-link-bar">
                    <a className="logo-link" href="https://github.com/PebPeb" style={{textDecoration: 'none'}}>
                        <FontAwesomeIcon className="icon"icon={faGithub} />
                    </a>
                </div>
            </div>
        </div>
    );

}

export default TitleCard;
