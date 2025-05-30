import { Link, useLocation } from "react-router";

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md z-50 border-b border-indigo-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-blue-500 text-xl font-bold hover:text-indigo-500 transition-colors">
            Mohamed Abdelmaqsooud
          </Link>
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-100 hover:text-indigo-500'} px-3 py-2 transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-100 hover:text-indigo-500'} px-3 py-2 transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`${isActive('/services') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-100 hover:text-indigo-500'} px-3 py-2 transition-colors`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-100 hover:text-indigo-500'} px-3 py-2 transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 