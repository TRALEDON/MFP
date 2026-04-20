import React from 'react'
import "./App.css"
import lg from "./assets/logo.png"
import i from "./assets/i'm.png"
const App = () => {
  return (
    <div>
      <nav><img src={lg} alt="" /> <h1 className='h1-nav'>home</h1> <h1 className='h1-nav'>about us</h1> <h1 className='h1-nav'>portfilio</h1><h1 className='h1-nav'>contact</h1></nav>
      <main><h1 className='h-m'>Hello i'm gleb kostrunov</h1><p className='p-m'>I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p><button className='M-B'>contack</button></main>
    </div>
  )
}

export default App
