import React, { Component } from 'react'

class ContactData extends Component {
    render() {
        return (
            <div>
                <label>First Name</label><input type="text" />
                <label>Last Name</label>
                <input type="text"  />
                <label>Phone</label>
                <input type="text"  />
                <label>Email</label>
                <input type="text"  />
                
            </div>
        )
    }
}
export default ContactData;