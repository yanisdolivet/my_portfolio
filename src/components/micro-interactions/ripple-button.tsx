"use client"

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RippleButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const RippleButton = ({ children, className, onClick }: RippleButtonProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const ripple = document.createElement("span");
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add("ripple");

        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

        onClick?.();
    };

    return (
        <button
            className={cn("relative overflow-hidden", className)}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
