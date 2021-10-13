import React from "react";
import '../app.css';

const MissionDetails = (props) => {
    
    return (
        <li className='data_details'>
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <h4>Mission Id: <span>{props.id}</span></h4>
            <h4>Lunch Year: <span>{props.year}</span></h4>
            <h4>Successful<br/> Lunch: <span>{props.lunch}</span></h4>
            <h4>Successful<br/> Land: <span>{`${props.land}`}</span></h4>
        </li>
    );
};

export default MissionDetails;