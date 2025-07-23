import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/gym/Hero';
import Benefits from '@/components/gym/Benefits';
import Gallery from '@/components/gym/Gallery';
import Testimonials from '@/components/gym/Testimonials';
import Offer from '@/components/gym/Offer';
import Location from '@/components/gym/Location';
import Footer from '@/components/gym/Footer';
import WhatsAppButton from '@/components/gym/WhatsAppButton';

function App() {
  const scrollToForm = () => {
    const formSection = document.getElementById('inscricao');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>BlackFit - A transformação que você quer começa aqui</title>
        <meta name="description" content="Treine na BlackFit. Resultados reais, estrutura completa. Agende sua aula grátis e comece sua transformação." />
      </Helmet>
      <div className="bg-black text-white font-sans">
        <main>
          <Hero scrollToForm={scrollToForm} />
          <Benefits />
          <Gallery />
          <Testimonials />
          <Offer scrollToForm={scrollToForm} />
          <Location />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;