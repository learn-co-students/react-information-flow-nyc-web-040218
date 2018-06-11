import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      parentColor: this.props.color,
      childColor: getReducedColor(this.props.color)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.parentColor !== nextProps.color);
  }

  // componentWillUpdate(nextProps){
  //   this.setState({
  //     parentColor: nextProps.color,
  //     childColor: getReducedColor(nextProps.color)
  //   })
  // }

  doingSomething = (e) => {
    console.log(e.target)
    console.log("doing something");
    if (e.target.className === "tier2"){
    }
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.doingSomething} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} />
        <Tier3 color={this.state.childColor} />
      </div>
    )
  }
}
