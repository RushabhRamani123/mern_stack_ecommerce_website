import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import f1 from '../../../assets/feature-1.png';
import f2 from '../../../assets/feature-2.png';
import f3 from '../../../assets/feature-3.png';
import f4 from '../../../assets/feature-4.png';
import f5 from '../../../assets/feature-5.png';
import f6 from '../../../assets/feature-6.png';

const Features = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    const features = [
        { img: f1, text: "Free Shipping", bgColor: "bg-pink-100" },
        { img: f2, text: "Online Order", bgColor: "bg-blue-100" },
        { img: f3, text: "Save Money", bgColor: "bg-green-100" },
        { img: f4, text: "Promotions", bgColor: "bg-yellow-100" },
        { img: f5, text: "Happy Sell", bgColor: "bg-purple-100" },
        { img: f6, text: "24/7 Support", bgColor: "bg-orange-100" },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mx-4 sm:mx-8 lg:mx-20 my-8">
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    className="text-center p-4 sm:p-6 rounded border border-[#cce7d0] transition-all duration-300 hover:shadow-lg"
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    data-aos="fade-in"
                >
                    <img src={feature.img} alt="" className="mx-auto" />
                    <div className={`inline-block px-2 py-1 mt-2 rounded text-sm font-bold text-[#088178] ${feature.bgColor}`}>
                        {feature.text}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default Features;