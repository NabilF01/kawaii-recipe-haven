import { Cake, Search } from "lucide-react";
import { useState } from "react";
import SearchBar from "./SearchBar";

interface HeaderProps {
  onSearch: (query: string) => void;
  onIngredientsChange: (ingredients: string[]) => void;
}

const Header = ({ onSearch, onIngredientsChange }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-kawaii-pink shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cake className="w-8 h-8 text-pink-500 animate-bounce-slight" />
          <h1 className="text-2xl font-bold text-pink-600">Kawaii Kitchen</h1>
        </div>
        <div className="flex items-center gap-4">
          {!isSearchOpen && (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-pink-100 rounded-full transition-colors"
            >
              <Search className="w-6 h-6 text-pink-500" />
            </button>
          )}
          {isSearchOpen && (
            <SearchBar 
              onClose={() => setIsSearchOpen(false)}
              onSearch={onSearch}
              onIngredientsChange={onIngredientsChange}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;