import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import EventTimes from '../UI/EventTimes/EventTimes';
import EventDate from '../UI/EventDate/EventDate';
import classes from './Rally.css';
class Register extends Component {
  componentDidMount(){
    this.getVenueInfo();

  }
  getVenueInfo(){
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let theID = params.get('id');
    this.props.setEventID(params.get('id'));
    // this gets all the rally information
    axios({
      method: 'get',
      url: 'https://evgvlc22t1.execute-api.us-east-1.amazonaws.com/UAT/event/retrieve',
      params: {
        eventId: theID
      }
    })
    .then(res => this.props.setEventDetails(res.data[0]))
    .catch(err => console.error(err));
    //.then(res => console.log(res.data[0]))
    //.then(res => this.props.setEventDetails(res))
  }
  // saveVenueToRedux = (res) => {
  //   this.props.setEventDetails(
  //     res.data[0].eDate);

  // }
  
  render() {
    return (
      <div>
        <h1>P8 Rally Information</h1>
        <h2>Venue Information</h2>
        <div className="Venue">
          <EventDate eventDate={this.props.eDate} />
          
          <div>{this.props.vName}</div>
          <div>{this.props.vCity}, {this.props.vState} {this.props.vZipcode}</div>
          <EventTimes startTime={this.props.eStart} endTime={this.props.eEnd}/>
          <div>{this.props.eDate}</div>
        </div>
        {console.log('eid:' + this.props.eid)}
        {console.log('eDate:' + this.props.eDate)}
        {console.log('starttime:' + this.props.eStart)}
        {/* {console.log('rally:' + this.props.rally.eDate)} */}
      </div>
    );
  }
}
//==============================
// start redux definitions     <div className='Venue'>Event ID: {this.props.eid}</div>
//==============================
const mapStateToProps = state => {
  return {
      eid: state.eventId,
      eDate: state.eventDate,
      eStart: state.eventStartTime,
      eEnd: state.eventEndTime,
      eNotes: state.eventNotes,
      vName: state. venueName,
      vStreet: state.venueStreet,
      vCity: state.venueCity,
      vState: state.venueState,
      vZipcode: state.venueZipcode,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      setEventInfo: (rally) => dispatch({type: 'SET_RALLY', rally: rally}),
      setEventID: (id) => dispatch({
        type: 'SET_EVENT_ID', 
        val: id
      }),
      setEventDetails: (r) => dispatch({
        type: 'SET_EVENT_DETAILS',
        eDate: r.eDate,
        eStart: r.eStartTime,
        eEnd: r.eEndTime,
        eNotes: r.eNotes,
        vName: r.churchName,
        vStreet: r.churchStreet,
        vCity: r.churchCity,
        vState: r.churchState,
        vZipcode: r.churchZipcode,
      })
  };
};
export default  connect(mapStateToProps, mapDispatchToProps)(Register);

function EventInfo() {
  return (
    <h2>ChurchInfo</h2>

    
  );
}