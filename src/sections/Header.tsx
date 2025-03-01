"use client";
import LogoFlexead from '@/assets/images/logo.svg'
import MenuIcon from '@/assets/icons/menuicon.svg'
import Image from "next/image";
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
 <header className="sticky top-0 z-20">
  <div className="container absolute left-1/2 -translate-x-1/2 pt-4">
    <div className="backdrop-blur flex justify-between items-center border md:border-white/15 border-white/5 md:p-2.5 rounded-xl max-w-2xl mx-auto">

      <a  href='/' className='h-10 w-10 rounded-lg justify-center items-center border-white/15'>
        <LogoFlexead className='h-9 w-9'/>
      </a>
      <div className='hidden md:block'>
        <nav className='flex text-sm gap-8 text-white/70 hover:text-white transition'>
          <a className='text-white/70 hover:text-white transition' href="/project">Projet</a>
          <a className='text-white/70 hover:text-white transition' href="/reparateur">Réparateur</a>
          <a className='text-white/70 hover:text-white transition' href="/assureur">Assurance</a>
          <a className='text-white/70 hover:text-white transition' href="/about">A Propos</a>
          <a className='text-white/70 hover:text-white transition' href="/contact">Contact</a>
        </nav>
      </div>

    <div className='flex gap-4 items-center'>

      <button 
      className='py-2 px-3 block md:hidden rounded-lg font-medium bg-gradient-to-b'>
        Contacez-nous <a href="/contact"></a>
      </button >

      <button onClick={toggleMenu} className="md:hidden focus:outline-none">
      <svg className='h-8 w-8 md:hidden' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>

    </div>
    </div>
    {/* Menu mobile */}
    {isMenuOpen && (
          <div className="w-1/3 md:hidden bg-transparent backdrop-blur text-white text- rounded-lg mt-2 p-4 absolute right-0 top-16 z-30">
            <nav className="flex flex-col gap-4 text-right mr-6">
              <a href="/project" className="hover:text-gray-600 transition">Projet</a>
              <a href="/reparateur" className="hover:text-gray-600 transition">Réparateur</a>
              <a href="/assureur" className="hover:text-gray-600 transition">Assureur</a>
              <a href="/about" className="hover:text-gray-600 transition">A Propos</a>
              <a href="/contact" className="hover:text-gray-600 transition">Contact</a>
            </nav>
          </div>
        )}
  </div>
</header>
  );
};
