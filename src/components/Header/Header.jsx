import React from 'react'
import '../Header/Header.css'
import Logo from '../dp1.png'
import {AiOutlineHome} from 'react-icons/ai'


const Header = () => {
  return (
    <header>
            <img src= {Logo}  alt='Logo' className='logo' />
              <nav>
                <a href='#' className='btn1' ><AiOutlineHome/></a>
                <a href='#' className='btn1' >Logout</a>
              </nav>
    </header>
  )
}

export default Header