import React from 'react'
import pasta from '../assets/images/pasta.PNG'
import fries from '../assets/images/friedFries.PNG'
import shawarma from '../assets/images/chickenShawarma1.PNG'
import curry from '../assets/images/FriedCurry.PNG'

export const Dishes = () => {
    const dishes = [
        {
            id: 1,
            src: pasta,
            name: 'Pasta',
            info: 'pasta is a type of food typically made from an unleavened dough',
            price: 29.99
        },
        {
            id: 2,
            src: fries,
            name: 'French Fries',
            info: 'pasta is a type of food typically made from an unleavened dough',
            price: 20.59
        },
        {
            id: 3,
            src: shawarma,
            name: 'Chicken Shawarma',
            info: 'pasta is a type of food typically made from an unleavened dough',
            price: 9.99
        },
        {
            id: 4,
            src: curry,
            name: 'Fried Curry',
            info: 'pasta is a type of food typically made from an unleavened dough',
            price: 29.00
        },
    ]

    return(
        <div className='px-8 mb-4'>
            <h2 className='capitalize text-2xl mb-5 font-semibold'>popular dishes</h2>
            <div className='grid grid-cols-4 gap-5'>
                {
                    dishes.map((dish) => {
                        return <div key={dish.id} className='flex flex-col justify-between items-center text-center px-6 py-4 rounded-lg hover:shadow-gray-500 hover:shadow-lg'>
                            <img src={dish.src} alt="" className='mb-5 object-contain w-full h-50'/>
                            <p className='font-bold text-lg'>{dish.name}</p>
                            {/* to add rating stars */}
                            <p>{dish.info}</p>
                            <div className='flex justify-between mt-5 w-full'>
                                <p className='font-bold text-lg'>${dish.price.toFixed(2)}</p>
                                <button className='px-4 py-1 border border-amber-600 rounded-2xl hover:bg-amber-600 font-bold cursor-pointer'>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
