import { useState } from 'react'
import Navbar from './Componentes/Sections/Navbar.jsx'
import Presentation from "./Componentes/Sections/Presentation.jsx"
import Projects from "./Componentes/Sections/Projects.jsx"
import Tecnology from "./Componentes/Sections/Tecnology.jsx"
import AboutMe from "./Componentes/Sections/AboutMe.jsx"
import Footer from "./Componentes/Sections/Footer.jsx"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
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
/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */

export default App
