import React from 'react'
import logo from '../assets/logo.svg'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} alt='logo' className='w-[124px] h-[32px]'/>
        <ul>

        </ul>
    </nav>
  )
}

export default Navbar