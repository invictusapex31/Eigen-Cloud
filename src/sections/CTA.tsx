import * as React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-96 relative overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square bg-white/[0.04] blur-[160px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto text-center px-12 py-32 rounded-none bg-white/[0.01] border border-white/5 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black mb-12 leading-[0.9] text-white uppercase tracking-[-0.08em]"
          >
            Sovereignty<br />
            Starts Here.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/30 text-xl mb-16 max-w-2xl mx-auto leading-relaxed font-bold uppercase tracking-[0.3em]"
          >
            Join 40,000+ developers building the distributed intelligence layer. Deployment is instant, scaling is infinite. Build your stack today.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-8 justify-center"
          >
            <Button size="lg" className="h-16 px-12 rounded-none bg-white hover:bg-white/90 text-black text-xs uppercase tracking-[0.4em] font-black transition-all duration-300">
              Deploy Your First Node
            </Button>
            <Button size="lg" variant="ghost" className="h-16 px-12 rounded-none border border-white/10 hover:bg-white/5 text-xs uppercase tracking-[0.4em] font-black text-white/30 hover:text-white">
              Consult a Specialist
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
