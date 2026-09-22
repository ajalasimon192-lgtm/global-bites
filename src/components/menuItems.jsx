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
            name: 'Osso Buco',
            info: 'Slow-braised veal shanks served with a rich sauce.',
            price: 14.99
        },
        {
            id: 2,
            src: pizzaMaegherita,
            name: 'Pizza Margherita',
            info: 'Tomato, mozzarella, and basil on a pizza base.',
            price: 19.99
        },
        {
            id: 3,
            src: lasagna,
            name: 'Lasagna',
            info: 'Layers of pasta, meat sauce, cheese, and béchamel.',
            price: 20.15
        },
        {
            id: 4,
            src: spaghettiCabonara,
            name: 'Spaghetti Cabonara',
            info: 'Pasta with eggs, cheese and pancetta.',
            price: 35.00
        },
        {
            id: 5,
            src: EggplantParamigiana,
            name: 'Eggplant Paramigiana',
            info: 'Bakes eggpalnt layered with tomato sauce and cheese.',
            price: 30.00
        },
        {
            id: 6,
            src: foccacia,
            name: 'Foccacia',
            info: 'Soft italian flatbread topped with olive oil, herbs, and sometimes vegetables. ',
            price: 25.50
        },
        {
            id: 7,
            src: ravioli,
            name: 'Ravioli',
            info: 'Stuffed pasta usually filled with cheese, meat, or vegetables.',
            price: 15.00
        },
        {
            id: 8,
            src: risotto,
            name: 'Risotto',
            info: 'Creamy rice dish often made with mushrooms, seafood, or parmesan',
            price: 9.99
        },
    ]
    
    return(
        <div id='menu' className='px-4 md:px-8 mb-4 mt-6'>
            <h2 className='capitalize font-bold text-3xl mb-15 text-center'>our regular menu pack</h2>
            <div className='hidden md:flex justify-evenly mb-9'>
                <button className='menu'>Special Foods</button>
                <button className='menu'>Mexican</button>
                <button className='menu bg-amber-600'>Italian</button>
                <button className='menu'>Japanese</button>
                <button className='menu'>Drinks</button>
                <button className='menu'>Lunch</button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {
                    dishes.map((dish) => {
                        return <div key={dish.id} className='bg-whit e flex flex-col justify-between items-center text-center px-6 py-4 rounded-4xl hover:shadow-gray-400 hover:shadow-sm'>
                            <img src={dish.src} alt="" className='mb-5 h-50 w-50 object-contain md:object-cover'/>
                            <div>
                                {/* to add rating stars */}
                                <p className='font-bold text-lg'>{dish.name}</p>
                                <p>{dish.info}</p>
                                <div className='md:flex flex-row md:flex-col md:justify-between mt-5 w-full'>
                                    <p className='mb-2 font-bold text-lg'>${dish.price.toFixed(2)}</p>
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

