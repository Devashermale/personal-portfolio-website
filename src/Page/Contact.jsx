import React from 'react'
import Navbar from './Navbar'

function Contact() {
  return (
    <div>
      <Navbar/>
         <div className="flex justify-center items-center  m-12 gap-6  bg-white ">
        <form className=" size-104 border-2 p-4 rounded border-gray-300 shadow-lg" action='https://formspree.io/f/mdaprwdp' method='POST'>
          <h1 className=" text-2xl text-center font-bold">contact me</h1>
          <label className=" text-lg font-bold">name</label>
          <input
            type=" text"
            placeholder="name "
             name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <label htmlFor="" className=" text-lg font-bold ">
            email address
          </label>
          <input
            type=" text"
            placeholder="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <label className=" text-lg font-bold">subject</label>
          <input
            type=" text"
            placeholder="subject"
            name="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <label className=" text-lg font-bold">message</label>
          <textarea
            placeholder="message"
            name=" subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className=" p-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
          >
            submit
          </button>
        </form>
       
      </div>
    </div>
  )
}

export default Contact