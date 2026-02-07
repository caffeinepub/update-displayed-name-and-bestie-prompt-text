import { Heart } from 'lucide-react';

export function FloatingHearts() {
  // Generate multiple hearts with different animations
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${8 + Math.random() * 4}s`,
    size: 20 + Math.random() * 30,
    opacity: 0.1 + Math.random() * 0.3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up"
          style={{
            left: heart.left,
            animationDelay: heart.animationDelay,
            animationDuration: heart.animationDuration,
            bottom: '-50px',
          }}
        >
          <Heart
            className="fill-valentine-accent/30 text-valentine-accent/30"
            style={{
              width: heart.size,
              height: heart.size,
              opacity: heart.opacity,
            }}
          />
        </div>
      ))}
    </div>
  );
}
