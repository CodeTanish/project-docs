import { useEffect, useRef, useState } from "react";
import { SiJavascript, SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import gsap from "gsap";
import clsx from "clsx";
import { TechIconSwitchercss } from "../tailwindcss/style";


const techIcons = [
  { icon: SiJavascript },
  { icon: SiPython },
  { icon: FaJava },
];

export default function TechIconSwitcher() {
  const [index, setIndex] = useState(0);
  const iconRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(iconRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "power1.in",
        onComplete: () => {
          setIndex((prev) => (prev + 1) % techIcons.length);
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      iconRef.current,
      { scale: 1.3, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, [index]);

  const { icon: Icon } = techIcons[index];

  return (
    <div className={clsx(TechIconSwitchercss.container)}>
      <div
        ref={iconRef}
        className={clsx(TechIconSwitchercss.icons)}
      >
        <Icon />
      </div>
    </div>
  );
}