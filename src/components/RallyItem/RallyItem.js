import React from 'react';
import { withRouter } from 'react-router-dom';
//import Button from '../UI/Button/Button';
import Button from '@material-ui/core/Button';
import './RallyItem.css';

const rallyitem = (props) => {
    return (
    <section>
        <div className='RallyBox'>
        <div className='EventDate'>{props.eventDate}
        <button className="registerButton" onClick={props.clicked}>REGISTER</button></div>
        <div className="ChurchName" onClick={props.clicked}>{props.locationName}
        </div>
        <div className="ChurchLocation">{props.locationStreet}<br/>
        {props.locationCity},{props.locationState} {props.locationZipcode}</div>
        </div>
    </section>
    );
}

export default withRouter(rallyitem);