import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './RallyItem.css';
const rallyitem = (props) => {
    let target = 'id=' + props.eventID;
    return (
    <section>
        <div className='RallyBox'>
            <div className='EventDate'>{props.eventDate.substr(0,10)}
            <Link 
                to={{
                    pathname: "/register",
                    search: target
                }}><button className="registerButton">REGISTER</button></Link>
            </div>
            <div className="ChurchName" onClick={props.clicked}>{props.locationName} 
            </div>
            <div className="ChurchLocation">{props.locationStreet}<br/>
            {props.locationCity},{props.locationState} {props.locationZipcode}</div>

        </div>
    </section>
    );
}

export default withRouter(rallyitem);