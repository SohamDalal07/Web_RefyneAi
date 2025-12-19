import { Sparkles } from "lucide-react";

const platforms = [
  {
    name: "Google Gemini",
    color: "from-blue-500 to-cyan-400",
    letter: "G",
    status: "Supported",
  },
  {
    name: "Claude",
    color: "from-orange-500 to-amber-400",
    letter: "C",
    status: "Supported",
  },
  {
    name: "Perplexity",
    color: "from-teal-500 to-emerald-400",
    letter: "P",
    status: "Supported",
  },
  {
    name: "ChatGPT",
    color: "from-green-500 to-emerald-400",
    letter: "G",
    status: "Coming Soon",
  },
];

const Platforms = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Compatibility</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
            Works Where <span className="gradient-text">You Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Seamlessly integrates with the most popular AI platforms.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`group relative flex items-center gap-4 px-8 py-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                platform.status === "Supported"
                  ? "bg-card border-border/50 hover:border-primary/50"
                  : "bg-card/50 border-dashed border-border/30"
              }`}
            >
              {/* Platform icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-2xl font-bold text-white shadow-lg`}>
                {platform.letter}
              </div>
              
              <div className="text-left">
                <h3 className="text-lg font-semibold">{platform.name}</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  {platform.status === "Supported" ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-accent">{platform.status}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3 h-3 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{platform.status}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          More platforms added regularly. <span className="text-primary cursor-pointer hover:underline">Request a platform →</span>
        </p>
      </div>
    </section>
  );
};

export default Platforms;
