import * as React from 'react';
import { Hexagon } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer = () => {
  return (
    <footer className="pt-40 pb-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Top: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24 mb-40">
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-12 opacity-20">Infrastructure</h4>
            <ul className="space-y-6 text-[11px] font-bold text-white/30 uppercase tracking-[0.2em]">
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">Protocol Core <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">Distributed Mesh <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">Hyper-Scale Nodes <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">Security Proofs <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-12 opacity-20">Developers</h4>
            <ul className="space-y-6 text-[11px] font-bold text-white/30 uppercase tracking-[0.2em]">
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">Stack Initialize <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">Documentation <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">API Reference <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">Source Cloud <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-12 opacity-20">Network</h4>
            <ul className="space-y-6 text-[11px] font-bold text-white/30 uppercase tracking-[0.2em]">
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">Global Mesh <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">Node Directory <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">Governance <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">X / Terminal <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-12 opacity-20">Foundation</h4>
            <ul className="space-y-6 text-[11px] font-bold text-white/30 uppercase tracking-[0.2em]">
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">About Labs <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">Research <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">Brand Kit <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
              <li><a href="#" className="hover:text-white transition-all duration-500 flex items-center gap-2 group">Privacy Protocol <div className="w-0 group-hover:w-4 h-[1px] bg-white/20 transition-all duration-500"/></a></li>
            </ul>
          </div>
        </div>

        {/* Bottom: Massive Branding */}
        <div className="relative border-t border-white/5 pt-24 mt-20">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-[clamp(40px,10vw,140px)] font-black leading-none tracking-[-0.08em] text-white uppercase transition-all duration-700 hover:tracking-[-0.05em] cursor-default">
                Eigen<span className="font-aesthetic italic lowercase tracking-tight opacity-80 ml-4 font-bold text-[0.8em] drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">cloud</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-white/10 leading-relaxed whitespace-nowrap lg:mb-4 text-right">
              <div>© 2026 EIGENCLOUD PROTOCOL // RELEASES V.042</div>
              <div className="text-white/20 group cursor-pointer flex items-center gap-3 justify-end transition-colors hover:text-white">
                <div className="w-12 h-[1px] bg-white/10 group-hover:bg-white/40 transition-all duration-500" />
                AN EIGEN LABS DEPLOYMENT
              </div>
            </div>
          </div>

          {/* Large Ghost Text Background */}
          <div className="absolute bottom-[-10%] left-[-5%] right-[-5%] text-center pointer-events-none select-none opacity-[0.02] overflow-hidden whitespace-nowrap">
            <div className="text-[25vw] font-black uppercase tracking-[-0.1em] leading-none">
              EigenCloud
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
