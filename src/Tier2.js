import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      childColor: getReducedColor(nextProps.color)
    });
  }

  changeChild = (e) => {
    if (e.target.className === "tier3"){
      this.setState({
        childColor: getRandomColor()
      });
    }
  }

  render() {
    console.log("Tier2 Render");
    return (
      <div onClick={this.props.clickHanlder} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.changeChild} />
        <Tier3 color={this.state.childColor} handleChildClick={this.changeChild} />
      </div>
    )
  }
}
