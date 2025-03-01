import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline"

export function TimelineProject() {
  const data = [
    {
      title: "Étape 1",
      content: (
        <div>
          <p className="text-neutral-200 text-base md:text-2xl font-normal mb-8">
            Soumettez les informations via notre application mobile ou web.
          </p>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
    {
      title: "Étape 2",
      content: (
        <div>
          <p className="text-neutral-200 text-base md:text-2xl font-normal mb-8">
          Notre IA traite et analyse vos données pour une évaluation rapide.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
    {
      title: "Étape 3",
      content: (
        <div>
          <p className="text-neutral-200 text-base md:text-2xl font-normal mb-4">
            Recevez votre rapport détaillé et agissez en conséquence.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-base md:text-xl">
              ✅ Obtennez l&apos;indemnité auprès de l&apos;assurance
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-base md:text-xl">
              ✅ réparer ou remplacer l&apos;appareil
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-base md:text-xl">
              ✅ transmeter la facture a votre assureur
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-base md:text-xl">
              ✅ Recevez le reste de l&apos;indemnité
            </div>
            
          </div>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
