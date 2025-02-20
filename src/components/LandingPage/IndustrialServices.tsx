import design from '/1_1.png'
import consultancy from '/2_1.png'
import manufacturing from '/3_3.png'
import design2 from '/4_3.png'
import consultancy2 from '/5_5.png'
import manufacturing2 from '/6_2.png'


const IndustrialServices = () => {
  

  return (
    <div className="bg-white border-t border-[#9fdaec]">
      <div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className='text-center mt-16 text-3xl text-blue-950'>Industrial Services</h1>
          <div className="h-1 w-12 bg-amber-400"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto font-sans">
          <div className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-[#213868] space-y-4">
            <div className=" p-4     mb-4">
              <img src={design} alt="design" />
            </div>
            <h3 className="text-xl font-semibold text-amber-400 mb-2">Design & Manufacturing</h3>
            <p className="text-white font-medium">
              • 3D Modelling<br />
              • Structural Analysis and Optimization<br />
              • CNC Machining (Turning/Milling/Grinding)
            </p>

            <button className="border text-white px-4 py-2 rounded-md transition-colors duration-300 font-semibold cursor-pointer mt-4">
              Know More
            </button>
          </div>

          <div className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-gray-200 space-y-4">
            <div className=" p-4     mb-4">
              <img src={consultancy} alt="manufacturing" />
            </div>
            <h3 className="text-xl font-semibold text-blue-950 mb-2">Measurment & Methology</h3>
            <p className="text-black font-medium">
              • Calibration Services<br />
              • Non-Destructive Testing (NDT)<br />
              • Quality Assurance and Documentation
            </p>

            <button className="border text-blue-950 px-4 py-2 rounded-md transition-colors duration-300 font-semibold cursor-pointer mt-4">
              Know More
            </button>
          </div>

          <div className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-[#213868] space-y-4">
            <div className=" p-4     mb-4">
              <img src={manufacturing} alt="consultancy" />
            </div>
            <h3 className="text-xl font-semibold text-amber-400 mb-2">Consultancy Services</h3>
            <p className="text-white font-medium">
              • Non Destructive Testing (NDT)<br />
              • Laser & Plasma Cutting<br />
              • Fabrication
            </p>

            <button className="border text-white px-4 py-2 rounded-md transition-colors duration-300 font-semibold cursor-pointer mt-4">
              Know More
            </button>
          </div>

          <div className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow bg-gray-200 space-y-4">
            <div className=" p-4     mb-4">
              <img src={design2} alt="design" />
            </div>
            <h3 className="text-xl font-semibold text-blue-950 mb-2">Design Services</h3>
            <p className=" text-black font-bold">
              • 3D Printing<br />
              • Laser Cutting & Engraving<br />
              • PCB Manufacturing
            </p>

            <button className="border text-blue-950 px-4 py-2 rounded-md transition-colors duration-300 font-semibold cursor-pointer mt-4">
              Know More
            </button>
          </div>

          <div className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-[#213868] space-y-4">
            <div className=" p-4     mb-4">
              <img src={consultancy2} alt="manufacturing" />
            </div>
            <h3 className="text-xl font-semibold text-amber-400 mb-2">Manufacturing Services</h3>
            <p className="text-white font-medium">
              • Factory Automation Solutions<br />
              • Hydraulic & Pneumatic Systems<br />
              • Industrial Internet of Things<br />
            </p>

            <button className="border text-white px-4 py-2 rounded-md transition-colors duration-300 font-semibold cursor-pointer mt-4">
              Know More
            </button>
          </div>

          <div className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow bg-gray-200 space-y-4">
          <div className=" p-4     mb-4">
              <img src={manufacturing2} alt="consultancy" />
            </div>
            <h3 className="text-xl font-semibold text-blue-950 mb-2">Consultancy Services</h3>
            <p className="text-black font-medium">
              • Robotic Machining - Milling & Deburring<br />
              • Robotic 3D Printing<br />
              • Robotic Welding & Cutting
            </p>
            <button className="border text-blue-950 px-4 py-2 rounded-md transition-colors duration-300 font-semibold cursor-pointer mt-4">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndustrialServices
