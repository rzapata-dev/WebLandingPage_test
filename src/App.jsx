import { useState } from 'react'


import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

import Service from './components/Service';
import Contact from './components/Contact';
import Questions from './components/Questions';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero/>
      <About/>
    
      <Service/>
      <Contact/>
      <Questions/>
      <Footer/>
      
    </>
  )
}

export default App
