import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-zinc-800">
            <button 
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`font-bold text-lg ${isOpen ? 'text-primary' : 'text-white'}`}>{question}</span>
                {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-zinc-500" />}
            </button>
            {isOpen && (
                <div className="pb-6 text-secondary leading-relaxed animate-fadeIn">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ: React.FC = () => {
    const questions = [
        {
            q: "Preciso saber programação?",
            a: "Não. O método é focado em templates prontos. Se você sabe configurar um Pixel, você consegue fazer isso."
        },
        {
            q: "Tenho que pagar mensalidades de ferramentas?",
            a: "Não. Esse é o grande diferencial. Você pagará apenas o seu servidor VPS (aprox. 5 a 6 dólares/mês), e nada mais. Adeus mensalidades caras."
        },
        {
            q: "Serve para iniciantes?",
            a: "Sim. Começar automatizado é a melhor vantagem competitiva que você pode ter."
        },
        {
            q: "Como acesso o suporte?",
            a: "Você terá acesso ao nosso Grupo de Suporte no WhatsApp e à área de membros do curso."
        }
    ];

  return (
    <section className="w-full bg-dark py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-12">Perguntas Frequentes</h2>
        <div className="bg-card rounded-xl p-6 md:p-8">
            {questions.map((item, idx) => (
                <FAQItem key={idx} question={item.q} answer={item.a} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;