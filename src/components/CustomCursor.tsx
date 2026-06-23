import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  // Track continuous mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add spring physics for smooth following
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateCursorAvailability = () => {
      setIsEnabled(mediaQuery.matches);
    };

    updateCursorAvailability();
    mediaQuery.addEventListener("change", updateCursorAvailability);

    return () => {
      mediaQuery.removeEventListener("change", updateCursorAvailability);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      // Offset by half the cursor size to center it
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering over anything clickable
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isEnabled, mouseX, mouseY]);

  if (!isEnabled) {
    return null;
  }

  return (
    <motion.div
      className='custom-cursor'
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? "var(--accent)" : "transparent",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
};

export default CustomCursor;
