import { useState } from 'react'
import { Menu, ShoppingCartPlus } from 'lucide-react'
import logo from '../assets/images/mainLogo.PNG'

export const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='flex justify-between items-center py-5 px-4 md:px-8'>
            <div>
                <img src={logo} alt="" className='w-40'/>
            </div>
        
            <div className='relative flex gap-3 sm:block md:hidden'>
                <button onClick={toggleMenu} >{(isOpen) ? <p className='text-2xl'>X</p> : <Menu /> }</button>
            
                {isOpen && (
                    <div className='absolute right-5 top-10 flex flex-col gap-2 z-1 bg-white w-25 p-2 shadow-xl shadow-black rounded-xl'>
                        <a href="#details" className='hover:font-semibold'>About Us</a>
                        <a href="#menu" className='hover:font-semibold'>Menu</a>
                        <a href="#reviews" className='hover:font-semibold'>Reviews</a>
                        <a href="#" className='hover:font-semibold'>Blog</a>
                        <a href="#footer" className='hover:font-semibold'>Contacts</a>
                        <button className='bg-orange-400 px-2 py-1 rounded-3xl border border-transparent hover:bg-orange-200 cursor-pointer hover:border hover:border-black'>Reserve Table</button>
                    </div>
                )}
                <div className='flex gap-1 items-center'>
                    {/* A cart icon */}
                    <ShoppingCartPlus size={40} className='p-2 rounded-3xl border border-amber-500 hover:bg-amber-600 hover:text-white'/>
                </div>
            </div>


            <div className='md:flex justify-between items-center gap-4 hidden'>
                <a href="#details" className='hover'>About Us</a>
                <a href="#menu" className='hover'>Menu</a>
                <a href="#reviews" className='hover'>Reviews</a>
                <a href="#" className='hover'>Blog</a>
                <a href="#footer" className='hover'>Contacts</a>
                <div className='flex gap-1 items-center'>
                    {/* A cart icon */}
                    <ShoppingCartPlus size={40} className='p-2 rounded-3xl border border-amber-500 hover:bg-amber-600 hover:text-white'/>
                    <button className='bg-orange-400 px-3 py-2 font-semibold rounded-3xl border border-transparent hover:bg-orange-200 cursor-pointer hover:border hover:border-black'>Reserve Table</button>
                </div>
            </div>
        </div>
    )
}
