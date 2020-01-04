import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

// import RallyItem from '../../components/RallyItem/RallyItem';
//import ContactInfo from './ContactData/ContactData';
// import RallyInfo from '../../components/RallyItem/RallyInfo';
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
    .then(res => this.props.setEventDetails(res))
    .catch(err => console.error(err))

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
        <div className="Venue">Event ID: {this.props.eid}</div>
        {/* <RallyInfo value={this.props.eid} /> */}
        {console.log('eid:' + this.props.eid)}
        {console.log('rally:' + this.props.rally.eDate)}
      </div>
    );
  }
}
//==============================
// start redux definitions
//==============================
const mapStateToProps = state => {
  return {
      eid: state.eventId,
      eDate: state.eventDate,
      eStartTime: state.eventStart,
      eEndTime: state.eventEnd,
      eNotes: state.eventNotes,
      vName: state.venueName,
      vStreet: state.venueStreet,
      vCity: state.venueCity,
      vState: state.venueState,
      vZipcode: state.venueZipcode,
      vContact: state.venueContact,
      vEmail: state.venueEmail,
      vPhone: state.venuePhone,
      vMapLink: state.venueMapLink,
      sRepName: state.stateRepName,
      sRepEmail: state.stateRepEmail,
      sRepPhone: state.stateRepPhone
  };
};

const mapDispatchToProps = dispatch => {
  return {
      setEventInfo: (rally) => dispatch({type: 'SET_RALLY', rally: rally}),
      setEventID: (id) => dispatch({
        type: 'SET_EVENT_DETAILS', 
        val: id
      }),
      setEventDetails: (r) => dispatch({
        type: 'SET_EVENT_DATE', 
        eDate: r.eDate,
        eStart: r.eStartTime,
        eEnd: r.eEndTime,
        eNotes: r.eNotes,
        vName: r.churchName,
        vStreet: r.churchStreet,
        vCity: r.churchCity,
        vState: r.churchState,
        vZipcode: r.churchZipcode,
        vContact: r.churchContactName,
        vPhone: r.churchContactPhone,
        vEmail: r.churchContactEmail,
        vMapLink: r.mapLink,
        stateRepName: r.stateRepName,
        stateRepEmail: r.stateRepEmail,
        stateRepPhone: r.stateRepPhone
      }),
  };
};
export default  connect(mapStateToProps, mapDispatchToProps)(Register);

function EventInfo() {
  return (
    <h2>ChurchInfo</h2>

    
  );
}