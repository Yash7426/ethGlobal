import Image from "next/image";
import BentoCard from "../BentoCard";

const data = [
  {
    id: 1,
    title: "Human Verification",
    description:
      "Design tasks that are difficult for bots to perform but easy for humans.",
  },
  {
    id: 2,
    title: "Anti-Cheating Measures",
    description:
      "Set an expiration time for tasks to prevent users from exploiting old tasks that may no longer be relevant.",
  },
  {
    id: 3,
    title: "Gamification and Rewards",
    description:
      "Offer bonus points for completing tasks quickly or for completing a series of related tasks, encouraging continuous engagement.",
  },
  {
    id: 4,
    title: "Cross-Chain Compatibility",
    description:
      "Unify points across chains under one identity, allowing users to accumulate points regardless of their active chain.",
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
