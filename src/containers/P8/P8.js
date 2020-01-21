import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "../../components/Auth/Auth";
// import axios from '../../axios';
import Register from "../../containers/Register/SignupPage";
import { Route, Link } from "react-router-dom";
// import Layout from '../../hoc/Layout/Layout';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

import Home from "../../components/Home/Home";
import Rallies from "../../components/Rallies/Rallies";
import Rally from "../../components/Rally/Rally";
import Admin from "../../containers/EventAdmin/EventAdmin";
import Callback from "../../components/Auth/Callback";
import LoginError from "../../components/Auth/loginError";
// import MenuBar from '../../components/Navigation/Toolbar/MenuBar';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import "./P8.css";
//==========================================================
// this is used for the P8 Rally Centrol base functionality
//==========================================================
// CREATE AUTH0 component and save to REDUX
//const auth = new Auth();
//this.mapDispatchToProps(auth);
class P8 extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };
    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };
    render() {
        const auth = new Auth();
        this.props.setAuth(auth);
        let sideDrawer;
        let backdrop;
        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer />;
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

        return (
            <div style={{ height: "100%" }}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                {sideDrawer}
                {/* {backdrop} */}
                <Route path='/' exact component={Home} />
                <Route path='/rallies' component={Rallies} />
                <Route path='/register' component={Register} />
                <Route path='/rally' component={Rally} />
                {/* need to only show Admin page if authenticated. */}
                <Route path='/admin' component={Admin} />
                <Route path='/callback' component={Callback} />
                <Route path='/invalidlogin' component={LoginError} />
                <div className='RogueFooter'>RogueIntel &copy; 2020</div>
            </div>
        );
    }
}
//==============================
// start redux definitions
//==============================

const mapDispatchToProps = dispatch => {
    return {
        setAuth: authDefinition =>
            dispatch({
                type: "SET_AUTH_DEFINITION",
                authDef: authDefinition
            })
    };
};

export default connect(null, mapDispatchToProps)(P8);
