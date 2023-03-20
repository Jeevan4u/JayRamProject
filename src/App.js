import Header from './components/Header/header'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Aboutcard from './components/Aboutcard/Aboutcard';
import Events from './components/EventScheduel/Events';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Music from './Pages/Music/Music';
import Aboutpage from "./Pages/About/About"
import 'bootstrap/dist/css/bootstrap.min.css';
import Tour from './Pages/Tour/Tour';
import Contact from './Pages/Contact/Contact';

const App = ()=> {
  return (
    <BrowserRouter>
          {/* <div className="App">
               <Header />  
               <Aboutcard/>
               <About/>
               <Events/>
               <Partners/>
               <Footer/>
          </div> */}
          <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/about' element={<Aboutpage/>}/>
                <Route path='/tour' element={<Tour/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
          <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
