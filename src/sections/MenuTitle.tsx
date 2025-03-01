import { Utensils } from "lucide-react"; // Icône de couvert pour symboliser le menu

const MenuTitle = () => {
  return (
    <div className="text-center py-10">
      {/* Icône et Titre */}
      <div className="flex items-center justify-center mb-4">
        <Utensils className="w-10 h-10 text-yellow-500 mr-3 animate-bounce" />
        <h2 className="text-4xl font-extrabold text-white/80">Découvrez notre Menu</h2>
      </div>

      {/* Sous-titre */}
      <p className="text-lg text-gray-400 max-w-lg mx-auto">
        Dégustez nos plats faits maison, préparés avec passion et des produits frais.
      </p>

      {/* Effet de soulignement stylisé */}
      <div className="mt-3 w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
    </div>
  );
};

export default MenuTitle;
