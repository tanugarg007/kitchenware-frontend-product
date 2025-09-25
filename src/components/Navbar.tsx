import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext) as any;

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];


  return (
    <nav className="bg-card shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold gradient-primary bg-clip-text text-transparent"
            >
              KitchenCraft
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              {localStorage.getItem('token') ? (
                 <Link
                 to="/logout"
                 className="text-foreground hover:text-primary transition-colors duration-200"
               >
                 Logout
               </Link>
                // <button
                //   onClick={handleLogout}
                //   className="text-foreground hover:text-primary transition-colors duration-200"
                // >
                //   Logout
                // </button>
              ) : (
                <Link
                  to="/login"
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  Login
                </Link>
              )}

              <Link to="/signup" className="btn-secondary">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1' : ''
                  }`}
                ></div>
                <div
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                ></div>
                <div
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1' : ''
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 space-y-2">
                {localStorage.getItem('token') ? (
                  <button
                    onClick={() => {
                      // handleLogout();
                      setIsOpen(false);
                    }}
                    className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-foreground hover:text-primary"
                  >
                    Login
                  </Link>
                )}

                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 btn-secondary text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
