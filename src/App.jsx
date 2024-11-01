import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='portfolio' element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <About />
      <Portfolio 
      name="Name" 
      techstack="TechStack"
      description="Description"
      github="GitHub"/>
    </>
  )
}

export default App
