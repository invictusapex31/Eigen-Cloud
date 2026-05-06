import * as React from 'react';
import { useState, useEffect } from 'react';

export const useMousePosition = (ref: React.RefObject<HTMLElement | null>) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const target = ref.current;
    if (target) {
      target.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (target) {
        target.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [ref]);

  return mousePosition;
};
