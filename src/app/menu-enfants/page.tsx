
export default function Home() {
  const menuEnfant = {
    name: "Menu Enfant",
    description: "Un repas spécialement conçu pour les plus petits, simple et savoureux.",
    price: "10€",
    items: [
      "Steak haché (100 g) avec frites",
      "Sirop à l’eau",
      "Pom'Potes",
    ],
    image: "https://source.unsplash.com/400x300/?kids,meal",
  }
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
        <h2 className="text-4xl font-extrabold text-yellow-500/90">Notre Menu Enfant</h2>
        </div>
        <p className="text-lg text-white/70 max-w-lg mx-auto mb-8">
          Nos petits gourmets aussi ont droit à leur menu ! Un repas équilibré et gourmand, parfait pour les enfants.
        </p>

        {/* Grille du menue enfant */}
        <div className="max-w-xl mx-auto bg-gray-850 rounded-xl shadow-white/5 border border-white/10 shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
          <img src={menuEnfant.image} alt={menuEnfant.name} className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-white/90">{menuEnfant.name}</h3>
            <ul className="text-gray-400 mt-4 space-y-2">
              {menuEnfant.items.map((item, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="text-yellow-500 text-lg mr-2">•</span> {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 text-xl font-bold text-yellow-500">{menuEnfant.price}</div>
          </div>
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
