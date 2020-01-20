import React, { Component } from "react";
import { connect } from "react-redux";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

class Toolbar extends Component {
    render() {
        return (
            <header className='toolbar'>
                <nav className='toolbar_navigation'>
                    <div>
                        <DrawerToggleButton
                            click={this.props.drawerClickHandler}
                        />
                    </div>
                    <div className='toolbar_logo'>
                        {" "}
                        <a href='/'>
                            <img
                                src='../../../../public/P8-logo.png'
                                alt='P8 Rally'
                            />
                        </a>{" "}
                        <div>{this.props.userFirstName}</div>
                    </div>
                    <div className='spacer' />
                    <div className='toolbar_navigation-items'>
                        <ul>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/rallies'>Events</a>
                            </li>
                            <li>
                                <a href='/admin'>
                                    {this.props.authenticated ? (
                                        <a href='/Admin'>Admin</a>
                                    ) : null}
                                </a>
                            </li>
                            {this.props.authenticated ? (
                                <a href='/logout'>Logout</a>
                            ) : (
                                <a href='/login'>Login</a>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

// =====================================
// REDUX
//======================================
const mapStateToProps = (state, ownProps) => {
    return {
        apiURL: state.apiURL,
        authenticated: state.authenticated,
        userID: state.userID,
        userFName: state.userFirstName,
        userLName: state.userLastName,
        authProvider: state.authProvider,
        drawerClickHandler: ownProps.drawerClickHandler
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
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
