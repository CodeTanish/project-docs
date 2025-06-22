import { useRef } from "react";
import { AnimateButton } from "../tailwindcss/style";
import clsx from 'clsx'
import gsap from "gsap";

export default function AnimatedButton({ label = "Start Learning" }) {
  const fillRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.set(fillRef.current, {
      width: "0%",
      backgroundColor: "#000000",
    });

    // Reset text to black immediately
    gsap.set(textRef.current, {
      color: "#000000",
    });

    // Animate background fill
    gsap.to(fillRef.current, {
      width: "100%",
      duration: 2.1,
      ease: "power2.inOut",
    });

    // Delay color change (when background reaches text area)
    gsap.to(textRef.current, {
      color: "#ffffff",
      ease: "power2.out",
      delay: 0.9, // ~10% of the 3s duration
    });
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf([fillRef.current, textRef.current]);

    gsap.to(fillRef.current, {
      width: "0%",
      duration: 0.8,
      ease: "power2.inOut",
    });

    gsap.to(textRef.current, {
      color: "#000000",
      duration: 0.4,
      ease: "power2.in",
    });
  };

  const handleClick = () => {
    navigate("/learn"); 
  };

  return (
    <div
      className={clsx(AnimateButton.container)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Background fill animation */}
      <div
        ref={fillRef}
        className={clsx(AnimateButton.filler)}
        style={{
          width: "0%",
          backgroundColor: "#000000",
          zIndex: 1,
          transition: "none",
        }}
      />

      {/* Text content */}
      <div
        ref={textRef}
        className={AnimateButton.btn}
        style={{ color: "#000000" }}
      >
        {label}
      </div>
    </div>
  );
}
