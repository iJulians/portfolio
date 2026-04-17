import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [outer, setOuter] = useState({ x: 0, y: 0 });

  const outerRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  // pega posição real do mouse
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // animação suave do círculo externo
  useEffect(() => {
    const follow = () => {
      outerRef.current.x += (mouse.x - outerRef.current.x) * 0.1;
      outerRef.current.y += (mouse.y - outerRef.current.y) * 0.1;

      setOuter({ ...outerRef.current });

      rafRef.current = requestAnimationFrame(follow);
    };

    rafRef.current = requestAnimationFrame(follow);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mouse]);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-green-400 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2"
        style={{ left: mouse.x, top: mouse.y }}
      />

      <div
        className="fixed top-0 left-0 w-10 h-10 border border-green-400/60 rounded-full pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2"
        style={{ left: outer.x, top: outer.y }}
      />
    </>
  );
};

export default CustomCursor;