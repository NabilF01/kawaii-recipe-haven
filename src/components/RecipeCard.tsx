import { Heart } from "lucide-react";
import { useState } from "react";

interface RecipeCardProps {
  title: string;
  time: string;
  difficulty: string;
  imageUrl: string;
}

const RecipeCard = ({ title, time, difficulty, imageUrl }: RecipeCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              isLiked ? "fill-pink-500 text-pink-500" : "text-gray-500"
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{time}</span>
          <span>{difficulty}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;