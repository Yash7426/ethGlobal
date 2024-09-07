import React, { useEffect } from "react";
import * as Progress from "@radix-ui/react-progress";

interface ProgressDemoProps {
  progress: number;
}

const ProgressDemo: React.FC<ProgressDemoProps> = ({ progress }) => {
  const [currentProgress, setCurrentProgress] = React.useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setCurrentProgress(progress), 500);
    return () => clearTimeout(timer);
  }, [currentProgress]);

  return (
    <Progress.Root
      className="absolute top-0 overflow-hidden bg-blackA6 rounded-t-2xl w-full h-[5px]"
      style={{
        transform: "translateZ(0)",
      }}
      value={currentProgress}
    >
      <Progress.Indicator
        className="bg-[#593de6] w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{ transform: `translateX(-${100 - currentProgress}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressDemo;
