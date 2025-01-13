import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import SearchBar from "./SearchBar";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onIngredientsChange?: (ingredients: string[]) => void;
}

const Header = ({ onSearch, onIngredientsChange }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-bold text-pink-500 hover:text-pink-600 transition-colors">
            🧁 Recettes Kawaii
          </Link>
          
          {onSearch && onIngredientsChange && (
            <div className="flex-1 max-w-2xl">
              <SearchBar 
                onSearch={onSearch} 
                onIngredientsChange={onIngredientsChange}
                onClose={() => {}} // Fonction vide car la recherche est toujours visible
              />
            </div>
          )}
          
          <Link 
            to="/favorites"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 transition-colors"
          >
            <Heart className="w-5 h-5" />
            <span>Favoris</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;