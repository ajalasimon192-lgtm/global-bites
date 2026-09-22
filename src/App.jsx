import '@fontsource-variable/baloo-2'
import { Nav } from './components/Nav'
import { Header } from './components/Header'
import { Dishes } from './components/dishes'
import { Details } from './components/Details' 
import { MenuItems } from './components/menuItems'
import { Reserve } from './components/Reserve'
import { Reviews } from './components/Reviews'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='bg-[#f5f5f0] '>
      <Nav />
      <Header />
      <Dishes />
      <Details />
      <MenuItems />
      <Reserve />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
