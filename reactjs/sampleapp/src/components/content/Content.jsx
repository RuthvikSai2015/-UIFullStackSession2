import React, { Component } from 'react'

export default class Content extends Component {

  
  render() {
    return (
      <div>
        <h1>Welcome to  {this.props.name}  {this.props.value}</h1>
      </div>
    )
  }
}
