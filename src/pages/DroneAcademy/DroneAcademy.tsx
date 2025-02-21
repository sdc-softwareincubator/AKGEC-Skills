import React from 'react';
import CustomFooter from '../../components/ui/CustomFooter';


const DroneAcademy: React.FC = () => {
    return (
        <>
            <section className="w-full my-4 px-4 lg:px-8">
                {/* Header Section */}
                {/* <div className="flex lg:flex-row flex-col items-center gap-6 lg:justify-evenly justify-center mb-4 lg:mb-16"> */}
                    {/* <img src={logo} alt="AKGEC Skills Logo" className='lg:w-[200px] w-[140px]' /> */}
                    <h1 className="text-gray-950 font-semibold text-2xl lg:text-3xl whitespace-nowrap text-center my-8">AKGEC Drone Academy</h1>
                {/* </div> */}

                {/* Introduction Section */}
                <div className='mx-2 flex xl:flex-row flex-col gap-6'>
                <div className="xl:w-1/2 flex sm:flex-row flex-col gap-4">
                        <img src="/drone1.png" alt="Drone Training" className="sm:w-1/2 object-cover rounded-lg" />
                        <img src="/drone2.png" alt="Drone Equipment" className="sm:w-1/2 object-cover rounded-lg" />
                    </div>
                    <div className="xl:w-1/2">
                        <p className='text-gray-600 text-justify'>
                            AKGEC Drone Academy, an initiative of AKGEC Skills Foundation (ASF), is dedicated to fostering excellence in drone technology education and training. Leveraging ASF's extensive expertise in industry-driven skill development, the academy aims to address the growing need for skilled drone professionals in India's rapidly expanding drone industry.
                        </p>
                        <p className='text-gray-600 text-justify mt-4'>
                            Recognized as a Directorate General of Civil Aviation (DGCA)-approved Remote Pilot Training Organisation (RPTO) for Small Class Drones (RPTO Authorization Number 35/2024), AKGEC Drone Academy is committed to delivering world-class drone education. This prestigious approval highlights the academy's focus on quality, safety, and compliance, making it a premier destination for aspiring drone pilots and professionals.
                        </p>
                    </div>
                    
                </div>

                 {/* Certification Section */}
                 <div className="my-8">
                    <h2 className="text-gray-950 font-semibold text-2xl text-center mb-6">Certification</h2>
                    <div className=" p-6 rounded-lg">
                        <p className="text-gray-600 text-justify mb-6">
                            Upon successful completion of the drone pilot training program at the AKGEC Drone Academy, candidates will be awarded the Remote Pilot Certificate (RPC), a prestigious certification authorized by the Directorate General of Civil Aviation (DGCA), Government of India. This certification is a testament to the candidate's proficiency in operating Small Class Drones, underlining their competence in both theoretical knowledge and practical skills.
                        </p>
                        
                        <h3 className="font-semibold  mb-4">Key Details of the Certification:</h3>
                        <ul className="list-none space-y-3 text-gray-600">
                            <li><span className="font-semibold">Certification Authority:</span> Directorate General of Civil Aviation (DGCA), Government of India</li>
                            <li><span className="font-semibold">Certification Name:</span> Remote Pilot Certificate (RPC)</li>
                            <li><span className="font-semibold">Scope:</span> The certification is specifically for Small Class Drones, covering Visual Line of Sight (VLOS) operations</li>
                            <li><span className="font-semibold">Validity:</span> The RPC is valid for 10 years from the date of issuance, subject to periodic renewals and adherence to DGCA guidelines</li>
                            <li><span className="font-semibold">Recognition:</span> The RPC is a nationally recognized credential that qualifies the holder to operate drones professionally across various industries, including agriculture, infrastructure, media, and logistics</li>
                        </ul>
                    </div>
                </div>

               

                {/* RPC Program Section */}
                <div className="my-8">
                    <h2 className="text-gray-950 font-semibold text-2xl text-center mb-6">Remote Pilot Certification (RPC) Program</h2>
                    <div className=" p-6 rounded-lg">
                        {/* <h3 className="text-xl mb-4">Salient Features:</h3> */}
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Comprehensive Drone Training aligned with Directorate General of Civil Aviation (DGCA) 
                            guidelines to ensure compliance with regulatory standards.</li>
                            <li>DGCA-certified instructors with extensive experience in drone technology and remote 
                            pilot operations</li>
                            <li>Practical Sessions using state-of-the-art drones, including real-world flight simulations 
                            and live flying exercises.</li>
                            <li>Dedicated training facilities equipped with cutting-edge technology for drone operation 
                            and maintenance.</li>
                            <li>Detailed guidance on aviation safety, airspace management, and regulatory compliance</li>
                            <li>Training in drone navigation, aerial mapping, data analysis, and payload management for 
                            diverse applications.</li>
                            <li>DGCA-recognized Remote Pilot Certificate issued upon successful course completion, 
                            enabling participants to operate drones commercially in India.</li>
                        </ul>
                    </div>
                </div>

                 {/* Training Drones Section */}
                 <div className="my-8">
                    <h2 className="text-gray-950 font-semibold text-2xl text-center mb-6">Training Drones</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Asteria Aerospace A200 XT Drone</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Multi purpose small category drone with DGCA type certification</li>
                                <li>Safe operations with omni-directional obstacle detection and avoidance system</li>
                                <li>Dual redundant GPS sensors with geofencing</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Crystal Ball Model V Drone</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>DGCA Type-Certified Small Category Drone</li>
                                <li>India's first type certified mapping drone with PPK technology</li>
                                <li>Equipped with Parachute Recovery System</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">IOTECH World Avigation Agribot A6</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>DGCA Type Certified Agriculture Drone</li>
                                <li>Radar based collision avoidance system</li>
                                <li>Master-Slave configuration enabled</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Course Details */}
                <div className="my-8">
                    <h2 className="text-gray-950 font-semibold text-2xl text-center mb-6">Course Details</h2>
                    {/* <div className="grid md:grid-cols-2 gap-6"> */}
                        <div className=" p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Duration & Methodology</h3>
                            <p className="text-gray-600 mb-4">7 Days Training (2 Days Theory, 5 Days Flying)</p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Classroom Sessions with DGCA Certified Instructors</li>
                                <li>Safety - Operation - Troubleshooting - Maintenance of Drones</li>
                                <li>Hands-on session on Type Certified Drones</li>
                                <li>Assessment & Certifications</li>
                            </ul>
                        </div>
                        <div className=" p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Course Fee</h3>
                            <p className="text-gray-600 mb-2 font-semibold">Rs 25,000/- per participant + GST</p>
                            <p className="text-gray-600 mb-2">The program fees to be paid in favour of “AKGEC Skills Foundation” before the commencement of 
each batch to the following bank account:
</p>
                            <div className="mt-4">
                                <h4 className="font-semibold mb-4">Bank Details:</h4>
                                <p className="text-gray-600">Account Name: AKGEC SKILLS FOUNDATION</p>
                                <p className="text-gray-600">Account No: 2133 02 0000 6517</p>
                                <p className="text-gray-600">Bank Name: BANK OF BARODA</p>
                                <p className="text-gray-600">IFSC Code: BARB0TRDGHA</p>
                            </div>
                            <div className="mt-6">
                                <h4 className="font-semibold mb-2">Note:</h4>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                                    <li>Taxes / GST extra as applicable.</li>
                                    <li>
                                        Training Fee includes following:
                                        <ul className="list-[lower-roman] list-inside ml-6 mt-1 space-y-1">
                                            <li>Teaching Learning session including Drone Flying Session (Day & Night)</li>
                                            <li>Registration kit & stationary.</li>
                                        </ul>
                                    </li>
                                    <li>Residential Facility: Rooms / Dormitory available for Trainees on campus at nominal charges.</li>
                                    <li>Good Quality Vegetarian Food is available at campus canteen/Hostel Mess at nominal Charges</li>
                                </ol>
                            </div>
                        </div>
                    {/* </div> */}
                </div>

                

                
            </section>
            <CustomFooter />
        </>
    );
}

export default DroneAcademy;
