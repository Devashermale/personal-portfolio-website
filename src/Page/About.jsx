import React from 'react'
import Navbar from './Navbar'

function About() {
  return (
    
        <div>
          <Navbar/>
        <div className=" grid lg:grid-cols-2 md:grid-cols-2 md:p-14 md:m-18 sm:grid-cols-2  lg:p-14 lg:m-18 ">
          <h1 className="text-3xl flex items-center justify-center font-bold h-full  bg-indigo-50  ml-6">
            About me
          </h1>
          <p className="  ml-20">
            I am a dedicated Full Stack Developer with a focus on building
            scalable web applications using the MERN stack. Having recently
            completed my Diploma in Computer Engineering, I ve transitioned from
            learning the fundamentals to building real-world solutions,
            including hospital and visitor management systems. I am passionate
            about writing clean, efficient code and am currently seeking an
            internship where I can contribute to impactful projects while
            further honing my skills in modern web development.
          </p>
        </div>
        <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2   m-6  ">
          <div className="  gap-6 px-3 py-1 rounded-md text-sm font-medium">
            <div className=" ">
              <button className=" border-2 p-2 rounded-lg m-2 text-indigo-700 border-indigo-100">
                MongoDB
              </button>
              <button className=" border-2 p-2 rounded-lg m-2 text-indigo-700 border-indigo-100">
                Express.js
              </button>
              <button className=" border-2 p-2  rounded-lg m-2 text-indigo-700 border-indigo-100">
                React.js
              </button>
              <button className=" border-2 p-2  rounded-lg m-2 text-indigo-700 border-indigo-100 ">
                Node.js
              </button>
            </div>
            <div>
              <button className=" border-2 p-2 m-2 rounded-lg text-indigo-700 border-indigo-100">
                Tailwind
              </button>
              <button className=" border-2 p-2 m-2 rounded-lg text-indigo-700 border-indigo-100">
                javascript
              </button>
              <button className=" border-2 p-2 m-2 rounded-lg text-indigo-700 border-indigo-100">
                cascading style sheet
              </button>
            </div>
            <div>
              <button className=" border-2 p-2 m-2 rounded-lg text-indigo-700  border-indigo-100">
                Html
              </button>
              <button className=" border-2 p-2 m-2 rounded-lg text-indigo-700  border-indigo-100">
                Boottrap
              </button>
            </div>
          </div>

          <h1 className=" flex items-center justify-center text-3xl font-bold ml-6  bg-indigo-50">
            skills
          </h1>
        </div>
      </div>
  )
}

export default About