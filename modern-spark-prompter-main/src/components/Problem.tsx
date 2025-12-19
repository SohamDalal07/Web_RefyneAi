import { AlertCircle, Clock, Frown, RefreshCw } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Wasted Time",
    description: "Spending minutes crafting the perfect prompt, only to get mediocre results.",
  },
  {
    icon: RefreshCw,
    title: "Endless Iterations",
    description: "Re-writing prompts 5, 10, 15 times trying to get the AI to understand.",
  },
  {
    icon: Frown,
    title: "Frustrating Results",
    description: "Generic responses that miss the mark because your prompt wasn't specific enough.",
  },
  {
    icon: AlertCircle,
    title: "Lost Potential",
    description: "Never knowing if a better prompt would have unlocked a better answer.",
  },
];

const Problem = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container relative px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Sound Familiar?
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            You're not alone. Every day, millions of AI users struggle with the same problem: 
            <span className="text-foreground font-medium"> getting great results requires great prompts.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl md:text-3xl font-serif">
            What if your prompts could <span className="gradient-text">refine themselves?</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
