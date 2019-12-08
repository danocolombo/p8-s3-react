import React, { Component } from 'react';
// import axios from 'axios';

import './Register.css';

class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    }
    componentDidMount () {
        //console.log(this.props);

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
                <label>First Name</label>
                <input type="text" value={this.state.firstName} onChange={(event) => this.setState({firstName: event.target.value})} />
                <label>Last Name</label>
                <input type="text" value={this.state.lastName} onChange={(event) => this.setState({lastName: event.target.value})} />
                <label>Phone</label>
                <input type="text" value={this.state.phone} onChange={(event) => this.setState({phone: event.target.value})} />
                <label>Email</label>
                <input type="text" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} />
                
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