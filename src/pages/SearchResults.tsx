
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import SearchBar from '../components/SearchBar';
import { recentPosts } from '../data/sampleData';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // In a real app, you would search through your posts with the query
  const filteredPosts = query
    ? recentPosts.filter(
        post => 
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase())
      )
    : [];
  
  return (
    <>
      <Header />
      <main>
        <section className="blog-container py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-black">
              Resultados da busca
            </h1>
            <p className="text-brand-gray mt-2">
              {filteredPosts.length} resultados encontrados para "{query}"
            </p>
          </div>
          
          <div className="mb-8">
            <SearchBar />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <h3 className="text-xl text-brand-gray mb-4">
                  Nenhum artigo encontrado para esta busca.
                </h3>
                <p>
                  Tente usar termos diferentes ou mais gerais.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SearchResults;
