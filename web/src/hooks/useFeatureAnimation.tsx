import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const useFeatureAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerInView = useInView(containerRef, {
    once: true,
  });

  useEffect(() => {
    animate(
      containerRef.current!,
      {
        y: containerInView ? 0 : 40,
        opacity: containerInView ? 1 : 0,
        filter: containerInView ? "blur(0px)" : "blur(10px)",
      },
      {
        duration: 0.5,
        delay: 0.3,
        type: "tween",
      }
    );
  }, [containerInView]);

  return { containerRef };
};
