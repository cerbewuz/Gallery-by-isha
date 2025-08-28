import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  // Function to scroll to the gallery section
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-soft-pink-200 rounded-full opacity-50 animate-float dark:bg-soft-pink-800"></div>
      <div className="absolute top-1/3 right-20 w-20 h-20 bg-soft-blue-200 rounded-full opacity-50 animate-float dark:bg-soft-blue-800" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-soft-black-200 rounded-full opacity-50 animate-float dark:bg-soft-black-600" style={{ animationDelay: '2s' }}></div>
      
      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          {/* Replace the h1 with the logo image */}
          <img 
            src="public/site-icon-bgremoved.png" 
            alt="Aisha Designs Logo"
            className="h-auto max-w-full animate-bounce mx-auto"
            style={{ maxHeight: '200px' }}
          />
          
          <div className="text-xl md:text-2xl text-soft-black-600 dark:text-soft-black-300 mb-8 h-10">
            <TypeAnimation
              sequence={[
                'Art that tells a story',
                2000,
                'Designs with personality',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button 
            onClick={scrollToGallery}
            className="bg-gradient-button dark:bg-gradient-button-dark text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            View My Work
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <svg className="w-6 h-6 text-soft-pink-500 dark:text-soft-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;