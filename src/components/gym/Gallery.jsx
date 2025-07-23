import React from 'react';
import { motion } from 'framer-motion';

const images = [
    { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48", alt: "Área de musculação da academia BlackFit" },
    { src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e", alt: "Espaço de treino funcional com pesos e cordas" },
    { src: "https://images.unsplash.com/photo-1576678927484-cc907957088c", alt: "Vestiários modernos e limpos" }
];

const Gallery = () => {
  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12">
          NOSSA <span className="text-yellow-400">ESTRUTURA</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;