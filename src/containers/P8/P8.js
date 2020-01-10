import React, { Component } from "react";
// import axios from '../../axios';
import Register from "../../containers/Register/Register";
import { Route, Link } from "react-router-dom";
// import Layout from '../../hoc/Layout/Layout';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

import Home from "../../components/Home/Home";
import Rallies from "../../components/Rallies/Rallies";
import Rally from "../../components/Rally/Rally";
import Admin from "../../containers/EventAdmin/EventAdmin";
// import MenuBar from '../../components/Navigation/Toolbar/MenuBar';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import "./P8.css";
//==========================================================
// this is used for the P8 Rally Centrol base functionality
//==========================================================
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
                <Route path='/admin' component={Admin} />
                <div className='RogueFooter'>RogueIntel &copy; 2020</div>
            </div>
        );
    }
}

export default P8;
