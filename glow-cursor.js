
(() => {
  'use strict';

  const settings = {
    color: '#5f8bff',
    intensity: 1.3,
    trailWidth: 3,
    linger: 1.4,
    glow: 1.2,
    clickBurst: true,
    maxPixelRatio: 2
  };

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  // Disable on touch devices and for reduced-motion users.
  if (reducedMotion.matches || !finePointer.matches) return;
  if (!document.body || document.getElementById('glow-cursor-canvas')) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'glow-cursor-canvas';
  canvas.className = 'glow-cursor__canvas';
  canvas.setAttribute('aria-hidden', 'true');

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  document.body.appendChild(canvas);

  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let animationId = 0;
  let previousFrame = 0;
  let lastPoint = null;
  let isRunning = true;

  const trail = [];
  const particles = [];
  const rings = [];

  function getActiveColor() {
    return document.documentElement.dataset.theme === 'light'
      ? '#4779f5'
      : settings.color;
  }

  function hexToRgba(hex, alpha) {
    const value = hex.replace('#', '');
    const expanded = value.length === 3
      ? value.split('').map(char => char + char).join('')
      : value;

    const number = parseInt(expanded, 16);
    const red = (number >> 16) & 255;
    const green = (number >> 8) & 255;
    const blue = number & 255;

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  function resizeCanvas() {
    pixelRatio = Math.min(
      window.devicePixelRatio || 1,
      settings.maxPixelRatio
    );

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function addTrailPoint(x, y) {
    trail.push({
      x,
      y,
      life: settings.linger,
      maxLife: settings.linger
    });

    if (trail.length > 140) {
      trail.splice(0, trail.length - 140);
    }
  }

  function handlePointerMove(event) {
    if (event.pointerType === 'touch') return;

    const x = event.clientX;
    const y = event.clientY;

    if (!lastPoint) {
      lastPoint = { x, y };
      addTrailPoint(x, y);
      return;
    }

    const dx = x - lastPoint.x;
    const dy = y - lastPoint.y;
    const distance = Math.hypot(dx, dy);
    const steps = Math.max(1, Math.min(24, Math.ceil(distance / 7)));

    for (let step = 1; step <= steps; step += 1) {
      const progress = step / steps;

      addTrailPoint(
        lastPoint.x + dx * progress,
        lastPoint.y + dy * progress
      );
    }

    lastPoint = { x, y };
  }

  function createClickBurst(x, y) {
    if (!settings.clickBurst) return;

    const count = 26;

    for (let i = 0; i < count; i += 1) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.18;
      const speed = 65 + Math.random() * 170;
      const life = 0.45 + Math.random() * 0.45;

      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 1 + Math.random() * 2,
        life,
        maxLife: life
      });
    }

    rings.push({
      x,
      y,
      life: 0.55,
      maxLife: 0.55,
      radius: 7
    });
  }

  function drawTrail(color) {
    if (trail.length < 2) return;

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (let i = 1; i < trail.length; i += 1) {
      const from = trail[i - 1];
      const to = trail[i];

      const fade = Math.min(
        from.life / from.maxLife,
        to.life / to.maxLife
      );

      if (fade <= 0) continue;

      const alpha = Math.min(
        0.9,
        fade * settings.intensity * 0.72
      );

      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);

      ctx.strokeStyle = hexToRgba(color, alpha);
      ctx.lineWidth = settings.trailWidth * (0.28 + fade * 0.72);
      ctx.shadowColor = color;
      ctx.shadowBlur = 22 * settings.glow * fade;
      ctx.stroke();

      // Bright center line
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);

      ctx.shadowBlur = 0;
      ctx.strokeStyle = `rgba(220, 235, 255, ${alpha * 0.48})`;
      ctx.lineWidth = Math.max(
        0.65,
        settings.trailWidth * 0.22 * fade
      );
      ctx.stroke();
    }

    const tip = trail[trail.length - 1];
    const tipFade = Math.max(0, tip.life / tip.maxLife);

    ctx.beginPath();
    ctx.arc(tip.x, tip.y, 2.2 + tipFade, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(220, 235, 255, ${tipFade * 0.85})`;
    ctx.shadowColor = color;
    ctx.shadowBlur = 20 * settings.glow;
    ctx.fill();

    ctx.restore();
  }

  function drawClickEffects(delta, color) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    // Expanding click rings
    for (let i = rings.length - 1; i >= 0; i -= 1) {
      const ring = rings[i];

      ring.life -= delta;

      const progress = 1 - ring.life / ring.maxLife;
      const alpha = Math.max(0, ring.life / ring.maxLife);
      const radius = ring.radius + progress * 48;

      ctx.beginPath();
      ctx.arc(ring.x, ring.y, radius, 0, Math.PI * 2);

      ctx.strokeStyle = hexToRgba(color, alpha * 0.8);
      ctx.lineWidth = 2 * alpha;
      ctx.shadowColor = color;
      ctx.shadowBlur = 18 * alpha;
      ctx.stroke();

      if (ring.life <= 0) rings.splice(i, 1);
    }

    // Click particles
    for (let i = particles.length - 1; i >= 0; i -= 1) {
      const particle = particles[i];

      particle.life -= delta;
      particle.x += particle.vx * delta;
      particle.y += particle.vy * delta;

      particle.vx *= Math.exp(-3.8 * delta);
      particle.vy *= Math.exp(-3.8 * delta);

      const alpha = Math.max(0, particle.life / particle.maxLife);

      ctx.beginPath();
      ctx.arc(
        particle.x,
        particle.y,
        particle.radius * (0.5 + alpha),
        0,
        Math.PI * 2
      );

      ctx.fillStyle = hexToRgba(color, alpha);
      ctx.shadowColor = color;
      ctx.shadowBlur = 15 * alpha * settings.glow;
      ctx.fill();

      if (particle.life <= 0) particles.splice(i, 1);
    }

    ctx.restore();
  }

  function animate(timestamp) {
    if (!isRunning) return;

    const delta = previousFrame
      ? Math.min((timestamp - previousFrame) / 1000, 0.05)
      : 0.016;

    previousFrame = timestamp;

    ctx.clearRect(0, 0, width, height);

    for (let i = trail.length - 1; i >= 0; i -= 1) {
      trail[i].life -= delta;

      if (trail[i].life <= 0) {
        trail.splice(i, 1);
      }
    }

    const color = getActiveColor();

    drawTrail(color);
    drawClickEffects(delta, color);

    animationId = window.requestAnimationFrame(animate);
  }

  function stopForReducedMotion(event) {
    if (!event.matches) return;

    isRunning = false;
    window.cancelAnimationFrame(animationId);
    canvas.remove();

    window.removeEventListener('pointermove', handlePointerMove);
  }

  resizeCanvas();

  window.addEventListener('resize', resizeCanvas, {
    passive: true
  });

  window.addEventListener('pointermove', handlePointerMove, {
    passive: true
  });

  window.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'touch') {
      createClickBurst(event.clientX, event.clientY);
    }
  }, { passive: true });

  window.addEventListener('pointerout', event => {
    if (!event.relatedTarget) lastPoint = null;
  });

  window.addEventListener('blur', () => {
    lastPoint = null;
  });

  document.addEventListener('visibilitychange', () => {
    previousFrame = 0;
  });

  if (typeof reducedMotion.addEventListener === 'function') {
    reducedMotion.addEventListener('change', stopForReducedMotion);
  }

  animationId = window.requestAnimationFrame(animate);
})();
