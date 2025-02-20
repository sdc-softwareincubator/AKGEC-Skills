import React, { useEffect } from 'react'

import CustomFooter from '../../components/ui/CustomFooter'
import IndustrialServices from '../../components/LandingPage/IndustrialServices'
import Testimonial from '../../components/LandingPage/Testimonial'
import NewsAndEvents from '../../components/LandingPage/NewsAndEvents'
import Training from '../../components/LandingPage/Training'
import Hero from '../../components/LandingPage/Hero'
import Coe from '../../components/LandingPage/Coe'

const LandingPage: React.FC = () => {
  // const trainingRef = useRef<HTMLDivElement>(null!);
  // const coeRef = useRef<HTMLDivElement>(null!);
  // const servicesRef = useRef<HTMLDivElement>(null!);

  // const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
  //   if (ref && ref.current) {
  //     ref.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  useEffect(() => {
    
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  

  return (
    <div>
        
        <Hero />
        <section id="CoEs" >
          <Coe />
        </section >
        <section id="training" >
          <Training />
        </section>
        <section id="services" >

        <IndustrialServices />
        </section>
        <div className='mt-12 bg-gray-100'>
          <NewsAndEvents />
        </div>

        <div className="bg-[#111] text-white py-16">
          <Testimonial />
        </div>



        <CustomFooter />
    </div>
  )
}

export default LandingPage
