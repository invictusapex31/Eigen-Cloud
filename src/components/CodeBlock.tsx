import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface CodeBlockProps {
  language: 'typescript' | 'python' | 'curl';
}

const codeContent = {
  typescript: `import { NeuralStack } from '@neuralstack/core';

const client = new NeuralStack({
  apiKey: process.env.NS_API_KEY
});

// Deploy specialized GPU cluster
const cluster = await client.compute.deploy({
  provider: 'h100',
  nodes: 8,
  region: 'us-east'
});

console.log(\`Cluster online: \${cluster.id}\`);`,
  python: `from neuralstack import Client

ns = Client(api_key="NS_API_KEY")

# Deploy specialized GPU cluster
cluster = ns.compute.deploy(
    provider="h100",
    nodes=8,
    region="us-east"
)

print(f"Cluster online: {cluster.id}")`,
  curl: `curl -X POST https://api.neuralstack.ai/v1/compute \\
  -H "Authorization: Bearer $NS_API_KEY" \\
  -d '{
    "provider": "h100",
    "nodes": 8,
    "region": "us-east"
  }'`
};

export const CodeBlock = () => {
  const [lang, setLang] = useState<keyof typeof codeContent>('typescript');

  const highlight = (code: string) => {
    return code.split('\n').map((line, i) => {
      // Very simple syntax highlighting for demo purposes
      const highlighted = line
        .replace(/(\/\/.+)/g, '<span class="text-muted-foreground">$1</span>')
        .replace(/(import|from|const|await|new|return|export)/g, '<span class="text-brand-accent-purple">$1</span>')
        .replace(/(['"].+?['"])/g, '<span class="text-brand-accent-cyan">$1</span>')
        .replace(/(console|client|ns|cluster)/g, '<span class="text-brand-blue-neon">$1</span>')
        .replace(/(\d+)/g, '<span class="text-orange-400">$1</span>')
        .replace(/(\w+)(?=\()/g, '<span class="text-brand-blue-glow">$1</span>');

      return (
        <div key={i} className="table-row">
          <span className="table-cell pr-4 text-right select-none opacity-20 font-mono text-xs w-8">{i + 1}</span>
          <span className="table-cell whitespace-pre" dangerouslySetInnerHTML={{ __html: highlighted || ' ' }} />
        </div>
      );
    });
  };

  return (
    <div className="w-full h-full bg-[#0a0a0a]/80 rounded-xl border border-white/10 overflow-hidden flex flex-col shadow-2xl backdrop-blur-md">
      {/* macOS Header */}
      <div className="h-10 bg-white/[0.03] px-4 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <div className="flex bg-black/40 rounded-md p-0.5 border border-white/5">
          {Object.keys(codeContent).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l as any)}
              className={cn(
                "px-3 py-1 text-[10px] uppercase font-bold rounded-sm transition-all outline-none",
                lang === l ? "bg-white/10 text-white" : "text-white/30 hover:text-white"
              )}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Code Body */}
      <div className="flex-1 p-6 font-mono text-xs overflow-auto no-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="table w-full"
          >
            {highlight(codeContent[lang])}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
