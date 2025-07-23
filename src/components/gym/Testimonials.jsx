import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    quote: "A BlackFit mudou meu corpo e minha mente. Os treinadores são incríveis e a estrutura é a melhor da cidade!",
    name: "Ricardo Alves",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  },
  {
    quote: "Finalmente encontrei uma academia que me motiva de verdade. Perdi 10kg em 3 meses e me sinto outra pessoa. Recomendo!",
    name: "Laura Mendes",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  },
  {
    quote: "O ambiente 24h é perfeito para minha rotina. Equipamentos novos e sempre limpos. Não troco por nada!",
    name: "Bruno Guedes",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => setIndex((prev) => (prev + 1) % testimonialsData.length);
  const prevTestimonial = () => setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  useEffect(() => {
    const timer = setTimeout(nextTestimonial, 7000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="bg-gray-900 section-padding">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12">
          O QUE NOSSOS <span className="text-yellow-400">ALUNOS DIZEM</span>
        </h2>
        <div className="relative max-w-3xl mx-auto h-72 flex items-center justify-center">
          <button onClick={prevTestimonial} className="absolute left-0 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition-colors z-10">
            <ChevronLeft />
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <p className="text-lg lg:text-xl text-gray-300 italic mb-6">"{testimonialsData[index].quote}"</p>
              <div className="flex items-center space-x-4">
                <img src={testimonialsData[index].image} alt={testimonialsData[index].name} className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400" />
                <div>
                  <p className="font-bold text-white text-xl">{testimonialsData[index].name}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button onClick={nextTestimonial} className="absolute right-0 translate-x-4 md:translate-x-12 p-2 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition-colors z-10">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;