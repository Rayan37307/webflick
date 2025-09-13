"use client";

interface FiltersProps {
  categories: string[];
  selected: string;
  onChange: (val: string) => void;
}

const Filters = ({ categories, selected, onChange }: FiltersProps) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {categories.map((cat) => {
        const isActive = cat === selected;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-4 py-2 rounded-full text-sm md:text-base ring-1 transition-colors ${
              isActive
                ? "bg-black text-white ring-black"
                : "bg-white text-gray-800 ring-gray-300 hover:bg-gray-50"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;


