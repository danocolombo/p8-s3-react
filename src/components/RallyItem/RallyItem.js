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
        <Button variant="contained" color="secondary" onClick={props.clicked} className={classes.RegisterButton}>REGISTER</Button></div>
        <div className="ChurchLocation">{props.locationStreet}<br/>
        {props.locationCity},{props.locationState} {props.locationZipcode}</div>
        <br/>
    </section>
    );
}

export default withRouter(rallyitem);