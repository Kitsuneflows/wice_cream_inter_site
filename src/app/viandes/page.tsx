
export default function Home() {
  const viandes = [
    {
      name: "Steak haché 150 g frites",
      description: "",
      price: "12€",
      image: "https://source.unsplash.com/400x300/?steak,fries",
    },
    {
      name: "Pièce de boucher",
      description: "± 200 grammes, à l’échalote ou beurre d’ail",
      price: "16€",
      image: "https://source.unsplash.com/400x300/?beef,grill",
    },
    {
      name: "Rognon de veau",
      description: "Crème moutarde",
      price: "24€",
      image: "https://source.unsplash.com/400x300/?veal,kidney",
    },
    {
      name: "Andouillette AAAAA",
      description: "Sauce échalote",
      price: "17€",
      image: "https://source.unsplash.com/400x300/?andouillette,dish",
    },
    {
      name: "Brochette de poulet mariné à l'indienne",
      description: "Curry, ail, citron, huile d'olive, persil, curcuma, gingembre",
      price: "15€",
      image: "https://source.unsplash.com/400x300/?chicken,skewer",
    },
    {
      name: "Entrecôte",
      description: "± 300 grammes, viande d’origine normande, à l’échalote ou beurre d’ail",
      price: "24€",
      image: "https://source.unsplash.com/400x300/?steak,grill",
    },
    {
      name: "Gratin d’aubergines et bœuf",
      description: "Sauce tomate, basilic, ail, oignons, emmental, mozzarella",
      price: "15€",
      image: "https://source.unsplash.com/400x300/?aubergine,gratin",
    },
    {
      name: "Tataki de bœuf-frites",
      description: "Viande crue marinée à l'ail, citronnelle, huile d'olive, gingembre, soja, citron, cebette",
      price: "24€",
      image: "https://source.unsplash.com/400x300/?beef,tataki",
    },
    {
      name: "Carpaccio de bœuf",
      description: "Parmesan, câpres, roquette, huile d'olive, basilic",
      price: "18€",
      image: "https://source.unsplash.com/400x300/?beef,carpaccio",
    },
    {
      name: "Magret de canard du Sud-Ouest",
      description: "Jus aux 4 épices",
      price: "16€",
      image: "https://source.unsplash.com/400x300/?duck,magret",
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
        <h2 className="text-4xl font-extrabold text-yellow-500/90">Nos Viandes</h2>
        </div>
        <p className="text-lg text-white/70 max-w-lg mx-auto mb-8">
          Découvrez notre sélection de viandes préparées avec soin pour éveiller vos papilles.
        </p>

        {/* Grille des entrées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {viandes.map((entree, index) => (
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
