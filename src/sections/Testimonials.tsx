import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from '@/assets/images/grain.jpg'
import { Card } from "@/components/Card";
import { Fragment } from 'react';


const testimonials = [
  {
    name: "Coralie Jacob",
    position: "★ ★ ★ ★ ★",
    text: "Restaurant convivial, j'y ai passé une agréable soirée. Accueil chaleureux, personnel attentionné et cuisine fraîche et savoureuse +++. Le tout à des prix très corrects.🤗👍🏼👍🏼",
    avatar: memojiAvatar2,
  },
  {
    name: "Luc Valay",
    position: "★ ★ ★ ★ ★",
    text: "Comme d'hab, super cuisine, très bon moment, service chaleureux ce lundi soir avec Théo ! Bravo, Merci et à bientôt ! Plaisir renouvelé ! 😍",
    avatar: memojiAvatar1,
  },
  {
    name: "Guillaume Langouet",
    position: "★ ★ ★ ★ ★",
    text: "Ambiance conviviale. Service rapide. Je conseille particulièrement le tartare tail. 👍🏻",
    avatar: memojiAvatar3,
  },
  {
    name: "alison motron",
    position: "★ ★ ★ ★ ★",
    text: "Le café est très beau et chaleureux. J'ai passé un très bon moment. Un grand merci pour votre accueil ainsi que pour la playlist Arcane :)",
    avatar: memojiAvatar4,
  },
  {
    name: "Jeremy Fanet",
    position: "★ ★ ★ ★ ★",
    text: "Un service agréable et un Irish Coffee incroyablement bon confectionné par violette Je recommande cette endroit si vous voulait passe un moment agréable.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
  <div className="py-16 lg:py-24 bg-gray-900 text-white">
    <div className="container">
    <SectionHeader 
    eyebrow="Nos Clients Satisfaits"  
    description="Ne vous fiez pas seulement à notre parole, découvrez ce que nos clients disent de leur expérience au Café de la Poste"
    />
    <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
      <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
      {[...new Array(2)].fill(0).map((_, idx) => (

        <Fragment key={idx}>
          {testimonials.map((testimonials) => (
            <Card key={testimonials.name} className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3">
              <div className="flex gap-4 items-center">
                <div className="size-14 bg-gray-700 rounded-full flex-shrink-0 inline-flex items-center justify-center">
                  <Image 
                  src={testimonials.avatar} 
                  alt={testimonials.name} 
                  className="max-h-full"/>
                </div>
                <div>
                  <div className="font-semibold">{testimonials.name}</div>
                  <div className="text-sm text-yellow-500">{testimonials.position}</div>
                </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonials.text}</p>
            
              </Card>
            ))}
        </Fragment>
    ))}
      </div>
    </div>
    </div>
  </div>
    
  );
};
