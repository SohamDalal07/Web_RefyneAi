import { Button } from "@/components/ui/button";
import { Chrome, ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43,96%,56%,0.1)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Free Forever</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6">
            Stop Writing <span className="gradient-text">Mediocre Prompts</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of users who are already getting better AI responses with RefyneAI.
            Install in seconds, benefit for life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="gold"
              size="xl"
              className="group text-lg"
              onClick={() => window.open('https://github.com/SohamDalal07/RefyneAi', '_blank')}
            >
              <Chrome className="w-6 h-6" />
              Install RefyneAI Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Chrome Extension • No Sign Up • Works Instantly
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
