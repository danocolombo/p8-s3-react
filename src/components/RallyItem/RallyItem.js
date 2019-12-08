import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../UI/Button/Button';
import './RallyItem.css';

const rallyitem = (props) => {
    return (
    <section>
        
        <div className="EventDate">{props.eventDate}
            <button onClick={props.clicked}>REGISTER</button>
        </div>
        <div className="ChurchName" onClick={props.clicked}>{props.locationName}</div>
        <div className="ChurchLocation">{props.locationStreet}<br/>
        {props.locationCity},{props.locationState} {props.locationZipcode}</div>
        <br/>
    </section>
    );
}

export default withRouter(rallyitem);