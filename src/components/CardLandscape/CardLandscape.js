
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
                        <a href="#" class="button">Check It Out</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardLandscape;

