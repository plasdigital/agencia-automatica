import React from 'react';
import { FileBarChart, Zap, Search, Image as ImageIcon, ShieldCheck } from 'lucide-react';

interface ModuleProps {
    title: string;
    icon: React.ElementType;
    items: string[];
    number: string;
}

const ModuleCard: React.FC<ModuleProps> = ({ title, icon: Icon, items, number }) => (
    <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 border border-zinc-800 bg-card/50 rounded-xl hover:border-primary/50 transition-colors relative group overflow-hidden">
        {/* Number Badge */}
        <div className="absolute top-0 right-0 p-3 bg-zinc-900 rounded-bl-xl border-l border-b border-zinc-800 text-primary font-mono text-sm group-hover:bg-primary group-hover:text-white transition-colors">
            {number}
        </div>

        <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-black rounded-lg border border-zinc-700 flex items-center justify-center shadow-lg">
                <Icon className="w-8 h-8 text-primary" />
            </div>
        </div>
        
        <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-secondary text-sm">
                         <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                         <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Arsenal: React.FC = () => {
  return (
    <section className="w-full bg-dark py-20 px-4 relative">
       {/* Connector Line Background */}
       <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-zinc-800 to-zinc-900 opacity-30"></div>

       <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16 bg-dark py-4">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                    O que você vai ser capaz de <span className="text-primary">automatizar</span> ainda hoje
                </h2>
            </div>

            <div className="space-y-6">
                <ModuleCard 
                    number="MOD_01"
                    title="O Fim dos Relatórios Manuais"
                    icon={FileBarChart}
                    items={[
                        "Relatórios Automáticos no WhatsApp (Texto ou PDF)",
                        "Dashboards de Análise Visual",
                        "Agente Analista: IA que analisa métricas e sugere melhorias"
                    ]}
                />

                <ModuleCard 
                    number="MOD_02"
                    title="Inteligência Competitiva (O Espião)"
                    icon={Search}
                    items={[
                        "Pesquisa de Concorrência Automática na Biblioteca de Anúncios",
                        "Gerador de Copy Melhorada (Benchmark automático)"
                    ]}
                />

                <ModuleCard 
                    number="MOD_03"
                    title="O Operacional de Elite"
                    icon={Zap}
                    items={[
                        "Caçador de Interesses ocultos na API do Meta",
                        "Criação de Públicos Personalizados via comando",
                        "Definição de Avatar e Segmentação automática"
                    ]}
                />

                <ModuleCard 
                    number="MOD_04"
                    title="Fábrica de Criativos"
                    icon={ImageIcon}
                    items={[
                        "Transformação de fotos simples em criativos de alta conversão com IA",
                        "Independência total de designers ou clientes lentos"
                    ]}
                />

                <ModuleCard 
                    number="MOD_05"
                    title="Segurança e Gestão"
                    icon={ShieldCheck}
                    items={[
                        "Notificação de Saldo Baixo antes da campanha pausar",
                        "Monitoramento 24/7 da conta de anúncios"
                    ]}
                />
            </div>
       </div>
    </section>
  );
};

export default Arsenal;