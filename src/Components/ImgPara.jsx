import React from 'react'
import goat from '../assets/breeds/goat.jpg'
export default function ImgPara(props) {
  return (
    <>
    <div className="breed">
        <div className="settle">
        <div className="breedpara">
             <p>
             <span>{props.t1}</span>{props.para1}
             </p>
        </div>
        <div className="breedimage">
         <img src={props.img1} alt="" />

        </div>
        </div>
        <div className="settle true">
        <div className="breedpara">
             <p>
             <span>{props.t2}</span> {props.para2}
             </p>
        </div>
        <div className="breedimage">
         <img src={props.img2} alt="" />

        </div>
        </div>
      </div>
    </>
  )
}
