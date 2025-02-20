

import  { useState, useEffect, useCallback } from 'react';


type CoEs={
    img:string,
    title:string,
    logo:string,
    subtitle1:string,
    subtitle2:string,
    link:string
}
const cards :CoEs[]=[
    {
        img:"/kuka.jpg",
        title:"Industrial Robotics Training Center",
        logo:"/kuka_logo_1-1.jpg",
        subtitle1:"Training - Certification - Consultancy",
        subtitle2:"Industrial Robotics | Robotic ARc Welding | Robotic Milling",
        link:"https://kuka.akgecskills.in/"
    },
    {
        img:"/bosch.jpg",
        title:"Centre of Competence in Automation Technologies",
        logo:"/bosch_logo.jpg",
        subtitle1:"Training-Certification-Consultancy ",
        subtitle2:"Hydraulics | Pneumatics | Mechatronics",
        link:"https://rexroth.akgecskills.in/"
    },
    {
        img:"/ni.jpg",
        title:"LabVIEW Academy",
        logo:"ni_logo.jpg",
        subtitle1:"Training - Certification - Consultancy",
        subtitle2:"Virtual Instrumentation | Test & Measurement | Control",
        link:"https://ni.akgecskills.in/"
    },
    {
        img:"/fablab (1).jpg",
        title:"FAB Lab",
        logo:"/fablab_logo.jpg",
        subtitle1:"Training-Prototyping-Innovation ",
        subtitle2:"Digital Mfg. | 3D Printing | PCB Mfg.",
        link:"https://fablab.akgecskills.in/"
    },
    {
        img:"/plm.jpg",
        title:"Design Centre",
        logo:"/plm_logo.jpg",
        subtitle1:"Training-Certification-Consultancy ",
        subtitle2:"CAD | CAM | CAE",
        link:"https://siemens.akgecskills.in/"
    },
    {
        img:"/fronius (1).jpg",
        title:"Welding Technology Centre",
        logo:"/fronius_logo.jpg",
        subtitle1:"Training-Certification-Product Development",
        subtitle2:"Welding | Cutting | NDT | Motion Control",
        link:"https://fronius.akgecskills.in/"
    },
    {
        img:"/amc.jpg",
        title:"Advance Manufacturing Centre ",
        logo:"/amc_logo.jpg",
        subtitle1:"Training-Certification-Product Development",
        subtitle2:"Milling | Turning | Grinding | Reverse Engineering" ,
        link:"https://amc.akgecskills.in/",
    },
    {
        img:"/aia (1).jpg",
        title:"Centre for Integrated Automation",
        logo:"/aia_logo.jpg",
        subtitle1:"Training & Certification",
        subtitle2:"Drives | PLC | SCADA | Motion Control",
        link:"https://aia.akgecskills.in/",
    },
    {
        img:"/janatics (1).jpg",
        title:"Industrial Pneumatics Knowledge Center",
        logo:"/janatics_logo.jpg",
        subtitle1:"Training, Industrial Prototyping & Machine Building",
        subtitle2:"Low Cost Automation | Industrial Pneumatics",
        link:"https://janatics.akgecskills.in/",
    },
    
]
const Coe =()=>{

    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    const getItemsPerSlide = () => {
        if (windowWidth < 768) return 1;
        if (windowWidth < 1024) return 2;
        return 3;
    };

    const itemsPerSlide = getItemsPerSlide();

    // Create circular array by adding first few items to the end
    const circularCards = [...cards, ...cards.slice(0, itemsPerSlide)];
    const totalSlides = Math.ceil(cards.length / itemsPerSlide);

useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);
const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= totalSlides) {
            
            setTimeout(() => {
                setIsAnimating(false);
                setCurrentIndex(0);
            }, 500);
            return prevIndex;
        }
        setTimeout(() => setIsAnimating(false), 500);
        return nextIndex;
    });
}, [isAnimating, totalSlides]);

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
//     );
//   }, [totalSlides]);
useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
}, [nextSlide]);

const getVisibleCards = () => {
    const start = currentIndex * itemsPerSlide;
    return circularCards.slice(start, start + itemsPerSlide);
};
//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, [nextSlide]);

//   const getVisibleCards = () => {
//     const start = currentIndex * itemsPerSlide;
//     return cards.slice(start, start + itemsPerSlide);
//   };
    return(
        <>
        <div className="w-full mb-3">
            <div className="text-center my-4">
            <h2 className="text-4xl text-center font-bold text-[#1a237e] mb-4 mt-10">Centers of Excellence</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto my-8" />
            <div className="text-gray-600 max-w-4xl mx-auto mb-10 px-4">
            ASF operates through various state of art “Centre of Excellence" established in collaboration with eminent
            industry partners to offer training and services to Industry and Academia.
            </div>
            </div>
            <div className="relative  mx-2 md:mx-20 overflow-hidden">
        <div className="flex justify-center gap-6 px-4 transition-transform duration-500 ease-in-out"
       
        >
          {getVisibleCards().map((card, idx) => (
            <div
                key={`${currentIndex}-${idx}`}
                className="relative w-full max-w-sm aspect-[4/3] overflow-hidden shadow-lg transition-all duration-300 "
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                />
              
                
                <div className={`absolute bottom-1   text-white text-lg sm:text-xl lg:text-2xl bg-black/50 w-full px-2 ${
                        hoveredIndex === idx ? 'opacity-0' : 'opacity-100'
                    }`}>
                    {card.title}
                </div>
                
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 flex flex-col justify-end p-2 ${
                        hoveredIndex === idx ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img
                    src={card.logo}
                    className={`absolute left-5 top-6 transition-opacity duration-300 ease-in-out  ${
                        hoveredIndex === idx ? 'opacity-100' : 'opacity-0'
                    }`}
                    alt=""
                />
                    <div
                        className={`transform transition-transform duration-300 ${
                            hoveredIndex === idx ? 'translate-y-0' : 'translate-y-12'
                        }`}
                    >
                        <h3 className="text-white text-lg sm:text-xl lg:text-2xl bg-black/70 w-full px-2 mb-4">{card.title}</h3>
                        {hoveredIndex === idx && (
                            <>
                                <p className="text-blue-500 text-sm mb-1">{card.subtitle1}</p>
                                <p className="text-gray-300 text-sm mb- lg:mb-12">{card.subtitle2}</p>
                                <a href={card.link} target='_blank' className="absolute bottom-3 right-1">
                                    <img src="/icon_ii.jpg" className="rounded-sm" alt="" />
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>    ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {[...Array(totalSlides)].map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 
                ${idx === currentIndex ? 'bg-gray-800 ' : 'bg-gray-300'}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
        <div className='mt-12 w-full h-1 bg-blue-500'></div>
      </div>
        {/* </div> */}
        </>
    )
}

export default Coe;





