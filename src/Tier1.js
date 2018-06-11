import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    const reducedColor = getReducedColor(initialColor)
    this.state = {
      color: initialColor,
      childColor: reducedColor,
      bbColor: getReducedColor(reducedColor)
    }
  }

  setInitialColor = (e) => {
    // this.setState({color: getRandomColor()})
    e.stopPropagation()
    const newTierOneColor = getRandomColor();
    const reducedTierOneColor = getReducedColor(newTierOneColor)
    this.setState({
      color: newTierOneColor,
      childColor: reducedTierOneColor,
      bbColor: getReducedColor(reducedTierOneColor)
    })
  }

  changeTierTwoColor = (e) => {
    e.stopPropagation()
    const tierTwoColor = getRandomColor();
    this.setState({
      childColor: tierTwoColor,
      bbColor: getReducedColor(tierTwoColor)
    }, () => console.log(this.state))
  }

  changeTierThreeColor = (e) => {
    e.stopPropagation()
    const tierThreeColor = getRandomColor();
    this.setState({
      bbColor: tierThreeColor
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.setInitialColor} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} childColor={this.state.bbColor}
          handleChildClick={this.changeTierTwoColor} handleBabyClick={this.changeTierThreeColor} />
        <Tier2 color={this.state.childColor} childColor={this.state.bbColor} handleChildClick={this.changeTierTwoColor} handleBabyClick={this.changeTierThreeColor} />
      </div>
    )
  }
}
