import selflogo from '../assets/devalogo.jpeg'
import {Link} from 'react-router-dom'
function Navbar() {
  
  return (
    <>
    <div>
      <div className=" grid lg:grid-cols-3 lg:m-4 md:grid-cols-3 sm:grid-cols-3 sm:items-center sm:justify-between  lg:p-4 ">
        <div className="sm:inline-flex  sm:gap-2">
          <img className=" size-8" src={selflogo} alt="" />
        </div>
        <div>
          <ul className=" flex lg:flex-3 md:flex-1 md:items-center md:justify-center sm:flex  lg:gap-4 md:gap-4 sm:gap-6 ">
            <li><Link to='/' className ='text-slate-600 text-lg  hover:text-indigo-600'>Home</Link></li>
            <li><Link to='/about'  className ='text-slate-600 text-lg  hover:text-indigo-600' >About</ Link></li>
            <li><Link to="/project" className ='text-slate-600 text-lg  hover:text-indigo-600'>Projects</Link></li>
            <li> <Link className='text-slate-600 text-lg  hover:text-indigo-600' to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className=" flex lg:items-center lg:justify-center md:items-center md:justify-center sm:justify-center sm:items-center">
          <button className=" border-2 p-2 sm:p-2 rounded hover:bg-blue-700"> <Link to='/contact'>Get in touch</Link></button>
        </div>
      </div>
    </div>
    </>
     
  )
}

export default Navbar