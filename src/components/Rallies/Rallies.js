import React, { Component } from 'react';
import RallyItem from '../RallyItem/RallyItem';
//import axios from '../../axios';
import Rally from '../../containers/Rally/Rally';
import './Rallies.css';
// import { getDefaultWatermarks } from 'istanbul-lib-report';
//import { RSA_NO_PADDING } from 'constants';
class Rallies extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            rallies: [],
        }
    }
 
    componentDidMount () {
        this.getData();
    }

    getData(){
        let data = fetch('https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/events')
            .then((resp)=>{
                resp.json().then((res)=>{
                    // console.log(res.Items[0]);
                    this.setState({data: res.Items})
                })
            })

        // let data = fetch('https://facebook.github.io/react-native/movies.json')
        //     .then((resp)=>{
        //         resp.json().then((res)=>{
        //             console.log(res.movies);
        //             this.setState({data:res.movies})
        //         })
        //     })
    }
    
    rallySelectedHandler = (eventDate) => {
        this.setState({selectedRallyDate: eventDate});
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

		let rallies = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            // rallies = <p style={{textAlign: 'center'}}>We are closer...</p>
            // console.log(this.state.data);
            //data now has the events, need to sort
            this.setState.rallies = this.state.data;
            if (this.state.rallies) this.state.rallies.sort(dynamicSort("eventDate"));
            // console.log(this.state.rallies);
        }
		return (
			<section>
                <h2>Upcoming Rallies</h2>
                {
                    this.state.data ?
                    this.state.data
                    .map((item)=>
                        <RallyItem 
                            key={item.id} 
                            eventDate={item.eventDate} 
                            locationName={item.locationName}
                            locationStreet={item.locationStreet}
                            locationCity={item.locationCity}
                            locationState={item.locationState}
                            locationZipcode={item.locationZipcode}
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