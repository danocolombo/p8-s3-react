import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../UI/Button/Button';
import './RallyItem.css';

const rallyitem = (props) => {
    let target = '/rally?id=' + props.eventID;
    let target2 = '/maybe';
    return (
    <section>
        
        <div className="EventDate">{props.eventDate}
            <Button 
                btnType='Success'
                clicked={target2}
                children='REGISTER'
                />
        </div>
        <div className="ChurchName">{props.locationName}</div>
        <div className="ChurchLocation">{props.locationStreet}<br/>
        {props.locationCity},{props.locationState} {props.locationZipcode}</div>
        <br/>
    </section>
    );
}

export default withRouter(rallyitem);