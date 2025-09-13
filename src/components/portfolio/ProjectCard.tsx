import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "@/data/portfolio";

const ProjectCard = ({ item }: { item: PortfolioItem }) => {
  return (
    <Link href={`/portfolio/${item.id}`} className="group relative block rounded-[32px] bg-white shadow-[0_24px_72px_-24px_rgba(0,0,0,0.30)]">
      {/* Figma-like blurred gradient clusters (no borders) */}
      <div
        className="pointer-events-none absolute -inset-10"
        style={{
          opacity: 0.4,
          filter: "blur(250px)",
          background:
            "radial-gradient(40% 40% at 10% 20%, rgba(239,68,68,1) 0%, rgba(239,68,68,0) 60%), " +
            "radial-gradient(35% 35% at 85% 10%, rgba(217,70,239,1) 0%, rgba(217,70,239,0) 60%), " +
            "radial-gradient(45% 45% at 80% 80%, rgba(99,102,241,1) 0%, rgba(99,102,241,0) 60%), " +
            "radial-gradient(40% 40% at 15% 85%, rgba(245,158,11,1) 0%, rgba(245,158,11,0) 60%)",
        }}
      />

      <div className="relative z-10 p-2 sm:p-3 md:p-4">
        {/* Outer media frame (radius 32) */}
        <div className="rounded-[32px] bg-white">
          {/* White stroke around screenshot (approx 16px via padding) */}
          <div className="p-3 md:p-4 rounded-[32px] bg-white">
            <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] rounded-[24px] overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 p-6 pt-2">
        <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-gray-900">{item.title}</h3>
        <p className="mt-2 text-gray-600 line-clamp-2">{item.description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;


