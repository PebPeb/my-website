import React from "react";
import './TitleCard.css';


function TitleCard(props){
    
    return (    
        <div className="title_003" style={{backgroundImage: `url(${props.image})`, backgroundPosition: '0px 55%'}}>
            <div className="blur">
                <div className="logo left">
                    <div className="title">{props.title}</div>
                </div>
            </div>
        </div>
    );

}

export default TitleCard;
