
import './TitleCard.css';


function TitleCard(props){
    
    return (    
        <div class="title_003" style={{backgroundImage: `url(${props.image})`}}>
            <div class="blur">
                <div class="logo left">
                    <div class="title">{props.title}</div>
                </div>
            </div>
        </div>
    );

}

export default TitleCard;
