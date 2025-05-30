import type { Route } from "./+types/home";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mohamed Khaled Sayed - Portfolio" },
    { name: "description", content: "Freelance Full Stack Developer Portfolio" },
  ];
}

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <Header />
      
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Dynamic background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8 text-left">
              <div className="space-y-4">
                <h2 className="text-2xl font-medium text-purple-400 tracking-wider">FULL STACK DEVELOPER</h2>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Mohamed Khaled
                  </span>
                  <br />
                  <span className="text-white">Sayed</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-lg">
                  Crafting digital experiences through elegant code and innovative solutions
                </p>
              </div>
              
              <div className="flex gap-4">
                <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                  Get in Touch
                </a>
                <a href="/projects" className="px-8 py-3 border border-purple-500/30 rounded-full text-purple-400 font-medium hover:bg-purple-500/10 transition-all duration-300">
                  View Projects
                </a>
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="relative">
              <div className="relative group">
                {/* Glowing effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                
                {/* Image container */}
                <div className="relative">
                  <img 
                    src="/p.jpg"
                    alt="Profile Picture" 
                    loading="lazy" 
                    className="w-full max-w-md aspect-square rounded-full object-cover border-4 border-gray-900
                             transform transition-all duration-500
                             hover:scale-105 hover:rotate-3"
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">Welcome to My Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-300 text-lg">
                I'm a passionate Full Stack Developer with expertise in creating modern, responsive, and user-friendly web applications. Let me help you bring your digital vision to life.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-indigo-500 mb-6">Quick Links</h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <a href="/about" className="hover:text-blue-500 transition-colors">Learn more about me</a>
                </li>
                <li>
                  <a href="/services" className="hover:text-blue-500 transition-colors">Explore my services</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-500 transition-colors">Get in touch</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
