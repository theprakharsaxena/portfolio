import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#header')
  return (
    <nav>
      <a onClick={()=>setActiveNav('#header')} className={activeNav==='#header' ? 'active' : ''} href="#header"><AiOutlineHome/></a>
      <a onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''} href="#about"><AiOutlineUser/></a>
      <a onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''} href="#experience"><BiBook/></a>
      <a onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''} href="#portfolio"><RiServiceLine/></a>
      <a onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''} href="#contact"><BiMessageSquareDetail/></a> 
    </nav>
  )
}

export default Nav