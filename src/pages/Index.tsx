import { Cake, Coffee, Cookie, Pizza, Salad } from "lucide-react";
import { useState } from "react";
import CategoryButton from "@/components/CategoryButton";
import Header from "@/components/Header";
import RecipeCard from "@/components/RecipeCard";

const CATEGORIES = [
  { icon: Cake, label: "Desserts" },
  { icon: Pizza, label: "Plats" },
  { icon: Salad, label: "Salades" },
  { icon: Coffee, label: "Boissons" },
  { icon: Cookie, label: "Snacks" },
];

const RECIPES = [
  {
    title: "Pancakes Kawaii",
    time: "20 min",
    difficulty: "Facile",
    imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Onigiri Mignons",
    time: "30 min",
    difficulty: "Moyen",
    imageUrl: "https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Cookies Panda",
    time: "45 min",
    difficulty: "Facile",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Bento Décoré",
    time: "60 min",
    difficulty: "Difficile",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60",
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Desserts");

  return (
    <div className="min-h-screen bg-gradient-to-b from-kawaii-peach to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
          {CATEGORIES.map((category) => (
            <CategoryButton
              key={category.label}
              icon={category.icon}
              label={category.label}
              isSelected={selectedCategory === category.label}
              onClick={() => setSelectedCategory(category.label)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECIPES.map((recipe) => (
            <RecipeCard key={recipe.title} {...recipe} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;