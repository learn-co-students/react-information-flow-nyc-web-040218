import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      childColor: this.props.childColor
    }
  }

  componentWillReceiveProps(nextProps){
    console.log('nxt', nextProps)
    this.setState({childColor: nextProps.childColor}, () => {
      console.log('new tier-3 color should be', this.state.childColor)
    })
  }

  render() {
    console.log(this.props.childColor)
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" onClick={this.props.handleClick} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 handleClick={this.props.handleClick} color={this.state.childColor} />
        <Tier3 handleClick={this.props.handleClick} color={this.state.childColor} />
      </div>
    )
  }
}
