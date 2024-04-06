import React from 'react'
import './Style.css'
export default function TextHead(props) {
  return (
    <div>
      <p className='texthead'>{props.name}</p>
    </div>
  )
}
