import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CoinRain from './CoinRain';

const FuturePlatform: React.FC = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src="/assets/png/skycraper_img-8.png"
          alt="Cityscape Background"
          className="w-full h-full object-cover opacity-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Coin Rain Animation - Only when section is visible */}
      {isSectionVisible && <CoinRain />}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Main Heading */}
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsSectionVisible(true)}
            onViewportLeave={() => setIsSectionVisible(false)}
          >
            Own the Retail Platform <br/> of the Future.
          </motion.h2>

          {/* Call to Action Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-10 py-4 bg-custom-cyan text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Airdrop
            </motion.button>
          </motion.div>

          {/* Small Text */}
          <motion.p
            className="text-gray-300 text-sm max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Access the airdrop directly! Create an account later to unlock full platform features.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FuturePlatform; 