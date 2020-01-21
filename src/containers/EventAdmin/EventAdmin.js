import React, { Component } from "react";
import { connect } from "react-redux";
import "./EventAdmin.css";
class Register extends Component {
    render() {
        return (
            <div>
                <h2>Welcome Admins...</h2>
                <p>This is your main page to manage events.</p>
                <hr />
                {this.props.authenticated ? <div>YES</div> : <div>No</div>}
            </div>
        );
    }
}

// =====================================
// REDUX
//======================================
const mapStateToProps = state => {
    return {
        apiURL: state.apiURL,
        authenticated: state.authenticated,
        userID: state.userID,
        userFName: state.userFirstName,
        userLName: state.userLastName,
        authProvider: state.authProvider
    };
};
const mapDispatchToProps = dispatch => {
    return {
        setAuthTrue: id =>
            dispatch({
                type: "SET_AUTH_FLAG_TRUE"
            }),
        setAuthFalse: id =>
            dispatch({
                type: "SET_AUTH_FLAG_FALSE"
            })
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
