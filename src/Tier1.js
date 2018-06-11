import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  parentColor = (e) => {
    if (e.target.className === "tier1"){
      const pColor = getRandomColor();
      this.setState({
        color: pColor,
        childColor: getReducedColor(pColor)
      })
    }
  }

  setChildColor = (e) => {
    if (e.target.className === "tier2"){
      this.setState({
        childColor: getRandomColor()
      }) 
    }
  }

  render() {
    console.log("Tier1 Render");
    return (
      <div onClick={this.parentColor} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} clickHanlder={this.setChildColor} />
        <Tier2 color={this.state.childColor} clickHanlder={this.setChildColor} />
      </div>
    )
  }
}
