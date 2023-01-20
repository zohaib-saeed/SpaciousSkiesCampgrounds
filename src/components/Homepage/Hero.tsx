import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full bg-[url('/images/camping.jpg')] bg-center bg-cover bg-no-repeat h-[270px] sm:h-[300px] md:h-[330px] mdl:h-[360px] lg:h-[400px] relative flex flex-col items-center justify-center ">
      {/* => Overlay  */}
      <div className="z-0 w-full h-full absolute top-0 left-0 bg-black bg-opacity-40 "></div>
      {/* Main Heading  */}
      <h1 className="font-visby text-white text-3xl sm:text-4xl md:text-[50px] lg:text-[65px] text-center uppercase z-10 mt-28 xs:mt-16 md:mt-10">
        Book your stay
      </h1>
    </div>
  );
};

export default Hero;
