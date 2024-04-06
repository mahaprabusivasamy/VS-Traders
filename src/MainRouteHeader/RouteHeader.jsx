import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Fish_seafoods from '../pages/Fish_seafoods'
import Mutton from '../pages/Mutton'
import Contact from '../pages/Contact'
import Poultry from '../pages/Poultry'

export default function RouteHeader() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Fish_seafoods' element={<Fish_seafoods/>}></Route>
        <Route path='/Mutton' element={<Mutton/>}></Route>
        <Route path='/Poultry' element={<Poultry/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
