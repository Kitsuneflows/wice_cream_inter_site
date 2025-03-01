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

export function FeaturesSectionAssureur() {
  const features = [
    {
      title: "Évaluation Automatisée",
      description: "Notre IA analyse chaque sinistre en quelques minutes avec une précision optimale.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Solutions sur Mesure",
      description: "Une solution clé en main conçue pour s'intégrer parfaitement à vos outils existants (Darva, Sinnaps) sans perturber votre organisation.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Rapports Personnalisés",
      description: "Recevez des rapports détaillés, adaptés à vos besoins et prêts à être exploités immédiatement.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Accessibilité Mobile",
      description: "Consultez et gérez vos évaluations en toute simplicité depuis votre smartphone ou tablette.",
      icon: <IconCloud />,
    },
    {
      title: "Précision Optimale",
      description: "Nos algorithmes garantissent des évaluations fiables et cohérentes à chaque analyse.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Support 24/7",
      description: "Accédez à un support réactif et à une assistance humaine à tout moment, où que vous soyez.",
      icon: <IconHelp />,
    },
    {
      title: "Marketplace de Pièces d'Occasion",
      description: "Facilitez la revente et l’achat de pièces détachées reconditionnées entre réparateurs via notre marketplace intégrée.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Rapidité et Efficacité",
      description: "Optimisez votre temps en réduisant le délai de diagnostic et en accélérant la prise en charge des réparations.",
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
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b :from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm :text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
