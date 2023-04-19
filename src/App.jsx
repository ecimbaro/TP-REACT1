import React from 'react'
import ListaProductos from './components/api/ListaProductos'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='container'>

    <ListaProductos/>
    <Footer/>
    </div>
  )
}

export default App