import React from 'react';
import { Gift, MessageCircle, Users } from 'lucide-react';

const Bonus: React.FC = () => {
  return (
    <section className="w-full bg-[#151515] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Presentes exclusivos para <span className="text-primary">acelerar</span> seu resultado
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bonus 1 */}
            <div className="bg-card border border-zinc-800 p-8 rounded-lg relative hover:border-primary/50 transition-all duration-300">
                <div className="absolute top-0 right-0 bg-primary text-white font-bold text-xs px-4 py-1 uppercase rounded-bl-lg">
                    Bônus #1
                </div>
                <div className="mb-6 mt-2">
                    <Gift className="text-primary w-12 h-12" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Engenharia de Prompt</h3>
                <p className="text-secondary text-sm leading-relaxed">
                    A IA é poderosa, mas precisa do comando certo. Vou te ensinar a "falar a língua dos robôs" para extrair o máximo de qualidade.
                </p>
            </div>

            {/* Bonus 2 */}
            <div className="bg-card border border-zinc-800 p-8 rounded-lg relative hover:border-primary/50 transition-all duration-300">
                <div className="absolute top-0 right-0 bg-primary text-white font-bold text-xs px-4 py-1 uppercase rounded-bl-lg">
                    Bônus #2
                </div>
                <div className="mb-6 mt-2">
                    <MessageCircle className="text-primary w-12 h-12" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Agentes no WhatsApp</h3>
                <p className="text-secondary text-sm leading-relaxed">
                    Transforme seu WhatsApp em uma ferramenta de negócios. Crie assistentes virtuais para atendimento e suporte.
                </p>
            </div>

            {/* Bonus 3 */}
            <div className="bg-card border border-zinc-800 p-8 rounded-lg relative hover:border-primary/50 transition-all duration-300">
                <div className="absolute top-0 right-0 bg-primary text-white font-bold text-xs px-4 py-1 uppercase rounded-bl-lg">
                    Bônus #3
                </div>
                <div className="mb-6 mt-2">
                    <Users className="text-primary w-12 h-12" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Grupo de Suporte</h3>
                <p className="text-secondary text-sm leading-relaxed">
                    Travou em alguma aula? Tire suas dúvidas direto com a gente e com outros gestores no nosso grupo exclusivo.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Bonus;