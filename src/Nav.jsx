import React from 'react'
import logo from './Images/logo.png'
export default function Nav() {
  return (
    <nav>

        <div className="section1">
            
            <button id='menu' className='opt'><i class="fa-solid fa-bars"></i></button>
            <img src={logo} alt="" />
            <button className='opt rank'><a href=""><span>التصنيفات</span></a></button>
        </div>
        <div className="section1">
            <button className='opt'><i class="fa-solid fa-magnifying-glass"></i></button>
            <button className='opt'><i class="fa-solid fa-cart-shopping"></i></button>
            <button><a href=""><i class="fa-solid fa-right-to-bracket"></i>دخول</a></button>
            <button><a href=""><i class="fa-solid fa-user-plus"></i> انشاء حساب</a></button>
        </div>
    </nav>
  )
}
 