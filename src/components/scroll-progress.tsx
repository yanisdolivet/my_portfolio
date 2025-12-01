"use client"

import { useEffect, useState, useRef } from "react";

export const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Cancel previous frame
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }

            // Use requestAnimationFrame for smooth updates
            rafRef.current = requestAnimationFrame(() => {
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                
                const totalHeight = documentHeight - windowHeight;
                
                // Prevent division by zero and ensure valid percentage
                if (totalHeight <= 0) {
                    setProgress(0);
                    return;
                }
                
                const scrollProgress = Math.min(100, Math.max(0, (scrollTop / totalHeight) * 100));
                setProgress(scrollProgress);
            });
        };

        // Initial call
        handleScroll();
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[100] pointer-events-none">
            <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-none shadow-sm"
                style={{ 
                    width: `${progress}%`,
                    willChange: 'width'
                }}
            />
        </div>
    );
};
