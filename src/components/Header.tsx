
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: 'Notícias', path: '/blog/noticias' },
  { name: 'Dicas', path: '/blog/dicas' },
  { name: 'Luxo', path: '/blog/luxo' },
  { name: 'Arquitetura', path: '/blog/arquitetura' },
  { name: 'Decor', path: '/blog/decor' },
  { name: 'Tendências', path: '/blog/tendencias' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="blog-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/blog" className="mr-8">
              <h1 className="text-2xl font-serif font-bold text-brand-black">
                <span className="text-brand-copper">My House</span> Campinas
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:flex">
            <nav>
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path} 
                      className="link-underline text-brand-gray hover:text-brand-copper transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <button
            className="md:hidden text-brand-gray hover:text-brand-copper"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="block py-2 px-4 hover:bg-gray-50 text-brand-gray hover:text-brand-copper rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
