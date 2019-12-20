import React, { Component } from 'react'
import './ContactData.css'

class ContactData extends Component {
    render() {
        return (
            <div className="parent">
                <div className="fName"><p className="labels">First Name</p></div>
                <div><p className="inputField"><input type="text" /></p></div>
                <div className="lName"><p className="labels">Last Name</p><p><input type="text" /></p></div>
                <div className="phone"><p className="labels">Phone</p><p><input type="text" /></p></div>
                <div className="email"><p className="labels">Email</p><p><input type="text" /></p></div>
                
            </div>
        )
    }
}
export default ContactData;