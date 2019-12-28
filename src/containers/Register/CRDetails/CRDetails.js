import React, { Component } from "react";
// import { EventSubscriptionVendor } from "react-native";
export default class Rally  extends Component {
  constructor(props){
    super(props);
    this.getRallyData = this.getRallyInfo(this);
  }
  getRallyInfo(event){
    // fetch('https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/event', {
    //   method: 'post',
    //   headers: {'Content-Type':'application/json'},
    //   body: {
    //     "id": this.props.eventID
    //   }
    // });



  };

  componentDidMount() {
    //https://swapi.co/api/planets/4/
    // https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/events
    // fetch("https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/events")
    //   .then(res => res.json())
    //   .then(res => this.setState({ planets: res }))
    //   .catch(() => this.setState({ hasErrors: true }));
  }

  render() {

    return (
      <div>EVENT: {this.props.id}</div>
      
    )
  }

}