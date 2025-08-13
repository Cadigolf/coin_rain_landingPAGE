import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section className="relative py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
        <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
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
              Every Purchase, <br/>Supercharged.
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-custom-cyan leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
              Turn purchases into programmable  <br/> assets-stake products, earn rewards, <br/>and access exclusive brand perks.
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
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <img src="/assets/svg/c.svg" alt="Tokenization Engine" className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Tokenization Engine</h3>
                  <p className="text-custom-cyan">Every sale mints a product token</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <img src="/assets/svg/gift_icon.svg" alt="Staking & Rewards Layer" className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Staking & Rewards Layer</h3>
                  <p className="text-custom-cyan">Earn while you own</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <img src="/assets/svg/people_icon.svg" alt="Smart Ownership" className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Smart Ownership</h3>
                  <p className="text-custom-cyan">Trackable, verifiable, and tradable</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Phone Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.img
                src="/assets/png/hand_img-8.png"
                alt="HubsAI Mobile App"
                className="w-full h-auto scale-110"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;