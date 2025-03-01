"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-gray-800 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-7xl pb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Rejoignez FLEXEAD
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 pb-6 text-base text-center relative z-10">
        Flexead est à la recherche de réparateurs qualifiés pour rejoindre notre réseau de prestataires. Ensemble, nous transformons la gestion des sinistres mobiliers et offrons des services rapides, fiables aux particuliers.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1.5"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
