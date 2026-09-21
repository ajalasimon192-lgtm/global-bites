import { useState } from 'react'
import dishes from '../assets/images/dishes.PNG'
import dessert from '../assets/images/desert.PNG'
import drinks from '../assets/images/drinks.PNG'
import platter from '../assets/images/platter.PNG'
import snacks from '../assets/images/snacks.PNG'

export const Header = () => {
    const images = [
        {
            id: 1,
            name: 'Dishes',
            src: dishes
        },
        {
            id: 2,
            name: 'Dessert',
            src: dessert
        },
        {
            id: 3,
            name: 'Drinks',
            src: drinks
        },
        {
            id: 4,
            name: 'Platter',
            src: platter
        },
        {
            id: 5,
            name: 'Snacks',
            src: snacks
        },
    ]
    
    const [selected, setSelected] = useState(images [0]);


  return (
    <div className='flex justify-between items-center px-8 h-119 overflow-hidden'>
        <div className='w-full'>
            <h1 className='capitalize text-6xl font-bold'>we serve the test you love 😍</h1>
            <p className='my-7'>This is a type of restaurant which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks. The term comes from the french word meaning food. </p>
            <div className='flex gap-5'>
                <button className='bg-amber-300 text-amber-900 py-3 px-4 font-semibold rounded-3xl'>
                    Explore Food
                </button>
                    {/* Search icon */}
                <input type="text" placeholder='Search' className='border-amber-300 border px-5 py-2 rounded-3xl text-amber-900 outline-0 pl-10'/>
            </div>
        </div>
        <div className='w-full'>
            <div className='relative'>
                <img src={selected.src} alt={selected.name} className='w-full h-screen object-contain'/>
                <div className='absolute top-40 right-0 text-lg flex flex-col w-fit float-right gap-3'>
                    {
                    images.map((image) => {
                        // to add an icon to the button representing the food top be shown
                        return <div key={image.id}>
                            <button className={selected.name === image.name ? 'food' : 'not-food'} 
                             
                            onClick={() => {
                                setSelected(image)
                            }}>
                             <img src={image.src} alt="" className='w-5'/>   {image.name} 
                            </button>
                            
                        </div>
                    })
                }
                </div>
            </div>
        </div>
    </div>
  )
}
