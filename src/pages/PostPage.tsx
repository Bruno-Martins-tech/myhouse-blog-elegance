
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import PropertyAd from '../components/PropertyAd';
import SocialShare from '../components/SocialShare';
import PostCard from '../components/PostCard';
import { postContent, propertyAds, recentPosts } from '../data/sampleData';

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // In a real app, you would fetch the post data based on the slug
  const post = postContent;
  const relatedPosts = recentPosts.slice(0, 2);
  
  return (
    <>
      <Header />
      <main>
        <article 
          className="blog-container py-8" 
          itemScope 
          itemType="https://schema.org/BlogPosting"
        >
          <meta itemProp="author" content={post.meta.author} />
          <meta itemProp="datePublished" content={post.meta.date} />
          
          <div className="mb-6">
            <div className="mb-2">
              <a 
                href={`/blog/${post.meta.categorySlug}`}
                className="text-sm text-brand-copper hover:underline"
              >
                {post.meta.category}
              </a>
            </div>
            
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-black mb-4"
              itemProp="headline"
            >
              {post.title}
            </h1>
            
            <div className="flex items-center text-brand-gray mb-8">
              <span className="mr-2">Por {post.meta.author}</span>
              <span className="mx-2">•</span>
              <time dateTime="2025-05-09">{post.meta.date}</time>
            </div>
            
            <div className="rounded-lg overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto object-cover max-h-[500px]"
                loading="lazy"
              />
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <section className="prose prose-lg max-w-none">
                  {post.content.map((block, index) => {
                    if (block.type === 'heading') {
                      return (
                        <h2 key={index} className="text-2xl font-serif font-semibold text-brand-black mt-8 mb-4">
                          {block.content}
                        </h2>
                      );
                    } else {
                      return (
                        <p key={index} className="text-brand-gray mb-6 leading-relaxed">
                          {block.content}
                        </p>
                      );
                    }
                  })}
                </section>
                
                <div className="border-t border-gray-200 mt-12 pt-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-serif font-semibold text-brand-black mb-4">
                      Compartilhe este artigo
                    </h3>
                    <SocialShare url={window.location.href} title={post.title} />
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-2xl font-serif font-semibold text-brand-black mb-6">
                    Artigos Relacionados
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {relatedPosts.map(post => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3 space-y-8">
                <div className="border-b border-gray-200 mb-8 pb-4">
                  <h3 className="text-xl font-serif font-semibold text-brand-black">
                    Imóveis em Destaque
                  </h3>
                </div>
                
                <div className="space-y-8">
                  {propertyAds.map((property) => (
                    <PropertyAd key={property.id} property={property} />
                  ))}
                </div>
                
                <div className="sticky top-24">
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
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default PostPage;
