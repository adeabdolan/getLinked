import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import NavBar from '../src/components/navbar/Navbar';
import Landing from '../src/components/pages/Homepage';
import Contact from '../src/components/pages/Contact';
import Register from '../src/components/pages/Register';

function App() {
  const [modal, setModal] = useState(false);

  return (
    <Router>
      <article>
        {window.matchMedia("(min-width:1024px)").matches && <NavBar modal={modal} setModal={setModal}/>}
        <Routes>
          <Route path='/' element={<Landing />} />    
          <Route path='/contact' element={<Contact />} />    
          <Route path='/register' element={<Register modal={modal} setModal={setModal}/>} />        
        </Routes>
      </article>
    </Router>
  )
}

export default App