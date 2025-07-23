import React from 'react';

const Location = () => {
  return (
    <section className="bg-black section-padding">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          VENHA NOS <span className="text-yellow-400">CONHECER</span>
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Rua da Superação, 123 - Bairro dos Campeões, São Paulo - SP
        </p>
        <div className="w-full h-96 bg-gray-800 border-2 border-gray-700">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197537335688!2d-46.65657188502229!3d-23.561358684682594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886568474!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;