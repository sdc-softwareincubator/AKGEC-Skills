import React, { useState } from 'react';
// import Slider from '../../components/slider';   
import AssociatePartners from './AssociatePartners';
import SkillsGlance from './SkillsGlance';

// Define types for our data structures
interface ProgramCard {
  title: string;
  category: string;
  description: string;
  duration: string;
  imageSrc: string;
}



const programCards: Record<string, ProgramCard[]> = {
  robotics: [
    {
      title: 'Industrial Robot Programming',
      category: 'Training',
      description: 'Basic | Advance | Expert',
      duration: 'Two Weeks Program for Engineers',
      imageSrc: ' irp.jpg',
    },
    {
      title: 'Robot Cell Designer',
      category: 'Training',
      description: 'Basic | Advance',
      duration: 'One Week Program for Engineers',
      imageSrc: ' sa.jpg',
    },
    {
      title: 'Robot Programming Basics',
      category: 'Training',
      description: 'Beginner Level',
      duration: 'One Week Program',
      imageSrc: ' workshop_1.jpg',
    },
    {
      title: 'Advanced Robotics',
      category: 'Training',
      description: 'Advanced Techniques',
      duration: 'Two Weeks Program',
      imageSrc: ' Robotics5.jpg',
    },
    {
      title: 'Robotics Workshop',
      category: 'Workshop',
      description: 'Hands-on Experience',
      duration: 'Three Days Workshop',
      imageSrc: ' workshop_1.jpg',
    },
    {
      title: 'Industrial Robotics',
      category: 'Internship',
      description: 'Real-world Applications',
      duration: 'Six Months Internship',
      imageSrc: ' Robotics7.jpg',
    },
    {
      title: 'Robotic Process Automation',
      category: 'Training',
      description: 'Automation Techniques',
      duration: 'Two Weeks Program',
      imageSrc: ' Robotics6.jpg',
    },
  ],
  automation: [
    {
      title: 'Programmable logic controller',
      category: 'Training',
      description: 'Basic | Advance',
      duration: 'One Week Program',
      imageSrc: ' 1.jpg',
    },
    {
      title: 'Industrial training program',
      category: 'Integrated automation technologies',
      description: 'Hydraulics | Pneumatics | PLC | SCADA',
      duration: 'Six Weeks Program for Engineering Students',
      imageSrc: ' 2.jpg',
    },
    {
      title: 'Automation Technologies',
      category: 'Workshop',
      description: 'PLC | SCADA | DCS',
      duration: 'One Day Program For Beginners',
      imageSrc: ' 3.jpg',
    },
    {
      title: 'Automation Technologies',
      category: 'Training',
      description: 'Basic | intermediate | Advance',
      duration: 'Two Weeks Program',
      imageSrc: ' auto_2.jpg',
    },
    {
      title: 'Automation Technologies',
      category: 'On Site Training',
      description: 'Hydraulics | Pneumatics | Drives & Control',
      duration: 'Three Days Program for industry',
      imageSrc: ' 5.jpg',
    },
    {
      title: 'Industrial Automation',
      category: 'Industrial Internship',
      description: 'Designs | Programming | Applications',
      duration: 'Six Months Program For Students',
      imageSrc: ' auto-1.jpg',
    },
    {
      title: 'Industrial Sensorics',
      category: 'Training',
      description: 'RFID | Vision | Ultrasonic | Photoelectronic',
      duration: 'One Week Program For Engineers',
      imageSrc: ' 7.jpg',
    },
  ],
  manufacturing: [
    {
      title: 'Industrial Measurement',
      category: 'Training',
      description: 'Basic | Advance',
      duration: 'One Week Program for Engineers',
      imageSrc: ' manuf.jpg',
    },
    {
      title: 'Computer Integrated Manufacturing',
      category: 'Industrial Training Program',
      description: 'Milling | Turning | CAD & CAM',
      duration: 'Six Weeks Summer Training Program for Engineering Students',
      imageSrc: ' manuf_1.jpg',
    },
    {
      title: 'Advance Manufacturing',
      category: 'Workshop',
      description: 'Milling | Turning',
      duration: 'One Day Program for Beginners',
      imageSrc: ' manuf_2.jpg',
    },
    {
      title: 'Manufacturing Technologies',
      category: 'Training',
      description: 'Basic | Advance',
      duration: 'Two Weeks Program for Engineers',
      imageSrc: ' manuf_3.jpg',
    },
    {
      title: 'Flexible Manufacturing System',
      category: 'Vocational Training Program',
      description: 'Milling | Turning | CAD',
      duration: 'Program for Diploma/ITI Students',
      imageSrc: ' manuf_4.jpg',
    },
    {
      title: 'Manufacturing and Inspection',
      category: 'Industrial Internship',
      description: 'CNC Machine | CAD & CAM | Reverse Engg.',
      duration: 'Six Months Program for Students',
      imageSrc: ' manuf_5.jpg',
    },
    {
      title: 'Production Engineering',
      category: 'Finishing School Program',
      description: 'CAD | CAM | Measurements & Metrology',
      duration: 'One Month Program for Freshers',
      imageSrc: ' manuf_6.jpg',
    },
  ],
  welding: [
    {
      title: 'Welder Competency Program',
      category: 'Training',
      description: 'Basic | Advance',
      duration: 'Two Weeks Program for Welders',
      imageSrc: ' 11.jpg',
    },
    {
      title: 'Welding & Inspection Technology',
      category: 'Industrial Training Program',
      description: 'Technician | Engineer',
      duration: 'Six Weeks Summer Program for Students',
      imageSrc: ' 12.jpg',
    },
    {
      title: 'Welding Technology',
      category: 'Workshop',
      description: 'Arc Welding | NDT',
      duration: 'One Day Program for Beginners',
      imageSrc: ' 13.jpg',
    },
    {
      title: 'Industrial Welding Training',
      category: 'Training',
      description: 'Basic | Advance',
      duration: 'Two Weeks Program for Engineers',
      imageSrc: ' 14.jpg',
    },
    {
      title: 'Welder Training Program',
      category: 'On-Site Training',
      description: 'SMAW | GMAW | GTAW',
      duration: 'Program for Welders & Supervisors',
      imageSrc: ' 15.jpg',
    },
    {
      title: 'Welding and Inspection',
      category: 'Industrial Internship',
      description: 'Arc Welding | NDT | Plasma Cutting',
      duration: 'Six Months Program for Students',
      imageSrc: ' 16.jpg',
    },
    {
      title: 'Certification Program in NDT',
      category: 'Training',
      description: 'Basic | Advance',
      duration: 'Two Week Program for Students',
      imageSrc: ' 17.jpg',
    },
  ],
  design: [
    {
      title: 'Design for Additive Manufacturing',
      category: 'Training',
      description: 'CAD | 3D Printing',
      duration: 'One Week Program for Engineers',
      imageSrc: ' 18.jpg',
    },
    {
      title: 'Digital Manufacturing',
      category: 'Industrial Training Program',
      description: 'NX-CAD/CAM | 3D Printing | Proto-Development',
      duration: 'Six Weeks Program for Engineers',
      imageSrc: ' 19.jpg',
    },
    {
      title: 'Automotive Design',
      category: 'Workshop',
      description: 'Basic CAD | Validation',
      duration: 'One Day Program for Beginners',
      imageSrc: ' 20.jpg',
    },
    {
      title: 'NX-CAD',
      category: 'Training',
      description: 'Modelling | Assembly | Drafting',
      duration: 'One Week Program for Engineers',
      imageSrc: ' 21.jpg',
    },
    {
      title: 'Solid Edge St-09',
      category: 'Training',
      description: 'Modelling | Surfacing | Simulation',
      duration: 'One Week Program for Engineers',
      imageSrc: ' 22.jpg',
    },
    {
      title: 'Digital Fabrication Techniques',
      category: 'Workshop',
      description: 'RD Works | Aspire',
      duration: 'One Day Program for Beginners',
      imageSrc: ' 23.jpg',
    },
    {
      title: 'NX CAM Robot Programming',
      category: 'Training',
      description: 'CAM | Post Processing | Robot Simulation',
      duration: 'One Week Program for Engineers',
      imageSrc: ' 24.jpg',
    },
  ],
  iot: [
    {
      title: 'Embedded Systems & IoT',
      category: 'Training',
      description: 'Arduino | Raspberry Pi | Node MCU',
      duration: 'One Week Program for Engineers',
      imageSrc: ' 25.jpg',
    },
    {
      title: 'PCB Design & Manufacturing',
      category: 'Training',
      description: 'PCB Milling | Eagle CAD | PCB Fabrication',
      duration: 'One Week Program for Engineers',
      imageSrc: ' 26.jpg',
    },
    {
      title: 'Rapid Prototyping',
      category: 'Workshop',
      description: 'Fusion 360 | FDM',
      duration: 'One Day Program for Beginners',
      imageSrc: ' 27.jpg',
    },
    {
      title: 'Innovation Camp',
      category: 'Workshop',
      description: 'Design Thinking | PCB Design | Prototyping',
      duration: 'Three Days Program for Innovators',
      imageSrc: ' 28.jpg',
    }, {
      title: 'PCB Design & Manufacturing',
      category: 'Training',
      description: 'PCB Milling | Eagle CAD | PCB Fabrication',
      duration: 'One Week Program for Engineers',
      imageSrc: ' 29.jpg',
    },
    {
      title: 'Rapid Prototyping',
      category: 'Workshop',
      description: 'Fusion 360 | FDM',
      duration: 'One Day Program for Beginners',
      imageSrc: ' 30.jpg',
    },
    {
      title: 'Innovation Camp',
      category: 'Workshop',
      description: 'Design Thinking | PCB Design | Prototyping',
      duration: 'Three Days Program for Innovators',
      imageSrc: ' 31.jpg',
    },
  ],
  instrumentation: [
    {
      title: 'LabVIEW Technology',
      category: 'Training',
      description: 'Core 1 | Core 2 | Core 3',
      duration: 'One Week Program',
      imageSrc: ' 32.jpg',
    },
    {
      title: 'LabVIEW Technology',
      category: 'Industrial Training Program',
      description: 'LabVIEW Programming & Application Development',
      duration: 'Six Weeks Program',
      imageSrc: ' 33.jpg',
    },
    {
      title: 'LabVIEW Technology',
      category: 'Workshop',
      description: 'Programming | Acquisition | Application',
      duration: 'One Day Program for Beginners',
      imageSrc: ' 34.jpg',
    },
    {
      title: 'LabVIEW Machine Vision and Image Processing',
      category: 'Training',
      description: 'Processing | Acquisition | Development',
      duration: 'One Week Program',
      imageSrc: ' 35.jpg',
    },
    {
      title: 'LabVIEW Technology',
      category: 'Onsite Training',
      description: 'Core 1 | Core 2 | Core 3',
      duration: 'One Week Program',
      imageSrc: ' 36.jpg',
    },
    {
      title: 'LabVIEW Technology',
      category: 'Industrial Internship Program',
      description: 'Programming | Acquisition | Application Development',
      duration: 'Six Months Program',
      imageSrc: ' 37.jpg',
    },
    {
      title: 'Professional Certifications',
      category: 'LabVIEW Technology',
      description: 'CLAD | CLD',
      duration: 'One Week Program',
      imageSrc: ' 38.jpg',
    },
  ],
};

const Training: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('robotics');
  const [currentPage, setCurrentPage] = useState(0);
  const categoriesPerPage = 4;
  const [isContactOpen, setIsContactOpen] = useState(false); // State for contact form visibility

  // Calculate the categories to display based on the current page
  const categoryKeys = Object.keys(programCards);
  const displayedCategories = categoryKeys.slice(currentPage * categoriesPerPage, (currentPage + 1) * categoriesPerPage);
  const totalPages = Math.ceil(categoryKeys.length / categoriesPerPage);

  const handleContactToggle = () => {
    setIsContactOpen(!isContactOpen);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div id="training">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl text-center font-bold text-[#1a237e] mb-4">Training Programs</h1>
        <p className="text-center text-gray-600 mb-8">
          ASF offers Technical / Vocational Training Programs for Engineering / Diploma/ ITI/ 12th or 10th Students for making them Industry Ready and Globally Employable.
        </p>

        {/* Tab Navigation */}
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'></div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-8 w-full sm:w-auto">
          {displayedCategories.map((service) => (
            <button
              key={service}
              className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md transition duration-300 ease-in-out ${
                activeCategory === service 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-gray-200 text-gray-700 hover:bg-yellow-300'
              }`}
              onClick={() => setActiveCategory(service)}
            >
              {service.charAt(0).toUpperCase() + service.slice(1)}
            </button>
          ))}
        </div>

        {/* Pagination Controls with Arrows */}
        <div className="flex justify-center sm:justify-end gap-2 sm:gap-4 mb-4 sm:mb-8">
          <button
            disabled={currentPage === 0}
            onClick={handlePrevPage}
            className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-200 text-gray-700 rounded-md transition duration-300 ease-in-out hover:bg-gray-300 disabled:opacity-50"
          >
            &lt; {/* Left Arrow */}
          </button>
          <button
            disabled={currentPage === totalPages - 1}
            onClick={handleNextPage}
            className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-200 text-gray-700 rounded-md transition duration-300 ease-in-out hover:bg-gray-300 disabled:opacity-50"
          >
            &gt; {/* Right Arrow */}
          </button>
        </div>

        {/* Grid Layout for Programs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
          {programCards[activeCategory]?.slice(0, 3).map((program, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-lg shadow-md p-2 sm:p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${program.imageSrc})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg" />
              <div className="relative z-10 p-2 sm:p-4 h-48 sm:h-64 flex flex-col justify-end">
                <h3 className="text-base sm:text-lg font-semibold text-white">{program.title}</h3>
                <p className="text-xs sm:text-sm text-white">{program.category}</p>
                <p className="text-xs sm:text-sm text-white">{program.description}</p>
                <p className="text-xs sm:text-sm text-white">{program.duration}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row with 4 Items */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 mt-2 sm:mt-4">
          {programCards[activeCategory]?.slice(3).map((program, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-md p-2 sm:p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${program.imageSrc})` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg`} />
              <div className="relative z-10 p-2 sm:p-4 h-48 sm:h-64 flex flex-col justify-end">
                <h3 className="text-base sm:text-lg font-semibold text-white">{program.title}</h3>
                <p className="text-xs sm:text-sm text-white">{program.category}</p>
                <p className="text-xs sm:text-sm text-white">{program.description}</p>
                <p className="text-xs sm:text-sm text-white">{program.duration}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Us Card */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 sm:p-4 rounded-l-lg shadow-lg cursor-pointer transition-transform hover:scale-105 duration-300 z-50 text-sm sm:text-base" onClick={handleContactToggle}> 
          Contact Us
        </div>

        {/* Sliding Contact Form */}
        <div className={`fixed right-0 top-0 h-full w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out ${isContactOpen ? 'translate-x-0' : 'translate-x-full'} z-150`}>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="border rounded w-full py-2 px-3 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="border rounded w-full py-2 px-3 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mobile</label>
              <input type="tel" className="border rounded w-full py-2 px-3 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Mobile" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea className="border rounded w-full py-2 px-3 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message" required />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-600">Send</button>
            <button type="button" onClick={handleContactToggle} className="bg-red-500 text-white py-2 px-4 rounded ml-2 transition duration-300 ease-in-out hover:bg-red-600">Close</button>
          </form>
        </div>

        <AssociatePartners />
        
      </div>
      <SkillsGlance/>
    </div>
  );
};

export default Training;