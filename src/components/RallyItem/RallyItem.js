import React from 'react';
import { withRouter } from 'react-router-dom';
import './RallyItem.css';

const rallyitem = (props) => (
    <section>
        <div className="EventDate">{props.eventDate}</div>
        <div className="ChurchName">{props.locationName}</div>
        <div className="ChurchLocation">{props.locationStreet}<br/>
        {props.locationCity},{props.locationState} {props.locationZipcode}</div>
        <br/>
    </section>
);

export default withRouter(rallyitem);