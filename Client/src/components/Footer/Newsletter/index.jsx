import  { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <div className="w-full bg-[#AECCC5] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-3">
            <MdOutlineAlternateEmail className="text-3xl text-gray-700" />
            <h2 className="text-xl font-semibold text-gray-800">Sign up to Newsletter</h2>
          </div>
          <p className="text-sm text-gray-600 text-center md:text-left">
            ...and receive ₹100 coupon for first shopping.
          </p>
          <form onSubmit={handleSubmit} className="flex w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#088178] focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 text-white bg-[#088178] rounded-r-md hover:bg-[#046963] focus:outline-none focus:ring-2 focus:ring-[#088178] focus:ring-offset-2 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;