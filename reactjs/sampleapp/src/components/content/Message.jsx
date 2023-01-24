import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    changeText() {
       this.setState({
          message : 'Thank you for Subscribing'
       })
    }
    render() {
        return (
            <>
                <div>{this.state.message}</div><br/>
                 <button onClick={()=> this.changeText()}>Change the Text</button> 
            </>
        )
    }
}
