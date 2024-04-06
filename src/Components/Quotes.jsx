import React from 'react'
import './Style.css'
export default function Quotes(props) {
  return (
    <>
    <div className="quotes">
             <q> {props.text}
              </q>
              </div>
    </>
  )
}
