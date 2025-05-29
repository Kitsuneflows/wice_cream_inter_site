'use client';
import { useRef, useState } from "react";
import Image from "next/image";
import Arrowdown from "@/assets/images/glace.svg";
import Logo from "@/assets/images/logo-wice-no-bg.svg";
import type { Lot } from "@/app/page";

type SpinWheelProps = {
  lots: Lot[];
  onWin: (lot: Lot) => void | Promise<void>;
};
export const SpinWheel = ({
  lots,
  onWin,
}: {
  lots: Lot[];
  onWin: (lot: Lot) => void | Promise<void>;
}) => {
  const [spinning, setSpinning] = useState(false);
  const [winnerIdx, setWinnerIdx] = useState<number | null>(null);
  const [angle, setAngle] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);

  const SEGMENTS = lots.length;
  const SEGMENT_ANGLE = 360 / SEGMENTS;
  const COLORS = [
    "from-yellow-200 via-pink-200 to-purple-200",
    "from-pink-100 via-yellow-100 to-purple-100",
    "from-purple-200 via-pink-200 to-yellow-200",
    "from-yellow-100 via-purple-200 to-pink-100",
    "from-pink-200 via-yellow-200 to-purple-200",
    "from-purple-100 via-yellow-200 to-pink-200"
  ];

  // Donne à chaque segment une couleur pastel différente
  const getSegmentColor = (i: number) => COLORS[i % COLORS.length];

  const spin = () => {
    if (spinning) return;
    setSpinning(true);

    // Choisir un gagnant au hasard
    const winner = Math.floor(Math.random() * SEGMENTS);

    // Calculer le nombre de tours aléatoires (2-4 tours complets pour l'effet)
    const rounds = 3 + Math.floor(Math.random() * 2);

    // Angle cible (on veut que la flèche pointe le lot gagnant à la fin)
    const targetAngle = 360 * rounds + (360 - winner * SEGMENT_ANGLE - SEGMENT_ANGLE / 2);

    // Lance l’animation CSS (on fait tourner la roue)
    setAngle(targetAngle);

    // Arrêt après l’animation (~2.2s)
    setTimeout(() => {
      setWinnerIdx(winner);
      setSpinning(false);
      onWin(lots[winner]);
    }, 2200);
  };
  

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="relative w-[90vw] max-w-[440px] h-[90vw] max-h-[440px] flex items-center justify-center">
        {/* Flèche fixe */}
        <div className="absolute left-1/2 -top-7 -translate-x-1/2 z-20">
          <Arrowdown alt="arrow" width={58} height={58} />
        </div>
        {/* Roue SVG */}
        <div
          ref={wheelRef}
          className="rounded-full shadow-2xl"
          style={{
            width: "100%",
            height: "100%",
            transition: spinning ? "transform 2.2s cubic-bezier(0.24,1.18,0.42,0.93)" : "",
            transform: `rotate(${angle}deg)`,
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 300 300">
            {lots.map((lot, i) => {
              const startAngle = i * SEGMENT_ANGLE;
              const endAngle = (i + 1) * SEGMENT_ANGLE;
              const x1 = 150 + 150 * Math.cos((Math.PI * (startAngle - 90)) / 180);
              const y1 = 150 + 150 * Math.sin((Math.PI * (startAngle - 90)) / 180);
              const x2 = 150 + 150 * Math.cos((Math.PI * (endAngle - 90)) / 180);
              const y2 = 150 + 150 * Math.sin((Math.PI * (endAngle - 90)) / 180);
              const largeArcFlag = SEGMENT_ANGLE > 180 ? 1 : 0;
              const pathData = `
                M 150 150
                L ${x1} ${y1}
                A 150 150 0 ${largeArcFlag} 1 ${x2} ${y2}
                Z
              `;
              // Pastel palette simple
              const pastelColors = [
                "#fde68a", "#fbcfe8", "#ddd6fe", "#a5b4fc", "#f9a8d4", "#bbf7d0"
              ];
              return (
                <g key={lot.id}>
                  <path
                    d={pathData}
                    fill={pastelColors[i % pastelColors.length]}
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  {/* Texte du lot */}
                  <text
                    x={150}
                    y={40}
                    fill="#7c3aed"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                    transform={`
                      rotate(${startAngle + SEGMENT_ANGLE / 2} 150 150)
                    `}
                  >
                    {lot.emoji ? `${lot.emoji} ` : ""}
                    {lot.label}
                  </text>
                </g>
              );
            })}
            {/* Cercle central */}
            <circle cx="150" cy="150" r="42" fill="#fff" stroke="#ddd6fe" strokeWidth="4" />
        
            <Logo x="90" y="-100" width="120"/>
            <circle/>
              
          </svg>
        </div>
      </div>
      
      <button
        onClick={spin}
        disabled={spinning}
        className="mt-8 bg-gradient-to-l from-yellow-200 via-pink-200 to-purple-200 text-gray-800 rounded-full py-3 px-8 font-bold text-lg shadow-md transition"
      >
        {spinning ? "Tirage..." : "Lancer la roue !"}
      </button>
      {winnerIdx !== null && (
        <div className="mt-8 text-2xl font-bold text-purple-700 text-center">
          🎉 Bravo, tu as gagné :
          <br />
          <span>{lots[winnerIdx].emoji} {lots[winnerIdx].label}</span>
        </div>
      )}
    </div>
  );
};
