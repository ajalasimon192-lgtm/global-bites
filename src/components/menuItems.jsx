import React from 'react'
import ossoBuco from '../assets/images/ossoBuco.PNG'
import pizzaMaegherita from '../assets/images/pizzaMaegherita.PNG'
import spaghettiCabonara from '../assets/images/spaghettiCabonara.PNG'
import EggplantParamigiana from '../assets/images/EggplantParamigiana.PNG'
import foccacia from '../assets/images/foccacia.PNG'
import ravioli from '../assets/images/ravioli.PNG'
import risotto from '../assets/images/risotto.PNG'
import lasagna from '../assets/images/lasagna.PNG'

export const MenuItems = () => {
    const dishes = [
        {
            id: 1,
            src: ossoBuco,
            name: 'Pasta',
            info: 'pasta is a type of food typically made from an unleavened dough',
            price: 35.00
        },
        {
            id: 2,
            src: pizzaMaegherita,
            name: 'French Fries',
            info: 'pasta is a type of food typically made from an unleavened dough',
            price: 35.00
        },
        {
            id: 3,
            src: lasagna,
            name: 'Chicken Shawarma',
            info: 'pasta is a type of food typically made from an unleavened dough',
            price: 35.00
        },
        {
            id: 4,
            src: spaghettiCabonara,
            name: 'Fried Curry',
            info: 'pasta is a type of food typically made from an unleavened dough',
            price: 35.00
        },
        {
            id: 5,
            src: EggplantParamigiana,
            name: 'Fried Curry',
            info: 'pasta is a type of food typically made from an unleavened dough',
            price: 35.00
        },
        {
            id: 6,
            src: foccacia,
            name: 'Fried Curry',
            info: 'pasta is a type of food typically made from an unleavened dough',
            price: 35.00
        },
        {
            id: 7,
            src: ravioli,
            name: 'Fried Curry',
            info: 'pasta is a type of food typically made from an unleavened dough',
            price: 35.00
        },
        {
            id: 8,
            src: risotto,
            name: 'Fried Curry',
            info: 'pasta is a type of food typically made from an unleavened dough',
            price: 35.00
        },
    ]
    
    return(
        <div className='px-8 mb-4'>
            <h2 className='capitalize font-bold text-3xl mb-15 text-center'>our regular menu pack</h2>
            <div className='flex justify-evenly mb-9'>
                <button className='menu'>Special Foods</button>
                <button className='menu'>Mexican</button>
                <button className='menu bg-amber-600'>Italian</button>
                <button className='menu'>Japanese</button>
                <button className='menu'>Drinks</button>
                <button className='menu'>Lunch</button>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    dishes.map((dish) => {
                        return <div key={dish.id} className='bg-white flex flex-col justify-between items-center text-center px-6 py-4 rounded-4xl hover:shadow-gray-400 hover:shadow-sm'>
                            <img src={dish.src} alt="" className='mb-5 h-50 w-50 object-cover'/>
                            <div>
                                {/* to add rating stars */}
                                <p className='font-bold text-lg'>{dish.name}</p>
                                <p>{dish.info}</p>
                                <div className='flex justify-between mt-5 w-full'>
                                    <p className='font-bold text-lg'>${dish.price.toFixed(2)}</p>
                                    <button className='px-4 py-1 border border-amber-600 rounded-2xl hover:bg-amber-600 font-bold cursor-pointer'>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

