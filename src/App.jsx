import { useState } from 'react'
import Navbar from './Componentes/Sections/Navbar.jsx'
import Presentation from "./Componentes/Sections/Presentation.jsx"
import Projects from "./Componentes/Sections/Projects.jsx"
import Tecnology from "./Componentes/Sections/Tecnology.jsx"
import AboutMe from "./Componentes/Sections/AboutMe.jsx"
import Footer from "./Componentes/Sections/Footer.jsx"


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Presentation/>
        <Projects/>
        <Tecnology/>
        <AboutMe/>
        <Footer/>
      </div>
    </>
  )
}

export default App
