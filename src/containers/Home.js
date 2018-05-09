import React, { Component } from 'react'
import Signup from '../presentational/Signup.js'


class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
  	this.setState({ name: event.target.value });
  }

  handleSubmit() {
  	console.log(this.state.name);
  }

  render() {
    return (
    	<div>
      		<Signup 
      			labelText="Enter Info"
      			inputValue="Name"
      			submitValue="Submit"
      			handleName={this.handleName}
      			handleSubmit={this.handleSubmit}
      		/>
      	</div>
    );
  }
}

export default Home