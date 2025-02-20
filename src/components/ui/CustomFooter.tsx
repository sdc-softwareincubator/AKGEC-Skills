import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const CustomFooter = () => {
  return (
    <footer className="bg-[#1e2024] text-white py-12 font-sans font-medium border-t border-amber-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto relative">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C6.422 0 3.515 2.907 3.515 6.485c0 4.288 6.485 13.515 6.485 13.515s6.485-9.227 6.485-13.515C16.485 2.907 13.578 0 10 0zm0 9.727a3.242 3.242 0 110-6.484 3.242 3.242 0 010 6.484z" />
                </svg>
              </span>
              <div className='text-gray-400'>
                <p>27th Km Stone,</p>
                <p>Delhi-Hapur Bypass Road,</p>
                <p>P.O. Adhyatmik Nagar,</p>
                <p>Ghaziabad - 201009</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-amber-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <div className='font-bold'>
                <p>+91 9910249199, +91 8743879879</p>
                <p>1800-3000-6484 (Toll Free)</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-amber-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
              <p>support@skills.akgec.ac.in</p>
            </div>
          </div>

          <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-gray-700"></div>

          <div>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
              <li><a href="/ref" className="hover:text-amber-400 transition-colors">Ref a Friend/Ref a Student</a></li>
              <li><a href="/awards" className="hover:text-amber-400 transition-colors">Awards & Recognition</a></li>
              <li><a href="/gallery" className="hover:text-amber-400 transition-colors">Photo Gallery</a></li>
              <li><a href="/events" className="hover:text-amber-400 transition-colors">Events</a></li>
              <li><a href="/terms" className="hover:text-amber-400 transition-colors">Terms & Condition</a></li>
              <li><a href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/downloads" className="hover:text-amber-400 transition-colors">Downloads</a></li>
            </ul>
          </div>

          <div className="hidden md:block absolute left-2/4 top-0 bottom-0 w-px bg-gray-700"></div>

          <div>
            <ul className="space-y-2">
              <li><a href="/robotics" className="hover:text-amber-400 transition-colors">Robotics</a></li>
              <li><a href="/automation" className="hover:text-amber-400 transition-colors">Automation</a></li>
              <li><a href="/manufacturing" className="hover:text-amber-400 transition-colors">Manufacturing</a></li>
              <li><a href="/welding" className="hover:text-amber-400 transition-colors">Welding</a></li>
              <li><a href="/design" className="hover:text-amber-400 transition-colors">Design</a></li>
              <li><a href="/embedded" className="hover:text-amber-400 transition-colors">Embedded, IoT & 3D Printing</a></li>
              <li><a href="/virtual" className="hover:text-amber-400 transition-colors">Virtual Instrumentation</a></li>
            </ul>
          </div>

          <div className="hidden md:block absolute left-3/4 top-0 bottom-0 w-px bg-gray-700"></div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl mb-4">Virtual Tour</h3>
              <img src="/360-degree.png" alt="360 Virtual Tour" className="w-56" />
            </div>
            <div>
              <h3 className="text-2xl mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-[#3b5998] p-2 rounded hover:opacity-80 transition-opacity">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="bg-[#1da1f2] p-2 rounded hover:opacity-80 transition-opacity">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-[#0077b5] p-2 rounded hover:opacity-80 transition-opacity">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8  text-sm">
          <p className='text-gray-400'>© 2019 copyright. All right reserved. AKGEC Skills</p>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
