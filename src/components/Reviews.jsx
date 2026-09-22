import React from 'react'

export const Reviews = () => {
  return (
    <div id='reviews' className='px-4 md:px-8 mb-7'>
        <h3 className='capitalize text-4xl font-semibold mb-5'>what our customers says?</h3>

        <div className='grid md:grid-cols-5 gap-5'>
            <div className='bg-yellow-200 rounded-2xl relative pt-8 px-7 pb-5'>
                <span className='text-6xl absolute top-0 left-3'>"</span>
                <p>
                  The food is absolutely delicious, and the presentation was beautiful. I loved being able to enjoy different flavours from around the world.
                </p>
                <div className='grid grid-cols-2  mt-3'>
                  <p>Daniel A.</p>
                  <i>Walk-in, Thursday</i>
                </div>
            </div>
            <div className='review'>
                <span className='text-6xl absolute top-0 left-3'>"</span>
                <p>
                  Global Bites has a great variety of dishes. Whether you are craving African, Italian or continental cuisine, there's something for everyone.
                </p>
                <div className='grid grid-cols-2 mt-3'>
                  <p>Michael T.</p>
                  <i>Chef's table</i>
                </div>
            </div>
            <div className='review'>
                <span className='text-6xl absolute top-0 left-3'>"</span>
                <p>
                  From the welcoming atmosphere to the quality of the food, everything felt well thought out. Definitely a restaurant i'd visit again.
                </p>
                <div className='grid grid-cols-2 mt-3'>
                  <p>Daniel O.</p>
                  <i>Family celebration</i>
                </div>
            </div>
            <div className='review'>
                <span className='text-6xl absolute top-0 left-3'>"</span>
                <p>
                  Quiet enough for a business dinner, warm enough tha the client stayed an extra hour just talking.
                </p>
                <div className='grid grid-cols-2 mt-3'>
                  <p>Sofia B.</p>
                  <i>Client dinner</i>
                </div>
            </div>
            <div className='review'>
                <span className='text-6xl absolute top-0 left-3'>"</span>
                <p>
                  Staff remembered my wife'sallergy from abooking six months earlier without us saying a word.
                </p>
                <div className='grid grid-cols-2 mt-3'>
                  <p>Tobias R.</p>
                  <i>Return guest</i>
                </div>
            </div>
        </div>
    </div>
  )
}
