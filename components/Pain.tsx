import React from 'react';
import { XCircle, AlertTriangle } from 'lucide-react';

const Pain: React.FC = () => {
  const pains = [
    {
      title: "A Prisão do Otimizador",
      desc: "Você não tem paz. O tempo todo precisa estar na BM, ajustando orçamento, trocando criativo. Se sai da frente do computador, parece que o mundo vai desabar."
    },
    {
      title: 'O Cliente "Suga-Alma"',
      desc: "O WhatsApp apita e o coração dispara. É cobrança, dúvida básica e pressão. Você virou refém do celular."
    },
    {
      title: "Equipe não resolveu",
      desc: "Você até tentou contratar, mas o trabalho não diminuiu. Agora, além de gerir tráfego, tem que gerir pessoas e corrigir erros dos outros."
    },
    {
      title: "Muito Trabalho, Pouco Dinheiro",
      desc: "Você trabalha 14h por dia, fica de cabeça quente, e no fim do mês a conta não fecha com o esforço que você colocou."
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-4 text-zinc-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-primary font-bold uppercase tracking-widest mb-2 text-sm">O SONHO DO DIGITAL VIROU UM PESADELO OPERACIONAL</h3>
          <h2 className="text-3xl md:text-4xl font-black text-dark leading-tight max-w-3xl mx-auto">
            "Você entrou buscando liberdade, mas construiu uma prisão onde você é o chefe e o funcionário."
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pains.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg border border-zinc-100">
              <XCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2 text-dark">{item.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* The "What Hurts" Box - Styled to match image */}
        <div className="bg-[#0b0c15] rounded-xl p-10 md:p-14 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="flex flex-col items-center gap-6 relative z-10 max-w-3xl mx-auto">
                <AlertTriangle className="w-16 h-16 text-primary stroke-[1.5]" />
                <h3 className="text-3xl md:text-4xl font-bold">E o que mais dói?</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                    Ver gestores com <strong className="text-white font-black">MENOS conhecimento técnico</strong> que você ganhando 3x mais. 
                    Por que eles conseguem e você não? Porque eles pararam de fazer força e começaram a usar <strong className="text-primary">sistemas</strong>. 
                    Enquanto você carrega pedra, eles usam guindaste.
                </p>
            </div>
            {/* Subtle bottom fade/line similar to image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-zinc-700 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Pain;