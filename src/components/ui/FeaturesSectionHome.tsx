import { cn } from "@/utils/cn";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionHome() {
  const features = [
    {
      title: "Évaluation Automatisée",
      description: "L'IA analyse vos sinistres avec une précision élevée, en quelques minutes, pour une évaluation rapide et fiable.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Solutions Sur Mesure, Adaptées à Vos Outils",
      description: "Une solutions clés en main et des services sur mesure, conçus pour s'adapter parfaitement à vos outils existants (Darva, Sinnaps), sans perturber votre façon de travailler.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Rapports Personnalisés",
      description: "Recevez des rapports détaillés, entièrement personnalisables selon vos critères, pour une gestion optimale des sinistres et des besoins spécifiques.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Réduction des Délais",
      description: "Obtenez des évaluations de dommages en moins de 24 heures, sans plus jamais attendre plusieurs jours pour une réponse.",
      icon: <IconCloud />,
    },
    {
      title: "Accessibilité multi-plateforme",
      description: "Consultez vos évaluations et gérez vos sinistres depuis n'importe quel appareil : smartphone, tablette ou sur le web, avec une expérience utilisateur optimale sur chaque plateforme.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Support disponible",
      description: "Bénéficiez d'une assistance continue grâce à notre agent IA spécialisé, disponible à toute heure, 7 jours sur 7, pour répondre à toutes vos demandes.",
      icon: <IconHelp />,
    },
    {
      title: "Pouvoir d'achat boosté",
      description: "Profitez d'un rachat de franchise avantageux lorsque vous choisissez des pièces de seconde vie pour la réparation de vos appareils, réduisant ainsi vos coûts tout en agissant de manière écologique.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Satisfaction Sociétaire",
      description: "Nous mettons un point d'honneur à garantir une satisfaction totale à nos utilisateurs grâce à un service client réactif et personnalisé, conçu pour répondre à tous vos besoins, à chaque étape.",
      icon: <IconHeart />,
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10  text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
