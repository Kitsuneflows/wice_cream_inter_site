export default function Home() {
   const bar = {
    planches: [
      {
        name: "Charcuteries",
        description: "Planche de charcuteries artisanales",
        price: "9€ (petite) / 18€ (grande)",
        image: "https://source.unsplash.com/400x300/?charcuterie,platter",
      },
      {
        name: "Fromage",
        description: "Assortiment de fromages affinés",
        price: "9€ (petite) / 18€ (grande)",
        image: "https://source.unsplash.com/400x300/?cheese,platter",
      },
      {
        name: "Mixte à partager",
        description: "Charcuteries et fromages pour un moment convivial",
        price: "18€",
        image: "https://source.unsplash.com/400x300/?cheese,charcuterie",
      },
      {
        name: "Corse à partager",
        description: "Sélection de produits corses (selon arrivage)",
        price: "24€",
        image: "https://source.unsplash.com/400x300/?corsican,platter",
      },
    ],
    snacks: [
      {
        name: "Croque Monsieur",
        description: "Pain de mie, emmental, jambon, lait",
        price: "6€",
        image: "https://source.unsplash.com/400x300/?croque,monsieur",
      },
      {
        name: "Croque Madame",
        description: "Pain de mie, emmental, jambon, lait, œuf",
        price: "7€",
        image: "https://source.unsplash.com/400x300/?croque,madame",
      },
      {
        name: "Croque Chèvre",
        description: "Pain de mie, emmental, lait, chèvre, herbes de Provence",
        price: "6€",
        image: "https://source.unsplash.com/400x300/?goatcheese,sandwich",
      },
      {
        name: "Supplément Chèvre",
        description: "",
        price: "2€",
        image: "https://source.unsplash.com/400x300/?cheese",
      },
    ],
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

        {/* Titre Planches */}
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-4xl font-extrabold text-yellow-500/90">Nos Planches</h2>
        </div>
        <p className="text-lg text-white/70 max-w-lg mx-auto mb-8">
          Partagez un moment convivial avec nos planches de charcuteries et fromages soigneusement sélectionnés.
        </p>

        {/* Grille des planches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bar.planches.map((planche, index) => (
            <div key={index} className="bg-gray-850 rounded-xl shadow-white/5 border border-white/10 shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={planche.image} alt={planche.name} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white/90">{planche.name}</h3>
                <p className="text-gray-400 mt-2">{planche.description}</p>
                <div className="mt-4 text-lg font-bold text-yellow-500">{planche.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Titre Snacks */}
        <div className="flex items-center justify-center mt-16 mb-6">
          <h2 className="text-4xl font-extrabold text-yellow-500/90">Nos Snacks</h2>
        </div>
        <p className="text-lg text-white/70 max-w-lg mx-auto mb-8">
          Envie d’une pause gourmande ? Découvrez nos snacks savoureux, parfaits pour accompagner votre boisson.
        </p>

        {/* Grille des snacks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bar.snacks.map((snack, index) => (
            <div key={index} className="bg-gray-850 rounded-xl shadow-white/5 border border-white/10 shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={snack.image} alt={snack.name} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white/90">{snack.name}</h3>
                <p className="text-gray-400 mt-2">{snack.description}</p>
                <div className="mt-4 text-lg font-bold text-yellow-500">{snack.price}</div>
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
