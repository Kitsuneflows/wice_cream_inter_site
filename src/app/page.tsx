"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { SpinWheel } from "@/sections/SpinWheel";
import { FormSection } from "@/sections/FormSection";
import { Header } from "@/sections/Header";
import { WinnerSection } from "@/sections/WinnerSection";
import Insta from "@/assets/images/logo-insta.svg";
import Whatsapp from "@/assets/images/whaapp.svg";



export interface Lot {
  id: number;
  label: string;
  emoji?: string;
}

const lots: Lot[] = [
  { id: 1, label: "Perdu", emoji: "🍬" },
  { id: 2, label: "une glace offerte", emoji: "" },
  { id: 3, label: "Perdu", emoji: "💳" },
  { id: 4, label: "30", emoji: "%" },
  { id: 5, label: "Perdu", emoji: "🍦" },
  { id: 6, label: "50", emoji: "%" },
];
type SpinWheelProps = {
  lots: Lot[];
  onWin: (lot: Lot) => void  | Promise<void>;
}
export default function Home() {
  const [validated, setValidated] = useState(false);
  const [wonLot, setWonLot] = useState<Lot | null>(null);
  const [participantId, setParticipantId] = useState<number | null>(null);

  const handleValidated = (id: number) => {
    setValidated(true);
    setParticipantId(id);
  };

  const handleLotWin = async (lot: Lot) =>  {
    setWonLot(lot);
    if (participantId) {
      const { error } = await supabase
      
        .from("participants")
        .update({ lot: lot.id })
        .eq("id", participantId);
        console.log("Update lot", lot.id, "pour participant", participantId);

      if (error) {
        console.error("Erreur lors de l'attribution du lot:", error);
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-12">
        {!validated && !wonLot && (
          <FormSection onValidated={handleValidated} />
 
        )}
        {validated && !wonLot && (
          
          <SpinWheel lots={lots} onWin={handleLotWin} />

        )}
        
        {wonLot && <WinnerSection lot={wonLot} />}
        
      </main>
      <footer className="w-full mt-12 py-6 px-2 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-purple-600 text-lg tracking-wider drop-shadow">WICE CREAM</span>
          <span className="text-purple-400 font-medium">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/wice_cream_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform bg-pink-300 rounded-full shadow-md hover:shadow-lg transform duration-300 ease-in-out"
          >
            <Insta width={44} height={44} className="text-purple-600 inline-flex" />
          </a>
          <a
            href="https://www.whatsapp.com/catalog/33756849036/?app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:scale-110 transition-transform bg-pink-300 rounded-full shadow-md hover:shadow-lg transform duration-300 ease-in-out"
          >
            <Whatsapp width={44} height={44} className="text-purple-600 inline-flex" />
          </a>
        </div>
        <div className="text-xs text-purple-500 mt-1 select-none">
          Site réalisé avec ❤️ par l’équipe WICE CREAM
        </div>
      </footer>
    </div>
  );
}
