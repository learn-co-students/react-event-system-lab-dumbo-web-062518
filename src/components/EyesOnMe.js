// Code EyesOnMe Component Here
import React,  { Component } from 'react'

export default class EyesOnMe extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <button onBlur={() => console.log("Hey! Eyes on me!")} onFocus={() => console.log("Good!")}></button>
    )
  }
}
