import selflogo from '../assets/devalogo.jpeg'
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
            <li><a  className='text-slate-600 hover:text-indigo-600' href="/home">Home</a></li>
            <li><a className='text-slate-600 hover:text-indigo-600' href="/about" >About</a></li>
            <li> <a className='text-slate-600 hover:text-indigo-600' href="/skills">Skills</a></li>
            <li><a  className='text-slate-600 hover:text-indigo-600' href="/projects">Projects</a></li>
            <li> <a  className='text-slate-600 hover:text-indigo-600' href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className=" flex items-center justify-center">
          <button className=" border-2 p-2 rounded hover:bg-blue-700">Get in touch</button>
        </div>
      </div>
    </div>
    </>
     
  )
}

export default Navbar