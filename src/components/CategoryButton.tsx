import { LucideIcon } from "lucide-react";

interface CategoryButtonProps {
  icon: LucideIcon;
  label: string;
  isSelected?: boolean;
  onClick: () => void;
}

const CategoryButton = ({
  icon: Icon,
  label,
  isSelected = false,
  onClick,
}: CategoryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all hover:scale-105 ${
        isSelected
          ? "bg-kawaii-pink text-pink-600"
          : "bg-white text-gray-600 hover:bg-kawaii-peach"
      }`}
    >
      <Icon className="w-6 h-6" />
      <span className="text-sm">{label}</span>
    </button>
  );
};

export default CategoryButton;