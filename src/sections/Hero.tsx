import hero from '@/assets/images/cdlp.png'
import Image from 'next/image';
import Demoicon from '@/assets/icons/sparkle.svg'
import Arrowdown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import { HeroOrbit } from '@/components/HeroOrbit';
import { RippleBg } from "@/components/magicui/Ripple";
import LogoFlexead from '@/assets/images/logo.svg'
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import Spline from '@splinetool/react-spline/next';

export const HeroSection = () => {
  return (
    <section className="relative h-[40vh] lg:h-[60vh] w-full items-center justify-center text-center bg-gradient-to-b from-gray-900 to-gray-850 text-white">
      <div className="relative z-10 top-12">
        <h1 className="text-5xl lg:text-8xl mb-4 font-bold opacity-85">Bienvenue au</h1>
        <Image src={hero} alt="hero img" className="h-[50%] w-[50%] items-center justify-center inline-flex"/>
        <p className="mt-4 mb-4 text-xl px-12 text-gray-200">Un lieu chaleureux pour savourer des instants gourmands</p>
      </div>
    </section>
    

  );
};
