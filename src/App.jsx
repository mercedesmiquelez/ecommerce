import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <div className='App' style={{fontSize:7}}>
       <NavBar />
       <ItemListContainer greeting={'Bienvenidos a la tienda de indumentaria mas amplia del pais'} />
      </div>
    </>
  )
}

export default App
