
import { Link } from 'react-router-dom';

interface PropertyAdProps {
  property: {
    id: string;
    title: string;
    image: string;
    link: string;
  }
}

const PropertyAd = ({ property }: PropertyAdProps) => {
  return (
    <aside className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
      <Link to={property.link} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-serif font-semibold text-brand-black mb-3">
            {property.title}
          </h3>
          
          <button className="w-full bg-brand-copper text-white py-2 px-4 rounded hover:bg-brand-brown transition-colors">
            Ver Imóvel
          </button>
        </div>
      </Link>
    </aside>
  );
};

export default PropertyAd;
