import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'
import pic from './nick.png'

export default class Tier1 extends Component {
  constructor(props) {
    super(props)

    const initialColor = getRandomColor()
    const childColor = getReducedColor(initialColor)
    this.state = {
      color: initialColor,
      childColor: childColor,
      babyColor: getReducedColor(childColor)
    }
  }

  changeTierOneColor = (e) => {
    if (e.target.className === 'tier1') {
      const randColor = getRandomColor()
      const childColor = getReducedColor(randColor)
      this.setState({
        color: randColor,
        childColor: childColor,
        babyColor: getReducedColor(childColor),
        show: null
      })
    }
  }

  changeTierTwoColor = (e) => {
    if (e.target.className === 'tier2') {
      const childColor = getRandomColor()
      this.setState({
        childColor: childColor,
        babyColor: getReducedColor(childColor)
      })
    }
  }

  changeTierThreeColor = () => {
    this.setState({
      babyColor: getRandomColor(),
      show: <img src={pic} style = {{ width: '100%', marginTop: '14px'}}/>
    })
  }

  render() {
    const show = this.state.show
    const tier2 = <Tier2
      changeTierTwoColor={this.changeTierTwoColor} changeTierThreeColor={this.changeTierThreeColor}
      color={this.state.childColor}
      babyColor={this.state.babyColor} show={this.state.show} />

    return (
      <div onClick={this.changeTierOneColor} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        {tier2}
        {tier2}
      </div>
    )
  }
}
