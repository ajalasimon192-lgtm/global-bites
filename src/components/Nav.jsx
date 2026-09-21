import React from 'react'
import logo from '../assets/images/mainLogo.PNG'

export const Nav = () => {
  return (
    <div className='flex justify-between items-center py-5 px-8'>
        <div>
            <img src={logo} alt="" className='w-40'/>
        </div>
        <div className='flex justify-between items-center gap-4'>
            <a href="#" className='hover'>About Us</a>
            <a href="#" className='hover'>Menu</a>
            <a href="#" className='hover'>Reviews</a>
            <a href="#" className='hover'>Blog</a>
            <a href="#" className='hover'>Contacts</a>
            <div className='flex gap-1'>
                {/* A cart icon */}
                <button className='bg-orange-400 px-3 py-2 font-semibold rounded-3xl border border-transparent hover:bg-orange-200 cursor-pointer hover:border hover:border-black'>Reserve Table</button>
            </div>
        </div>
    </div>
  )
}
