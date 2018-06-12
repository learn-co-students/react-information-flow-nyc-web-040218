import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    const initChildColor = getReducedColor(initialColor)
    const initGrandChildColor = getReducedColor(initChildColor)
    this.state = {
      color: initialColor,
      childColor: initChildColor,
      grandchildColor: initGrandChildColor
    }
  }

  generateColors = () => {
    const p = getRandomColor()
    const c = getReducedColor(p)
    const gc = getReducedColor(c)
    return {p, c, gc}
    // return {"tier1": p, "tier2": c, "tier3": gc}
  }

  handleAllClicks = (event) => {
    const newColors = this.generateColors()
    switch (event.target.className) {
      case "tier1":
      
      console.log("You hit tier 1 state is ", this.state)
        this.setState({ color: newColors.p, childColor: newColors.c, grandchildColor: newColors.gc}, () => {
          console.log('our state', this.state)
        })
        break;
      case "tier2":
      console.log("You hit tier 2")
      this.setState({ childColor: newColors.c, grandchildColor: newColors.gc })
        break;
      case "tier3":
      console.log("You hit tier 3")
        this.setState({ grandchildColor: newColors.gc })
        break;
      default:
        break;
    }
  }

  // handleTier1Click = (event) =>{
  //   let colors = this.generateColors()
  //   this.setState({ color: colors.p, childColor: colors.c, grandChildColor: colors.gc})
  // }

  // handleTier2Click = (event) => {
  //   let colors = this.generateColors()
  //   this.setState({childColor: colors.c, grandChildColor: colors.gc})
  // }

  // handleTier3Click = (event) => {
  //   let colors = this.generateColors()
  //   this.setState({grandchildColor: colors.gc})
  // }

  // shouldComponentUpdate(nextState){
  //   console.log('will update tier 1',this.state.color !== nextState.color)
  //   return this.state.color !== nextState.color
  // }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleAllClicks} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleClick={this.handleAllClicks} color={this.state.childColor} childColor={this.state.grandchildColor} />
        <Tier2 handleClick={this.handleAllClicks} color={this.state.childColor} childColor={this.state.grandchildColor} />
      </div>
    )
  }
}
