import * as React from 'react';
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { useCountUp } from '@/src/hooks/useCountUp';
import { X, TrendingUp, Shield, Zap, Server } from 'lucide-react';

const stats = [
  { 
    label: 'Active GPU Nodes', 
    value: 14200, 
    suffix: '+',
    details: 'Distributed across 12 hyper-scale nodes with liquid cooling and dedicated 800Gbps interconnects.',
    icon: <Server className="w-6 h-6" />,
    metrics: { 'Utilization': '82%', 'Avg Temp': '54°C', 'Efficiency': '0.92 PPW' }
  },
  { 
    label: 'Models Deployed', 
    value: 890, 
    suffix: 'k+',
    details: '99% of deployed models utilize our proprietary JIT-inference engine for sub-10ms response times.', 
    icon: <Zap className="w-6 h-6" />,
    metrics: { 'Cold Starts': '2.1ms', 'Throughput': '450k req/s', 'Accuracy': 'Min 99.4%' }
  },
  { 
    label: 'Avg Latency (ms)', 
    value: 12, 
    suffix: 'ms',
    details: 'Network-level prioritization ensures your AI agents communicate at the speed of local hardware.',
    icon: <TrendingUp className="w-6 h-6" />,
    metrics: { 'P99': '18ms', 'Jitter': '0.4ms', 'Packet Loss': '0.0001%' }
  },
  { 
    label: 'Uptime SLG', 
    value: 99.9, 
    suffix: '%',
    details: 'Protocol-level redundancy guarantees zero single points of failure across our global mesh.',
    icon: <Shield className="w-6 h-6" />,
    metrics: { 'SLA': '99.999%', 'Failover': '0.8s', 'Hardened': 'Type-2 TEE' }
  },
];

const StatCell = ({ stat, index, onClick }: { stat: typeof stats[0]; index: number; onClick: () => void; key?: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountUp(stat.value, 2000, isInView);

  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="bg-black/20 py-24 px-10 flex flex-col items-center justify-center text-center border-r border-white/5 last:border-r-0 cursor-pointer group hover:bg-white/[0.02] transition-colors"
    >
      <div className="text-4xl md:text-5xl font-black mb-6 tracking-[-0.05em] text-white group-hover:scale-110 transition-transform duration-500">
        {stat.value % 1 !== 0 ? count / 10 + stat.suffix : count + stat.suffix}
      </div>
      <div className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20 group-hover:text-white/40 transition-colors">
        {stat.label}
      </div>
    </motion.div>
  );
};

export const StatsRow = () => {
  const [selectedStat, setSelectedStat] = useState<typeof stats[0] | null>(null);

  return (
    <section className="bg-transparent border-t border-b border-white/5 relative">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCell key={i} stat={stat} index={i} onClick={() => setSelectedStat(stat)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedStat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedStat(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-2xl bg-black border border-white/10 p-12 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedStat(null)}
                className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-6 mb-12">
                <div className="p-4 border border-white/10 bg-white/[0.02]">
                  {selectedStat.icon}
                </div>
                <div>
                   <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-1">Infrastructure Report</h3>
                   <div className="text-3xl font-black text-white uppercase tracking-tighter">{selectedStat.label}</div>
                </div>
              </div>

              <p className="text-lg text-white/60 mb-12 leading-relaxed font-medium">
                {selectedStat.details}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(selectedStat.metrics).map(([label, value], i) => (
                  <motion.div 
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="border-t border-white/5 pt-6"
                  >
                    <div className="text-[9px] uppercase font-black tracking-[0.3em] text-white/20 mb-2">{label}</div>
                    <div className="text-xl font-bold text-white">{value}</div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
                {selectedStat.suffix}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
