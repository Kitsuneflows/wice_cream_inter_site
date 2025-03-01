export const SectionHeader = ({
   
    eyebrow,
    description,
}:{
    
    eyebrow: string;
    description: string;
}) => {
    return (
        <>
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-yellow-500 bg-clip-text text-transparent text-center"> 
            {eyebrow}
            </p>
        </div>
        <p className="text-center text-white/60 mt-4 md:text-lg maw-w-md mx-auto lg:text-xl">
        {description}
        </p>
        </>
    );
}