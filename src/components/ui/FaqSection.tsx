import { siteConfig } from "@/config/siteConfig";
import { Plus } from "lucide-react";

export default function FaqSection() {
  const { faqs } = siteConfig;

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-32 bg-muted border-t border-border">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-secondary" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">
              Common Questions
            </span>
            <span className="w-8 h-[1px] bg-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Frequently Asked Questions.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-background rounded-xl border border-border overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer list-none font-bold text-lg md:text-xl text-foreground select-none">
                {faq.question}
                <span className="ml-6 flex items-center justify-center w-10 h-10 rounded-full bg-muted group-open:bg-secondary group-open:text-secondary-foreground transition-colors shrink-0">
                  <Plus className="w-5 h-5 transition-transform duration-300 group-open:rotate-45" />
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
