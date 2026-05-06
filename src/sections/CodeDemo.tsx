import * as React from 'react';
import { motion } from 'motion/react';
import { CodeBlock as CodeComponent } from '@/src/components/CodeBlock';
import { Button } from '@/src/components/ui/button';
import { Badge } from '@/src/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

export const CodeDemo = () => {
  return (
    <section className="py-32 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-brand-blue-neon inline-block mb-4">
              Developer Workflow
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              One API for every <br />
              <span className="text-brand-blue-glow">intelligent dimension.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Integrate world-class AI infrastructure in minutes. Our unified SDK handles the heavy lifting of orchestration, load balancing, and secure inference.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Instant node provisioning via REST API",
                "Built-in secret management & safety guards",
                "Automated versioning and model rollbacks",
                "Global observability out of the box"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue-neon" />
                  <span className="text-sm font-medium text-white/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="h-10 px-4 gap-2 bg-white/5 border-white/5">
                <img src="https://simpleicons.org/icons/typescript.svg" className="w-4 h-4 invert" alt="TS" />
                TypeScript
              </Badge>
              <Badge variant="outline" className="h-10 px-4 gap-2 bg-white/5 border-white/5">
                <img src="https://simpleicons.org/icons/python.svg" className="w-4 h-4 invert" alt="Python" />
                Python
              </Badge>
              <Badge variant="outline" className="h-10 px-4 gap-2 bg-white/5 border-white/5">
                <img src="https://simpleicons.org/icons/rust.svg" className="w-4 h-4 invert" alt="Rust" />
                Rust
              </Badge>
              <Badge variant="outline" className="h-10 px-4 gap-2 bg-white/5 border-white/5">
                <img src="https://simpleicons.org/icons/go.svg" className="w-4 h-4 invert" alt="Go" />
                Go
              </Badge>
            </div>
          </motion.div>

          {/* Right Side: Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow behind code */}
            <div className="absolute -inset-10 bg-brand-blue-bright/10 blur-[80px] rounded-full z-0 opacity-50" />
            
            <div className="relative z-10 aspect-[4/3] w-full max-w-[600px] mx-auto">
              <CodeComponent />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
