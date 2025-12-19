const Screenshots = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43,96%,56%,0.05)_0%,_transparent_50%)]" />

      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">See It In Action</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
            A Glimpse Inside <span className="gradient-text">RefyneAI</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch how RefyneAI transforms your prompts in real-time.
          </p>
        </div>

        {/* Video showcase */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5">
            <video
              controls
              className="w-full h-auto"
              poster="/placeholder.svg"
            >
              <source src="/Rai explanation.mp4" type="video/mp4" />
              <p className="p-8 text-center text-muted-foreground">
                Your browser doesn't support video playback. Please use a modern browser to view this demonstration.
              </p>
            </video>

            {/* Optional: Overlay gradient for aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Caption below video */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Complete Feature Walkthrough</h3>
            <p className="text-muted-foreground">
              See RefyneAI in action from setup to refined prompts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;

