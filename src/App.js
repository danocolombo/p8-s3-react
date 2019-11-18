import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import P8 from './containers/P8/P8';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	      <div className="App">
	        <P8 />
	      </div>
      	</BrowserRouter>
    );
  }
}

export default App;
