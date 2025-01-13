import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RecipeCardProps {
  title: string;
  time: string;
  difficulty: string;
  imageUrl: string;
  ingredients: string[];
  steps?: string[];
  quantities?: { [key: string]: string };
}

const RecipeCard = ({ 
  title, 
  time, 
  difficulty, 
  imageUrl, 
  ingredients,
  steps = [
    "Préparer tous les ingrédients",
    "Mélanger les ingrédients secs",
    "Ajouter les ingrédients liquides",
    "Cuire selon les instructions",
    "Décorer de façon kawaii ✨"
  ],
  quantities = {
    "farine": "200g",
    "sucre": "100g",
    "oeufs": "2",
    "lait": "200ml",
    "beurre": "100g",
    "chocolat": "100g",
    "levure": "1 sachet",
    "sel": "1 pincée",
    "fruits rouges": "100g",
    "banane": "1",
    "miel": "2 cuillères à soupe",
    "riz": "200g",
    "nori": "2 feuilles",
    "saumon": "100g",
    "avocat": "1",
    "colorants": "quelques gouttes",
    "anko": "100g"
  }
}: RecipeCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsLiked(favorites.some((fav: RecipeCardProps) => fav.title === title));
  }, [title]);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let newFavorites;
    
    if (isLiked) {
      newFavorites = favorites.filter((fav: RecipeCardProps) => fav.title !== title);
      toast({
        description: "Recette retirée des favoris 💔",
      });
    } else {
      newFavorites = [...favorites, { title, time, difficulty, imageUrl, ingredients }];
      toast({
        description: "Recette ajoutée aux favoris 💖",
      });
    }
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div 
        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-up cursor-pointer"
        onClick={() => setShowRecipe(true)}
      >
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

      <Dialog open={showRecipe} onOpenChange={setShowRecipe}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-pink-600">{title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-pink-600">Informations</h3>
              <div className="flex gap-4 text-sm text-gray-600">
                <span>⏰ {time}</span>
                <span>📝 {difficulty}</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-pink-600">Ingrédients</h3>
              <ul className="grid grid-cols-2 gap-2">
                {ingredients.map((ingredient) => (
                  <li key={ingredient} className="flex items-center gap-2 text-gray-700">
                    <span className="text-pink-400">•</span>
                    {ingredient}: {quantities[ingredient] || "au goût"}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-pink-600">Étapes de préparation</h3>
              <ol className="space-y-3">
                {steps.map((step, index) => (
                  <li key={index} className="flex gap-3 text-gray-700">
                    <span className="font-bold text-pink-400">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RecipeCard;