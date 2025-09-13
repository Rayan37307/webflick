import ProjectCard from "./ProjectCard";
import type { PortfolioItem } from "@/data/portfolio";

const Grid = ({ items }: { items: PortfolioItem[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((item) => (
        <ProjectCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Grid;


