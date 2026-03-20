import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Service from './Components/Service/Service'
import Project from './Components/Project/Project'

import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Service/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
