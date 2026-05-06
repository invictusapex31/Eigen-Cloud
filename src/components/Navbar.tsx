import * as React from "react"
import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Hexagon, ChevronDown, Menu } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Button } from '@/src/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/src/components/ui/navigation-menu';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] h-16 transition-all duration-300",
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="container mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer transition-opacity duration-500 hover:opacity-70">
          <span className="text-[12px] font-black uppercase tracking-[0.6em] text-white flex items-center">
            Eigen<span className="font-aesthetic italic lowercase tracking-tight opacity-100 ml-3 text-lg leading-none font-bold">cloud</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-0 text-[10px] font-bold uppercase tracking-[0.3em] gap-1 transition-all bg-gradient-to-r from-[#60a5fa] to-[#38bdf8] bg-clip-text text-transparent hover:opacity-70">
                  Solutions
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-0 text-[10px] font-bold uppercase tracking-[0.3em] gap-1 transition-all bg-gradient-to-r from-[#60a5fa] to-[#38bdf8] bg-clip-text text-transparent hover:opacity-70">
                  Developers
                </NavigationMenuTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-0 text-[10px] font-bold uppercase tracking-[0.3em] gap-1 transition-all bg-gradient-to-r from-[#60a5fa] to-[#38bdf8] bg-clip-text text-transparent hover:opacity-70">
                  Explore
                </NavigationMenuTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-0 text-[10px] font-bold uppercase tracking-[0.3em] gap-1 transition-all bg-gradient-to-r from-[#60a5fa] to-[#38bdf8] bg-clip-text text-transparent hover:opacity-70">
                  Learn
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex hover:bg-white/5 text-white/40 hover:text-white uppercase text-[10px] tracking-widest font-bold">
            Sign in
          </Button>
          <Button className="bg-white hover:bg-white/90 text-black font-extrabold uppercase text-[10px] tracking-[0.2em] px-8 rounded-none transition-all duration-300">
            Get started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-white origin-left"
        style={{ scaleX }}
      />
    </header>
  );
};

const ListItem = ({ title, href, children }: { title: string; href: string; children: React.ReactNode }) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-brand-blue-neon focus:bg-white/5 focus:text-brand-blue-neon"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
);
