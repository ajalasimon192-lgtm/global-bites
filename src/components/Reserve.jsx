import React from 'react'
import model from '../assets/images/pictureModelForReserve.PNG'

export const Reserve = () => {
  return (
    <div className='flex items-center px-8 mt-2'>
        <div className='w-full'>
            <h2 className='capitalize text-5xl font-bold mb-5'>
                do you have any dinner plan today? reserve your table 
            </h2> 
            <p className='mb-5'>Make online reservation, read restaurant reviews from diners, and earn points towards free meals.</p>
            <button className='font-semibold bg-amber-300 px-5 py-3 rounded-3xl hover:bg-amber-500 cursor-pointer'>Make Reservation</button>
        </div>
        <div className='w-full'>
            {/* image of a plate of food  */}
            <img src={model} alt="" className='w-full'/>
        </div>
    </div>
  )
}
