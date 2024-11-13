import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './pages/index';
import Contact from './pages/contact';
import About from './pages/about-us';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
import DigitalMarketing from './pages/service/digital-marketing';
import WebDevelopment from './pages/service/web-development';
import SoftwareDevelopment from './pages/service/software-development';
import MobileAppDevelopment from './pages/service/mobile-app-development';
import ItConsulting from './pages/service/it-consulting';
import ECommDevelopment from './pages/service/e-commerce-solutions';
import UiUxDesign from './pages/service/ui-ux-design';
import MaintenanceSupport from './pages/service/maintenance-and-support';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/digital-marketing' element={<DigitalMarketing/>}/>
          <Route path='/web-development' element={<WebDevelopment/>}/>
          <Route path='/software-development' element={<SoftwareDevelopment/>}/>
          <Route path='/app-development' element={<MobileAppDevelopment/>}/>
          <Route path='/it-consulting' element={<ItConsulting/>}/>
          <Route path='/e-commerce-development' element={<ECommDevelopment/>}/>
          <Route path='/ui-ux-design' element={<UiUxDesign/>}/>
          <Route path='/maintenance-and-support' element={<MaintenanceSupport/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
