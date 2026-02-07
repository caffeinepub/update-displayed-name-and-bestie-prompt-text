import { Heart, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function SuccessMessage() {
  const [confettiHearts, setConfettiHearts] = useState<Array<{
    id: number;
    left: string;
    animationDelay: string;
    animationDuration: string;
    size: number;
  }>>([]);

  useEffect(() => {
    // Generate confetti hearts
    const hearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
      size: 20 + Math.random() * 30,
    }));
    setConfettiHearts(hearts);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-screen background image with blur and dim overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/FA6B879E-A753-494E-851B-68261C8C9998.jpeg)' }}
      />
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />

      {/* Confetti hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confettiHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-confetti"
            style={{
              left: heart.left,
              animationDelay: heart.animationDelay,
              animationDuration: heart.animationDuration,
              top: '-50px',
            }}
          >
            <Heart
              className="fill-valentine-accent text-valentine-accent"
              style={{
                width: heart.size,
                height: heart.size,
              }}
            />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 animate-bounce-in">
          {/* Large heart with sparkles */}
          <div className="flex justify-center relative">
            <div className="relative">
              <Heart className="h-32 w-32 fill-valentine-accent text-valentine-accent drop-shadow-glow animate-pulse-heart" />
              <Sparkles className="absolute -top-4 -right-4 h-12 w-12 text-yellow-300 animate-spin-slow" />
              <Sparkles className="absolute -bottom-4 -left-4 h-10 w-10 text-yellow-200 animate-spin-slow" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Success message */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-text animate-scale-in">
              Yay! 🎉
            </h1>
            <p className="text-3xl md:text-5xl text-valentine-accent font-semibold drop-shadow-glow animate-fade-in-delayed">
              You made my day 💖
            </p>
          </div>

          {/* Decorative hearts */}
          <div className="flex justify-center gap-4 mt-8 animate-fade-in-delayed">
            <Heart className="h-8 w-8 fill-valentine-accent text-valentine-accent animate-float" />
            <Heart className="h-10 w-10 fill-valentine-accent text-valentine-accent animate-float" style={{ animationDelay: '0.5s' }} />
            <Heart className="h-8 w-8 fill-valentine-accent text-valentine-accent animate-float" style={{ animationDelay: '1s' }} />
          </div>

          {/* Sweet message */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mt-8 animate-fade-in-delayed drop-shadow-text">
            I'm so happy you said yes! We're going to be besties forever. 💕
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center text-white/90 text-sm drop-shadow-text">
        <p>
          © 2026. Built with <Heart className="inline h-4 w-4 fill-valentine-accent text-valentine-accent animate-pulse" /> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-valentine-accent hover:text-white transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
