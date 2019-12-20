import React from 'react';
import { withRouter } from 'react-router-dom';
//import Button from '../UI/Button/Button';
import Button from '@material-ui/core/Button';
import classes from './RallyItem.css';

const rallyitem = (props) => {
    return (
    <section>
        
        <div className={classes.RallyItem}>{props.eventDate}
        </div>
        <div className="ChurchName" onClick={props.clicked}>{props.locationName}
        <button className="registerButton" onClick={props.clicked}>REGISTER</button></div>
        <div className="ChurchLocation">{props.locationStreet}<br/>
        {props.locationCity},{props.locationState} {props.locationZipcode}</div>
        <br/>
    </section>
    );
}

export default withRouter(rallyitem);