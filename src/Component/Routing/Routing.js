import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cliqnav from '../Cliq-nav/Cliqnav.js'
import Wishlist from '../Wishlist/wishlistlcard.js'
import Addcard from '../Addcard/Addcard.js'

const Routing=()=>{
    return <BrowserRouter>
    <Routes>
        <Route path='/' element={<Cliqnav/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path="/add" element={<Addcard/>}/>
    </Routes>
    </BrowserRouter>
}
export default Routing