import React from 'react';

const PlaceCard = ({ place }) => {
  const { name, location, price, category, image, tags, delay } = place;

  return (
    <div className={`group cursor-pointer ${delay ? delay : ''}`}>
      <div className="relative bg-surface-container-lowest rounded-lg p-4 atmospheric-shadow group-hover:-translate-y-4 transition-transform duration-500 overflow-hidden">
        <div className="aspect-[4/5] rounded-lg overflow-hidden mb-6 relative">
          <img alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={image} />
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest">{category}</div>
        </div>
        <div className="px-2">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl font-bold text-primary">{name}</h4>
            <p className="text-primary font-bold">${price}<span className="text-on-surface-variant font-normal text-sm">/nt</span></p>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
            <span className="material-symbols-outlined text-xs">location_on</span>
            {location}
          </div>
          <div className="flex gap-2">
            {tags.map(tag => (
              <span key={tag} className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedPlaces = () => {
  const places = [
    {
      name: 'Soneva Jani',
      location: 'Medhufaru, Maldives',
      price: 2400,
      category: 'Tropical',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDi7xyZPhrg0BowCAAng9yoHsw1mDZqO7wJDYyRjl1h99fRNQZC9XINLJsHOUekwDNJqlCKy4tBDjXEVEasHIJlFoGAVH_2_vLc69LHPvsWWVZbBwtx5uAvm-raz3gdlSmg6D2yTCTWY-SQuTWDlM7AVqAAZVFGulz0Bi4RPQROy49geFjP_XItagyaUZv6jBAF-cggQvl9dKfM7-2J9ZZbkCBqe3HUVlP_wosgAFnuotc7q69E3hpzo5RMuh4U5ZJQZ1cd5IQRJQFp',
      tags: ['Luxury', 'Private']
    },
    {
      name: 'The Chedi',
      location: 'Andermatt, Switzerland',
      price: 1150,
      category: 'Alpine',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEUDXncaJxIswAC29Yg1dzq_f-ekTj1oSsGiFy4Q5iG_8iIEvPE1AP1cf1lHNSCLq10a_tlJf3_xC_pbo8PP-8KUOpfaxFQW7AJQ7HQCJz7_mIISNub1IGoW_tJf0gZVPH39JVvR06jnRwrQfWLRVQVBhRVdbuqRmzykRWCkkpydG9B_jFKnVPWXq4X86yApiWnN0zSsMkD165MAHJYEt5mt5zH70FdtxvwS6JlceSeEscwEpFf43BFMkNCxfq_eD7r7x-zbHl2Wm7',
      tags: ['Wellness', 'Ski'],
      delay: 'translate-y-8 md:translate-y-12'
    },
    {
      name: 'Hoshinoya',
      location: 'Kyoto, Japan',
      price: 980,
      category: 'Heritage',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdvs0-qgn1eFF_g2j3DU8iT38knQINibJqYASxBy6uiBz7-ViIPZDKJsO1mYdGGby8Hn-ttb1GZ4BCGQ3GY8vYYrbf4UX1b9N7anadOW8YxV-2zPv2lsFGKHhS9B_L1poELkgE1GGERqibpqRy4JFYFYkrPidgxZ8xEi5ReuN6JMkVI2xUnTXzqqwvy99TC_ORRzN1UtvezXCBOgXTBzicU8ttcytSqUxUOiw0sQHzS5HDEOlTK9BpruywvzSwJe6JtW9s-AWWrBY_',
      tags: ['Culture', 'Zen']
    }
  ];

  return (
    <section className="px-6 md:px-12 py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-4xl font-black text-primary tracking-tight mb-2">Featured Escapes</h3>
            <p className="text-on-surface-variant max-w-md">Hand-selected destinations that redefine the meaning of luxury and solitude.</p>
          </div>
          <button className="bg-surface-container-highest text-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {places.map(place => (
            <PlaceCard key={place.name} place={place} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlaces;
