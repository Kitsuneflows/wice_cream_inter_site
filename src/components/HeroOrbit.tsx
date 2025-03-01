import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({ 
    children,
    size,
    rotation,
    shouldOrbit = false,
    shouldSpin = false,
    orbitDuration,
    SpinDuration,

     }: PropsWithChildren<{ size: number; rotation: number;
      orbitDuration?: string; shouldOrbit?: boolean; SpinDuration?: string; shouldSpin?: boolean;}>) => {
    return (
    <div className='absolute md:left-1/2 left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20'>
      <div className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{ 
          animationDuration: orbitDuration,
        }}>
          <div className='flex items-start justify-start' 
            style={{
              transform: `rotate(${rotation}deg)`,
              height: `${size}px`,
              width: `${size}px`
            }}
          >
            <div className={twMerge(shouldOrbit === true && "animate-spin")}
            style={{ 
              animationDuration: orbitDuration,
            }}>
            
              <div className='inline-flex '
                style={{
                transform: `rotate(${rotation * -1}deg)`}}>
                  {children}
              </div>
            </div>
          </div>
      </div>
    </div>
    )
}