import React from 'react'
import { ShoppingBag,CalendarCheck, Clock, UtensilsCrossed, Sparkles, ChefHat } from 'lucide-react'
import chef from '../assets/images/chef2.PNG'



export const Details = () => {
  return (
    <div id='details' className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-8'>
        <img src={chef} alt="image of a chef" className='w-full'/>
        <div className='w-full'>
            <h2 className='text-5xl capitalize font-semibold md:w-120'>we are more than multiple service</h2>
            <p className='mt-5 mb-5'>
              At Global Bite, We bring flavours from around the world to one table. Enjoy delicious dishes made with fresh ingredients, passion, and a love for great food.
              <span className='font-bold'>Taste the world. One bite at a time</span>
            </p>
            <ul className='grid grid-cols-2 font-semibold gap-10'>
              {/* to add icons later */}
                <li> <ShoppingBag /> Online Order</li>
                <li><CalendarCheck /> Pre-Reservation</li>
                <li><Clock /> 24/7 Services</li>
                <li><UtensilsCrossed /> Organizes Foodie Place</li>
                <li><Sparkles /> Clean Kitchen</li>
                <li><ChefHat /> Super chefs</li>
            </ul>
            <button className='mt-8 border border-amber-600 px-4 py-2 rounded-3xl hover:bg-amber-600 cursor-pointer font-semibold'>About Us</button>
        </div>
    </div>
  )
}
