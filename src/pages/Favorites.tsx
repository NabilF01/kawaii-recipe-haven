import { Heart } from "lucide-react";
import RecipeCard from "@/components/RecipeCard";
import Header from "@/components/Header";

const Favorites = () => {
  // Récupérer les favoris du localStorage
  const getFavorites = () => {
    const favoritesStr = localStorage.getItem('favorites');
    return favoritesStr ? JSON.parse(favoritesStr) : [];
  };

  const favorites = getFavorites();

  return (
    <div className="min-h-screen bg-gradient-to-b from-kawaii-peach to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Heart className="w-6 h-6 text-pink-500" />
          <h1 className="text-2xl font-semibold">Mes Recettes Favorites</h1>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Vous n'avez pas encore de recettes favorites 🥺</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {favorites.map((recipe) => (
              <RecipeCard key={recipe.title} {...recipe} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Favorites;