import { X } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher une recette..."
        className="px-4 py-2 rounded-full bg-white border border-pink-200 focus:outline-none focus:border-pink-400 w-64 transition-all"
        autoFocus
      />
      <button
        onClick={onClose}
        className="p-2 hover:bg-pink-100 rounded-full transition-colors"
      >
        <X className="w-5 h-5 text-pink-500" />
      </button>
    </div>
  );
};

export default SearchBar;