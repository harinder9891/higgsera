import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './pages/index';
import Contact from './pages/contact';
import About from './pages/about-us';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
