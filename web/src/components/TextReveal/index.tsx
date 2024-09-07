import { cn } from "@/lib/utils";
import { animate, cubicBezier, useInView } from "framer-motion";
import { useRef, FC, useEffect, useCallback } from "react";

interface TextRevealProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  delay?: number;
}

/**
 * Create a text reveal animation for a given string.
 *
 * @param text The text to animate.
 */
const TextReveal: FC<TextRevealProps> = ({ text, delay = 0, ...props }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });

  const createCharacters = (char: ParentNode) => {
    return Array.from(char.children) as HTMLElement[];
  };

  const animateCharacters = useCallback(
    (element: HTMLHeadingElement) => {
      const characters = createCharacters(element);

      characters.forEach((char, index) => {
        animate(
          char,
          { y: isInView ? 0 : 200 },
          {
            duration: 1.2,
            delay: index * 0.05 + delay,
            type: "tween",
            ease: cubicBezier(0.77, 0, 0.175, 1),
          }
        );
      });
    },
    [isInView]
  );

  useEffect(() => {
    if (ref.current) {
      animateCharacters(ref.current);
    }
  }, [animateCharacters]);

  return (
    <h1 {...props} ref={ref} className={cn("overflow-hidden", props.className)}>
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="inline-block"
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default TextReveal;
