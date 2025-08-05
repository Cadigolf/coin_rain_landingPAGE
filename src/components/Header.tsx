import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo and Tagline */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/assets/svg/HubsAI_Logo.svg" alt="HubsAI" className="h-8 w-auto" />
            <span className="text-gray-400 text-sm">Powered by RWA and AI</span>
          </motion.div>

          {/* Navigation and Social Icons */}
          <div className="flex items-center space-x-6">
            <motion.button
              className="outline-solid px-4 py-2  text-white rounded-3xl text-sm font-medium border border-custom-cyan hover:bg-gray-100 transition-colors hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              HUBSAI Whitepaper
            </motion.button>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <motion.a href="#" className="text-white/70 hover:text-white transition-colors" whileHover={{ scale: 1.1 }}>
                <img src="/assets/svg/linkedin_icon.svg" alt="LinkedIn" className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" className="text-white/70 hover:text-white transition-colors" whileHover={{ scale: 1.1 }}>
                <img src="/assets/svg/x_icon.svg" alt="X" className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" className="text-white/70 hover:text-white transition-colors" whileHover={{ scale: 1.1 }}>
                <img src="/assets/svg/instagram_icon.svg" alt="Instagram" className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" className="text-white/70 hover:text-white transition-colors" whileHover={{ scale: 1.1 }}>
                <img src="/assets/svg/discord_icon.svg" alt="Discord" className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" className="text-white/70 hover:text-white transition-colors" whileHover={{ scale: 1.1 }}>
                <img src="/assets/svg/telegram_icon.svg" alt="Telegram" className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;