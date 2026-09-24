import { useState } from 'react'
import { Search } from 'lucide-react'
import dishes from '../assets/images/dishes.WEBP'
import dessert from '../assets/images/dessert.WEBP'
import drinks from '../assets/images/drinks.WEBP'
import platter from '../assets/images/platter.WEBP'
import snacks from '../assets/images/snacks.WEBP'

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
    <div className='grid md:flex justify-between items-center px-8 md:h-119 overflow-hidden'>
        <div className='w-full'>
            <h1 className='capitalize text-4xl  font-bold md:text-6xl'>we serve the test you love 😍</h1>
            <p className='my-7'>This is a type of restaurant which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks. </p>
            <div className='flex items-center gap-2 md:gap-5'>
                <button className='bg-amber-300 text-amber-900 py-2 px-2 md:py-3 md:px-4 font-semibold rounded-3xl hover:bg-amber-400 cursor-pointer'>
                    Explore Food
                </button>
                    {/* Search icon */}
                <div className='relative'>
                    <Search className='absolute top-2 left-3 '/>
                    <input type="text" placeholder='Search' className='border-amber-300 border px-5 py-2 rounded-3xl text-amber-900 font-semibold outline-0 pl-10'/>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <div className='relative flex justify-center'>
                <img src={selected.src} alt={selected.name} className='w-100 h-120 object-contain'/>
                <div className='absolute top-30 md:top-30 right-0 text-lg flex flex-col w-fit float-right gap-3'>
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
