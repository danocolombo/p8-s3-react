import React, { Component } from 'react';
import axios from '../../../axios';
import Rally from '../../components/Rally/Rally';
import classes from './Rally.css';
class Rallies extends Component {
    state = {
        rallies: [],
    }
 
    componentDidMount () {
        //console.log(this.props);
        axios.get( '/rallies' )
            .then( response => {
            	//load the events arracy with set number of events
            	//maybe remove this and load all...
                const rallies = response.data.slice(0, 4);
                // the foloowing adds a value to each array...
                const updatedRallies = rallies.map(rally => {
                    return {
                        ...rally,
                        author: 'Dano'
                    }
                });
                this.setState({rallies: updatedRallies});
                // console.log( response );
            } )
            .catch(error => {
                console.log(error);
                //this.setState({error: true});
            });
    }
    rallySelectedHandler = (id) => {
        this.setState({selectedRallyDate: rallyDate});
    }

	render () {
		let rallies = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            rallies = this.state.rallies.map(rally => {
                return <Rally 
                    key={rally.rallyDate} 
                    church={rally.churchName} 
                    churchCity={rally.churchCity}
                	churchState={rally.churchState}
                    clicked={() => this.rallySelectedHandler(rally.rallyDate)} />;
            });
        }
		return (
			<section className="Rallies">
			    {rallies}
			</section>
		);
	}
}
export default Rallies;