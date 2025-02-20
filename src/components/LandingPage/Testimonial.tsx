interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: "Dr. Monica Bias",
    role: "Global Certification Head",
    company: "TUV Rheinland, Germany",
    image: "/mon.jpg",
    quote: "I was very impressed from offered trainings based on knowledge tie-ups with high level companies. I also like to connect them to international standards."
  },
  {
    name: "Mr. Nikhil Kumar",
    role: "Sr. Engineer",
    company: "FANUC India Pvt. Ltd.",
    image: "/nikhil-300x300.png",
    quote: "I did my Basic and advance course in industrial robotics at AKGEC during 2010 and 2011. In 2013, I started working as a Robotics programmer at Rhythmsoft, Nashik. Currently I am employed at FANUC Robotics, India."
  },
  {
    name: "Mr. Saransh Gupta",
    role: "Sales Engineer",
    company: "Adverb Technologies",
    image: "/sar-300x300.jpg",
    quote: "He completed his Robotic Certification on Basic & Advance at AKGEC. He joined KUKA Robotics India and served as Service Engineer for three years. Presently he is working as Sales Engineer at Adverb Technologies, Noida."
  }
];

const Testimonial = () => {
  return (
    <div className="container mx-auto px-4 relative">
      <img 
        src="/bg-map.png" 
        alt="testimonial" 
        className="w-full h-full absolute top-0 left-0 opacity-20"
      />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Visitors Speak Section */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Visitors Speak</h2>
          <div className="h-1 w-12 bg-amber-400 mb-8 md:mb-12"></div>
          <div className="w-full">
            {testimonials.slice(0, 1).map((testimonial, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                  />
                  <h3 className="text-lg font-bold text-center text-[#9fdaec] mt-2">{testimonial.name}</h3>
                  <p className="text-white text-center text-xs">{testimonial.role}</p>
                  <p className="text-white text-center text-xs">{testimonial.company}</p>
                </div>
                <div className="bg-white p-4 w-full md:w-2/3 relative rounded-lg shadow-md
                  before:content-[''] 
                  before:absolute 
                  before:w-0 
                  before:h-0 
                  before:border-[12px] 
                  before:border-transparent
                  
                  /* Mobile styles (arrow on top) */
                  before:border-t-0
                  before:border-b-[12px]
                  before:border-b-white
                  before:-top-[12px]
                  before:left-1/2
                  before:-translate-x-1/2
                  
                  /* Desktop styles (arrow on left) */
                  md:before:border-t-[12px]
                  md:before:border-b-[12px]
                  md:before:border-r-[12px]
                  md:before:border-r-white
                  md:before:border-l-0
                  md:before:-left-[12px]
                  md:before:top-4
                  md:before:translate-x-0
                ">
                  <div className="relative">
                    <span className="absolute -top-4 -right-2 text-3xl text-gray-300">"</span>
                    <p className="text-black mb-4 italic text-sm md:text-base lg:text-lg p-2">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-8 border border-amber-400 px-6 py-2 text-black hover:bg-amber-400 hover:text-[#19396c] transition-colors bg-white font-sans font-bold rounded self-center">
            View All
          </button>
        </div>

        {/* Success Stories Section */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Success Stories</h2>
          <div className="h-1 w-12 bg-amber-400 mb-8 md:mb-12"></div>
          <div className="w-full flex flex-col gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                  />
                  <h3 className="text-lg font-bold text-center text-[#9fdaec] mt-2">{testimonial.name}</h3>
                  <p className="text-white text-center text-xs">{testimonial.role}</p>
                  <p className="text-white text-center text-xs">{testimonial.company}</p>
                </div>
                <div className="bg-white p-4 w-full md:w-2/3 relative rounded-lg shadow-md
                  before:content-[''] 
                  before:absolute 
                  before:w-0 
                  before:h-0 
                  before:border-[12px] 
                  before:border-transparent
                  
                  /* Mobile styles (arrow on top) */
                  before:border-t-0
                  before:border-b-[12px]
                  before:border-b-white
                  before:-top-[12px]
                  before:left-1/2
                  before:-translate-x-1/2
                  
                  /* Desktop styles (arrow on left) */
                  md:before:border-t-[12px]
                  md:before:border-b-[12px]
                  md:before:border-r-[12px]
                  md:before:border-r-white
                  md:before:border-l-0
                  md:before:-left-[12px]
                  md:before:top-4
                  md:before:translate-x-0
                ">
                  <div className="relative">
                    <span className="absolute -top-4 -right-2 text-3xl text-gray-300">"</span>
                    <p className="text-black mb-4 italic text-sm md:text-base lg:text-lg p-2">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-8 border border-amber-400 px-6 py-2 text-black hover:bg-amber-400 hover:text-[#19396c] transition-colors bg-white font-sans font-bold rounded self-center">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
