// App.js

import './App.css'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Content from './Components/Content'
import About from './Components/About'
import Services from './Components/Services'

import Footer from './Components/Footer'
import AboutUs from './Components/About-us'
import Slider from './Components/Slider'
import Career from './Components/Careers'
import { ScrollRestoration } from 'react-router-dom'
function App() {
  return (
    <>
                <ScrollRestoration/>

      <Navbar />
      {/* <Content />
      <Heading></Heading>
      <About /> */}
    {/* <Career/> */}
      {/* <Services /> */}
      <AboutUs></AboutUs>
      <Slider/>
      {/* <Contact /> */}
      <Footer></Footer>
    </>
  )
}

export default App
