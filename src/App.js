import React, { Component } from 'react';
//import { ImageBackground } from 'react-native';
import { BrowserRouter } from 'react-router-dom';
//import desktopImage from './assets/fullpage-background.jpg';
import P8 from './containers/P8/P8';
import './App.css';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	        	<P8 />
      	</BrowserRouter>
    );
  }
}

export default App;
