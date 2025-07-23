import React from 'react';
import { motion } from 'framer-motion';
import { ShieldOff } from 'lucide-react';

const Hero = ({ scrollToForm }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center section-padding overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
          alt="Pessoa se exercitando em uma academia com fundo escuro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4">
            A TRANSFORMAÇÃO QUE VOCÊ QUER <span className="text-yellow-400">COMEÇA AQUI</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-gray-300 mb-8 font-light">
            Treine na BlackFit. Resultados reais, estrutura completa.
          </p>
          <button onClick={scrollToForm} className="btn-cta btn-yellow">
            Agende sua aula grátis
          </button>
          <div className="mt-8 flex justify-center items-center space-x-4 text-gray-400">
            <ShieldOff className="w-5 h-5 text-yellow-400" />
            <span>Sem fidelidade | Sem taxas escondidas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;