// src/components/TokenizedLogistics.tsx - Completely rebuilt to match the attached image exactly
import React from 'react';
import { motion } from 'framer-motion';

const TokenizedLogistics: React.FC = () => {
  return (
    <section className="relative py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-custom-cyan">
              <motion.img
                src="/assets/png/kiosk_img-8.png"
                alt="HubsAI Kiosks"
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
            className="space-y-8 px-8"
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
              Rewiring Retail with <br/>Tokenized Logistics
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-custom-cyan leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Tokenization unlocks Autonomous <br/> local fulfillment and Instant Access.
            </motion.p>

            {/* Feature List */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Feature 1 */}
              <div className="flex items-start items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <img src="/assets/svg/hanger_icon.svg" alt="Try Before You Buy" className="w-10 h-10" />
                </div>
                <div>
                  <p className="text-gray-300">Try Before You Buy</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <img src="/assets/svg/stopwatch_icon.svg" alt="Instant Fulfillment" className="w-10 h-10  " />
                </div>
                <div>
                  <p className="text-gray-300">Instant Fulfillment</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <img src="/assets/svg/cubic_icon.svg" alt="Tokenized Ownership" className="w-10 h-10  " />
                </div>
                <div>
                  <p className="text-gray-300">Tokenized Ownership</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenizedLogistics;