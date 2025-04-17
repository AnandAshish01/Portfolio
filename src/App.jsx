import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {

  return (

    <div>
      <Navbar/>
      <Home/>
      <Experience/><hr/>
      <Skills/><hr/>
      <Project/><hr/>
      <Contact/>
    </div>

  )
}

export default App
