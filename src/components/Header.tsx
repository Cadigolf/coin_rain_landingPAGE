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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <nav className="grid grid-cols-3 items-center gap-3">
          {/* Logo and Tagline */}
          <motion.div 
            className="flex items-center space-x-2 sm:space-x-3 min-w-0"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/assets/svg/HubsAI_Logo.svg" alt="HubsAI" className="h-7 sm:h-8 w-auto shrink-0" />
            <span className="hidden sm:inline text-gray-400 text-xs sm:text-sm truncate">Powered by RWA and AI</span>
          </motion.div>

          {/* Whitepaper Button - centered */}
          <div className="flex justify-center">
            <motion.button
              className="outline-solid px-4 py-2  text-white rounded-3xl text-sm font-medium border border-custom-cyan hover:bg-gray-600 transition-colors hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://hubsai.gitbook.io/hubsai-docs/', '_blank')}
            >
              HUBSAI Whitepaper
            </motion.button>
          </div>

          {/* Social Icons - right aligned */}
          <div className="flex items-center justify-end space-x-3 sm:space-x-4">
            {/* <motion.a href="#" className="text-white/70 hover:text-white transition-colors" whileHover={{ scale: 1.1 }}>
              <img src="/assets/svg/linkedin_icon.svg" alt="LinkedIn" className="w-5 h-5" />
            </motion.a> */}
            <motion.a href="https://x.com/HubsaiOfficial" className="text-white/70 hover:text-white transition-colors" whileHover={{ scale: 1.1 }}>
              <img src="/assets/svg/x_icon.svg" alt="X" className="w-5 h-5" />
            </motion.a>
            {/* <motion.a href="#" className="text-white/70 hover:text-white transition-colors" whileHover={{ scale: 1.1 }}>
              <img src="/assets/svg/instagram_icon.svg" alt="Instagram" className="w-5 h-5" />
            </motion.a> */}
            <motion.a href="https://discord.gg/xjNjWRuR" className="text-white/70 hover:text-white transition-colors" whileHover={{ scale: 1.1 }}>
              <img src="/assets/svg/discord_icon.svg" alt="Discord" className="w-5 h-5" />
            </motion.a>
            <motion.a href="https://t.me/hubsai" className="text-white/70 hover:text-white transition-colors" whileHover={{ scale: 1.1 }}>
              <img src="/assets/svg/telegram_icon.svg" alt="Telegram" className="w-5 h-5" />
            </motion.a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;