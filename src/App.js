
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/navigation/Header';
import Home from './component/menu/Home';
import About from './component/menu/About';
import Resume from './component/menu/Resume';
import Services from './component/menu/Services';
import Contact from './component/menu/Contact';

function App() {
  return (
    <div className="App">
      <Header />
     <Routes>
      <Route path='/my-portfolio' element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='/resume' element={<Resume />}/>
      <Route path='/service' element={<Services />}/>
      <Route path='/contact' element={<Contact />}/>
     </Routes>
    </div>
  );
}

export default App;
