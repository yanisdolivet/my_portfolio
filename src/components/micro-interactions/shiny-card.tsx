"use client"

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ShinyCardProps {
    children: ReactNode;
    className?: string;
}

export const ShinyCard = ({ children, className }: ShinyCardProps) => {
    return (
        <div
            className={cn("relative overflow-hidden group", className)}
            onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }}
        >
            {/* Shine effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(147, 51, 234, 0.15), transparent 40%)`,
                }}
            />
            {children}
        </div>
    );
};
