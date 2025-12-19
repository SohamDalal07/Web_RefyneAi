import { Button } from "@/components/ui/button";
import { Chrome, Key, Sparkles, ArrowRight, ExternalLink } from "lucide-react";

const steps = [
  {
    icon: Chrome,
    step: "1",
    title: "Install Extension",
    description: "Add RefyneAI to Chrome from the Web Store. One click, completely free.",
    action: "Add to Chrome",
  },
  {
    icon: Key,
    step: "2",
    title: "Enter API Key",
    description: "Paste your Gemini, Claude, or other AI provider API key. It stays local.",
    action: "Get Free Key",
  },
  {
    icon: Sparkles,
    step: "3",
    title: "Start Refining",
    description: "That's it! Visit any supported AI platform and your prompts auto-enhance.",
    action: "Try It Now",
  },
];

const GetStarted = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Get Started</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
            Ready in <span className="gradient-text">60 Seconds</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No account required. No credit card. Just better prompts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              {/* Step number circle */}
              <div className="relative inline-flex mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                  {step.step}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground mb-5 max-w-xs mx-auto">{step.description}</p>

              <Button
                variant="outline"
                size="sm"
                className="group"
                onClick={() => {
                  if (index === 0) {
                    window.open('https://github.com/SohamDalal07/RefyneAi', '_blank');
                  } else if (index === 1) {
                    window.open('https://aistudio.google.com/app/apikey', '_blank');
                  }
                }}
              >
                {step.action}
                {index === 1 ? (
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
