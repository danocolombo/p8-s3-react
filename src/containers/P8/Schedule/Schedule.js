import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Event/Event';
import classes from './Schedule.css';
class Events extends Component {
    state = {
        events: [],
    }
 
    componentDidMount () {
        fetch('https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/events')
            .then( response => response.json())
            .then( data => console.log(data));
    }
    eventSelectedHandler = (id) => {
        this.setState({selectedEventDate: eventDate});
    }

	render () {
		let events = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            events = this.state.events.map(post => {
                return <Event 
                    key={event.eventDate} 
                    church={event.churchName}
                    church={event.churchStreet}
                    churchCity={event.churchCity}
                    churchState={event.churchState}
                    host={post.churchContactName}
                    hostEmail={event.churchContactEmail}
                    hostPhone={event.churchContactPhone}
                    rep={event.repName}
                    repPhone={event.repPhone}
                    repEmail={event.repEmail}
                    clicked={() => this.eventSelectedHandler(event.eventDate)} />;
            });
        }
		return (
			<section className="Events">
			    {events}
			</section>
		);
	}
}
export default Events;