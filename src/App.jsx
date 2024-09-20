import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LazyProductList from './pages/LazyProductList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import LazyCart from './pages/LazyCart'
import Footer from './components/Footer'
import ScollToTop from './components/ScrollToTop'
import Product from './pages/Product'

function App() {

  return (
    <>
      <BrowserRouter>      
        <Navbar/> 
        <div className='pt-[5rem] bg-[#f1eedc66]'>
          <ScollToTop/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<LazyProductList/>} />           
            <Route path='/cart' element={<LazyCart/>}/>
            <Route path='/products/:id' element={<Product/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
