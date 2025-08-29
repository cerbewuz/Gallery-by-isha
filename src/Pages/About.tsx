import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Drawing', icon: '✏️', level: 90 },
    { name: 'Painting', icon: '🎨', level: 85 },
    { name: 'Digital Art', icon: '💻', level: 90 },
    { name: 'Design', icon: '✨', level: 85 },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 flex items-center">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-text dark:bg-gradient-text-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-soft-pink-200 to-soft-blue-200 dark:from-soft-pink-800 dark:to-soft-blue-800 rounded-full overflow-hidden shadow-xl flex items-center justify-center text-6xl">
              <img
                src="/aisha-profile-picture.jpg"
                alt="Profile Picture"
                className="w-full h-full object-cover"
                style={{ display: 'block' }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              </div>
            </div>
            </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-soft-black-800 dark:text-soft-black-200">Hello! I'm Aisha</h3>
            <p className="text-soft-black-600 dark:text-soft-black-400 mb-6 leading-relaxed">
I’m a Filipina digital artist and designer driven by a passion for crafting meaningful, beautiful works that spark creativity and serve as a powerful expression of who I am.
            </p>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <span className="w-20 font-medium text-soft-black-700 dark:text-soft-black-300">{skill.name}</span>
                  <div className="flex-1 ml-4 h-3 bg-soft-black-200 dark:bg-soft-black-600 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-button dark:bg-gradient-button-dark rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;