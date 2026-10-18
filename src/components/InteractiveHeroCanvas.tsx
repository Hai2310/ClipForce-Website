import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  color: string;
  speed: number;
}

export const InteractiveHeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse coordinates for 3D parallax tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / width - 0.5;
      const normY = (e.clientY - rect.top) / height - 0.5;
      targetX = normX * 0.4;
      targetY = normY * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Generate grid of 3D floating nodes resembling audio timeline / clip markers
    let particles: Particle[] = [];
    const colors = ['#D4FF54', '#C4F03F', '#A78BFA', '#8B5CF6', '#00F2FE'];

    const initParticles = () => {
      particles = [];
      const count = Math.min(80, Math.floor(width / 16));
      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * width * 1.2;
        const y = (Math.random() - 0.5) * height * 1.2;
        const z = Math.random() * 600 + 100;
        particles.push({
          x,
          y,
          z,
          baseX: x,
          baseY: y,
          baseZ: z,
          size: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.002 + 0.001
        });
      }
    };

    initParticles();

    let angle = 0;
    const render = () => {
      // Smooth interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      angle += 0.003;

      ctx.clearRect(0, 0, width, height);

      const fov = 400;
      const centerX = width / 2;
      const centerY = height / 2;

      // Draw subtle perspective grid lines at bottom
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const horizonY = centerY + 120;
      
      for (let i = -6; i <= 6; i++) {
        const startX = centerX + i * 40;
        const endX = centerX + i * 180 + mouseX * 80;
        ctx.beginPath();
        ctx.moveTo(startX, horizonY);
        ctx.lineTo(endX, height);
        ctx.stroke();
      }

      // Draw 3D nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Gentle wave motion
        p.y = p.baseY + Math.sin(angle * 2 + i) * 15;
        p.x = p.baseX + Math.cos(angle + i) * 10;

        // Apply mouse tilt
        const rotatedX = p.x * Math.cos(mouseX) - p.z * Math.sin(mouseX);
        const rotatedZ = p.x * Math.sin(mouseX) + p.z * Math.cos(mouseX);
        const rotatedY = p.y * Math.cos(mouseY) - rotatedZ * Math.sin(mouseY);

        if (rotatedZ + fov > 10) {
          const scale = fov / (fov + rotatedZ);
          const screenX = centerX + rotatedX * scale;
          const screenY = centerY + rotatedY * scale;
          const alpha = Math.min(1, Math.max(0.1, (1 - rotatedZ / 700) * 0.8));

          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(screenX, screenY, p.size * scale, 0, Math.PI * 2);
          ctx.fill();

          // Connect nearby nodes with subtle hairline threads
          for (let j = i + 1; j < Math.min(i + 4, particles.length); j++) {
            const p2 = particles[j];
            const scale2 = fov / (fov + p2.z);
            const p2x = centerX + p2.x * scale2;
            const p2y = centerY + p2.y * scale2;
            const dist = Math.hypot(screenX - p2x, screenY - p2y);
            if (dist < 120) {
              ctx.strokeStyle = 'rgba(212, 255, 84, 0.15)';
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(screenX, screenY);
              ctx.lineTo(p2x, p2y);
              ctx.stroke();
            }
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full opacity-60 mix-blend-screen"
      aria-hidden="true"
    />
  );
};
