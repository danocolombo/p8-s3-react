import React, { Component } from 'react';
//import axios from '../../axios';
import Home from '../../components/Home/Home';
//import Posts from './Posts/Posts';
import Rallies from '../../components/Rallies/Rallies';
import { Route, Link } from 'react-router-dom';
import './P8.css';

class P8 extends Component {
    render () {
        return (
            <div className="P8">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            {/* the following hash and search get appended to URL, but
                                not used in this example  */}
                            <li><Link to={{
                                pathname: '/rallies',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>Schedule</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                <Route path="/" exact component={Home} />
                <Route path="/rallies" component={Rallies} />
            </div>
        );
    }
}

export default P8;