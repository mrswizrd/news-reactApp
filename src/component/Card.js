import React from 'react';
import { tsPropertySignature } from '@babel/types';


function Card(props) {
    return (
        <div className="Card">
                <div className="card_img">
                     <img src={props.pic} alt="1"/>
                </div>
           <div className="card_text">
                <h4>{props.text}</h4>
                <span><p>{props.topic}</p></span>
           </div>
        
        </div>

    );
}

export default Card