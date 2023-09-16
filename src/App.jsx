import React from 'react'
import { BrowserRouter, Routes , Route,Link } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/vans/Vans'
import "./Server"
import VansDetails from './pages/vans/VanDetails'
import Layout from './components/Layout'
import Dashboard from './pages/host/Dashboard'
import HostLayout from "./components/HostLayout"
import Income from './pages/host/Income'
import Review from './pages/host/Reviews'
import Login from './pages/host/Login'
import HostVanDetails from './pages/host/HostVanDetails'
import Hostvans from "./pages/host/HostVans"
import HostVanPhoto from './pages/host/HostVanPhoto'
import HostVanPrice from './pages/host/HostVanPrice'
import HostVanInfo from './pages/host/HostVanInfo'
import NotFound from './pages/NotFound'


function App() {
  return (
    <BrowserRouter>

    <Routes>
      //route for user 
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='vans'  element={<Vans />} />
      <Route path='vans/:id'  element={<VansDetails />} />

      //route for host 
      <Route path='host' element={<HostLayout />}>
      <Route index element = {<Dashboard />} />
      <Route path='income' element={<Income />} />
      <Route path='reviews' element={<Review />} />
      <Route path='login' element={<Login />} />
      <Route path="vans" element={<Hostvans/>}/>

      
      //nested route for van details
      <Route path="vans/:id" element={<HostVanDetails />}>
      <Route index element={<HostVanInfo />} />
      <Route path="pricing" element={<HostVanPrice />} />
      <Route path="photos" element={<HostVanPhoto />}/>
      </Route>
      </Route>
       <Route path='*' element={<NotFound />} />
      </Route>

    </Routes>
    </BrowserRouter>
   
  )
}

export default App