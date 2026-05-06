import * as React from 'react';
import { useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'motion/react';
import { Card } from '@/src/components/ui/card';
import { Shield, FastForward, Cpu, Infinity, X, ArrowRight, Layers, Lock, Zap } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Button } from '@/src/components/ui/button';

const features = [
  {
    title: "Global Mesh Network",
    shortDesc: "Connect models to a distributed zero-latency mesh.",
    description: "Localized peering for zero-latency communication between agents across the globe. Our network uses protocol-level optimization to bypass standard internet congestion.",
    techSpecs: [
      { label: "Latency", value: "< 2ms" },
      { label: "Throughput", value: "10 Gbps/node" },
      { label: "Protocol", value: "EGC-MESH v2" }
    ],
    icon: <Infinity className="w-8 h-8 text-white" />,
    color: "bg-white/5"
  },
  {
    title: "Bare-Metal Speed",
    shortDesc: "Proprietary hardware abstraction for GPU power.",
    description: "Eliminate virtualization overhead. Standard cloud providers use hypervisors that drain up to 15% of performance; we give you raw, direct silicon access.",
    techSpecs: [
      { label: "Performance", value: "Raw Silicon" },
      { label: "Virtualization", value: "0% Overhead" },
      { label: "Compute", value: "H100 Optimized" }
    ],
    icon: <Cpu className="w-8 h-8 text-white" />,
    color: "bg-white/5"
  },
  {
    title: "Quantum-Resistant",
    shortDesc: "Future-proof encryption for data sovereignty.",
    description: "All traffic is encrypted with post-quantum algorithms. In a world where classical encryption is becoming vulnerable, your data remains sovereign.",
    techSpecs: [
      { label: "Encryption", value: "Kyber-1024" },
      { label: "Security", value: "SOC3 Compliant" },
      { label: "Keys", value: "User-Owned" }
    ],
    icon: <Shield className="w-8 h-8 text-white" />,
    color: "bg-white/5"
  },
  {
    title: "Instant Provisioning",
    shortDesc: "Scale to 10k nodes in under 4 seconds.",
    description: "Our atomic resource allocation engine handles mass deployments with perfect parallelism. No queues, no waiting for cold boots.",
    techSpecs: [
      { label: "Scalability", value: "10k+ Nodes" },
      { label: "Boot Time", value: "3.2 Seconds" },
      { label: "Reliability", value: "99.999%" }
    ],
    icon: <FastForward className="w-8 h-8 text-white" />,
    color: "bg-white/5"
  }
];

const FeatureCard = ({ feature, index, onClick }: { feature: typeof features[0]; index: number; onClick: () => void; key?: number | string }) => {
  const controls = useAnimation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => controls.start({ x: '100%', transition: { duration: 0.6 } })}
      onHoverEnd={() => controls.set({ x: '-100%' })}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <Card className="relative p-12 lg:p-16 bg-white/[0.02] border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2">
        <motion.div 
          className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"
          initial={{ x: '-100%' }}
          animate={controls}
        />

        <div className={cn("w-16 h-16 rounded-none border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500", feature.color)}>
          {feature.icon}
        </div>

        <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{feature.title}</h3>
        <p className="text-white/40 leading-relaxed font-medium text-sm mb-12">
          {feature.shortDesc}
        </p>

        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-white transition-colors">
          Deep Dive <ArrowRight className="w-3 h-3" />
        </div>

        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/[0.02] rounded-full blur-3xl group-hover:bg-white/[0.05] transition-all duration-700" />
      </Card>
    </motion.div>
  );
};

export const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <section className="py-72 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-44">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase font-black tracking-[0.8em] text-white/20 inline-block mb-8"
          >
            System Infrastructure
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-black mb-12 tracking-[-0.08em] leading-[0.9] uppercase"
          >
            Core<br />
            <span className="text-white/10 italic font-thin normal-case tracking-normal">Fundamentals</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} onClick={() => setSelectedFeature(feature)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-end p-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="w-full max-w-2xl h-full bg-black border-l border-white/10 p-12 md:p-24 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="text-white/20 hover:text-white mb-20 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em]"
              >
                <X className="w-5 h-5" /> Close Technical Specification
              </button>

              <div className="space-y-16">
                <div>
                  <div className="w-20 h-20 border border-white/20 flex items-center justify-center mb-10">
                    {selectedFeature.icon}
                  </div>
                  <h3 className="text-5xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
                    {selectedFeature.title}
                  </h3>
                  <p className="text-xl text-white/40 leading-relaxed font-medium">
                    {selectedFeature.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-12 pt-16 border-t border-white/5">
                   {selectedFeature.techSpecs.map((spec, i) => (
                     <motion.div 
                       key={spec.label}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.1 + 0.3 }}
                       className="flex justify-between items-baseline border-b border-white/5 pb-6"
                     >
                       <span className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20">
                         {spec.label}
                       </span>
                       <span className="text-xl font-black text-white">
                         {spec.value}
                       </span>
                     </motion.div>
                   ))}
                </div>

                <div className="pt-20">
                  <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 mb-10">Security Architecture</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-square border border-white/5 flex items-center justify-center bg-white/[0.01]">
                      <Lock className="w-6 h-6 text-white/10" />
                    </div>
                    <div className="aspect-square border border-white/5 flex items-center justify-center bg-white/[0.01]">
                      <Shield className="w-6 h-6 text-white/10" />
                    </div>
                    <div className="aspect-square border border-white/5 flex items-center justify-center bg-white/[0.01]">
                      <Layers className="w-6 h-6 text-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
