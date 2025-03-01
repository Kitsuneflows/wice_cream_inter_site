export default function Home() {
  const vins = {
    rouges: [
      {
        region: "Beaujolais",
        name: "Brouilly - Château Lachaise",
        cepage: "Gamay",
        price: { verre: "3,80€", "25cl": "7,90€", "50cl": "15,20€", bouteille: "23,20€", emporter: "13,20€" },
      },
      {
        region: "Bourgogne",
        name: "Mercurey - Domaine Michel Juillot",
        cepage: "Pinot Noir",
        price: { bouteille: "46€", emporter: "41€" },
      },
      {
        region: "Bordeaux",
        name: "Saint Emilion - Grand Barail Larose",
        cepage: "Merlot, Cabernet Franc",
        price: { bouteille: "25,20€", emporter: "19,20€" },
      },
      {
        region: "Corse",
        name: "Clos Poggiale - Jean François Renucci - Domaine Terra Vecchia",
        cepage: "Niellucciu, Syrah",
        price: { bouteille: "36€", emporter: "31€" },
      },
    ],
    roses: [
      {
        region: "Provence",
        name: "Côtes de Provence - Maurin des Maures",
        cepage: "Grenache, Cinsault",
        price: { verre: "3,80€", "25cl": "7,90€", "50cl": "15,20€", bouteille: "19€" },
      },
      {
        region: "Provence",
        name: "M de Minuty - Château Minuty",
        cepage: "Grenache, Cinsault",
        price: { bouteille: "34,50€", emporter: "29,50€" },
      },
    ],
    blancs: [
      {
        region: "Loire",
        name: "Pouilly Fumé - Michel Laurent",
        cepage: "Sauvignon",
        price: { verre: "5,80€", "25cl": "5,80€", "50cl": "27€", bouteille: "22€" },
      },
      {
        region: "Bourgogne",
        name: "Chablis - Valentin Vignot",
        cepage: "Chardonnay",
        price: { verre: "7€", "25cl": "14€", "50cl": "28€", bouteille: "35€", emporter: "30€" },
      },
      {
        region: "Sud-Ouest",
        name: "Monbazillac - Bajac",
        cepage: "Sémillon, Muscadelle",
        price: { verre: "5,10€", "25cl": "10€", "50cl": "20,40€", bouteille: "25,50€", emporter: "20,50€" },
      },
    ],
    champagnes: [
      { region: "",
        name: "Pierre Dubois",
        cepage: "",
        price: { verre: "8€", bouteille: "48€", emporter: "43€" },
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
        {/* Titre avec icône */}
        <div className="flex items-center justify-center mb-6">
        <h2 className="text-4xl font-extrabold text-yellow-500/90">Nos Vins</h2>
        </div>
        <p className="text-lg text-white/70 max-w-lg mx-auto mb-8">
        Bienvenue dans notre sélection de vins soigneusement choisis pour sublimer chaque moment. Des rouges intenses aux blancs délicats, en passant par les rosés rafraîchissants et les champagnes pétillants, chaque bouteille raconte une histoire de terroir et de savoir-faire.
        </p>

        {/* Grille des entrées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(vins).map(([category, wines]) => (
            <div key={category} className="col-span-full">
              
              {/* Titre de la catégorie avec une belle séparation */}
              <h2 className="text-3xl font-bold text-yellow-500/90 uppercase border-b-2 border-yellow-500 pb-2 mb-6">
                {category === "rouges" ? "Vins Rouges 🍷" :
                category === "roses" ? "Vins Rosés 🌸" :
                category === "blancs" ? "Vins Blancs 🍾" :
                "Champagnes 🥂"}
              </h2>

              {/* Grille des vins */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wines.map((wine, index) => (
                  <div
                    key={index}
                    className="bg-gray-850 rounded-xl shadow-white/5 border border-white/10 shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
                  >
                    {/* Image dynamique pour chaque vin */}
                    <img 
                      src={`https://source.unsplash.com/400x300/?wine,${wine.region}`} 
                      alt={wine.name} 
                      className="w-full h-48 object-cover"
                    />

                    {/* Contenu du vin */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white/90">{wine.name}</h3>
                      <p className="text-gray-500 text-sm italic">{wine.region} - {wine.cepage}</p>

                      {/* Affichage des prix en flex */}
                      <div className="mt-4 text-white/90">
                        {Object.entries(wine.price).map(([size, price], i) => (
                          <div key={i} className="flex justify-between border-t border-gray-700 py-1">
                            <span className="capitalize text-gray-400">{size}</span>
                            <span className="font-bold text-yellow-500">{price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
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
