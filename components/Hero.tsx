import React from 'react';
import Button from './Button';
import { LINKS } from '../constants';
import { ArrowRight, Zap, CheckCircle2, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-dark px-4 py-20 overflow-hidden">
      {/* Background subtle effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-dark to-dark"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1A1A1A] border border-[#333] text-[#888] font-bold text-xs tracking-[0.2em] mb-8 uppercase shadow-sm">
          ● Para gestores que querem escalar
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
          Pare de ser escravo da sua própria agência. <br />
          Automatize seu operacional, atenda <br className="hidden md:block"/>
          <span className="text-primary">10x mais clientes</span> e multiplique seu lucro.
        </h1>
        
        <p className="text-lg md:text-xl text-secondary max-w-3xl mb-10 leading-relaxed font-light">
          Copie meus <strong className="text-white font-bold">"Estagiários Robôs"</strong> para fazerem relatórios, planejarem campanhas e atenderem clientes 24h por dia. Aumente sua margem, elimine custos com equipe e pare de deixar dinheiro na mesa.
        </p>
        
        <div className="flex flex-col items-center gap-6 w-full max-w-md">
          <Button href={LINKS.CHECKOUT} fullWidth className="text-lg md:text-xl font-bold py-5">
            QUERO MINHA MÁQUINA DE LUCRO
          </Button>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-zinc-500 font-medium">
             <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-primary" /> Acesso Imediato</span>
             <span className="hidden md:inline text-zinc-700">•</span>
             <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Instalação Simples</span>
             <span className="hidden md:inline text-zinc-700">•</span>
             <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> Garantia de 7 Dias</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;