import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Content from './Components/Content.jsx'
import About from './Components/About.jsx'
import Career from './Components/Careers.jsx'
import AboutUs from './Components/About-us.jsx'
import Services from './Components/Services.jsx'
import { Home } from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'

const router=createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<Layout/>}>
  <Route path='' element={<Home/>}>
  </Route>
    <Route path='services' element={<Services/>}/>
    <Route path='contact' element={<Contact/>}/>
  <Route path='' element={<Content/>}/>
<Route path='/about-us' element={<AboutUs/>}/>
<Route path='' element={<Services/>}/>
<Route path='/careers' element={<Career/>}/>
<Route path='' element={<Contact/>}/>

</Route>

))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
