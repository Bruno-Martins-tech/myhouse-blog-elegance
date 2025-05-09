
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import SearchBar from '../components/SearchBar';
import PropertyAd from '../components/PropertyAd';
import { recentPosts, propertyAds } from '../data/sampleData';

const categoryMap: Record<string, string> = {
  'noticias': 'Notícias',
  'dicas': 'Dicas',
  'luxo': 'Luxo',
  'arquitetura': 'Arquitetura',
  'decor': 'Decor',
  'tendencias': 'Tendências'
};

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const categoryName = categorySlug ? categoryMap[categorySlug] || categorySlug : '';
  
  // Filter posts by category for a real app
  const filteredPosts = categorySlug 
    ? recentPosts.filter(post => post.categorySlug === categorySlug)
    : recentPosts;
  
  return (
    <>
      <Header />
      <main>
        <section className="blog-container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-black">
                {categoryName}
              </h1>
              <p className="text-brand-gray mt-2">
                Conteúdo especializado sobre {categoryName.toLowerCase()} no mercado imobiliário
              </p>
            </div>
            <div className="w-full md:max-w-xs">
              <SearchBar />
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12">
                    <h3 className="text-xl text-brand-gray">
                      Nenhum artigo encontrado nesta categoria.
                    </h3>
                  </div>
                )}
              </div>
            </div>
            
            <div className="lg:w-1/3 space-y-8">
              <div className="border-b border-gray-200 mb-8 pb-4">
                <h2 className="text-2xl font-serif font-semibold text-brand-black">
                  Imóveis em Destaque
                </h2>
              </div>
              
              <div className="space-y-8">
                {propertyAds.map((property) => (
                  <PropertyAd key={property.id} property={property} />
                ))}
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-serif font-semibold text-brand-black mb-3">
                  Newsletter
                </h3>
                <p className="text-brand-gray mb-4">
                  Receba as últimas novidades sobre o mercado imobiliário de alto padrão.
                </p>
                <form>
                  <input 
                    type="email" 
                    placeholder="Seu e-mail" 
                    className="w-full px-3 py-2 border border-gray-200 rounded mb-3 focus:outline-none focus:ring-1 focus:ring-brand-copper"
                    required
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-brand-copper text-white py-2 px-4 rounded hover:bg-brand-brown transition-colors"
                  >
                    Inscrever-se
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
