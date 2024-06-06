import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'




const App = () => {
  return (
    <div className='h-screen w-full bg-white  '>
      <Navbar/>
      <Landingpage/>
   <Marquee/>
    </div>
  )
}

export default App
