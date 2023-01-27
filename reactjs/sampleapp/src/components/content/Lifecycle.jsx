import React, { Component } from 'react'

export default class Lifecycle extends Component {
 componentDidMount(){
    console.log("in mounting phase");
 }
  render() {
    return (
      <div>
          <h1> Life Cycle Methods</h1>
      </div>
    )
  }
}
