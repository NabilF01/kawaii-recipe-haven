import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

interface RecipeCardProps {
  title: string;
  time: string;
  difficulty: string;
  imageUrl: string;
  ingredients: string[];
}

const RecipeCard = ({ title, time, difficulty, imageUrl, ingredients }: RecipeCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Vérifier si la recette est dans les favoris au chargement
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsLiked(favorites.some((fav: RecipeCardProps) => fav.title === title));
  }, [title]);

  const handleLike = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let newFavorites;
    
    if (isLiked) {
      // Retirer des favoris
      newFavorites = favorites.filter((fav: RecipeCardProps) => fav.title !== title);
      toast({
        description: "Recette retirée des favoris 💔",
      });
    } else {
      // Ajouter aux favoris
      newFavorites = [...favorites, { title, time, difficulty, imageUrl, ingredients }];
      toast({
        description: "Recette ajoutée aux favoris 💖",
      });
    }
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-up">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handleLike}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors hover:scale-110 transform duration-200"
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-300 ${
              isLiked ? "fill-pink-500 text-pink-500 animate-wiggle" : "text-gray-500"
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>{time}</span>
          <span>{difficulty}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {ingredients.map((ingredient) => (
            <span
              key={ingredient}
              className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full"
            >
              {ingredient}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;