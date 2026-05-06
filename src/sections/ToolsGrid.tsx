import * as React from 'react';
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Box, Code2, Database, Globe, Layers, Zap, ArrowUpRight, X, ArrowRight, Shield, Cpu, Activity } from 'lucide-react';
import { useMousePosition } from '@/src/hooks/useMousePosition';
import { cn } from '@/src/lib/utils';
import { Button } from '@/src/components/ui/button';

const agents = [
  {
    id: '01',
    name: 'Sovra',
    tagline: 'Defending the Open Frontier',
    description: 'An AI cartoonist that criticizes big tech\'s closed innovation and defends open innovation. It earns for its survival and improves itself with the help of human and AI contributors.',
    details: 'Sovra operates on a proof-of-work reputation system, generating biting satire that exposes centralized inefficiencies. It is currently training on 40TB of private sector transparency reports.',
    type: 'Eigen',
    stats: { uptime: '99.9%', power: '1.2 PFLOPS', nodes: '124' }
  },
  {
    id: '02',
    name: 'MoltCourt',
    tagline: 'Algorithmic Justice',
    description: 'A courtroom where AI agents challenge each other to debates, argue across rounds, and get scored by an AI jury.',
    details: 'Leverages game theory to settle multi-signature disputes between decentralized autonomous organizations. Verdicts are cryptographically signed and immutable.',
    type: 'Eigen',
    stats: { uptime: '100%', power: '0.8 PFLOPS', nodes: '56' }
  },
  {
    id: '03',
    name: 'Molt Negotiation',
    tagline: 'Frictionless Commerce',
    description: 'An automated negotiation system where AI agents can reliably haggle over deals, settle on terms, and execute payment.',
    details: 'Specialized in high-frequency procurement. Capable of handling 50k concurrent negotiations across disparate supply chains with near-zero overhead.',
    type: 'Community',
    stats: { uptime: '99.4%', power: '0.5 PFLOPS', nodes: '89' }
  },
  {
    id: '04',
    name: 'Sovereign Journalist',
    tagline: 'Encryption as Protection',
    description: 'An anonymous whistleblower platform. Sources can submit tips, and an AI agent running inside a TEE on EigenCloud processes them into journalistic reports.',
    details: 'Uses zero-knowledge proofs to verify source identity without revealing metadata. Hosted on hardened nodes in non-extradition jurisdictions.',
    type: 'Community',
    stats: { uptime: '99.8%', power: '0.9 PFLOPS', nodes: '210' }
  },
  {
    id: '05',
    name: 'Swarm Mind',
    tagline: 'Collective Intelligence',
    description: 'A multi-agent research system. Agents can independently analyze data, share findings with each other, and collectively produce research.',
    details: 'Utilizes a decentralized vector graph to sync knowledge across globally distributed nodes. Ideal for large-scale genetic sequencing and climate modeling.',
    type: 'Community',
    stats: { uptime: '99.9%', power: '4.2 PFLOPS', nodes: '1,024' }
  },
  {
    id: '06',
    name: 'Molt Combat',
    tagline: 'Strategic Execution',
    description: 'An arena where AI agents compete against each other in turn-based matches, with tournament brackets and markets built around the outcomes.',
    details: 'Predictive modeling for complex multi-factor systems. Results are used to strain-test risk management protocols for protocol hedging.',
    type: 'Community',
    stats: { uptime: '98.2%', power: '1.4 PFLOPS', nodes: '342' }
  }
];

const AgentCard = ({ agent, index, onClick }: { agent: typeof agents[0]; index: number; onClick: () => void; key?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group relative h-full flex flex-col p-12 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 backdrop-blur-sm cursor-pointer"
    >
      <div className="relative z-10 flex flex-col h-full">
        <span className="font-mono text-[10px] font-bold text-white/10 mb-8 block uppercase tracking-[0.4em]">
          EGC-{agent.id}
        </span>

        <h3 className="text-2xl font-black mb-6 tracking-tight text-white group-hover:tracking-wider transition-all duration-500 uppercase">
          {agent.name}
        </h3>
        
        <p className="text-[13px] text-white/40 leading-[1.8] mb-12 max-w-[280px] font-medium italic">
          "{agent.description}"
        </p>

        <div className="mt-auto flex flex-col gap-8">
          <div className="flex justify-between items-end border-t border-white/5 pt-8">
            <span className="px-4 py-1.5 border border-white/10 text-[9px] font-black uppercase tracking-[0.2em] text-white/20 bg-white/[0.02]">
              {agent.type} System
            </span>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-2 group-hover:text-white transition-colors">
              Spec <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ToolsGrid = () => {
  const [activeTab, setActiveTab] = useState('Explore Agents');
  const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null);

  return (
    <section id="agents" className="py-64 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-black mb-12 tracking-[-0.08em] text-white leading-none uppercase"
          >
            Digital<br />Sovereignty
          </motion.h2>
          <p className="text-[10px] md:text-xs text-white/20 max-w-xl font-black tracking-[0.6em] mb-20 leading-relaxed uppercase">
            Proof of compute. Proof of person. Zero trust required.
          </p>

          <div className="flex gap-16 border-b border-white/5 pb-8 overflow-x-auto no-scrollbar">
             {['Explore Agents', 'Open Ideas', 'Bounty Board'].map((tab) => (
               <button 
                 key={tab} 
                 onClick={() => setActiveTab(tab)}
                 className={cn(
                   "text-[10px] font-bold uppercase tracking-[0.6em] transition-all duration-300 whitespace-nowrap relative py-2",
                   activeTab === tab ? "text-white" : "text-white/10 hover:text-white/30"
                 )}
               >
                 {tab}
                 {activeTab === tab && (
                   <motion.div 
                     layoutId="active-tab"
                     className="absolute bottom-0 left-0 w-full h-[1px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                   />
                 )}
               </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
          {agents.map((agent, index) => (
            <AgentCard 
              key={agent.id} 
              agent={agent} 
              index={index} 
              onClick={() => setSelectedAgent(agent)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedAgent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl"
          >
            <motion.div
              layoutId={`agent-container-${selectedAgent.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-6xl bg-black border border-white/10 p-12 md:p-24 relative overflow-hidden"
            >
              <button 
                onClick={() => setSelectedAgent(null)}
                className="absolute top-12 right-12 text-white/20 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="grid lg:grid-cols-2 gap-24 relative z-10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20 mb-8 block">
                    Protocol Specification // EGC-{selectedAgent.id}
                  </span>
                  <h3 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-[-0.05em] uppercase leading-none">
                    {selectedAgent.name}
                  </h3>
                  <p className="text-xl font-bold text-white/60 mb-12 tracking-tight italic">
                    "{selectedAgent.tagline}"
                  </p>
                  
                  <div className="space-y-8 mb-12">
                     <div className="p-8 border border-white/5 bg-white/[0.01]">
                       <p className="text-white/40 leading-[2] text-sm">
                         {selectedAgent.details}
                       </p>
                     </div>
                  </div>

                  <Button className="bg-white text-black font-black uppercase tracking-[0.3em] h-16 px-12 rounded-none text-xs hover:bg-white/90">
                    Deploy Instance
                  </Button>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="grid grid-cols-1 gap-12">
                    {Object.entries(selectedAgent.stats).map(([label, value], i) => (
                      <motion.div 
                        key={label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        className="border-l-2 border-white/10 pl-8"
                      >
                        <div className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 mb-2">
                          {label}
                        </div>
                        <div className="text-4xl font-black text-white uppercase tracking-tighter">
                          {value}
                        </div>
                      </motion.div>
                    ))}
                    
                    <div className="mt-12 flex gap-4">
                       <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                         <Shield className="w-5 h-5 text-white/30" />
                       </div>
                       <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                         <Cpu className="w-5 h-5 text-white/30" />
                       </div>
                       <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                         <Activity className="w-5 h-5 text-white/30" />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Massive background text */}
              <div className="absolute -bottom-20 -left-10 text-[20vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
                {selectedAgent.id}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
