import { useState } from 'react'
import{BrowserRouter,Routes,Route}  from "react-router-dom"
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
