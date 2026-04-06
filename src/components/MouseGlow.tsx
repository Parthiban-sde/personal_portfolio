import { useEffect, useRef } from 'react';

/**
 * MouseGlow — a dual-layer cursor spotlight that follows the mouse.
 *  • Primary orb  : small, tight, cyan — snaps close to the cursor
 *  • Secondary orb: large, slow, blue/purple — lags behind for depth
 *  • Tertiary ring : faint outline that scales on hover over interactive elements
 * All CSS-only transitions; zero deps.
 */
export default function MouseGlow() {
  const primaryRef  = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);
  const ringRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let primaryX  = window.innerWidth  / 2;
    let primaryY  = window.innerHeight / 2;
    let secondaryX = primaryX;
    let secondaryY = primaryY;
    let rafId: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      // Secondary orb lazily chases the primary position
      secondaryX = lerp(secondaryX, primaryX, 0.06);
      secondaryY = lerp(secondaryY, primaryY, 0.06);

      if (secondaryRef.current) {
        secondaryRef.current.style.transform =
          `translate(${secondaryX}px, ${secondaryY}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      primaryX = e.clientX;
      primaryY = e.clientY;

      if (primaryRef.current) {
        primaryRef.current.style.transform =
          `translate(${primaryX}px, ${primaryY}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${primaryX}px, ${primaryY}px) translate(-50%, -50%)`;
      }
    };

    // Grow ring when hovering interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a, button, [role="button"], input, textarea, select')
      ) {
        ringRef.current?.classList.add('ring-hover');
        primaryRef.current?.classList.add('primary-hover');
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a, button, [role="button"], input, textarea, select')
      ) {
        ringRef.current?.classList.remove('ring-hover');
        primaryRef.current?.classList.remove('primary-hover');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('mouseout',  onMouseOut,  { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout',  onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <style>{`
        .mouse-glow-primary {
          position: fixed;
          top: 0; left: 0;
          width: 20px; height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(34,211,238,0.9) 0%, rgba(59,130,246,0.5) 60%, transparent 100%);
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: screen;
          will-change: transform;
          transition: width 0.25s ease, height 0.25s ease, background 0.25s ease;
          filter: blur(1px);
        }
        .mouse-glow-primary.primary-hover {
          width: 12px; height: 12px;
          background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(34,211,238,0.9) 60%, transparent 100%);
        }

        .mouse-glow-secondary {
          position: fixed;
          top: 0; left: 0;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle,
            rgba(34,211,238,0.07) 0%,
            rgba(59,130,246,0.06) 40%,
            rgba(139,92,246,0.04) 70%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 9998;
          mix-blend-mode: screen;
          will-change: transform;
          filter: blur(8px);
        }

        .mouse-glow-ring {
          position: fixed;
          top: 0; left: 0;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(34,211,238,0.35);
          pointer-events: none;
          z-index: 9999;
          will-change: transform;
          transition:
            width 0.3s cubic-bezier(0.34,1.56,0.64,1),
            height 0.3s cubic-bezier(0.34,1.56,0.64,1),
            border-color 0.3s ease,
            opacity 0.3s ease;
          box-shadow: 0 0 12px rgba(34,211,238,0.15), inset 0 0 12px rgba(34,211,238,0.05);
        }
        .mouse-glow-ring.ring-hover {
          width: 56px; height: 56px;
          border-color: rgba(34,211,238,0.7);
          box-shadow: 0 0 20px rgba(34,211,238,0.3), inset 0 0 20px rgba(34,211,238,0.1);
        }

        /* Hide on touch / mobile */
        @media (hover: none) {
          .mouse-glow-primary,
          .mouse-glow-secondary,
          .mouse-glow-ring { display: none; }
        }
      `}</style>

      {/* Large soft glow that lags */}
      <div ref={secondaryRef} className="mouse-glow-secondary" />

      {/* Tight inner dot */}
      <div ref={primaryRef}  className="mouse-glow-primary" />

      {/* Ring that expands on interactive elements */}
      <div ref={ringRef}     className="mouse-glow-ring" />
    </>
  );
}
