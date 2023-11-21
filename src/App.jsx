import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

const App = () => {

  return (
    <>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Listado de productos'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria: '}/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/checkout' element={<Checkout />}/>           
            </Routes>
          </BrowserRouter>
        </CartProvider>
    </>
  )
}

export default App