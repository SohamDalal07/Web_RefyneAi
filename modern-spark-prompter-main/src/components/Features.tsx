import { Brain, Zap, Settings, Shield, Globe, Layers } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intent Detection",
    description: "Automatically recognizes if you're coding, researching, or just chatting — and optimizes accordingly.",
    highlight: "AI-Powered",
  },
  {
    icon: Zap,
    title: "Smart Refinement",
    description: "Uses AI for complex prompts and efficient rules for simple ones. Fast and intelligent.",
    highlight: "Hybrid Engine",
  },
  {
    icon: Settings,
    title: "Zero Configuration",
    description: "Install once, forget it exists. Works automatically in the background on every prompt.",
    highlight: "Set & Forget",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your API key stays local. Your prompts are never stored or shared with third parties.",
    highlight: "100% Secure",
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description: "Works seamlessly across Gemini, Claude, and Perplexity with more platforms coming soon.",
    highlight: "Universal",
  },
  {
    icon: Layers,
    title: "Contextual Expansion",
    description: "Adds relevant structure, examples, and constraints that dramatically improve AI output.",
    highlight: "Enhanced Output",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
            Everything You Need, <span className="gradient-text">Nothing You Don't</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful prompt refinement that stays out of your way until you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Highlight badge */}
                <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
                  {feature.highlight}
                </span>
                
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
