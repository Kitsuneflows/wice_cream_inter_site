import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline"

export function TimelineReparateur() {
  const data = [
    {
      title: "Étape 1 : Inscription et Validation",
      content: (
        <div>
          <p className="text-neutral-200 text-base md:text-2xl font-normal mb-8">
          Remplissez votre formulaire d&apos;information. Dès que votre profil est validé, vous recevez des notifications pour intervenir sur les sinistres.
          </p>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
    {
      title: "Étape 2 : Intervention et Réparation",
      content: (
        <div>
          <p className="text-neutral-200 text-base md:text-2xl font-normal mb-8">
          Recevez des demandes de réparation et réalisez vos interventions chez le client. Grâce à nos rapports d&apos;évaluation, accédez instantanément aux informations précises sur chaque sinistre.
          </p>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
    {
      title: "Étape 3 : Paiement Simplifié",
      content: (
        <div>
          <p className="text-neutral-200 text-base md:text-2xl font-normal mb-8">
          Après chaque intervention, recevez votre paiement directement via la plateforme Flexead. Profitez d&apos;un règlement rapide et sécurisé pour chaque prestation réalisée.
          </p>
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
