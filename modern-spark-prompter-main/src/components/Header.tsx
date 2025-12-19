import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="logo-text text-2xl gradient-text">
            RefyneAI
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#platforms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Platforms
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <Button
            variant="gold"
            size="sm"
            className="hidden sm:flex"
            onClick={() => window.open('https://github.com/SohamDalal07/RefyneAi', '_blank')}
          >
            <Chrome className="w-4 h-4" />
            Add to Chrome
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
