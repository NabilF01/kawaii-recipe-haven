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
    ingredients: ["farine", "oeufs", "lait", "sucre"],
    steps: [
      "Mélanger la farine, le sucre et la levure",
      "Ajouter les œufs et le lait progressivement",
      "Faire chauffer une poêle à feu moyen",
      "Verser la pâte en petits cercles",
      "Dessiner des visages kawaii avec du chocolat fondu"
    ]
  },
  {
    title: "Onigiri Mignons",
    time: "30 min",
    difficulty: "Moyen",
    imageUrl: "https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=800&auto=format&fit=crop&q=60",
    ingredients: ["riz", "nori", "saumon", "sel"],
    steps: [
      "Cuire le riz selon les instructions",
      "Former des triangles avec le riz",
      "Ajouter le saumon au centre",
      "Envelopper partiellement de nori",
      "Créer des visages avec des morceaux de nori"
    ]
  },
  {
    title: "Cookies Panda",
    time: "45 min",
    difficulty: "Facile",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&auto=format&fit=crop&q=60",
    ingredients: ["farine", "sucre", "beurre", "chocolat"],
    steps: [
      "Préparer la pâte à cookies",
      "Former des cercles pour les têtes",
      "Ajouter des oreilles en pâte",
      "Cuire à 180°C pendant 12-15 minutes",
      "Décorer avec du chocolat fondu pour les visages"
    ]
  },
  {
    title: "Bento Décoré",
    time: "60 min",
    difficulty: "Difficile",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60",
    ingredients: ["riz", "poulet", "légumes", "nori"],
    steps: [
      "Cuire le riz et le colorer si désiré",
      "Préparer les accompagnements",
      "Arranger le riz en formes mignonnes",
      "Ajouter les décorations en nori",
      "Disposer harmonieusement les légumes"
    ]
  },
  {
    title: "Smoothie Arc-en-ciel",
    time: "15 min",
    difficulty: "Facile",
    imageUrl: "https://images.unsplash.com/photo-1502741384106-56538427cde9?w=800&auto=format&fit=crop&q=60",
    ingredients: ["fruits rouges", "banane", "lait", "miel"],
    steps: [
      "Mixer tous les ingrédients jusqu'à obtenir une consistance lisse",
      "Servir frais dans un verre",
      "Décorer avec des fruits supplémentaires si désiré"
    ]
  },
  {
    title: "Sushi Chat",
    time: "45 min",
    difficulty: "Moyen",
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
    ingredients: ["riz", "saumon", "avocat", "nori"],
    steps: [
      "Cuire le riz à sushi",
      "Couper le saumon et l'avocat en tranches",
      "Rouler le riz avec le nori et les garnitures",
      "Couper en morceaux et servir avec de la sauce soja"
    ]
  },
  {
    title: "Cupcakes Licorne",
    time: "50 min",
    difficulty: "Moyen",
    imageUrl: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&auto=format&fit=crop&q=60",
    ingredients: ["farine", "sucre", "beurre", "colorants"],
    steps: [
      "Préparer la pâte à cupcakes",
      "Diviser la pâte et colorer avec des colorants",
      "Verser dans des moules et cuire",
      "Décorer avec du glaçage et des paillettes comestibles"
    ]
  },
  {
    title: "Dorayaki Kawaii",
    time: "40 min",
    difficulty: "Moyen",
    imageUrl: "https://images.unsplash.com/photo-1505253468034-514d2507d914?w=800&auto=format&fit=crop&q=60",
    ingredients: ["farine", "oeufs", "anko", "miel"],
    steps: [
      "Préparer la pâte à dorayaki",
      "Cuire des petites crêpes",
      "Garnir de pâte de haricots rouges",
      "Refermer et servir"
    ]
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Desserts");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const filteredRecipes = RECIPES.filter(recipe => {
    // Filtre par catégorie
    if (selectedCategory === "Desserts" && !recipe.title.includes("Pancakes") && !recipe.title.includes("Cookies") && !recipe.title.includes("Cupcakes") && !recipe.title.includes("Dorayaki")) return false;
    if (selectedCategory === "Plats" && !recipe.title.includes("Bento") && !recipe.title.includes("Sushi")) return false;
    if (selectedCategory === "Snacks" && !recipe.title.includes("Onigiri")) return false;
    if (selectedCategory === "Boissons" && !recipe.title.includes("Smoothie")) return false;

    // Filtre par texte de recherche
    if (searchQuery && !recipe.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Filtre par ingrédients sélectionnés
    if (selectedIngredients.length > 0) {
      return selectedIngredients.every(ingredient =>
        recipe.ingredients.some(recipeIngredient =>
          recipeIngredient.toLowerCase().includes(ingredient.toLowerCase())
        )
      );
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-kawaii-peach to-white">
      <Header 
        onSearch={setSearchQuery}
        onIngredientsChange={setSelectedIngredients}
      />
      
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
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.title} {...recipe} />
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucune recette trouvée 😢</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
