/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { TabsBar } from './components/TabsBar';
import { Hero } from './sections/Hero';
import { ToolsGrid } from './sections/ToolsGrid';
import { StatsRow } from './sections/StatsRow';
import { CodeDemo } from './sections/CodeDemo';
import { Features } from './sections/Features';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-brand-blue-bright selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <TabsBar />
        <ToolsGrid />
        <StatsRow />
        <CodeDemo />
        <Features />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
