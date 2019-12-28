import React, { Component } from 'react';
import RallyItem from '../RallyItem/RallyItem';
// import axios from '../../axios';
import Rally from '../../containers/Rally/Rally';
import classes from './Rallies.css';
//import './Rallies.css';
// import { getDefaultWatermarks } from 'istanbul-lib-report';
//import { RSA_NO_PADDING } from 'constants';
class Rallies extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            rallyevent: [],
            planets: {}
        }
    }
    
    componentDidMount () {
        this.getData();
    }
    getData2(){
        //https://swapi.co/api/planets/4/
        fetch("https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/events")
            .then(res => res.json())
            .then(res => this.setState({ planets: res }))
            .catch(() => this.setState({ hasErrors: true }));
    }
    getData(){
        let rallyevent = "<p>something went wrong</p>";
        let data = fetch('https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/events')
            .then((resp)=>{
                resp.json().then((res)=>{
                    this.setState({ rallyevent: this.state.rallyevent.push("A")})                    
                    this.setState({data: res.Items})
                })
            })
    }
    
    rallySelectedHandler = (eventID) => {
        // this.setState({selectedRallyDate: eventID});
        console.log("the clicked event was:");
        // console.log(query.get("id"))
        console.log(eventID);
        window.location.assign('/register?ID='+eventID);
        // window.location.assign('/search/'+this.state.query+'/some-action');
    }

	render () {

        function dynamicSort(property) {
            var sortOrder = 1;
            if(property[0] === "-") {
                sortOrder = -1;
                property = property.substr(1);
            }
            return function (a,b) {
                if(sortOrder === -1){
                    return b[property].localeCompare(a[property]);
                }else{
                    return a[property].localeCompare(b[property]);
                }        
            }
        }

        if (!this.state.error) {
            // rallies = <p style={{textAlign: 'center'}}>We are closer...</p>
            // console.log("----data-----");
            // console.log(this.state.data);
            // this.state.data.sort(dynamicSort("eventDate"));
            //data now has the events, need to sort
            // console.log("show data[2]");
            // console.log(this.state.data[2]);
            //this.setState.rallyevent = this.state.data.slice();
            // console.log("----rallyevent----");
            // console.log(this.state.rallyevent[1]);
        
            if (this.state.data) this.state.data.sort(dynamicSort("eventDate"));
            // console.log(this.state.data);
        }
		return (
			<section>
                <h2 className={classes.h2}>Upcoming Rallies</h2>
                <p className={classes.intro}>Please review the upcoming events and click the register button to RSVP</p>
                {
                    this.state.data ?
                    this.state.data
                    .map((item)=>
                        <RallyItem 
                            key={item.id} 
                            eventID={item.eventId}
                            jones={item.id}
                            eventDate={item.eventDate} 
                            locationName={item.churchName}
                            locationStreet={item.churchStreet}
                            locationCity={item.churchCity}
                            locationState={item.churchState}
                            locationZipcode={item.churchZipcode}
                            clicked={() => this.rallySelectedHandler(item.id)}
                        />
                    )
                    :
                    <h3>Getting data from cloud, just a moment.</h3>
                }

			</section>
		);
	}
}
export default Rallies;
// <section>
// <div className="EventDate" key={item.eventDate}>{item.eventDate}</div>
// <div className="ChurchName">{item.locationName}</div>
// <div className="ChurchLocation">{item.locationStreet}<br/>
// {item.locationCity},{item.locationState} {item.locationZipcode}</div>
// <br/>
// </section>