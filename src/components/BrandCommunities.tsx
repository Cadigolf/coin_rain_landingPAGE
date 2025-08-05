import React from 'react';
import { motion } from 'framer-motion';

const BrandCommunities: React.FC = () => {
  return (
    <section className="relative py-20" style={{ backgroundColor: '#000a09' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <motion.img
                src="/assets/png/kiosk_rewards-8.png"
                alt="HubsAI Brand Dashboard"
                className="w-full h-auto scale-110"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Main Heading */}
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Transforming How <br/> Brands Build and Reward Digital <br/>Communities.
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-custom-cyan leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              HubsAI creates a new digital economy for the worlds best brands - turning every product purchase into an experience.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandCommunities; 