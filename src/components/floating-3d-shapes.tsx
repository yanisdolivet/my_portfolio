"use client"

import { useEffect, useRef } from "react";

interface Shape {
    x: number;
    y: number;
    z: number;
    rotateX: number;
    rotateY: number;
    rotateZ: number;
    speedX: number;
    speedY: number;
    speedZ: number;
    speedRotateX: number;
    speedRotateY: number;
    speedRotateZ: number;
    size: number;
    type: "cube" | "pyramid" | "sphere";
    color: string;
}

export const Floating3DShapes = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const shapesRef = useRef<Shape[]>([]);
    const frameRef = useRef<number>();

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const shapeElements: HTMLDivElement[] = [];

        // Create shapes - fewer and more subtle
        const shapeCount = 5;
        const colors = [
            "rgba(147, 51, 234, 0.15)", // purple
            "rgba(59, 130, 246, 0.15)", // blue
            "rgba(168, 85, 247, 0.15)", // violet
            "rgba(99, 102, 241, 0.15)", // indigo
        ];

        for (let i = 0; i < shapeCount; i++) {
            const shape: Shape = {
                x: Math.random() * 100,
                y: Math.random() * 100,
                z: Math.random() * 300,
                rotateX: Math.random() * 360,
                rotateY: Math.random() * 360,
                rotateZ: Math.random() * 360,
                speedX: (Math.random() - 0.5) * 0.02,
                speedY: (Math.random() - 0.5) * 0.02,
                speedZ: (Math.random() - 0.5) * 0.15,
                speedRotateX: (Math.random() - 0.5) * 0.2,
                speedRotateY: (Math.random() - 0.5) * 0.2,
                speedRotateZ: (Math.random() - 0.5) * 0.2,
                size: Math.random() * 40 + 30,
                type: "sphere" as Shape["type"], // Only spheres for a more natural look
                color: colors[Math.floor(Math.random() * colors.length)],
            };

            shapesRef.current.push(shape);

            const shapeElement = document.createElement("div");
            shapeElement.className = "absolute transition-opacity duration-300";
            shapeElement.style.cssText = `
                width: ${shape.size}px;
                height: ${shape.size}px;
                transform-style: preserve-3d;
                pointer-events: none;
            `;

            // Create 3D shape based on type
            if (shape.type === "cube") {
                shapeElement.innerHTML = createCube(shape.size, shape.color);
            } else if (shape.type === "pyramid") {
                shapeElement.innerHTML = createPyramid(shape.size, shape.color);
            } else {
                shapeElement.innerHTML = createSphere(shape.size, shape.color);
            }

            container.appendChild(shapeElement);
            shapeElements.push(shapeElement);
        }

        const animate = () => {
            shapesRef.current.forEach((shape, index) => {
                // Update position
                shape.x += shape.speedX;
                shape.y += shape.speedY;
                shape.z += shape.speedZ;

                // Update rotation
                shape.rotateX += shape.speedRotateX;
                shape.rotateY += shape.speedRotateY;
                shape.rotateZ += shape.speedRotateZ;

                // Wrap around edges
                if (shape.x < -10) shape.x = 110;
                if (shape.x > 110) shape.x = -10;
                if (shape.y < -10) shape.y = 110;
                if (shape.y > 110) shape.y = -10;
                if (shape.z < -100) shape.z = 300;
                if (shape.z > 300) shape.z = -100;

                // Apply transforms - subtle rotation only
                const element = shapeElements[index];
                if (element) {
                    element.style.transform = `
                        translate3d(${shape.x}vw, ${shape.y}vh, ${shape.z}px)
                        rotateZ(${shape.rotateZ}deg)
                    `;
                    
                    // More subtle fade based on z-depth
                    const opacity = Math.max(0.1, Math.min(0.4, (300 - shape.z) / 500));
                    element.style.opacity = opacity.toString();
                }
            });

            frameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
            shapeElements.forEach(el => el.remove());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none overflow-hidden opacity-60"
            style={{
                zIndex: 1,
            }}
        />
    );
};

function createCube(size: number, color: string): string {
    const half = size / 2;
    return `
        <div style="width: 100%; height: 100%; transform-style: preserve-3d; position: relative;">
            <div style="position: absolute; width: ${size}px; height: ${size}px; background: ${color}; border: 1px solid rgba(255,255,255,0.1); transform: translateZ(${half}px);"></div>
            <div style="position: absolute; width: ${size}px; height: ${size}px; background: ${color}; border: 1px solid rgba(255,255,255,0.1); transform: translateZ(-${half}px) rotateY(180deg);"></div>
            <div style="position: absolute; width: ${size}px; height: ${size}px; background: ${color}; border: 1px solid rgba(255,255,255,0.1); transform: rotateY(90deg) translateZ(${half}px);"></div>
            <div style="position: absolute; width: ${size}px; height: ${size}px; background: ${color}; border: 1px solid rgba(255,255,255,0.1); transform: rotateY(-90deg) translateZ(${half}px);"></div>
            <div style="position: absolute; width: ${size}px; height: ${size}px; background: ${color}; border: 1px solid rgba(255,255,255,0.1); transform: rotateX(90deg) translateZ(${half}px);"></div>
            <div style="position: absolute; width: ${size}px; height: ${size}px; background: ${color}; border: 1px solid rgba(255,255,255,0.1); transform: rotateX(-90deg) translateZ(${half}px);"></div>
        </div>
    `;
}

function createPyramid(size: number, color: string): string {
    const half = size / 2;
    return `
        <div style="width: 100%; height: 100%; transform-style: preserve-3d; position: relative;">
            <div style="position: absolute; width: 0; height: 0; border-left: ${half}px solid transparent; border-right: ${half}px solid transparent; border-bottom: ${size}px solid ${color}; border: 1px solid rgba(255,255,255,0.1); transform: translateY(-${half}px);"></div>
            <div style="position: absolute; width: ${size}px; height: ${size}px; background: ${color}; border: 1px solid rgba(255,255,255,0.1); transform: rotateX(90deg) translateZ(0px);"></div>
        </div>
    `;
}

function createSphere(size: number, color: string): string {
    return `
        <div style="
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle at 30% 30%, ${color.replace('0.3', '0.5')}, ${color});
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: inset -10px -10px 20px rgba(0,0,0,0.3);
        "></div>
    `;
}
