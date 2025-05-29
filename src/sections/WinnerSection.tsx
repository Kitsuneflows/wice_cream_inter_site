import Image from "next/image";
import Logo from "@/assets/images/logo-wice-no-bg.svg"; // adapte ce chemin si besoin

type Lot = {
  label: string;
  emoji?: string;
};

export const WinnerSection = ({ lot }: { lot: Lot }) => (
  <section className="flex flex-col items-center justify-center mt-10 w-full">
    <div className="relative rounded-2xl bg-white/90 shadow-2xl px-8 py-10 max-w-md w-full flex flex-col items-center">
      
      {/* Message de félicitations */}
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-2 text-center mt-8">
        🎉 Bravo !
      </h2>
      <div className="text-xl sm:text-2xl text-purple-600 font-semibold mb-3 text-center">
        Tu as gagné :
        <span className="ml-2 text-purple-800">{lot.emoji} {lot.label}</span>
      </div>
      <div className="text-md text-purple-400 mb-4 text-center">
        Présente cette page au staff pour récupérer ton lot.
      </div>
      <div className="mt-2 text-sm text-purple-300 italic text-center select-none">
        Merci d’avoir joué avec WICE CREAM 🍦<br/>
        Suis-nous sur Insta&nbsp;
        <a
          href="https://instagram.com/ton_compte_insta"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-purple-700 transition"
        >@wicecream</a>
      </div>
    </div>
  </section>
);
