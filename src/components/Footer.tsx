
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-black text-white py-12 mt-16">
      <div className="blog-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-brand-copper">My House Campinas</h3>
            <p className="text-gray-300">
              Blog imobiliário de alto padrão com foco em experiência visual sofisticada 
              e conteúdo exclusivo sobre o mercado de luxo.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-brand-copper">Categorias</h4>
            <ul className="space-y-2">
              <li><Link to="/blog/noticias" className="text-gray-300 hover:text-brand-copper transition-colors">Notícias</Link></li>
              <li><Link to="/blog/dicas" className="text-gray-300 hover:text-brand-copper transition-colors">Dicas</Link></li>
              <li><Link to="/blog/luxo" className="text-gray-300 hover:text-brand-copper transition-colors">Luxo</Link></li>
              <li><Link to="/blog/arquitetura" className="text-gray-300 hover:text-brand-copper transition-colors">Arquitetura</Link></li>
              <li><Link to="/blog/decor" className="text-gray-300 hover:text-brand-copper transition-colors">Decor</Link></li>
              <li><Link to="/blog/tendencias" className="text-gray-300 hover:text-brand-copper transition-colors">Tendências</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-brand-copper">Contato</h4>
            <p className="text-gray-300">contato@myhousecampinas.com.br</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-copper">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-copper">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-copper">
                <span className="sr-only">WhatsApp</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.6 19.6 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.8A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c1 .3 1.9.6 2.8.7A2 2 0 0 1 22 17Z"/><path d="M14 2a8 8 0 0 1 8 8"/><path d="M14 6a4 4 0 0 1 4 4"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {year} My House Campinas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
