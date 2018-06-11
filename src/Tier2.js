import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {
  render() {
    const childColor = this.state ? this.state.childColor : getReducedColor(this.props.color)
    const tier3 = <Tier3 changeTierThreeColor={this.props.changeTierThreeColor} color={this.props.babyColor} show={this.props.show} />

    return (
      <div onClick={this.props.changeTierTwoColor} className="tier2"
        style={{backgroundColor: this.props.color, color: this.props.color}}>
        {tier3}
        {tier3}
      </div>
    )
  }
}
