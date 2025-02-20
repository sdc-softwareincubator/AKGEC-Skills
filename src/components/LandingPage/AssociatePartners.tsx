import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: 'FABLAB',
    logo: '/fablab.jpg'
  },
  {
    id: 2,
    name: 'CII',
    logo: '/cII.jpg'
  },
  {
    id: 3,
    name: 'CGSC',
    logo: '/cgsc.jpg'
  },
  {
    id: 4,
    name: 'ASDC',
    logo: '/asdc.jpg'
  },
  {
    id: 5,
    name: 'AIA',
    logo: '/aia.jpg'
  },
  {
    id: 6,
    name: 'AWS-1',
    logo: '/aws-1.jpg'
  },
  {
    id: 7,
    name: 'GMA',
    logo: '/gma.jpg'
  },
  {
    id: 8,
    name: 'IAM',
    logo: '/iam.jpg'
  },
  {
    id: 9,
    name: 'IASC-1',
    logo: '/iasc-1.jpg'
  },
  {
    id: 10,
    name: 'ISA',
    logo: '/isa.jpg'
  },
  {
    id: 11,
    name: 'NSDC',
    logo: '/NSDC.jpg'
  },
  {
    id: 12,
    name: 'WADHWANI',
    logo: '/wadhwani.jpg'
  }
];

const AssociatePartners: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex items-center">
      <h2 className="text-2xl font-bold text-center  w-1/2">Our Associate Partners</h2>
      <div className="border-l-4 border-blue-500 rounded-lg  h-32 mx-4" />
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        speed={500} // Transition speed in milliseconds
        autoplay={{
          delay: 2000, // 2 seconds delay between slides
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        slidesPerGroup={1} // Move one slide at a time
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }}
        className="partner-slider"
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <div className="flex justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-15 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AssociatePartners; 