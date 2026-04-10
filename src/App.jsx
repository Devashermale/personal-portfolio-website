import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Home from './Page/Home'
import About from './Page/About'
import Project from './Page/Projects'
import Contact from './Page/Contact'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
         <Route path='/contact' element ={<Contact/>}/>
      </Routes>
    </div>
  )
}
export default App
