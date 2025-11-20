import { useState } from "react";
import type { Quote } from "./types/quote";
import { Header } from "./components/Header";
import { QuoteForm } from "./components/QuoteForm";
import { QuoteList } from "./components/QuoteList";
import "./index.css";

function App() {
  // État global : toutes les citations
  const [quotes, setQuotes] = useState<Quote[]>([
    {
      id: "1",
      text: "On ne naît pas femme, on le devient.",
      author: "Simone de Beauvoir"
    }
  ]);

  // Fonction pour ajouter une citation
  const handleAddQuote = (text: string, author: string) => {
    const newQuote: Quote = {
      id: Date.now().toString(),
      text,
      author
    };
    setQuotes([...quotes, newQuote]);
  };

  return (
    <div className="min-h-screen bg-green-100 p-5">
      <div className="max-w-2xl mx-auto">
        <Header quoteCount={quotes.length} />
        <QuoteForm onAddQuote={handleAddQuote} />
        <QuoteList quotes={quotes} />
      </div>
    </div>
  );
}

export default App;
