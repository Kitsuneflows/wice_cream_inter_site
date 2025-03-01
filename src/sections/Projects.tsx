import { Clock } from "lucide-react"; // Icône horloge

const openingHours = [
  { day: "Lundi", hours: "07h00 - 23h00" },
  { day: "Mardi", hours: "07h00 - 23h00" },
  { day: "Mercredi", hours: "07h00 - 23h00" },
  { day: "Jeudi", hours: "07h00 - 23h00" },
  { day: "Vendredi", hours: "07h00 - 23h00" },
  { day: "Samedi", hours: "07h00 - 23h00" },
  { day: "Dimanche", hours: "08h00 - 21h00" },
];

export const ProjectsSection = () => {
  return (
    <section id="opening-hours" className="py-12 bg-gray-850 text-white">
    <div className="container mx-auto text-center">
      {/* Titre avec icône */}
      <div className="flex items-center justify-center mb-6">
        <Clock className="w-8 h-8 text-yellow-500 mr-2" />
        <h2 className="text-3xl font-bold">Horaires d&apos;ouverture</h2>
      </div>

      {/* Tableau des horaires */}
      <div className="max-w-lg mx-auto bg-gray-800 rounded-lg shadow-xl shadow-white/5 border border-white/10 p-6">
        {openingHours.map((entry, index) => (
          <div
            key={index}
            className={`flex justify-between items-center py-2 border-b border-gray-700 ${
              index === openingHours.length - 1 ? "border-none" : ""
            }`}
          >
            <span className="text-lg font-medium">{entry.day}</span>
            <span className="text-yellow-400 font-semibold">{entry.hours}</span>
          </div>
        ))}
      </div>

      {/* Info supplémentaire */}
      <p className="mt-4 text-sm text-gray-400">
        ⏳ Dernière commande 30 minutes avant la fermeture.
      </p>
    </div>
  </section>
);
};