
export default function Home() {
  const poissons = [
    {
      name: "Brandade de cabillaud - Salade",
      description: "Pommes de terre, huile d'olive, ail, crème liquide",
      price: "12€",
      image: "https://source.unsplash.com/400x300/?cod,brandade",
    },
    {
      name: "Pavé de saumon - Riz",
      description: "Crème au vin blanc, ail",
      price: "16€",
      image: "https://source.unsplash.com/400x300/?salmon,grill",
    },
    {
      name: "Tataki de Saumon mariné - Frites",
      description: "Poisson cru mariné aux sésames, sauce teriyaki, gingembre, ail, cebette, citron",
      price: "24€",
      image: "https://source.unsplash.com/400x300/?tataki,salmon",
    },
    {
      name: "Gambas Black Tiger",
      description: "Sautées à l'ail et au persil, accompagnées de riz",
      price: "38€",
      image: "https://source.unsplash.com/400x300/?gambas,shrimp",
    },
    {
      name: "Poisson du moment",
      description: "Selon arrivage et inspiration du chef",
      price: "—",
      image: "https://source.unsplash.com/400x300/?fish,dish",
    },
  ]
  return (
    <section id="entrees" className="py-16 bg-gray-900">
      <div className="container mx-auto text-center">
        
        {/* Bouton Home sous forme d'image */}
        <div className="mb-8">
          <a href="/" className="inline-block">
            <img
              src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/86c1d040-14ea-46fe-8c02-839a48b6ae68/433dd258-98a4-4667-bce8-4668886103d0_rw_600.png?h=47b5b470b07a7179bb33e8faa44d84f1"
              alt="Retour à l'accueil"
              className="w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-300 rounded-full shadow-lg border-4 border-yellow-500"
            />
          </a>
        </div>
        {/* Titre avec icône */}
        <div className="flex items-center justify-center mb-6">
        <h2 className="text-4xl font-extrabold text-yellow-500/90">Nos Poissons</h2>
        </div>
        <p className="text-lg text-white/70 max-w-lg mx-auto mb-8">
          Laissez-vous tenter par nos poissons sélectionnés avec soin et préparés avec passion.
        </p>

        {/* Grille des entrées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {poissons.map((entree, index) => (
            <div key={index} className="bg-gray-850 rounded-xl shadow-white/5 border border-white/10 shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={entree.image} alt={entree.name} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white/90">{entree.name}</h3>
                <p className="text-gray-600 mt-2">{entree.description}</p>
                <div className="mt-4 text-lg font-bold text-yellow-500">{entree.price}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Bouton Home sous forme d'image */}
        <div className="mt-8">
          <a href="/" className="inline-block">
            <img
              src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/86c1d040-14ea-46fe-8c02-839a48b6ae68/433dd258-98a4-4667-bce8-4668886103d0_rw_600.png?h=47b5b470b07a7179bb33e8faa44d84f1"
              alt="Retour à l'accueil"
              className="w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-300 rounded-full shadow-lg border-4 border-yellow-500"
            />
          </a>
        </div>
      </div>
      
    </section>
  );
}
