import React from 'react';
import CustomFooter from '../../components/ui/CustomFooter';

const Incubator: React.FC = () => {

    return (
        <>
            <section className="w-full my-4 px-4 lg:px-8">
                <div className="flex lg:flex-row flex-col items-center gap-6  lg:justify-evenly justify-center mb-4 lg:mb-16">
                    <img src="/upstart_logo.png" alt="" className='lg:w-[200px] w-[140px]' />
                    <h1 className="text-gray-950 font-semibold text-xl lg:text-3xl whitespace-nowrap text-center">Technology Business Incubator (ASF-TBI)</h1>
                    <a href="https://forms.gle/1QktfiRmKb5ZfrnR9" target="_blank" rel="noopener noreferrer" className="bg-red-400 hover:bg-red-300 text-xl p-2">Apply Now</a>
                </div>
                <div className='mx-2 flex xl:flex-row flex-col '>
                    <div className="flex flex-col h-full xl:w-1/2 gap-3 mx-2">
                        <div className="sm:w-1/2 flex gap-3 sm:flex-row h-full flex-col">
                            <img src="/pic1.jpeg " alt="" />
                            <img src="/pic2.jpeg" alt="" />

                        </div>
                        <div className="sm:w-1/2 h-full flex gap-3 sm:flex-row flex-col">
                            <img src="/pic3.jpeg" alt="" />
                            <img src="/pic4.jpeg" alt="" />
                        </div>
                    </div>
                    <div className='xl:w-1/2 mx-2'>
                        <h1 className='font-normal text-2xl text-gray-800 text-center  xl:mt-0 mt-4 xl:mx-4 xl:text-left'>Welcome to
                            AKGEC Skills Foundation - Technology Business Incubator (ASF-TBI)
                        </h1>
                        <p className=' lg:mx-4 mt-3 text-gray-600 text-justify '>
                            At AKGEC Skills Foundation (ASF), we are committed to driving innovation and nurturing startups by providing them with the perfect environment to grow and succeed. ASF-TBI offers startups access to cutting-edge resources, mentoring, and industry partnerships. With 9+ world-class Centers of Excellence spread across nearly 50,000 sq feet and state-of-the-art infrastructure, we focus on supporting technology-driven ventures, especially in industrial automation, robotics, IoT, and advanced manufacturing. Our strategic alliances with global technology leaders like SIEMENS, KUKA, Bosch Rexroth, and Mitsubishi Electric further elevate the quality of services and opportunities available to our incubatees.
                        </p>

                    </div>

                </div>
                    <p className=' text-gray-600 xl:mx-4 xl:mt-8 text-justify mt-4 mx-3 '>
                    ASF-TBI offers startups the tools and expertise they need to bring their ideas to life. From prototyping and product development to high-end manufacturing and testing, our comprehensive suite of services is designed to foster innovation. Additionally, our collaboration with the MIT Fab Foundation provides access to the latest digital manufacturing tools, making it one of the most sought-after places for entrepreneurs to refine their products. We provide not only infrastructure but also crucial mentorship and funding support, creating a nurturing ecosystem for startups to thrive. By aligning with the 'Make in India' initiative and supporting the growth of startups in technology and engineering, ASF-TBI is the ultimate partner for transforming your entrepreneurial vision into a global success.
                    </p>

                <div className="my-8">
                    <h2 className="text-gray-950 font-semibold text-2xl text-center">Our Thrust Areas</h2>
                    <ul className="list-disc list-inside text-gray-600 mt-4">
                        <li>Industrial Automation & Robotics</li>
                        <li>Advanced Manufacturing & Fabrication</li>
                        <li>IoT & Smart Technologies</li>
                        <li>Sustainable Energy Solutions</li>
                        <li>Product Prototyping & Development</li>
                        <li>Artificial Intelligence & Machine Learning</li>
                    </ul>
                    <p className="text-gray-600 text-justify mt-4">
                        If your startup aligns with any of these fields, we are here to provide the support you need to scale and succeed.
                    </p>
                </div>

                <div className="my-8 px-4">
                    <h2 className="text-gray-950 font-semibold text-2xl text-center">Who Can Apply?</h2>
                    <ul className="list-disc list-inside text-gray-600 mt-4">
                        <li>Early-stage Startups: Startups working on innovative products or services, primarily in the technology or engineering space.</li>
                        <li>Students and Entrepreneurs: Individuals with promising ideas, technical expertise, and a drive to build impactful solutions.</li>
                        <li>SMEs: Small and medium enterprises looking to develop new products or improve existing ones.</li>
                    </ul>
                    <p className="text-gray-600 text-justify mt-4">
                        If you have an idea or a technology that has the potential to make a difference, we encourage you to apply.
                    </p>
                </div>

                <div className="my-8 px-4">
                    <h2 className="text-gray-950 font-semibold text-2xl text-center">Benefits of Joining Our Incubator</h2>
                    <ul className="list-disc list-inside text-gray-600 mt-4">
                        <li>State-of-the-art Infrastructure: Access to world-class prototyping, testing, and manufacturing facilities.</li>
                        <li>Expert Mentorship: Guidance from industry leaders, engineers, and entrepreneurs who can help you navigate the challenges of building a startup.</li>
                        <li>Networking Opportunities: Connect with potential partners, investors, and customers through our strong industry ties.</li>
                        <li>Funding Support: Assistance with funding options and connections to investors interested in tech startups.</li>
                        <li>Workshops & Training: Access to workshops on entrepreneurship, product development, and business growth.</li>
                    </ul>
                </div>

                <div className="my-8 px-4">
                    <h2 className="text-gray-950 font-semibold text-2xl text-center">How to Apply?</h2>
                    <p className="text-gray-600 text-justify mt-4">
                        To apply to our incubation center, please fill out the application form below. Our team will review your application and get back to you with the next steps.
                    </p>
                    <a href="https://forms.gle/1QktfiRmKb5ZfrnR9" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Click here to submit the Application Form</a>
                </div>

                <div className="my-8 px-4">
                    <h2 className="text-gray-950 font-semibold text-2xl text-center">Contact Us</h2>
                    <p className="text-gray-600 text-justify mt-4">
                        Have questions? Reach out to us:
                    </p>
                    <p className="text-gray-600 mt-2">Email: <a href="mailto:incubation.asf@akgec.ac.in" className="text-blue-600 underline">incubation.asf@akgec.ac.in</a></p>
                    <p className="text-gray-600 mt-2">Phone (Office): 9910249199, 8743879879</p>
                    <p className="text-gray-600 mt-2">Toll Free Number: 1800300006484</p>
                    <p className="text-gray-600 mt-2">We're here to help you succeed.</p>
                </div>
            </section>

            <CustomFooter />
        </>
    )
}

export default Incubator;