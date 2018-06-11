import React from 'react'


const Tier3 = (props) => {

  return (<div onClick={props.changeTierThreeColor} className="tier3" style={{backgroundColor: props.color, color: props.color}}></div>)
}

export default Tier3
