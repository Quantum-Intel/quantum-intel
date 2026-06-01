import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right";
}

export default function AnimateIn({ children, className = "" }: AnimateInProps) {
  return <div className={className}>{children}</div>;
}
