
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <div className="blog-container py-16 min-h-[60vh] flex items-center justify-center">
          <div className="text-center max-w-md">
            <h1 className="text-5xl font-serif font-bold text-brand-black mb-4">404</h1>
            <p className="text-xl text-brand-gray mb-8">Página não encontrada</p>
            <p className="text-brand-gray mb-8">A página que você está procurando não existe ou foi removida.</p>
            <Link 
              to="/blog"
              className="bg-brand-copper text-white px-6 py-3 rounded hover:bg-brand-brown transition-colors inline-block"
            >
              Voltar para o Blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
