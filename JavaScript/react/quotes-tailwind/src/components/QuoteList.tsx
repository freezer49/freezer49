import type { Quote } from "../types/quote";
import { QuoteCard } from "./QuoteCard";

interface QuoteListProps {
  quotes: Quote[];
}

export function QuoteList({ quotes }: QuoteListProps) {
  if (quotes.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg">
        Aucune citation pour le moment. Ajoutes-en une !
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
}
