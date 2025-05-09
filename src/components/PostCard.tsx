
import { Link } from 'react-router-dom';

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  author: string;
  date: string;
  image: string;
}

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'featured';
}

const PostCard = ({ post, variant = 'default' }: PostCardProps) => {
  const isFeatured = variant === 'featured';
  
  return (
    <article className={`group overflow-hidden ${isFeatured ? 'col-span-2 row-span-2' : ''}`}>
      <Link 
        to={`/blog/${post.categorySlug}/${post.slug}`}
        className="block h-full"
      >
        <div className="relative h-60 md:h-64 overflow-hidden rounded-lg mb-4">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 p-3">
            <span className="bg-brand-copper text-white px-3 py-1 text-xs font-medium rounded">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-serif font-semibold group-hover:text-brand-copper transition-colors line-clamp-2`}>
            {post.title}
          </h3>
          
          <p className="text-brand-gray text-sm">
            Por {post.author} • {post.date}
          </p>
          
          {isFeatured && (
            <p className="text-brand-gray line-clamp-3 mt-2">
              {post.excerpt}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
