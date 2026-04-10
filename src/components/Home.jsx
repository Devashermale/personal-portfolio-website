import selflogo from "../assets/devalogo.jpeg";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {

  

    
  return (
    <div>
      <Navbar />
      <div>
        <div className=" grid  grid-cols-2 bg-slate-50 /home ">
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
            <div className=" flex items-center justify-center size-16 ">
              <a className=" size-20" href="https://github.com/Devashermale">
                <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
              </a>
              <a
                className=" size-20"
                href="https://www.instagram.com/devashermale/"
              >
                <FontAwesomeIcon icon={faInstagram} size="2xl" />{" "}
              </a>
              <a className=" size-20" href="www.linkedin.com/in/devashermale">
                <FontAwesomeIcon icon={faSquareLinkedin} size="2xl" />
              </a>
            </div>

            <button className=" border-2 p- bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg transition-all p-2 rounded">
              get in touch
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
        <div className=" grid grid-cols-2  p-14 m-18 ">
          <h1 className="text-3xl flex items-center justify-center font-bold  bg-indigo-50  ml-6">
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
            further honing my skills in modern web development
          </p>
        </div>
        <div></div>
        <div className=" grid grid-cols-2  m-6  ">
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

          <h1 className=" flex items-center justify-center text-3xl font-bold ml-6 h-70 bg-indigo-50">
            skills
          </h1>
        </div>
      </div>
      <div className=" m-6 bg-slate-50">
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
      <footer className=" text-center">&copy; all copy rights reserved 2026</footer>
    </div>
  );
}

export default Home;
