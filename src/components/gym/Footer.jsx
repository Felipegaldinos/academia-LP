import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors"><Instagram /></a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors"><Facebook /></a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors"><Twitter /></a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} BlackFit. Todos os direitos reservados.</p>
        <div className="mt-2 text-xs">
          <a href="#" className="hover:text-white transition-colors mx-2">Política de Privacidade</a>
          <span className="mx-1">|</span>
          <a href="#" className="hover:text-white transition-colors mx-2">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;