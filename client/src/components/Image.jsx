import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function({ src, tag, title }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden flex flex-col items-center justify-center p-5  rounded-xl duration-300 border border-black"
    >
      <img
        ref={imageRef}
        src={src}
        alt={tag}
        className="h-20 w-20 object-contain mb-4 z-10"
      />

      {/* Text */}
      <p
        className="text-center text-base font-semibold capitalize z-10 "
      >
        {title}
      </p>

    </div>
  );
}
