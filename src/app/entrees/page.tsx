
export default function Home() {
  const entrees = [
    {
      name: "Foie gras de canard",
      description: "Parfumé au cognac, chutney curry, pommes, raisin",
      price: "14€",
      image: "https://source.unsplash.com/400x300/?Foie,gras,de,canard",
    },
    {
      name: "Terrine de campagne",
      description: "Roquette, cornichons",
      price: "7€",
      image: "https://source.unsplash.com/400x300/?Terrine,de,campagne",
    },
    {
      name: "Jambon sec italien",
      description: "Cornichons, beurre, roquette",
      price: "7€",
      image: "https://source.unsplash.com/400x300/?Jambon,sec,italien",
    },
    {
      name: "Saumon fumé",
      description: "Toasts et crème fraîche, ciboulette",
      price: "12€",
      image: "https://source.unsplash.com/400x300/?salmon,dish",
    },
    {
      name: "Carpaccio de bœuf",
      description: "Parmesan, câpres, roquette, huile d'olive, basilic",
      price: "9€",
      image: "https://source.unsplash.com/400x300/?beef,carpaccio",
    },
    {
      name: "Tataki de saumon mariné",
      description: "Poisson cru mariné, sésame, sauce teriyaki",
      price: "12€",
      image: "https://source.unsplash.com/400x300/?salmon,tataki",
    },
    {
      name: "Camembert rôti",
      description: "Huile de noix, basilic frais",
      price: "9€",
      image: "https://source.unsplash.com/400x300/?camembert,cheese",
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
        <h2 className="text-4xl font-extrabold text-yellow-500/90">Nos Entrées</h2>
        </div>
        <p className="text-lg text-white max-w-lg mx-auto mb-8">
          Découvrez notre sélection d&apos;entrées préparées avec soin pour éveiller vos papilles.
        </p>

        {/* Grille des entrées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {entrees.map((entree, index) => (
            <div key={index} className="bg-gray-850 rounded-xl shadow-white/5 border border-white/10 shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={entree.image} alt={entree.name} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{entree.name}</h3>
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
