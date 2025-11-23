import React from 'react';
import { Cpu, MessageSquare, TrendingUp } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="w-full bg-dark py-24 px-4 relative overflow-hidden">
      {/* Laser line connector effect */}
      <div className="absolute left-1/2 top-0 w-px h-20 bg-gradient-to-b from-transparent to-primary md:block hidden"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-6">
            O segredo de quem escala não é trabalhar mais. <br />
            É substituir o trabalho humano por uma <span className="text-primary">NOVA CLASSE DE FUNCIONÁRIOS</span>.
          </h2>
          <p className="text-secondary text-lg max-w-3xl mx-auto">
            Pare de tentar ser um herói que faz tudo sozinho. Eu desenvolvi uma metodologia para criar uma 
            <span className="text-white font-bold"> Infraestrutura Própria de Automação</span>.
            Estou falando de criar <span className="text-primary font-mono">Clones Digitais</span> seus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-card p-8 rounded-lg border-t-2 border-primary hover:bg-[#252525] transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Cpu className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Zero Operacional</h3>
                <p className="text-secondary text-sm leading-relaxed">
                    Você aperta o "play" e os agentes assumem a otimização, o relatório e o monitoramento.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card p-8 rounded-lg border-t-2 border-primary hover:bg-[#252525] transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <MessageSquare className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Paz Mental</h3>
                <p className="text-secondary text-sm leading-relaxed">
                    O cliente manda mensagem e seu "Atendente IA" responde na hora, com educação e precisão. Você só entra se for urgente.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card p-8 rounded-lg border-t-2 border-primary hover:bg-[#252525] transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Lucro Real</h3>
                <p className="text-secondary text-sm leading-relaxed">
                    Você atende 20, 30 clientes com a mesma estrutura, sem aumentar custos. O dinheiro sobra no bolso.
                </p>
            </div>

        </div>

        <div className="mt-12 text-center">
            <p className="text-xl font-mono text-white">
                Você deixa de ser o "operário do tráfego" e volta a ser o <span className="text-primary border-b border-primary border-dashed pb-1">ESTRATEGISTA</span> do seu negócio.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;