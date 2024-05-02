import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import './App.css'


function App() {
  return (
    <div className='app__container'>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default App
