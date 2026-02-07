import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingHearts } from '@/components/FloatingHearts';
import { SuccessMessage } from '@/components/SuccessMessage';

// Centralized prompt text to ensure consistency
const VALENTINE_PROMPT = "Maniha will you be my valentines";

function App() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setShowSuccess(true);
  };

  // Calculate Yes button size based on No clicks
  const yesButtonScale = 1 + noClickCount * 0.3;

  if (showSuccess) {
    return <SuccessMessage />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-screen background image with blur and dim overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/FA6B879E-A753-494E-851B-68261C8C9998.jpeg)' }}
      />
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />
      
      {/* Floating hearts animation */}
      <FloatingHearts />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center space-y-12 animate-fade-in">
          {/* Heart icon */}
          <div className="flex justify-center">
            <div className="relative animate-pulse-heart">
              <Heart className="h-24 w-24 fill-valentine-accent text-valentine-accent drop-shadow-glow" />
              <div className="absolute inset-0 animate-ping-slow">
                <Heart className="h-24 w-24 fill-valentine-accent/30 text-valentine-accent/30" />
              </div>
            </div>
          </div>

          {/* Question */}
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-text animate-slide-up">
            {VALENTINE_PROMPT}
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Button
              onClick={handleYesClick}
              size="lg"
              className="bg-valentine-accent hover:bg-valentine-accent-dark text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/30"
              style={{
                transform: `scale(${yesButtonScale})`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              <Heart className="mr-2 h-5 w-5 fill-current" />
              Yes!
            </Button>

            <Button
              onClick={handleNoClick}
              variant="outline"
              size="lg"
              className="bg-white/90 hover:bg-white text-valentine-dark font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-valentine-accent/50"
            >
              No
            </Button>
          </div>

          {/* Hint text that appears after clicking No */}
          {noClickCount > 0 && (
            <p className="text-white text-lg animate-fade-in italic drop-shadow-text">
              {noClickCount === 1 && "Are you sure? 🥺"}
              {noClickCount === 2 && "The Yes button is getting bigger... 👀"}
              {noClickCount === 3 && "Maybe reconsider? 💕"}
              {noClickCount >= 4 && "The Yes button is calling you! 💖"}
            </p>
          )}
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

export default App;
