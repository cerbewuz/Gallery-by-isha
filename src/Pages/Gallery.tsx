import { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  type Artwork = {
    id: number;
    title: string;
    category: string;
    image: string;
    color: string;
  };

  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'food', label: 'Food' },
    { id: 'cosmetics', label: 'Cosmetics' },
    { id: 'branding', label: 'Branding' },  
    { id: 'drinks', label: 'Drinks' },
  ];

  const artworks = [
    { id: 1, title: 'Coke', category: 'branding', subcategory: 'drinks', image: '/coke.jpg', color: 'bg-soft-blue-100 dark:bg-soft-blue-900' },
    { id: 2, title: 'Tiramisu', category: 'food', image: '/tiramisu.jpg', color: 'bg-soft-pink-100 dark:bg-soft-pink-900' },
    { id: 3, title: 'Makeup', category: 'cosmetics', image: '/rhode-makeup.jpg', color: 'bg-soft-pink-100 dark:bg-soft-pink-900' },
    { id: 4, title: 'Drink', category: 'drinks', image: '/drink.jpg', color: 'bg-soft-blue-100 dark:bg-soft-blue-900' },
    { id: 5, title: 'Emotion', category: 'art', image: '/emotion-1.jpg', color: 'bg-soft-pink-100 dark:bg-soft-pink-900' },
    { id: 6, title: 'Burger', category: 'food', image: '/burger.jpg', color: 'bg-soft-blue-100 dark:bg-soft-blue-900' },
  ];

  const filteredArtworks = activeCategory === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === activeCategory);

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  const closeArtwork = () => {
    setSelectedArtwork(null);
  };

  return (
    <section id="gallery" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-text dark:bg-gradient-text-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Gallery
        </motion.h2>

        <motion.p 
          className="text-center text-soft-black-600 dark:text-soft-black-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore my creative journey through these selected works. Each piece tells a story and represents a moment of inspiration.
        </motion.p>
        
        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-button dark:bg-gradient-button-dark text-white shadow-lg'
                  : 'bg-white text-soft-black-600 hover:bg-soft-pink-50 hover:text-soft-pink-500 dark:bg-soft-black-700 dark:text-soft-black-300 dark:hover:bg-soft-pink-900 dark:hover:text-soft-pink-300 shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        
        {/* Artwork Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredArtworks.map((artwork, index) => (
            <motion.div 
              key={artwork.id}
              className="bg-white dark:bg-soft-black-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => handleArtworkClick(artwork)}
            >
              <div className={`h-48 flex items-center justify-center text-6xl ${artwork.color}`}>
                <img src={artwork.image} alt={artwork.title} className="h-full w-full object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-soft-black-800 dark:text-soft-black-200 mb-1">{artwork.title}</h3>
                <span className="text-sm text-soft-pink-500 dark:text-soft-pink-400 capitalize">{artwork.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Artwork Detail Modal */}
  {selectedArtwork && (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeArtwork}
    >
      <motion.div
        className="bg-white dark:bg-soft-black-800 rounded-xl p-6 w-64 h-96 flex flex-col items-center relative"
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 40 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg bg-soft-pink-50 dark:bg-soft-pink-900 text-2xl text-soft-black-600 dark:text-soft-black-200 hover:bg-soft-pink-100 dark:hover:bg-soft-pink-700 hover:text-soft-pink-500 dark:hover:text-soft-pink-400 transition"
          onClick={closeArtwork}
          aria-label="Close"
        >
          ×
        </button>
        <img
          src={selectedArtwork.image}
          alt={selectedArtwork.title}
          className="mb-4 w-full h-72 object-contain" // increased height from h-56 to h-72
        />
        <h3 className="font-semibold text-lg text-soft-black-800 dark:text-soft-black-200 mb-1 text-center">{selectedArtwork.title}</h3>
        <span className="text-sm text-soft-pink-500 dark:text-soft-pink-400 capitalize text-center">{selectedArtwork.category}</span>
      </motion.div>
    </motion.div>
  )}
      </div>
    </section>
  );
};

export default Gallery;
