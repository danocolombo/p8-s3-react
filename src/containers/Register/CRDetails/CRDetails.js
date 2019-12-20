import React, { Component } from "react";
export default class Planets extends Component {
  state = {
    hasErrors: false,
    planets: {}
  };
  componentDidMount() {
    //https://swapi.co/api/planets/4/
    // https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/events
    fetch("https://ou1b9hxpma.execute-api.us-east-1.amazonaws.com/UAT/events")
      .then(res => res.json())
      .then(res => this.setState({ planets: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    return <div>{JSON.stringify(this.state.planets)}</div>;
  }

}