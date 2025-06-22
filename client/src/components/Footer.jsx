import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full py-4 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10"
    >
      {/* Left: Branding */}
      <div className="text-center md:text-left space-y-1">
        <p className="text-xl font-bold tracking-wide">DevDocs</p>
        <p className="text-sm">Brought to you by <span className="font-medium ">CodeTanish</span></p>
        <p className="text-xs mt-1">© {new Date().getFullYear()} DevDocs. All rights reserved.</p>
      </div>

      {/* Right: Social Links */}
      <div className="flex gap-6 text-2xl">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-200"
        >
          <FaGithub className='text-2xl'/>
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-200"
        >
          <FaLinkedin className='text-2xl'/>
        </a>
      </div>
    </footer>
  );
}
