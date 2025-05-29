"use client";
import LogoWice from '@/assets/images/logo-wice-no-bg.svg'
import MenuIcon from '@/assets/icons/menuicon.svg'
import Image from "next/image";
import { useState } from 'react';

console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);


export const Header = () => {

  return (
    
 <header className="mb-6 w-full text-center mx-auto max-w-3xl px-4">
  <div className='center items-center text-center inline-flex'><LogoWice width="300" height="200"/></div>
  
  <h1 className="text-4xl font-extrabold text-purple-700 mb-2 tracking-wide drop-shadow-lg">
    WICE CREAM
  </h1>
  <div className="text-lg text-purple-600 mb-2 font-medium">
    Bravo !<br/> Tu peux tenter ta chance sur la roue !
  </div>
  <div className="text-md text-purple-600">
    Remplis le formulaire pour lancer la roue et découvrir ton lot.
  </div>
</header>

  );
};
