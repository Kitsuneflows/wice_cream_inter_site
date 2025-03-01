import ArrowUpIcon from '@/assets/icons/arrow-up-right.svg'
import logo from '@/assets/icons/logo.png'
import grainImage from '@/assets/images/grain.jpg'
import Image from 'next/image';
import { Iphone15Pro } from "@/components/magicui/iphone-15-pro";
import flexCover from '@/assets/images/FLEXEADcover.png'

export const ContactSection = () => {
  return (
    <div className='py-16 pt-12'>
      <div className=''>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0'>
          <div 
          className='absolute inset-0 -z-10 opacity-15'
          style={{ backgroundImage: `url(${grainImage.src})`}
          }></div>
          <div className='flex flex-col gap-8'>
            
            <div className='md:grid md:grid-cols-2 md:gap-16 items-center'>
              <div className='lg:h-full lg:items-center lg:justify-center lg:pt-'>
                <h2 className='font-serif font-bold text-2xl lg:text-3xl ' >Flexead : L&apos;Écosystème qui Réinvente la Gestion des Sinistres </h2>
                <p className='text-sm mt-2 lg:mt-8 lg:text-lg'>Dites adieu aux processus longs et inefficaces. Avec Flexead, évaluez, analysez et traitez les sinistres en quelques clics. Plus rapide, plus précis, plus intelligent.
                </p>
                <button className='text-white bg-gray-900 border lg:mt-12 border-gray-900 inline-flex items-center px-6 lg:h-12 rounded-xl gap-2 mt-8 '>
                  <span className='font-semibold lg:whitespace-nowrap'>🚀 Passez à l&apos;automatisation dès aujourd&apos;hui</span>
                  
                </button>
              </div>
              <div className="relative flex items-center justify-center sm:pt-6 md:pt-0">
                <Iphone15Pro
                  className=" size-[55%] md:size-[40%]"
                  src={flexCover.src}
                />
              </div>
            </div>
            

          </div>
    </div>
    </div>
    </div>);
};
