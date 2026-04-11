import selflogo from "../assets/devalogo.jpeg";
import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  
    
  return (
    <div>
      <Navbar />
      <div>
        <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 bg-slate-50 ">
          <div className=" flex flex-col items-center justify-center w-full h-full ">
            <h1 className=" text-4xl font-bold text-slate-900">
              
              Devidas shermale
            </h1>
            <h3 className=" text-2xl text-indigo-600 font-semibold ">
              full stack <p className=" inline-block font-bold">MERN</p>
              developer
            </h3>
            <p className=" m-2 w-100 h-28 block">
              I am a dedicated Full Stack Developer with a focus on building
              scalable web applications using the MERN stack
            </p>
            <div className=" flex items-center justify-center size-16 " >   
            <a className=" size-20" href="https://github.com/Devashermale"><FontAwesomeIcon icon={faSquareGithub} size="2xl"/></a>
            <a className=" size-20" href="https://www.instagram.com/devashermale/"><FontAwesomeIcon icon={faInstagram} size="2xl" /> </a>
            <a className=" size-20" href="www.linkedin.com/in/devashermale"><FontAwesomeIcon icon={faSquareLinkedin}  size="2xl" /></a>
            </div>
        
            <button className=" border-2 p- bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg transition-all p-2 rounded">
            <Link to='/contact'>Get in touch</Link>
            </button>
  
          </div>
          <div className=" flex items-center justify-center shadow-[0_0_50px_-12px_rgba(79,70,229,0.3)]">
            <img
              className="border-indigo-100 border-2"
              src={selflogo}
              alt="meee"
            />
          </div>
        </div>
    </div>
    </div>
  );
}

export default Home;
