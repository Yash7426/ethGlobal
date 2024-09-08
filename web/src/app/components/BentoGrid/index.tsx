import Image from "next/image";
import BentoCard from "../BentoCard";

const data = [
  {
    id: 1,
    title: "Unified Identity ",
    description:
      "Users create unique, DNS-like domain names that link all their blockchain addresses under one human-centered identity",
  },
  {
    id: 2,
    title: "Task-Based Verification",
    description:
      " Users earn points by completing specific tasks, helping to distinguish genuine human users from automated actors",
  },
  {
    id: 3,
    title: "Fair Airdrops",
    description:
      "Tokens are distributed based on the user's domain name, tied to their primary wallet. This ensures that no one can unfairly claim multiple airdrops through different addresses.",
  },
  {
    id: 4,
    title: "Enhanced Security",
    description:
      "Advanced cryptographic techniques verify that each identity is authentic, preventing manipulation or duplicate claims.",
  },
];

const BentoGrid = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-12 gap-6 opacity-100">
        {data.map((i) => (
          <BentoCard
            className={i.id === 1 || i.id === 4 ? "col-span-5" : "col-span-7"}
            key={i.id}
            title={i.title}
            description={i.description}
            index={i.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
