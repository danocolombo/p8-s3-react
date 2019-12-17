import React, { Component } from 'react';
// import axios from '../../axios';
import Register from '../../containers/Register/Register';
import { Route, Link } from 'react-router-dom';
// import Layout from '../../hoc/Layout/Layout';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Home from '../../components/Home/Home';
import Rallies from '../../components/Rallies/Rallies';
// import MenuBar from '../../components/Navigation/Toolbar/MenuBar';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import './P8.css';
//==========================================================
// this is used for the P8 Rally Centrol base functionality
//==========================================================
class P8 extends Component {
    render () {
        return (
            <div>
                    <Toolbar/>
                    <Route path="/" exact component={Home} />
                    <Route path="/rallies" component={Rallies} />
                    <Route path="/register" component={Register} />
                
            </div>
        );
    }
}

export default P8;
