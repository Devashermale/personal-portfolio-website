import selflogo from '../assets/devalogo.jpeg'
import {Link} from 'react-router-dom'
function Navbar() {
  
  return (
    <>
    <div>
      <div className=" grid grid-cols-3 m-4">
        <div className=" size-8">
          <img className=" size-8" src={selflogo} alt="" />
        </div>
        <div>
          <ul className=" flex flex-3 gap-8">
            <li><Link to='/' classname ='text-slate-600 hover:text-indigo-600'>Home</Link></li>
            <li><Link to='/about'  classname ='text-slate-600 hover:text-indigo-600' >About</ Link></li>
            <li><Link to="/project" classname ='text-slate-600 hover:text-indigo-600'>Projects</Link></li>
            <li> <Link className='text-slate-600 hover:text-indigo-600' to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className=" flex items-center justify-center">
          <button className=" border-2 p-2 rounded hover:bg-blue-700"> <Link to='/contact'>Get in touch</Link></button>
        </div>
      </div>
    </div>
    </>
     
  )
}

export default Navbar