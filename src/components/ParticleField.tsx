import * as React from 'react';
import { motion } from 'motion/react';
import { useParticles } from '@/src/hooks/useParticles';

export const ParticleField = () => {
  const particles = useParticles(40);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-brand-blue-neon rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-20, -150],
            opacity: [0, 0.7, 0],
            x: [0, Math.random() * 40 - 20],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};
