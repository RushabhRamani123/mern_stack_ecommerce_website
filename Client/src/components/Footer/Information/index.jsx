import { motion } from "framer-motion";
import logo from "../../../assets/logo.svg";
import { TfiFacebook } from "react-icons/tfi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import img1 from "../../../assets/payment-method.png";
import img2 from "../../../assets/google-play.jpg";
import img3 from "../../../assets/app-store.jpg";

const Information = () => {
  const socialIcons = [TfiFacebook, AiOutlineTwitter, FaInstagram, FaPinterestP, FaYoutube];

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src={logo}
              alt="logo" 
              className="w-32 mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800">Contact</h3>
            <p className="text-gray-600"><strong className="text-gray-700">Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
            <p className="text-gray-600"><strong className="text-gray-700">Phone:</strong> +01 2222 365 / (+91) 01 2345 6789</p>
            <p className="text-gray-600"><strong className="text-gray-700">Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
            <h4 className="text-lg font-semibold text-gray-800 mt-6">Follow Us</h4>
            <div className="flex space-x-4">
              {socialIcons.map((Icon, index) => (
                <motion.div key={index} whileHover={{ y: -4, scale: 1.2 }} className="bg-white p-2 rounded-full shadow-md">
                  <Icon className="text-gray-600 hover:text-green-600 text-xl" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* About Us and My Account */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            {[
              { title: "About Us", items: ["Delivery Information", "Privacy Policy", "Terms & Conditions", "Contact Us", "Support Center"] },
              { title: "My Account", items: ["Sign In", "View Cart", "My Wishlist", "Track My Order", "Help"] }
            ].map((column, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">{column.title}</h3>
                {column.items.map((item, index) => (
                  <motion.p 
                    key={index}
                    className="text-gray-600 hover:text-green-600 cursor-pointer transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            ))}
          </div>

          {/* Install App */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Install App</h3>
            <p className="text-gray-600">From App Store or Google Play</p>
            <div className="flex space-x-4">
              {[img2, img3].map((src, index) => (
                <motion.img 
                  key={index}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  src={src}
                  alt={index === 0 ? "Google Play" : "App Store"}
                  className="border border-gray-300  rounded-lg w-32 object-cover"
                />
              ))}
            </div>
            <p className="text-gray-600 mt-6">Secured Payment Gateways</p>
            <img src={img1} alt="Payment methods" className="max-w-full mt-2" />
          </div>
        </div>

        <div className="border-t border-gray-300  pt-8 text-center">
          <p className="text-gray-600">
            Copyright © {new Date().getFullYear()} <span className="text-green-600 font-semibold">Rushabh Ramani</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Information;