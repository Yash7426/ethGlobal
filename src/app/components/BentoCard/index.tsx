import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { m } from "framer-motion";
import { useFeatureAnimation } from "@/hooks/useFeatureAnimation";

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  index: number;
}

const BentoCard: FC<BentoCardProps> = ({
  className,
  title,
  description,
  index,
}) => {
  const { containerRef } = useFeatureAnimation();
  return (
    <m.div
      ref={containerRef}
      className={cn(
        "bg-primary-900/50 backdrop-blur relative shadow-md min-h-[280px] rounded-2xl overflow-hidden",
        className
      )}
    >
      <Image
        src="/card-bg.png"
        alt="card-bg"
        fill
        className="absolute inset-0 z-[-1] opacity-50"
      />
      <div className="p-6 flex flex-col justify-between h-full">
        <h2 className="text-5xl font-primary-font text-primary-50">0{index}</h2>
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.5rem] font-primary-font text-primary-50">
            {title}
          </h2>
          <p className="text-primary-50 text-sm max-w-md">{description}</p>
        </div>
      </div>
    </m.div>
  );
};

export default BentoCard;
