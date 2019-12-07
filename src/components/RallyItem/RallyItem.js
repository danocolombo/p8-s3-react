import React from 'react';
import { withRouter } from 'react-router-dom';
import './RallyItem.css';

const rallyitem = (props) => (
    
    <section>
        { target = 'test'}
        <div>ID: {props.eventID}</div>
        <div className="EventDate"><a href="{{this.eventID}}">{props.eventDate}</a></div>
        <div className="ChurchName">{props.locationName}</div>
        <div className="ChurchLocation">{props.locationStreet}<br/>
        {props.locationCity},{props.locationState} {props.locationZipcode}</div>
        <br/>
    </section>
);

export default withRouter(rallyitem);