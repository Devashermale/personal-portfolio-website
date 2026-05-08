import { useState, useEffect } from "react";
import selflogo from "../assets/devalogo.jpeg";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faInstagram, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Download, ArrowRight, Code, Database, Layout, ExternalLink } from "lucide-react";

function Home() {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Devashermale")
      .then((res) => res.json())
      .then((data) => setGithubData(data))
      .catch((err) => console.error("Error fetching GitHub data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white pb-10">
      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start justify-center space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold tracking-wide">
            Available for Internships
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Devidas Shermale</span>
          </h1>
          <h3 className="text-2xl md:text-3xl text-slate-300 font-medium">
            Full Stack <span className="font-bold text-indigo-400">MERN</span> Developer
          </h3>
          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            I am a dedicated Full Stack Developer with a focus on building scalable web applications using the MERN stack. I transform complex problems into elegant, efficient, and user-friendly solutions.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="https://github.com/Devashermale" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all">
              <FontAwesomeIcon icon={faSquareGithub} className="text-4xl" />
            </a>
            <a href="https://www.linkedin.com/in/devashermale/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 hover:scale-110 transition-all">
              <FontAwesomeIcon icon={faSquareLinkedin} className="text-4xl" />
            </a>
            <a href="https://www.instagram.com/devashermale/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 hover:scale-110 transition-all">
              <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg shadow-lg shadow-indigo-500/30 transition-all flex items-center gap-2">
              Get in Touch <ArrowRight size={18} />
            </a>
            <a href="/resume.txt" download="Devidas_Shermale_Resume.txt" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium rounded-lg shadow-lg transition-all flex items-center gap-2">
              <Download size={18} /> Download Resume
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border-2 border-indigo-500/50 bg-slate-800/50 backdrop-blur-sm shadow-[0_0_50px_-12px_rgba(79,70,229,0.5)]">
            <img
              className="w-full h-full object-cover rounded-full"
              src={githubData?.avatar_url || selflogo}
              alt="Devidas Shermale"
            />
          </div>
          
          {/* GitHub Stats Card */}
          {githubData && (
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-slate-800/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-xl z-20 flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{githubData.public_repos}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Repos</p>
              </div>
              <div className="w-px bg-slate-700"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{githubData.followers}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Followers</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
            <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-slate-400 leading-relaxed">
              I am a dedicated Full Stack Developer with a focus on building scalable web applications using the MERN stack. Having recently completed my Diploma in Computer Engineering, I've transitioned from learning the fundamentals to building real-world solutions, including hospital and visitor management systems. I am passionate about writing clean, efficient code and am currently seeking an internship where I can contribute to impactful projects while further honing my skills in modern web development.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="bg-slate-800/30 py-20 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Technical Skills</h2>
            <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <Database className="text-indigo-400 w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Backend & Database</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'MongoDB', 'REST APIs'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 text-indigo-300 text-sm font-medium rounded-lg border border-indigo-500/20">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <Layout className="text-cyan-400 w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 text-cyan-300 text-sm font-medium rounded-lg border border-cyan-500/20">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <Code className="text-pink-400 w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Languages & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'Git', 'GitHub', 'VS Code', 'Postman'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 text-pink-300 text-sm font-medium rounded-lg border border-pink-500/20">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-12">
          {/* Project 1 */}
          <div className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">Visitor Pass Management System</h3>
                <p className="text-indigo-400 text-sm font-medium mt-1">MERN Stack | March 2026</p>
              </div>
              <a href="https://github.com/Devashermale" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2 bg-slate-900 hover:bg-indigo-600 text-white rounded-lg border border-slate-700 hover:border-indigo-500 transition-all">
                <ExternalLink size={16} /> View Code
              </a>
            </div>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <span><strong>QR Code Ecosystem:</strong> Implemented secure check-in flow with encrypted QR generation and validation for visitor scheduling.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <span><strong>Automated PDF Generation:</strong> Dynamically generated visitor passes with data injection (photo, host name, expiry) using document generation libraries.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <span><strong>Real-Time Monitoring Dashboard:</strong> Built live tracking of building occupancy vs expected arrivals using WebSockets for instant updates.</span>
              </li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">Workout Buddy</h3>
                <p className="text-indigo-400 text-sm font-medium mt-1">MERN Stack | February 2026</p>
              </div>
              <a href="https://github.com/Devashermale" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2 bg-slate-900 hover:bg-indigo-600 text-white rounded-lg border border-slate-700 hover:border-indigo-500 transition-all">
                <ExternalLink size={16} /> View Code
              </a>
            </div>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <span><strong>Social Fitness Ecosystem:</strong> Engineered a platform connecting users based on shared workout interests and fitness levels.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <span><strong>Real-Time Networking:</strong> Integrated Socket.io for instant messaging and workout invites to coordinate sessions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <span><strong>Peer-Matching Algorithm:</strong> Developed logic to suggest compatible workout partners based on preferences and routine data.</span>
              </li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">To-Do List Application</h3>
                <p className="text-indigo-400 text-sm font-medium mt-1">Full-Stack | February 2026</p>
              </div>
              <a href="https://github.com/Devashermale/todo-list" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2 bg-slate-900 hover:bg-indigo-600 text-white rounded-lg border border-slate-700 hover:border-indigo-500 transition-all">
                <ExternalLink size={16} /> View Code
              </a>
            </div>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <span><strong>Task Management Engine:</strong> Developed high-performance CRUD functionality for seamless lifecycle management of tasks.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <span><strong>Optimized State-Syncing:</strong> Ensured real-time UI updates, minimizing latency between user actions and database persistence.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <span><strong>Minimalist Interface:</strong> Designed a responsive UI focused on user ergonomics across mobile and desktop devices.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="max-w-4xl mx-auto px-6 py-20 mb-10">
        <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-10 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-slate-400">Currently open for internship opportunities. Send me a message!</p>
          </div>
          
          <form className="space-y-6" action="https://formspree.io/f/mdaprwdp" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-slate-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-slate-500 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Internship Opportunity"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-slate-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Hi Devidas, I'd like to discuss..."
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-slate-500 outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Devidas Shermale. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default Home;
