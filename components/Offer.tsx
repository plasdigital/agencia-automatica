import React from 'react';
import Button from './Button';
import { LINKS } from '../constants';
import { Check, X } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-dark relative overflow-hidden flex flex-col items-center">
      
      {/* Background glow behind price */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl w-full mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-12">
          Quanto vale sua <span className="text-primary">liberdade</span>?
        </h2>

        {/* Comparison List moved outside */}
        <div className="flex flex-col gap-3 mb-10 text-secondary max-w-lg mx-auto">
            <p className="flex items-center gap-3 text-lg">
                <X className="text-[#FF0055] w-6 h-6 flex-shrink-0" /> 
                <span className="text-left">Ferramentas de automação: <span className="line-through decoration-zinc-500 text-zinc-500">R$ 500/mês</span></span>
            </p>
            <p className="flex items-center gap-3 text-lg">
                <X className="text-[#FF0055] w-6 h-6 flex-shrink-0" /> 
                <span className="text-left">Estagiário iniciante: <span className="line-through decoration-zinc-500 text-zinc-500">R$ 1.200/mês</span></span>
            </p>
            <p className="flex items-center gap-3 text-lg text-white font-bold">
                <div className="bg-[#25D366] rounded p-0.5"><Check className="text-black w-4 h-4" /></div>
                <span className="text-left">Sua Máquina de Lucro: O preço de um lanche.</span>
            </p>
        </div>

        <div className="bg-card border border-zinc-700 rounded-2xl p-8 md:p-12 shadow-2xl relative mt-8">
            {/* Dashed Border Effect */}
            <div className="absolute inset-0 border-2 border-dashed border-primary/50 rounded-2xl pointer-events-none m-1"></div>
            
            {/* Top Pill */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white font-bold uppercase tracking-wider px-6 py-2 rounded-full text-sm shadow-neon">
                Oferta por tempo limitado
            </div>

            <div className="mt-4 mb-2 text-secondary text-sm">De <span className="line-through">R$ 397,00</span> por apenas:</div>
            
            <div className="flex flex-col items-center justify-center leading-none mb-4">
                <div className="text-primary font-black tracking-tighter flex items-center gap-2">
                    <span className="text-4xl md:text-5xl">12x</span>
                    <span className="text-7xl md:text-8xl">6,93</span>
                </div>
                <div className="text-white font-bold text-xl mt-2">ou R$ 67,00 à vista</div>
            </div>

            <div className="grid grid-cols-1 gap-3 text-sm text-secondary max-w-xs mx-auto mb-10 text-left">
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" /> Acesso por 1 Ano
                </div>
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" /> Todas as Atualizações
                </div>
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" /> Acesso ao Suporte
                </div>
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" /> Garantia de 7 Dias
                </div>
            </div>

            <Button href={LINKS.CHECKOUT} fullWidth className="text-xl md:text-xl py-5 shadow-neon animate-pulse z-10 relative">
                QUERO AUTOMATIZAR AGORA
            </Button>
            
            <p className="mt-4 text-xs text-zinc-600">Pagamento seguro via Cartão ou PIX. Acesso imediato.</p>
        </div>
      </div>
    </section>
  );
};

export default Offer;