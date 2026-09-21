import React from 'react'
import chef from '../assets/images/chef2.png'


export const Details = () => {
  return (
    <div className='grid grid-cols-2 gap-10 items-center px-8'>
        <img src={chef} alt="image of a chef" className='w-full'/>
        <div className='w-full'>
            <h2 className='text-5xl capitalize font-semibold w-120'>we are more than multiple service</h2>
            <p className='mt-5 mb-5'>This is a type of restaurant which typicall serves food and drinks, in which addition to light refreshments such as baked goods and snacks.</p>
            <ul className='grid grid-cols-2 font-semibold gap-10'>
              {/* to add icons later */}
                <li>Online Order</li>
                <li>Pre-Reservation</li>
                <li>24/7 Services</li>
                <li>Organizes Foodie Place</li>
                <li>Clean Kitchen</li>
                <li>Super chefs</li>
            </ul>
            <button className='mt-8 border border-amber-600 px-4 py-2 rounded-3xl hover:bg-amber-600 cursor-pointer font-semibold'>About Us</button>
        </div>
    </div>
  )
}
