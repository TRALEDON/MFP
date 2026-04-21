import React from 'react'
import "./App.css"
import lg from "./assets/logo.png"
import i from "./assets/i'm.png"
import p from "./assets/pencil.png"
const App = () => {
  return (
    <div>
      <nav><img src={lg} alt="" /> <h1 className='h1-nav'>home</h1> <h1 className='h1-nav'>about us</h1> <h1 className='h1-nav'>portfilio</h1><h1 className='h1-nav'>contact</h1></nav>
      <main> <div className='d-m'><h1 className='h-m'>Hello i'm gleb kostrunov</h1><p className='p-m'>I've been ding web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p><button className='M-B'>contack</button></div>
      <div className='dd-m'><img src={i} alt="" /></div></main>
      <div className="c-m">
      <div className="card">
      <img src={p} alt="" />
      <p>poduct design</p>
      </div>
       <div className="card">
      <img src={p} alt="" />
      <p>poduct design</p>
      </div>
       <div className="card">
      <img src={p} alt="" />
      <p>poduct design</p>
      </div> <div className="card">
      <img src={p} alt="" />
      <p>poduct design</p>
      </div>
       <div className="card">
      <img src={p} alt="" />
      <p>poduct design</p>
      </div>
      </div>
    </div>
    
  )
}

export default App
