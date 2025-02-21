import React from 'react';
import { useState } from 'react';
import logo from '/akg-skills.png';
import nsdcLogo from '/nsdc-logo.jpg';
import { Search, Menu, X } from 'lucide-react';
import { Link,useNavigate } from 'react-router-dom';


const Navbar: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If not on homepage, navigate first
    if (location.pathname !== '/') {
      await navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState({}, '', `/#${sectionId}`);
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', `/#${sectionId}`);
      }
    }
  };

  return (
    <nav className="sticky top-0 bg-white z-50 shadow-md">
      <div className="flex justify-between items-center p-2 md:p-4 max-w-7xl mx-auto">
      <Link to="/">
        <img src={logo} alt="logo" className="h-12 md:h-16" />
        </Link>
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-blue-900" />
          ) : (
            <Menu className="h-6 w-6 text-blue-900" />
          )}
        </button>
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6 text-xl text-[rgb(113,186,231)]">
            <a href="/" onClick={scrollToSection('training')} className="hover:text-blue-900 cursor-pointer transition-colors">Training</a>
            <a href='/'  onClick={scrollToSection('services')} className="hover:text-blue-900 cursor-pointer transition-colors">Services</a>
            <a href='/'  onClick={scrollToSection('CoEs')} className="hover:text-blue-900 cursor-pointer transition-colors">CoEs</a>
            <Link to="/incubator" className="hover:text-blue-900 cursor-pointer transition-colors">Incubator</Link>
          </div>
          <img src={nsdcLogo} alt="nsdc-logo" className="h-12" />
          <div className="flex items-center gap-2">
            <div 
              className="flex items-center bg-blue-900 rounded-md p-2 cursor-pointer"
              onMouseEnter={() => setIsSearchActive(true)}
              onMouseLeave={() => setIsSearchActive(false)}
            >
              <Search className="h-6 w-6 text-white" />
            </div>
            <div className="w-40 transition-all duration-300">
              {isSearchActive ? (
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-200 h-10 w-full border-none outline-none rounded-md px-3"
                  autoFocus
                />
              ) : (
                <button className="bg-blue-900 text-white px-4 h-10 w-full rounded-md hover:bg-blue-800 transition-colors duration-300">
                  Register
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden 
        fixed inset-x-0 
        bg-white 
        transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'top-16 opacity-100' : '-top-full opacity-0'}
      `}>
        <div className="flex flex-col p-4 gap-4 shadow-lg">
          <div className="flex flex-col gap-4 text-lg text-[rgb(113,186,231)]">
            <a href="/"  onClick={scrollToSection('training')}  className="hover:text-blue-900 cursor-pointer transition-colors">Training</a>
            <a href="/"  onClick={scrollToSection('services')}  className="hover:text-blue-900 cursor-pointer transition-colors">Services</a>
            <a href="/"  onClick={scrollToSection('CoEs')}  className="hover:text-blue-900 cursor-pointer transition-colors">CoEs</a>
            <Link to="/incubator" className="hover:text-blue-900 cursor-pointer transition-colors">Incubator</Link>
          </div>
          <div className="flex items-center justify-between">
            <img src={nsdcLogo} alt="nsdc-logo" className="h-10" />
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors duration-300">
              Register
            </button>
          </div>
          <div className="w-40 transition-all duration-300">
            {isSearchActive ? (
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-200 h-12 w-full border-none outline-none rounded-md px-2"
                autoFocus
              />
            ) : (
              <></>
            )}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 h-10 w-full border-none outline-none rounded-md px-3"
            />
            <button className="bg-blue-900 p-2 rounded-md">
              <Search className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
