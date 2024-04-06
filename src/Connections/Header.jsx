import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
export default function Header() {
  return (
<>
<div className="head">
    <div className="logo">
       <h1>VS TRADERs</h1>
    </div>
    <nav>
        <ul>
            <Link className='li' to={'/'}>Home</Link>
            <Link  className='li' to={'/Fish_seafoods'}>Fish&sea</Link>
            <Link  className='li' to={'/Mutton'}>Mutton</Link>
            <Link  className='li' to={'/Poultry'}>Poultry</Link>
            <Link  className='li' to={'/Contact'}>Contact</Link>
        </ul>
    </nav>
</div>
</>
  )
}
