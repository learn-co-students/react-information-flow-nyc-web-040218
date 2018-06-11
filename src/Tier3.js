import React from 'react'

const Tier3 = (props) => {
  const show = props.show

  return (<div onClick={props.changeTierThreeColor} className="tier3" style={{backgroundColor: props.color, color: props.color}}>{show}</div>)
}

export default Tier3
