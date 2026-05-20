import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Use springs for smooth cursor tracking
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX - 20);
            cursorY.set(e.clientY - 20);
        };

        const handleMouseOver = (e) => {
            // Check if hovering over clickable elements
            if (
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.closest('.interactive') ||
                window.getComputedStyle(e.target).cursor === 'pointer'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    // If no mouse coordinates yet, hide it
    if (mousePosition.x === 0 && mousePosition.y === 0) return null;

    return (
        <>
            <motion.div
                className="cursor-dot"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    opacity: isHovering ? 0 : 1
                }}
                transition={{ type: "tween", ease: "linear", duration: 0 }}
            />
            <motion.div
                className="cursor-ring"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
                animate={{
                    scale: isHovering ? 1.8 : 1,
                    backgroundColor: isHovering ? "rgba(0, 198, 173, 0.15)" : "transparent",
                    borderColor: isHovering ? "rgba(0, 198, 173, 0)" : "rgba(0, 198, 173, 0.6)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <style>{`
        @media (pointer: fine) {
          .cursor-dot {
            position: fixed; top: 0; left: 0; width: 8px; height: 8px;
            background: var(--clr-primary); border-radius: 50%;
            pointer-events: none; z-index: 999999; 
            /* To create a cool difference effect on white text */
          }
          .cursor-ring {
            position: fixed; top: 0; left: 0; width: 40px; height: 40px;
            border: 1px solid rgba(0,198,173, 0.6); border-radius: 50%;
            pointer-events: none; z-index: 999998;
            backdrop-filter: blur(2px);
          }
        }
        @media (pointer: coarse) {
          .cursor-dot, .cursor-ring { display: none !important; }
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
