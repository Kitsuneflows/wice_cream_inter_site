export default function Home() {
  const entrees = [
    {
      name: "Traditionnel",
      description: "125 g de bœuf, oignons crus, salade, sauce burger",
      price: "13€",
      image: "https://source.unsplash.com/400x300/?burger,classic",
    },
    {
      name: "Le CDLP",
      description: "125 g de bœuf, oignons crus, salade, bacon, œuf, sauce burger",
      price: "15€",
      image: "https://source.unsplash.com/400x300/?burger,bacon",
    },
    {
      name: "Chicken",
      description: "125 g de poulet pané, oignons crus, salade, sauce burger",
      price: "14€",
      image: "https://source.unsplash.com/400x300/?chicken,burger",
    },
    {
      name: "Saumon",
      description: "Saumon fumé, crème fraîche, roquette, tomates confites, oignons rouges, ciboulette",
      price: "15€",
      image: "https://source.unsplash.com/400x300/?salmon,burger",
    },
    {
      name: "Avocado",
      description: "125 g de bœuf, salade, avocat, bacon, oignons rouges",
      price: "15€",
      image: "https://source.unsplash.com/400x300/?avocado,burger",
    },
    {
      name: "Végétarien",
      description: "Galette de pommes de terre, tomates séchées, salade, comté",
      price: "13€",
      image: "https://source.unsplash.com/400x300/?vegetarian,burger",
    },
    {
      name: "Supplément fromage",
      description: "Cheddar, Reblochon, Bleu, Chèvre",
      price: "2€",
      image: "https://source.unsplash.com/400x300/?cheese,burger",
    },
    {
      name: "Supplément œuf",
      description: "Œuf au plat",
      price: "2€",
      image: "https://source.unsplash.com/400x300/?egg,burger",
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
        <h2 className="text-4xl font-extrabold text-yellow-500/90">Nos Burgers</h2>
        </div>
        <p className="text-lg text-white/70 max-w-lg mx-auto mb-8">
          Découvrez nos burgers maison préparés avec des ingrédients frais et savoureux. Chaque bouchée est une explosion de saveurs, parfaite pour un moment de plaisir gourmand.
        </p>

        {/* Grille des entrées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {entrees.map((entree, index) => (
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
