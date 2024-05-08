import React,{useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'

import Contact from './Contact'
import Content from './Content'
import Services from './Services'
export const Home = () => {
    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])
    return (
        <>
            <Content/>  
            <About/>
            <Services/>
            <Contact/>
          
            </>
    )
}
