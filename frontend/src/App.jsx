
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Collections from './Pages/Collections'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import ProductPage from './Pages/Product'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import Login from './Pages/Login'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className='container mx-auto '>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place_order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  )
}

export default App
