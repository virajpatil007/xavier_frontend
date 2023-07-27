import React from 'react'
import "../css/Navbar.css"
import { logo } from '../constant/Constant'
function Navbar() {
  return (
    <>
    <div className='home_navbar'>
 <div className='logo'><img src={logo}></img></div>
 <div className='nav-cont'>
    <p style={{fontWeight:800,fontSize:30,marginBottom:0}}>ST. XAVIER'S TECHNICAL INSTITUTE, MAHIM</p>
    <p style={{marginTop:0}}><b>Government Aided Autonomous Minority Institute, Approved by A.I.C.T.E. New Delhi Mahim Causeway, Mumbai. Pin - 400 016</b></p>
 </div>
  </div>

  </>
  )
}

export default Navbar