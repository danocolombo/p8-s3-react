import React, { Component } from 'react';
// import axios from 'axios';
import ContactData from './ContactData/ContactData';
import CRDetails from './CRDetails/CRDetails';
import './Register.css';

class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        hasErrors: false,
        rally: {}
    }
    componentDidMount() {
    //https://swapi.co/api/planets/4/
    // https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/events
    fetch("https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/events")
        .then(res => res.json())
        .then(res => this.setState({ rally: res }))
        .catch(() => this.setState({ hasErrors: true }));
    }
    getEventData(){
        
    }
    registerDataHandler = () => {
        // const data = {
        //     title: this.state.title,
        //     body: this.state.content,
        //     author: this.state.author
        // };
        // axios.post('/posts', data)
        //     .then(response => {
        //         console.log(response);
        //     });
    }

    render () {
        return (
            <div className="Register">
                
                <h1>We are registering!!</h1>
                <ContactData/>
                
                
                
                {/* <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select> */}
                <button onClick={this.registerDataHandler}>Register</button>
            </div>
        );
    }
}

export default Register;