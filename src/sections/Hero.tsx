import * as React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/button';
import { ParticleField } from '@/src/components/ParticleField';
import { fadeUpVariants, staggerContainer } from '@/src/lib/variants';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-52 pb-32 overflow-hidden bg-transparent selection:bg-white selection:text-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
            animation: 'grid-flow 20s linear infinite'
          }} 
        />
      </div>

      {/* Radial Gradient Glow Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-white/[0.03] blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/4 -right-[5%] w-[600px] h-[600px] bg-white/[0.02] blur-[100px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-[10%] left-1/4 w-[900px] h-[900px] bg-white/[0.03] blur-[140px] rounded-full" 
        />
      </div>

      {/* Structural Line Mesh Background */}
      <div className="absolute inset-x-0 top-0 h-[120%] w-full z-0 pointer-events-none opacity-60">
        <svg 
          viewBox="0 0 1000 1000" 
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="hero-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 45 }).map((_, i) => (
            <motion.line
              key={i}
              x1={-200 + i * 40}
              y1="-100"
              x2={400 + i * 40}
              y2="1100"
              stroke="#ffffff"
              strokeOpacity={0.08}
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.01 }}
            />
          ))}
          {/* Accent Brighter White Lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.line
              key={`accent-${i}`}
              x1={100 + i * 120}
              y1="-100"
              x2={500 + i * 120}
              y2="1100"
              stroke="#ffffff"
              strokeOpacity={0.15}
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: i * 0.2 }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10 flex items-center justify-center min-h-[60vh]">
        <motion.div 
          className="w-full text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUpVariants}
            className="text-[10px] uppercase font-black tracking-[0.8em] text-white/20 mb-12 block"
          >
            Digital Sovereignty Layer // Ver 0.42
          </motion.div>
          
          <motion.h1 
            variants={fadeUpVariants} 
            className="text-[clamp(60px,12vw,200px)] leading-[0.82] font-black tracking-[-0.08em] mb-16 text-white uppercase"
          >
            Eigen<br />
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0.8, x: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="italic font-bold normal-case tracking-wider font-aesthetic ml-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-block text-white"
            >
              Cloud
            </motion.span>
          </motion.h1>

          <motion.p 
            variants={fadeUpVariants} 
            className="text-lg md:text-xl text-white/30 mb-20 max-w-xl mx-auto leading-relaxed font-bold uppercase tracking-[0.3em]"
          >
            Deploy high-integrity AI agents on a distributed mesh of trusted hardware.
          </motion.p>

          <motion.div 
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Button size="lg" className="h-16 px-16 group rounded-none bg-white hover:bg-white/90 text-black text-[10px] uppercase tracking-[0.5em] font-black transition-all">
              Initialize Stack
            </Button>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              Explorer Protocol <div className="w-10 h-[1px] bg-white/20" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Status Indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 items-center">
         <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
           <div className="w-2.5 h-2.5 bg-white/40 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
         </div>
      </div>

      {/* Section Jump Nav */}
      <div className="absolute bottom-12 left-6 lg:left-24 flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.4em] text-white/20">
        <a href="#agents" className="hover:text-white transition-colors duration-500">Explore Agents</a>
        <a href="#ideas" className="hover:text-white transition-colors duration-500">Open Ideas</a>
        <a href="#bounty" className="hover:text-white transition-colors duration-500">Bounty Board</a>
      </div>
    </section>
  );
};
