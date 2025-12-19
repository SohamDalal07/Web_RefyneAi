import { MessageSquare, Sparkles, Wand2, Send } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Type Your Prompt",
    description: "Write naturally in Gemini, Claude, or Perplexity — just like you always do.",
  },
  {
    icon: Wand2,
    step: "02",
    title: "Click Refine",
    description: "Hit the RefyneAI button that appears automatically in your AI chat.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Instant Enhancement",
    description: "Watch your simple prompt transform into an optimized, detailed request.",
  },
  {
    icon: Send,
    step: "04",
    title: "Get Better Results",
    description: "Send the refined prompt and receive significantly improved AI responses.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
            Four Steps to <span className="gradient-text">Perfect Prompts</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No learning curve. No configuration. Just better AI interactions.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Step card */}
                <div className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Step number */}
                  <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </span>
                  
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
