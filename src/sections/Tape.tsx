import StarIcon from '@/assets/icons/star.svg'
import { Fragment } from 'react';
import MenuTitle from "./MenuTitle"; // Import du titre


export const TapeSection = () => {
  const menuCategories = [
    { name: "Nos entrées", link: "/entrees" },
    { name: "Nos viandes", link: "/viandes" },
    { name: "Nos poissons", link: "/poisson" },
    { name: "Autour du burger", link: "/burgers" },
    { name: "Autour du tartare", link: "/tartare" },
    { name: "Nos salades", link: "/salade" },
    { name: "Nos vins", link: "/vin" },
    { name: "Côté bar", link: "/bar" },
    { name: "Nos accompagnements", link: "/accompagnements" },
    { name: "Nos desserts", link: "/desserts" },
    { name: "Menu enfants", link: "/menu-enfants" },
  ]
  return (
    <section id="menu" className="py-20 bg-gradient-to-t from-gray-900 to-gray-850 text-white">
    <div className="container mx-auto text-center">
      <MenuTitle />
      {/* Boutons des catégories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {menuCategories.map((category, index) => (
          <div key={index} className="text-center">
            <a
              href={category.link}
              className="block bg-gray-900 text-white border-white border-2 font-bold text-xl py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
            >
              {category.name}
            </a>
          </div>
        ))}
      </div>

      {/* Note de service */}
      <p className="mt-6 text-sm text-white">Service compris, prix TTC</p>
    </div>
  </section>
);
};
