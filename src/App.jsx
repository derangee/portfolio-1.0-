import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Download, 
  Code, 
  Database, 
  Globe, 
  Award,
  Calendar,
  MapPin,
  Moon,
  Sun,
  ChevronDown,
  User,
  Briefcase,
  FolderOpen,
  Trophy
} from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    'Programming Languages': ['C', 'C++', 'Python', 'JavaScript'],
    'Development Skills': ['TypeScript', 'Next.js', 'Node.js', 'Express.js', 'TailwindCSS'],
    'Databases': ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
    'Tools & Libraries': ['Git & GitHub', 'Postman', 'Numpy', 'Pandas']
  };

  const projects = [
    {
      name: 'VibeUI',
      description: 'AI-powered interface for generating customizable React components using brand-specific styles and natural language prompts.',
      tech: ['React.js', 'FastAPI', 'LangChain', 'PostgreSQL', 'Firebase'],
      features: ['Responsive dashboard', 'Brand onboarding', 'Component customization', 'User-specific workflows']
    },
    {
      name: 'Garuda',
      description: 'AI-powered resume tailoring platform that optimizes resumes for better ATS scores with AI-based mock interview system.',
      tech: ['React.js', 'Firebase', 'Node.js', 'TailwindCSS'],
      features: ['Resume optimization', 'ATS scoring', 'Mock interviews', 'Dynamic question generation']
    },
    {
      name: 'Campus Connect',
      description: 'Minimal web app for campus-related issue reporting and request management with authentication and AI chat.',
      tech: ['React.js', 'Firebase', 'Express.js', 'Node.js', 'TailwindCSS'],
      features: ['Issue reporting', 'Authentication', 'AI-powered chat', 'Profanity detection']
    }
  ];

  const experiences = [
    {
      company: 'Uniworld Studios Pvt. Ltd.',
      role: 'Web Development Internship',
      period: 'Jun 2025 - Aug 2025',
      points: [
        'Developed and optimized features in a Javascript environment during onsite internship',
        'Assisted in database design through Entity-Relationship (ER) diagrams',
        'Collaborated within SDLC, ensuring adherence to best practices in coding, testing, and deployment'
      ]
    },
    {
      company: 'Microsoft Student Community SRMAP',
      role: 'Web Development & Management',
      period: 'Nov 2024 - July 2025',
      points: [
        'Developed and maintained official website, achieving 40% improvement in page load speed',
        'Engineered responsive interfaces using React.js and Firebase with 95% mobile responsiveness',
        'Collaborated with 5+ cross-functional teams to enhance functionality and user satisfaction'
      ]
    }
  ];

  const achievements = [
    '100% Merit Scholarship from SRM University AP for B.Tech in CSE',
    'Associate in Norman Lab, Next Tech Lab - QS award-winning student-run lab',
    'Tech Head of Google Developers Group (GDG) SRMAP',
    '1st position in <Hack>x<MSC> Hackathon',
    '3rd position in 9-Hacks Hackathon by Next Tech Lab',
    'Qualified in Internal Round at Smart India Hackathon (SIH) 2024'
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'backdrop-blur-md bg-white/10 border-b border-white/20' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
            Daksh Vashishtha
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-1 rounded-lg transition-all hover:bg-white/20 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg backdrop-blur-md transition-all hover:scale-110 ${darkMode ? 'bg-gray-800/50 text-yellow-400' : 'bg-white/50 text-gray-600'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Daksh
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Aspiring Software Developer | Web Developer
            </p>
            <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Passionate about creating innovative solutions with modern technologies. 
              Currently pursuing B.Tech in CSE with a CGPA of 9.58/10.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 rounded-xl font-medium border-2 transition-all hover:scale-105 ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              Get in Touch
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="mailto:dakshvashishtha.16@gmail.com" className={`p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-white/70'}`}>
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/dakshvashishtha" className={`p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-white/70'}`}>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/derangee" className={`p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-white/70'}`}>
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className={`w-8 h-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <User className="w-8 h-8 text-blue-600" />
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate software developer currently pursuing B.Tech in Computer Science and Engineering 
                at SRM University, Andhra Pradesh, with an outstanding CGPA of 9.58/10.
              </p>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                My journey in tech is driven by a love for creating innovative solutions that make a real impact. 
                I specialize in full-stack web development, AI integration, and building user-centric applications.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className={`p-4 rounded-xl backdrop-blur-md ${darkMode ? 'bg-gray-700/50' : 'bg-white/50'}`}>
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>B.Tech CSE</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>CGPA: 9.58/10</p>
                </div>
                <div className={`p-4 rounded-xl backdrop-blur-md ${darkMode ? 'bg-gray-700/50' : 'bg-white/50'}`}>
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Focus</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Full-Stack</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>AI Integration</p>
                </div>
              </div>
            </div>
            <div className={`p-8 rounded-2xl backdrop-blur-md ${darkMode ? 'bg-gray-700/30' : 'bg-white/30'} border border-white/20`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>100% Merit Scholarship Recipient</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-green-600" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Tech Head at GDG SRMAP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Multiple Hackathon Winner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Work Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`p-8 rounded-2xl backdrop-blur-md ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} border border-white/20 hover:scale-105 transition-all duration-300`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className={`flex items-start gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <FolderOpen className="w-8 h-8 text-blue-600" />
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`p-6 rounded-2xl backdrop-blur-md ${darkMode ? 'bg-gray-700/30' : 'bg-white/30'} border border-white/20 hover:scale-105 transition-all duration-300 group`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.name}</h3>
                  <ExternalLink className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
                
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`px-3 py-1 rounded-lg text-xs font-medium ${darkMode ? 'bg-gray-600/50 text-gray-300' : 'bg-gray-200/50 text-gray-700'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-8 h-8 text-blue-600" />
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Technical Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className={`p-6 rounded-2xl backdrop-blur-md ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} border border-white/20 hover:scale-105 transition-all duration-300`}>
                <div className="flex items-center gap-2 mb-4">
                  {category === 'Programming Languages' && <Code className="w-5 h-5 text-blue-600" />}
                  {category === 'Development Skills' && <Globe className="w-5 h-5 text-green-600" />}
                  {category === 'Databases' && <Database className="w-5 h-5 text-purple-600" />}
                  {category === 'Tools & Libraries' && <Award className="w-5 h-5 text-orange-600" />}
                  <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{category}</h3>
                </div>
                <div className="space-y-2">
                  {skillList.map((skill, i) => (
                    <div key={i} className={`px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}>
                      <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Trophy className="w-8 h-8 text-blue-600" />
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Achievements</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className={`p-6 rounded-2xl backdrop-blur-md ${darkMode ? 'bg-gray-700/30' : 'bg-white/30'} border border-white/20 hover:scale-105 transition-all duration-300`}>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h2>
          <p className={`text-xl mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a href="mailto:dakshvashishtha.16@gmail.com" className={`p-6 rounded-2xl backdrop-blur-md ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} border border-white/20 hover:scale-105 transition-all duration-300 group`}>
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>dakshvashishtha.16@gmail.com</p>
            </a>
            
            <a href="tel:+917428156357" className={`p-6 rounded-2xl backdrop-blur-md ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} border border-white/20 hover:scale-105 transition-all duration-300 group`}>
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phone</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>+91 7428156357</p>
            </a>
            
            <a href="https://linkedin.com/in/dakshvashishtha" className={`p-6 rounded-2xl backdrop-blur-md ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} border border-white/20 hover:scale-105 transition-all duration-300 group`}>
              <Linkedin className="w-8 h-8 text-blue-700 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>dakshvashishtha</p>
            </a>
            
            <a href="https://github.com/derangee" className={`p-6 rounded-2xl backdrop-blur-md ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} border border-white/20 hover:scale-105 transition-all duration-300 group`}>
              <Github className="w-8 h-8 text-gray-700 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>derangee</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Daksh Vashishtha. Built with React & TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;