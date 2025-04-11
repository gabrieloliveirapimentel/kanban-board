interface CardProps {
  title: string;
  description: string;
  badges: {
    title: string;
  }[];
}

export function Card({ title, description, badges }: CardProps) {
  return (
    <div className="grid gap-2.5 p-8 rounded-md shadow-md mt-4">
      <h3 className="text-lg text-[#403937] font-semibold">{title}</h3>
      <p className="text-[#756966]">{description}</p>
      <div className="flex flex-row gap-4">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="bg-[#f2ecff] text-[#7C3AED] text-sm font-medium px-3 py-2 rounded-lg"
          >
            {badge.title}
          </div>
        ))}
      </div>
    </div>
  );
}
