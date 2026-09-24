import { MoveRight } from 'lucide-react'
import logo from '../assets/images/mainLogo.WEBP'

export const Footer = () => {
  return (
    <div id='footer' className='px-4 md:px-8 pb-10'>
        {/* Logo */}
        <div className=' border-b-2 border-gray-400'>
            <img src={logo} alt="logo" className='w-30 mb-4'/>
        </div>
        <div className='text-center md:flex gap-7 pt-10'>
            <div className='md:w-200 mb-5'>
                <h2 className='font-bold text-xl mb-5'>Subscribe Our NewsLetter</h2>
                <form action="POST">
                    <input type="email" placeholder='Enter Your Email' className='border-b-2 w-50 pb-2 outline-0' required/>
                    {/* put an arrow button to send */}
                    <button className='p-2 bg-amber-600 rounded-3xl cursor-pointer'>
                        <MoveRight />
                    </button>
                </form>

                {/* Links to social media  fb, twitter, insta, youtube*/}
            </div>

            <div className='flex flex-col gap-5 md:flex-row w-full justify-between'>
                <div className='foot'>
                    <h4 className='font-bold'>Service</h4>
                    <div className="links">
                        <a href="">Online Order</a>
                        <a href="">Pre-Reservation</a>
                        <a href="">24/7 Services</a>
                        <a href="">Foodie Place</a>
                        <a href="">Super Chefs</a>
                    </div>
                </div>
                <div className='foot'>
                    <h4 className='font-bold'>Quick Links</h4>
                    <div className="links">
                        <a href="">Menu</a>
                        <a href="">Reviews</a>
                        <a href="">Blogs</a>
                        <a href="">Reserve Table</a>
                        <a href="">Order Foods</a>
                    </div>
                </div>
                <div className='foot'>
                    <h4 className='font-bold'>About</h4>
                    <div className="links">
                        <a href="">Our Story</a>
                        <a href="">Benefits</a>
                        <a href="">Career</a>
                        <a href="">Our Chefs</a>
                    </div>
                </div>
                <div className='foot'>
                    <h4 className='font-bold'>Help</h4>
                    <div className="links">
                        <a href="">Contact</a>
                        <a href="">Support</a>
                        <a href="">FAQs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
