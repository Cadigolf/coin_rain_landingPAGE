// src/components/Footer.tsx - Completely rebuilt to match the attached image exactly
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Tagline */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <img src="/assets/svg/HubsAI_Logo.svg" alt="HubsAI" className="h-8 w-auto" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing retail through the power of AI and real-world asset tokenization. 
              Join us in building the future of commerce.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/assets/svg/instagram_icon.svg" alt="Instagram" className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://x.com/HubsaiOfficial" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/assets/svg/x_icon.svg" alt="X" className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/assets/svg/facebook_icon.svg" alt="Facebook" className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/assets/svg/linkedin_icon.svg" alt="LinkedIn" className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://t.me/hubsai" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/assets/svg/telegram_icon.svg" alt="Telegram" className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-custom-cyan font-semibold mb-4">Quick Link</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <a href="https://hubsai.gitbook.io/hubsai-docs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Docs</a>
              <a href="https://hubsai.gitbook.io/hubsai-docs/hubsai-whitepaper/tokenomics" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Tokenomics</a>
              <a href="https://hubsai.gitbook.io/hubsai-docs/hubsai-whitepaper/socialfi-airdrop-early-access" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">$1M Airdrop</a>
              <a href="https://hubsai.gitbook.io/hubsai-docs/product-roadmap/product-stack-layering" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Roadmap</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a>
            </div>
          </motion.div>
          
          {/* Company */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-custom-cyan font-semibold mb-4">Company</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <a href="https://hubsai.gitbook.io/hubsai-docs/hubsai-whitepaper/quickstart" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
              <a href="https://medium.com/@HubsAIOfficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              <a href="mailto:tyler@hubsai.io" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-custom-cyan font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div 
          className="border-t border-custom-cyan/20 mt-8 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2025 HubsAI. All rights reserved. Built for the future of retail.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;