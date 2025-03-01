"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Demoicon from '@/assets/icons/sparkle.svg'
import Arrowdown from '@/assets/icons/arrow-down.svg'
import { useMediaQuery } from "react-responsive";


export function LampDemo() {
    const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" }); // sm
    const isShortScreen = useMediaQuery({ query: "(max-height: 800px)" }); // sm
    const isMediumScreen = useMediaQuery({ query: "(min-width: 641px) and (max-width: 1024px)" }); // md
    const isLargeScreen = useMediaQuery({ query: "(min-width: 1025px)" }); // lg
    const translateYClass = isShortScreen ? "-translate-y-20" : "-translate-y-80";

    // Adapter les propriétés `whileInView` en fonction de la taille de l'écran
    let whileInViewValues;
    if (isSmallScreen) {
        whileInViewValues = { opacity: 1, y: 100 }; // sm
    } else if (isMediumScreen) {
        whileInViewValues = { opacity: 1, y: -50 }; // md
    } else if (isLargeScreen) {
        whileInViewValues = { opacity: 1, y: 80 }; // lg
    }
    let InitialViewValues;
    if (isSmallScreen) {
        InitialViewValues = { opacity: 0, y: 300 }; // sm
    } else if (isMediumScreen) {
        InitialViewValues = { opacity: 0.1, y: 520 }; // md
    } else if (isLargeScreen) {
        InitialViewValues = { opacity: 0.5, y: 200 }; // lg
    }
    if (isSmallScreen) {
      if (isShortScreen) {
        whileInViewValues = { opacity: 1, y: 200 };
        InitialViewValues = { opacity: 0, y: 250 };
      } else {
        whileInViewValues = { opacity: 1, y: 50 };
        InitialViewValues = { opacity: 0, y: 200 };
      }
  }
  

  return (
    <LampContainer>
      <motion.h1
        initial={InitialViewValues}
        whileInView={whileInViewValues}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}
        className="md:-mt-16 max-w-5xl container bg-gradient-to-b sm:-mt-20 drop-shadow-md from-white to-neutral-400 py-4 bg-clip-text text-center sm:text-3xl text-4xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        <div className="">Flexead : Expertise Automatisée pour les Assureurs</div>
        <br/>
        <div className="text-3xl sm:text-xl pt-0">Automatisez l&apos;évaluation des sinistres. Moins de délais, moins de coûts, plus de satisfaction client.</div>
        <div className='text-2xl sm:text-sm flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
            <button className='inline-flex items-center gap-4 border border-white/15 px-6 h-12 rounded-xl bg-white/10 backdrop-blur-md'>
            <span className='font-semibold text-white '>Contacter-nous</span>
            <Arrowdown className='size-4 text-white' />
            </button>
            <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span className='font-semibold'>Demander une Démo</span>
            <Demoicon className='size-4' />
            </button>
      </div>
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col ${translateYClass} items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-10">
        {children}
      </div>
    </div>
  );
};
