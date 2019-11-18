import React, { Component } from 'react';
//import axios from '../../../axios';
//import Post from '../../../components/Post/Post';
import classes from './Home.css';
class Home extends Component {
    state = {
     
    }
 
    componentDidMount () {
    }

	render () {
		return (
			<section className={classes.Home}>
			    <h2>Welcome Home</h2>
			</section>
		);
	}
}
export default Home;