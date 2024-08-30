import { Variants } from "framer-motion";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Helper function to create a motion object with initial, animate and exit states
 *
 * @param variants - Variants object
 */
export const anim = (variants: Variants) => ({
  initial: "initial",
  animate: "animate",
  exit: "exit",
  whileTap: "whileTap",
  whileHover: "whileHover",
  variants,
});

/**
 * Helper function to merge tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
