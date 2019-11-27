import React, { Component } from 'react';
//import axios from '../../axios';
import Rally from '../../components/Rally/Rally';
import classes from './Rallies.css';
import { getDefaultWatermarks } from 'istanbul-lib-report';
//import { RSA_NO_PADDING } from 'constants';
class Rallies extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            rallies: [],
        }
    }
 
    componentDidMount () {
        this.getData();
    }

    getData(){
        let data = fetch('https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/events')
            .then((resp)=>{
                resp.json().then((res)=>{
                    console.log(res.Items[0]);
                    this.setState({data: res.Items})
                })
            })

        // let data = fetch('https://facebook.github.io/react-native/movies.json')
        //     .then((resp)=>{
        //         resp.json().then((res)=>{
        //             console.log(res.movies);
        //             this.setState({data:res.movies})
        //         })
        //     })
    }
    rallySelectedHandler = (eventDate) => {
        this.setState({selectedRallyDate: eventDate});
    }

	render () {
		let rallies = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            rallies = <p style={{textAlign: 'center'}}>We are closer...</p>
            // console.log({rallies});
        }
		return (
			<section className={classes}>
                <h2>Upcoming Rallies</h2>
                {
                    this.state.data ?
                    this.state.data.map((item)=>
                        <section className={classes}>
                        <h3>{item.eventDate}</h3>
                        <div name='church' className={classes}>{item.churchName}</div>
                        </section>
                    )
                    :
                    <h3>Wait... data is fetching</h3>
                }

			</section>
		);
	}
}
export default Rallies;
