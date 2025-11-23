import React from 'react';
import Hero from './components/Hero';
import Pain from './components/Pain';
import Solution from './components/Solution';
import Arsenal from './components/Arsenal';
import Bonus from './components/Bonus';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FloatingWhatsapp from './components/FloatingWhatsapp';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-dark text-white font-sans antialiased selection:bg-primary selection:text-white">
      <Hero />
      <Pain />
      <Solution />
      <Arsenal />
      <Bonus />
      <Offer />
      <Guarantee />
      <FAQ />
      
      <footer className="w-full py-8 text-center text-zinc-700 text-sm bg-black border-t border-zinc-900">
        <p>© {new Date().getFullYear()} Agência Automática. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs">Este site não faz parte do site do Facebook ou Facebook Inc.</p>
      </footer>

      <FloatingWhatsapp />
    </main>
  );
};

export default App;