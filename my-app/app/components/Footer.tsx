import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-indigo-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-500 mb-4">Mohamed Khaled Sayed</h3>
            <p className="text-gray-300">Freelance Full Stack Developer specializing in modern web applications.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-indigo-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-indigo-500 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-indigo-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-indigo-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-500 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.linkedin.com/in/mohamed-khaled-sayed" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-500 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/mohamed-khaled-sayed" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-500 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="mailto:m.abdelmaqsooud@gmail.com" 
                  className="text-gray-300 hover:text-indigo-500 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-500/10 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Mohamed Khaled Sayed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 