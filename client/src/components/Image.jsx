import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function({ src, tag, title }) {
  const cardRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Floating image animation
    gsap.to(imageRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(overlayRef.current, {
      height: "45%",
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(textRef.current, {
      color: "#ffffff",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(overlayRef.current, {
      height: "0%",
      duration: 0.6,
      ease: "power2.inOut",
    });

    gsap.to(textRef.current, {
      color: "#000000",
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden flex flex-col items-center justify-center p-5  rounded-xl duration-300 border border-black"
    >
      {/* Floating image */}
      <img
        ref={imageRef}
        src={src}
        alt={tag}
        className="h-20 w-20 object-contain mb-4 z-10"
      />

      {/* Text */}
      <p
        ref={textRef}
        className="text-center text-base font-semibold capitalize z-10 "
      >
        {title}
      </p>

      {/* Animated overlay */}
      <div
        ref={overlayRef}
        className="absolute bottom-0 left-0 w-full bg-black z-0"
        style={{ height: "0%" }}
      />
    </div>
  );
}
