// Imports des infos

import { useState } from "react";

// Interface pour les propositions de citations

interface QuoteFormProps {
  onAddQuote: (text: string, author: string) => void;
}

// déclarer le composant

export function QuoteForm({ onAddQuote }: QuoteFormProps) {
  // Etat local pour le texte

  const [text, setText] = useState<string>("");

  //Etat local pour l'auteur

  const [author, setAuthor] = useState<string>("");

  //Fonction qui gere la soumission

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifier que le champs soit remplis

    if (author.trim() && text.trim()) {
      //Appeler la fonction du parent

      onAddQuote(text, author);

      // Vider les champs

      setText("");
      setAuthor("");
    }
  };

  // Retourner le HTML (JSX)

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-6">
      {/* Le premier input (texte) */}
      <div className="mb-4">
        <label htmlFor="text" className="block font-bold mb-2 mt-2">
          Citation :
        </label>
        <input
          id="text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Entrez la citation"
          className="w-full p-2 border-4 border-black rounded-2xl"
        />
      </div>

      {/* // Le deuxieme input (l'auteur) */}

      <div className="mb-4">
        <label htmlFor="author" className="block font-bold mb-2 mt-2">
          Auteur :
        </label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Entrez le nom de l'auteur"
          className="w-full p-2 border-4 border-black rounded-2xl"
        />
      </div>
      {/* // Bouton de soumission */}
      <button
        type="submit"
        className="bg-amber-100 text-black px-8 py-4 text-base font-bold border-4 border-black rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,1)] cursor-pointer block mx-auto hover:bg-amber-200 transition-colors"
      >
        Ajouter
      </button>
      {/* // Fermeture et Export */}
    </form>
  );
}
