"use client"

import { ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Card3DProps {
    children: ReactNode;
    className?: string;
    intensity?: number;
}

export const Card3D = ({ children, className, intensity = 5 }: Card3DProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtle translation instead of rotation
        const translateXValue = ((x - centerX) / centerX) * intensity;
        const translateYValue = ((y - centerY) / centerY) * intensity;

        setTranslateX(translateXValue);
        setTranslateY(translateYValue);
    };

    const handleMouseLeave = () => {
        setTranslateX(0);
        setTranslateY(0);
        setIsHovering(false);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    return (
        <div
            ref={cardRef}
            className={cn("relative transition-all duration-300 ease-out", className)}
            style={{
                transform: `translate(${translateX}px, ${translateY}px) ${
                    isHovering ? "scale(1.02)" : "scale(1)"
                }`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 transition-opacity duration-300 blur-xl"
                style={{
                    opacity: isHovering ? 1 : 0,
                }}
            />
            <div className="relative">{children}</div>
        </div>
    );
};
