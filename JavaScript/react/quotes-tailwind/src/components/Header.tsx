interface HeaderProps {
  quoteCount: number;
}

export function Header({ quoteCount }: HeaderProps) {
  return (
    <header className="text-center mb-6 pb-4 border-b-2 border-gray-300">
      <h1 className="text-4xl font-bold mb-2">Mes citations</h1>
      <h2 className="text-xl text-gray-600 mb-4">
        Gestionnaire de citations en ligne
      </h2>
      <h3 className="text-lg text-gray-500">
        {quoteCount} citation{quoteCount > 1 ? "s" : ""}
      </h3>
    </header>
  );
}
