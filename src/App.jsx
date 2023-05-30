import './App.css'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    
    
    
    
    
    
    
    
    {/* Routes */}
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App
