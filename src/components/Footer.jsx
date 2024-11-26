import {FiMail, FiPhone, FiMapPin} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Brown Pigeon</h3>
            <p className="text-gray-400">
              Empowering businesses and individuals through technology and
              education.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/training" className="text-gray-400 hover:text-white">
                  Training
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FiMail className="mr-2" />
                <a
                  href="mailto:info@brownpigeon.com"
                  className="text-gray-400 hover:text-white"
                >
                  brownpigeon@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2" />
                <span className="text-gray-400">07037881043</span>
              </li>
              <li className="flex items-center">
                <FiMapPin className="mr-2" />
                <span className="text-gray-400">
                  {" "}
                  Nigeria, Kabuga salbas house, Kano City
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Brown Pigeon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
