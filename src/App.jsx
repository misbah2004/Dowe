import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import { BrowserRouter , Routes , Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    <Footer/>  
    </BrowserRouter>

  )
}

export default App
