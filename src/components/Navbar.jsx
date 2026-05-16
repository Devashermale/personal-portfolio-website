import selflogo from '../assets/devalogo.jpeg'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded-full border border-indigo-500 shadow-[0_0_15px_-3px_rgba(79,70,229,0.4)]" src={selflogo} alt="Logo" />
          <span className="text-xl font-bold text-white tracking-wide">Devidas<span className="text-indigo-400">.</span></span>
        </div>
        
        <div className="hidden md:block">
          <ul className="flex gap-8">
            <li><a className='text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors' href="#">Home</a></li>
            <li><a className='text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors' href="#about">About</a></li>
            <li><a className='text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors' href="#experience">Experience</a></li>
            <li><a className='text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors' href="#skills">Skills</a></li>
            <li><a className='text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors' href="#projects">Projects</a></li>
            <li><a className='text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors' href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <a href="#contact" className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-500/20 transition-all">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;