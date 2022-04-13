
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className='app ' >
    
    
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="About" element={<About />} />
      <Route path="Skills" element={<Skills />} />
      <Route path="Work" element={<Work />} />
      <Route path="Contact" element={<Contact />} />
    
     </Routes>
     <Footer/>
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;
