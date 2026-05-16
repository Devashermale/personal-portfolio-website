import { useState, useEffect } from "react";
import selflogo from "../assets/devalogo.jpeg";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faInstagram, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Download, ArrowRight, Code, Database, Layout, ExternalLink } from "lucide-react";

function Home() {
  const [githubData, setGithubData] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch User Data
    fetch("https://api.github.com/users/Devashermale")
      .then((res) => res.json())
      .then((data) => setGithubData(data))
      .catch((err) => console.error("Error fetching GitHub data:", err));

    // Fetch Repositories
    fetch("https://api.github.com/users/Devashermale/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Exclude forks and get the top 6 recently updated projects
          const bestRepos = data.filter(r => !r.fork).slice(0, 6);
          setRepos(bestRepos);
        }
      })
      .catch((err) => console.error("Error fetching GitHub repos:", err));
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
            <a href="/DevaExperience.pdf" download="DevaExperience.pdf" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium rounded-lg shadow-lg transition-all flex items-center gap-2">
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
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              Detail-oriented Computer Engineering graduate and Certified MERN Stack Developer. Proven ability to build scalable, responsive web applications using MongoDB, Express.js, React, and Node.js. Skilled in AI-assisted development and prompt engineering to optimize code quality and project delivery. Strong foundation in full-stack architecture, secure authentication, and database management.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Currently working as a <strong>Full-Stack Developer Intern at The Entrepreneurship Network</strong>, contributing to scalable web applications and leveraging AI-assisted coding to improve overall development efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="bg-slate-800/30 py-20 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Experience</h2>
            <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-slate-800/80 border border-slate-700 p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Full-Stack Developer Intern</h3>
                <p className="text-lg text-indigo-400 font-medium mt-1">The Entrepreneurship Network</p>
              </div>
              <div className="mt-4 md:mt-0 px-4 py-2 bg-slate-900 text-slate-300 rounded-lg border border-slate-700 text-sm font-medium">
                April 2026 – Present
              </div>
            </div>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <p>Contributing to the development of scalable web applications using the MERN stack.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <p>Collaborating with cross-functional teams to design, test, and deploy new features in an Agile environment.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <p>Leveraging AI-assisted coding and prompt engineering to optimize backend logic and improve overall development efficiency.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-20 border-b border-slate-800">
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
                {['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 text-indigo-300 text-sm font-medium rounded-lg border border-indigo-500/20">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <Layout className="text-cyan-400 w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-900 text-cyan-300 text-sm font-medium rounded-lg border border-cyan-500/20">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <Code className="text-pink-400 w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Tools & AI</h3>
              <div className="flex flex-wrap gap-2">
                {['Prompt Engineering', 'Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Netlify'].map((skill) => (
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
          <p className="text-slate-400 mt-4">Dynamically fetched from my GitHub</p>
        </div>

        {repos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repos.map((repo) => (
              <div key={repo.id} className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors capitalize leading-tight">
                      {repo.name.replace(/-/g, ' ')}
                    </h3>
                    <div className="flex gap-3">
                      {repo.homepage && (
                        <a href={repo.homepage} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" title="Live Preview">
                          <ExternalLink size={24} />
                        </a>
                      )}
                      <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors" title="Source Code">
                        <FontAwesomeIcon icon={faSquareGithub} className="text-2xl" />
                      </a>
                    </div>
                  </div>
                  <p className="text-indigo-400 text-sm font-medium mb-4">
                    {repo.language || 'Multiple Languages'} | Last Updated: {new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {repo.description || "An innovative project developed by Devidas exploring modern web technologies and building scalable solutions."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noreferrer" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-lg transition-all text-sm font-medium flex items-center gap-2">
                      <Layout size={16} /> Live Demo
                    </a>
                  )}
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="px-5 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg border border-slate-600 hover:border-slate-500 transition-all text-sm font-medium flex items-center gap-2">
                    <Code size={16} /> Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-400">Loading projects from GitHub...</div>
        )}
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
