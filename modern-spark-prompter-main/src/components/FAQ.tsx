import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is RefyneAI really free?",
    answer: "Yes! RefyneAI is completely free to use. You just need your own API key from providers like Google Gemini (which also offers free tiers). We don't charge anything for the extension itself.",
  },
  {
    question: "Where is my API key stored?",
    answer: "Your API key is stored locally in your browser using Chrome's secure storage. It never leaves your device and is never sent to our servers. We take privacy seriously.",
  },
  {
    question: "Which AI platforms are supported?",
    answer: "Currently, RefyneAI works with Google Gemini, Anthropic Claude, and Perplexity. We're actively working on adding support for ChatGPT and other popular platforms.",
  },
  {
    question: "How does the refinement actually work?",
    answer: "RefyneAI uses a hybrid approach. For simple prompts, it applies rule-based enhancements for speed. For complex prompts, it uses AI to understand your intent and add relevant context, structure, and specificity to get better responses.",
  },
  {
    question: "Will it slow down my browsing?",
    answer: "Not at all. RefyneAI is designed to be lightweight and only activates when you're on a supported AI platform. It has zero impact on other websites you visit.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
            Got Questions?
          </h2>
          <p className="text-lg text-muted-foreground">
            Here are answers to the most common questions about RefyneAI.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
