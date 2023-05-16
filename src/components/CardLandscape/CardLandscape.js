
import React from "react";
import { Link } from "react-router-dom";

import './CardLandscape.css';

/* 
    props:
        title - The title of the card
        text - Is the main text that gives a short discription of the card
        direction - Is if the Image is on the "left" or the "right" 
        image - 
        directTo - 
        mode - 
        link - 
*/
function CardLandscape(props) {
    

    if (props.static_link) {
        return (
            <div className={"card-landscape " + props.direction}>
                <a href="#" id="a-container">
                    <a href={props.navTo} style={{textDecoration: 'none'}}>
                        <img className="card-image" src={props.image}></img>
                    </a>
                </a>
                <div className={"card-content-wrapper " + props.mode}>
                    <div className={"card-content " + props.mode}>
                        <h1>{props.title}</h1>
                        <p><span className="tab"></span>
                            {props.text}
                        </p>
                        <a href={props.navTo} style={{textDecoration: 'none'}}>
                            <a href={props.navTo} className="button">Check It Out</a>
                        </a>
                    </div>
                </div>
            </div>
        );

    }
    else {
        return (
            <div className={"card-landscape " + props.direction}>
                <a href="#" style={{width: '40%'}}>
                    <Link to={props.navTo} style={{textDecoration: 'none'}}>
                        <img className="card-image" src={props.image}></img>
                    </Link>
                </a>
                <div className={"card-content-wrapper " + props.mode}>
                    <div className={"card-content " + props.mode}>
                        <h1>{props.title}</h1>
                        <p><span className="tab"></span>
                            {props.text}
                        </p>
                        <Link to={props.navTo} style={{textDecoration: 'none'}}>
                            <a href="#" className="button">Check It Out</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }


    
}

export default CardLandscape;

