import { X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";

interface SearchBarProps {
  onClose: () => void;
  onSearch: (query: string) => void;
  onIngredientsChange: (ingredients: string[]) => void;
}

const SearchBar = ({ onClose, onSearch, onIngredientsChange }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  useEffect(() => {
    onIngredientsChange(ingredients);
  }, [ingredients, onIngredientsChange]);

  const handleAddIngredient = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentIngredient.trim()) {
      if (!ingredients.includes(currentIngredient.trim())) {
        setIngredients([...ingredients, currentIngredient.trim()]);
      }
      setCurrentIngredient("");
    }
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(i => i !== ingredient));
  };

  return (
    <div className="flex flex-col gap-2 animate-scale-up bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher une recette..."
          className="px-4 py-2 rounded-full bg-white border border-pink-200 focus:outline-none focus:border-pink-400 w-64 transition-all duration-300 focus:ring-2 focus:ring-pink-200 hover:border-pink-300"
          autoFocus
        />
        <button
          onClick={onClose}
          className="p-2 hover:bg-pink-100 rounded-full transition-colors duration-200 hover:rotate-90 transform"
        >
          <X className="w-5 h-5 text-pink-500" />
        </button>
      </div>
      
      <div className="flex items-center gap-2">
        <Search className="w-4 h-4 text-pink-400" />
        <input
          type="text"
          value={currentIngredient}
          onChange={(e) => setCurrentIngredient(e.target.value)}
          onKeyDown={handleAddIngredient}
          placeholder="Ajouter un ingrédient (Entrée)"
          className="px-4 py-2 rounded-full bg-white border border-pink-200 focus:outline-none focus:border-pink-400 w-64 transition-all duration-300 focus:ring-2 focus:ring-pink-200 hover:border-pink-300"
        />
      </div>

      {ingredients.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {ingredients.map((ingredient) => (
            <Badge
              key={ingredient}
              variant="secondary"
              className="bg-pink-100 text-pink-600 hover:bg-pink-200 cursor-pointer animate-scale-up"
              onClick={() => removeIngredient(ingredient)}
            >
              {ingredient}
              <X className="w-3 h-3 ml-1" />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;