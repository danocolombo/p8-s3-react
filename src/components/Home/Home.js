import React, { Component } from 'react';

import classes from './Home.css';
const Home = (props) => (
	<section>
		<h1>Welcome Home</h1>
		<div>
			<div>A P8 Rally is based on the Celebrate Recovery 8th principle:</div>
			
			<div className={classes.Message}>Yield myself to God to be used to bring this Good News to others, both by my example and my words.</div>
			
			<div>A P8 Rally is an event put together by official Celebrate Recovery State Representatives, as an opportunity for area Celebrate Recovery groups to come together to connect and fellowship with other Celebrate Recovery groups in the surrounding area. The objective is to fellowship, connect and learn from each other. This is also a great opportunity to meet with your State Representative, get to know them and get some of your questions answered at the same time.</div>
			<div>Each P8 Rally varies a little bit, so for more details about a specific event, please review that event on the menu for more details.</div>
		</div>
	</section>
)
export default Home;