import React, { Component } from 'react'
import './ContactData.css'

class ContactData extends Component {
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
        };
        this.onFieldChange = this.onFieldChange.bind(this);
    }
    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <form>
                <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.onFieldChange} />
                <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.onFieldChange} />
            </form>
        )
    }
}
export default ContactData;