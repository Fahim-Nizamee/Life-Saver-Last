import React from 'react'
import img1 from '../img/Blood1.jpg'  
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='header shadow'>
      <img src={img1} alt="" />
      <div className='headertxt'>
      <Link to={'/'} class="life-saver">LIFE SAVER</Link>
      <Link to={'/'} class="be-the-reason">Be the reason for someone’s heartbeat</Link>
      
      </div>
      
    </div>
  )
}
