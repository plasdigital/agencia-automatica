import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="w-full bg-black py-24 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        {/* Guarantee Block - Dark Box */}
        <div className="bg-[#05060D] border border-zinc-900/50 p-8 md:p-10 rounded-2xl relative shadow-2xl overflow-hidden">
             {/* Background glow effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <div className="mb-6 relative z-10">
                <ShieldCheck className="text-primary w-14 h-14" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                Risco Zero: 7 Dias de Garantia
            </h3>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 relative z-10">
                Você tem 7 dias para entrar, baixar os Agentes e testar tudo. Se você não conseguir instalar ou achar que não é para você, basta um único e-mail.
            </p>
            
            <p className="text-white font-bold text-sm relative z-10">
                Eu devolvo 100% do seu dinheiro. Sem perguntas.
            </p>
        </div>

        {/* Bio Block */}
        <div className="flex flex-col">
            <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-zinc-800 shrink-0">
                     <img 
                        src="https://s3.plasacademy.com.br/plasacademy/Instagram%20post%20-%2011.jpg" 
                        alt="Foto do Especialista" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                     <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs block mb-1">
                        O CRIADOR
                    </span>
                    <h4 className="text-white font-bold text-2xl md:text-3xl leading-none">Quem sou eu?</h4>
                </div>
            </div>
            
            <p className="text-zinc-400 text-sm leading-relaxed">
                Sou Gestor de Tráfego e Especialista em Automação. Criei este método por necessidade: estava cansado de trabalhar 14h por dia e gastar meu lucro com ferramentas caras. Desenvolvi a Infraestrutura Própria de Automação para me libertar do operacional. Hoje, ensino gestores a faturarem alto com equipes enxutas usando o poder dos Agentes de IA.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Guarantee;