import React, { Component } from 'react';
// import axios from '../../axios';
import Home from '../../components/Home/Home';
//import Posts from './Posts/Posts';
import Rallies from '../../components/Rallies/Rallies';
import Register from '../../containers/Register/Register';
import { Route, Link } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './P8.css';
//==========================================================
// this is used for the P8 Rally Centrol base functionality
//==========================================================
class P8 extends Component {
    render () {
        return (
            <div>
                <Layout>
                <Toolbar/>
                    <Route path="/" exact component={Home} />
                    <Route path="/rallies" component={Rallies} />
                    <Route path="/register" component={Register} />
                </Layout>
            </div>
        );
    }
}

export default P8;
