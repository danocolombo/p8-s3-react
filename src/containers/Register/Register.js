import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import RallyItem from '../../components/RallyItem/RallyItem';

class Register extends Component {
  constructor() {
    super();
    this.state = {
        data: null,
        rallyevent: [],
        venueId: 0
    }
}


  componentDidMount(){
    this.getVenueInfo2();

  }
  getVenueInfo3 = () => {





  }
  getVenueInfo2 = () => {
    //this will fetch by post with the eventID
    let search = window.location.search;
    let params = new URLSearchParams(search);
    this.venueId = params.get('id');

    fetch("https://evgvlc22t1.execute-api.us-east-1.amazonaws.com/UAT/event",
      {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json',
          'Accept': 'application/json'},
        body: JSON.stringify({
              id: 2
           }) 
      })
      .then(res => res.json())
      .catch(() => this.setState({ hasErrors: true }));
    
      console.log('made it past fetch');
      console.log(this.state.hasErrors);
    
    

  }

  getVenueInfo = () => {
    //this is to load the venue info from the id passed into the page
    let search = window.location.search;
    let params = new URLSearchParams(search);
    this.venueId = params.get('id');
    console.log("id:" + params.get('id'));

    let rallyevent = "<p>something went wrong</p>";
    fetch("https://evgvlc22t1.execute-api.us-east-1.amazonaws.com/UAT/events/shortlist")
          .then((resp)=>{
              resp.json().then((res)=>{
                  this.setState({ rallyevent: this.state.rallyevent.push("A")})                    
                  this.setState({data: res.Items})
              })
          });
    
  }
  render() {
    return (
      <div>
        <h3>Register... oh boy</h3>
        <ChurchInfo/>
        {
                    this.state.data ?
                    this.state.data
                    .map((item)=>
                        <RallyItem 
                            key={item.id} 
                            eventID={item.eventId}
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
      </div>
    )
  }
}
export default Register;

function ChurchInfo() {
  return (
    <h2>ChurchInfo</h2>
  );
}