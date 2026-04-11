import React from 'react'
import Navbar from './Navbar'

function Projects() {
  return (
    <div>
      <Navbar/>
        <div className=" m-6  md:flex-1 sm:flex-1 bg-slate-50">
        <h2 className=" text-3xl text-center font-bold">projects</h2>
        <h2 className=" block font-bold text-2xl text-indigo-600" >
          Visitor Pass Management System | MERN Stack | March 2026
        </h2>
  
        <ul className=" m-4">
          <li className=" text-slate-600 ">
            1.QR Code Ecosystem: The check-in process isn't just about scanning;
            its about the asynchronous handshake between the visitor and the
            system. Generation: Upon registration, the system generates a
            unique, encrypted string encoded into a QR code. Validation: The
            scanner (mobile or dedicated hardware) decodes the string and hits
            an API endpoint to verify the visitor's scheduled time and host
            availability.
          </li>
          <li className=" text-slate-600">
            2. Automated PDF Generation Instead of manual entry, the system uses
            libraries like jsPDF or Puppeteer to dynamically create visitor
            passes. Data Injection: Templates automatically pull the visitor's
            name, photo, host name, and expiration timestamp. Security: Passes
            can include a "Void After" timestamp to prevent pass reuse on
            subsequent days.
          </li>
          <li className=" text-slate-600">
            3.Real-Time Monitoring Dashboard This is the "brain" of the
            application. Using WebSockets (Socket.io) or Server-Sent Events
            (SSE), the dashboard updates instantly when a visitor scans in. Live
            Analytics: Tracks "Current Visitors in Building" vs. "Expected
            Arrivals." Data Management: Includes CRUD operations for
            blacklisting individuals or pre-registering VIP guests
          </li>
          <a href="">
          <button className=" px-6 py-2 rounded-full font-medium flex items-center gap-2 border-2">
            view code
          </button></a>
        </ul>
        <h2 className=" block font-bold text-2xl text-indigo-600">
          Workout Buddy | MERN Stack |February 2026
        </h2>
        <ul>
          <li className=" text-slate-600">
            1. Engineered a social fitness ecosystem that connects users based
            on shared workout interests, location, and fitness levels, fostering
            a community-driven approach to health.
          </li>
          <li className=" text-slate-600">
            2. Integrated Real-Time Networking using Socket.io to enable instant
            messaging and "workout invites," allowing buddies to coordinate
            sessions and share live progress.
          </li>
          <li className=" text-slate-600">
            3.Developed a Peer-Matching Algorithm that analyzes user-defined
            preferences and routine data to suggest compatible workout partners
            with similar schedules and goals.
          </li>
          <li className=" text-slate-600">
            4.Implemented Social Progress Sharing via a dynamic feed where users
            can post achievements, "clone" a buddy's successful routine, and
            provide motivational feedback through a "like" and "comment" system.
          </li>
          <li className=" text-slate-600">
            5.Enhanced Security & Privacy Controls by building a granular
            permissions system, giving users full control over who can view
            their fitness stats or send connection requests.
          </li>
          <a href="">
          <button className=" px-6 py-2 rounded-full font-medium flex items-center gap-2 border-2">
            view code
          </button></a>
        </ul>
        <h2 className=" block font-bold text-2xl text-indigo-600">
          To-Do List Application | Full-Stack | February 2026{" "}
        </h2>
        <ul>
          <li className=" text-slate-600">
           1. Developed a high-performance task management engine featuring full
            CRUD functionality, allowing for seamless lifecycle management of
            daily objectives.
          </li>
          <li className=" text-slate-600">
            2.Engineered an optimized state-syncing logic to ensure real-time UI
            updates, minimizing latency between user actions
            (completing/deleting tasks) and database persistence.
          </li>
          <li className=" text-slate-600">
            3.Prioritized "Clean Code" principles, utilizing modular component
            structures and descriptive naming conventions to ensure high
            maintainability and readability of the codebase.
          </li>
          <li className=" text-slate-600">
           4. Designed a minimalist, responsive interface focused on user
            ergonomics, resulting in a friction-free experience for tracking
            task completion across mobile and desktop devices.
          </li>
          <li className=" text-slate-600">
            5.Implemented robust error handling and input validation to maintain
            data integrity and provide helpful user feedback during task
            creation.
          </li>
          <a href="https://github.com/Devashermale/todo-list">
          <button className=" px-6 py-2 rounded-full font-medium flex items-center gap-2 border-2">
            view code 
          </button></a>
        </ul>
      </div>
    </div>
  )
}

export default Projects