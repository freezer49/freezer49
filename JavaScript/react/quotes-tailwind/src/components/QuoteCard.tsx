import type { Quote } from "../types/quote";

interface QuoteCardProps {
  quote: Quote;
}

export function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <div className="bg-white p-4 mb-2">
      <p className="text-base">"{quote.text}"</p>
      <p className="text-sm">{quote.author}</p>
    </div>
  );
}
