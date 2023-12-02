import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';





const App = () => {
  return (
   <>
   <BrowserRouter>
   <Header/>
    <Routes>
      
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/About" element={<About/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  {/* <Notes/> */}
  </>
  )
}

export default App
