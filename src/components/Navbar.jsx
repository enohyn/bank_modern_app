import React from 'react'
import logo from '../assets/logo.svg'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center container'>
        <img src={logo} alt='logo' className='w-[124px] h-[32px]'/>
        <ul className='list-none sm:flex hidden justify-end flex-1 items-center'>
            <div className='flex justify-around'>
            {navLinks.map((nav,index)=>(
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
                    <a href={`#${nav.id}`} >
                        {nav.title}
                    </a>

                </li>
            ))}
            </div>
        </ul>
    </nav>
  )
}

export default Navbar