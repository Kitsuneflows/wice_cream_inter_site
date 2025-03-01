import React, { CSSProperties } from "react";

import { cn } from "@/utils/cn";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

export const RippleBg = React.memo(function Ripple({
  mainCircleSize = 620,
  mainCircleOpacity = 0.24,
  numCircles = 4,
  className,
}: RippleProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-30 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className,
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 200;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + i * 5;

        return (
          <div
            key={i}
            className={`absolute rounded-full bg-green-500/20 shadow-xl border [--i:${i}]`}
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "0px",
                borderColor: `hsl(var(--foreground), ${borderOpacity / 0})`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});



