import { Button } from "@/components/ui/button";
import { Chrome, Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(43,96%,56%,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(142,76%,36%,0.05)_0%,_transparent_40%)]" />

      {/* Animated dots/grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-primary/70 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-accent rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/50 rounded-full animate-pulse-slow" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Automatic Prompt Refinement</span>
          </div>

          {/* Logo/Title */}
          <h1 className="animate-fade-up-delay-1 logo-text text-6xl md:text-8xl lg:text-9xl mb-6">
            <span className="gradient-text">RefyneAI</span>
          </h1>

          {/* Tagline */}
          <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-muted-foreground max-w-2xl mb-4 text-balance">
            Transform your prompts instantly. Get better AI responses without the effort.
          </p>
          <p className="animate-fade-up-delay-2 text-lg text-muted-foreground/70 max-w-xl mb-10">
            Invisible. Intelligent. Always-on.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
            <Button
              variant="gold"
              size="xl"
              className="group"
              onClick={() => window.open('https://github.com/SohamDalal07/RefyneAi', '_blank')}
            >
              <Chrome className="w-5 h-5" />
              Add to Chrome — Free
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => {
                const section = document.querySelector('#how-it-works');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See How It Works
            </Button>
          </div>

          {/* Social proof */}
          <div className="animate-fade-up-delay-3 mt-12 flex flex-col items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-primary fill-primary" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="text-foreground font-medium">5,000+</span> AI enthusiasts
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
