import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [partnerIndex, setPartnerIndex] = useState<number>(0);
  

const images = [
    { src: "/banner_1.jpg", text: "Hon'ble Prime Minister visits ASF stall at MCF" },
    { src: "/banner_2.jpg", text: "In Plant training for Indian Railways" },
    { src: "/banner_3.jpg", text: "Member Rolling Stock, Railway Road, Visited ASF" },
    { src: "/banner_4.jpg", text: "Students Exchange Program" }
];
const partners=[
    "/KUKA-1.jpg",
    "/strarasys.jpg",
    "/siemens.jpg",
    "/schunk.jpg",
    "/schmalz.jpg",
    "/rexroth.jpg",
    "/pepperl.jpg",
    "/mitsubishi.jpg",
    "/messer.jpg",
    "/janatics.jpg",
    "/ipg.jpg",
    "/zeiss.jpg",
    "fronius.jpg",
    "/antional.jpg",
];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); 

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      setTimeout(() => setIsTransitioning(true), 3000);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(images.length - 1);
      setTimeout(() => setIsTransitioning(true), 3000);
    } else {
      setCurrentIndex(prev => prev - 1);
    }
  };


  const getDisplayCount = () => {
    if (window.innerWidth < 400) return 1; 
    if (window.innerWidth < 768) return 2;  
    if (window.innerWidth < 1024) return 3; 
    return 4; 
  }
  const displayCount = getDisplayCount();
  const itemWidth = 100 / displayCount;


useEffect(() => {
    const timer = setInterval(() => {
      setPartnerIndex(prev => {
        
        if (prev + displayCount >= partners.length) {
          return 0; 
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [displayCount]);

  return (
    <>
    <div className="w-full  xl:h-full md:h-[300px] h-[200px] relative overflow-hidden">
      <div
        className={`flex h-full ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="w-full h-full flex-shrink-0 relative"
          >
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="w-full h-full object-fill object-center"
            />
            <div className='opacity-80 absolute sm:text-2xl text-sm lg:text-4xl bottom-4 left-16 bg-gray-300 text-black px-4 rounded-lg py-1'>{image.text} </div>
          </div>
        ))}
      </div>

      
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full text-white hover:bg-black/50 transition"
      >
        <ChevronLeft size={24} />
      </button>

      
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full text-white hover:bg-black/50 transition"
      >
        <ChevronRight size={24} />
      </button>

      
    </div>
    <div className='w-full border-white  border-b-gray-300 border-3  flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center pb-2 my-2'>
    <p className='text-xl text-blue-950'>Industry Partners </p>
    <div className='bg-blue-500 h-[80px] w-[4px] rounded-xl sm:block hidden' />
    <div className='relative w-full max-w-[600px] overflow-hidden'>
          <div 
            className='flex transition-transform  items-center duration-1000 ease-in-out'
            style={{ transform: `translateX(-${partnerIndex * itemWidth}%)` }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                style={{ width: `${itemWidth}%` }}
                className="flex-shrink-0"
              >
                <img
                  src={partner}
                  alt={`Partner ${index}`}
                  className="object-contain w-auto  px-2"
                />
              </div>
            ))}
          </div>
        
        </div>
  </div>

  </>

  );
};

export default Hero;