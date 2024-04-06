import React from 'react'

import './Style.css'
export default function Image1(props) {
  return (
    <div>
      <div className="image">
        <img src={props.pic} alt="" />
      </div>
    </div>
  )
}
