import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import ProductDetails from './components/productDetails'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Checkout from './components/checkout'


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
