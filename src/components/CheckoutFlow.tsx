import React from 'react';
import { motion } from 'framer-motion';

const CheckoutFlow: React.FC = () => {
  return (
    <section className="relative py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-12">
          
          {/* Main Heading */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              From Checkout to Wallet, Then to the World
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Every product becomes a token, a wallet, and a reward in $HUBS.
            </motion.p>
          </motion.div>

          {/* Flow Diagram */}
          <motion.div
            className="relative mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              {/* Buy Mint */}
              <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-white mb-2">Buy Mint</h3>

                <div className="relative">
                  <motion.img
                    src="/assets/png/shopify_icon-8.png"
                    alt="Buy Mint"
                    className="w-24 h-24 lg:w-48 lg:h-48"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Checkout triggers instant token <br/>
                    creation - no crypto required.
                  </p>
                </div>
              </div>

              {/* Wallet & ID Created */}
              <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-white mb-2">Wallet & ID Created</h3>

                <div className="relative">
                  <motion.img
                    src="/assets/png/wallet_icon-8.png"
                    alt="Wallet & ID Created"
                    className="w-24 h-24 lg:w-48 lg:h-48"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.0 }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    A wallet and Hubs ID are auto <br/>
                    generated for effortless onboarding.
                  </p>
                </div>
              </div>

              {/* Stake & Engage */}
              <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-white mb-2">Stake & Engage</h3>

                <div className="relative">
                  <motion.img
                    src="/assets/png/stake_tokens-8.png"
                    alt="Stake & Engage"
                    className="w-24 h-24 lg:w-48 lg:h-48"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Stake tokens to earn rewards, <br/>
                    unlock perks, and connect with brands.
                  </p>
                </div>
              </div>

              {/* RFID Unlock */}
              <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-white mb-2">RFID Unlock (coming soon)</h3>

                <div className="relative">
                  <motion.img
                    src="/assets/png/RFID_icon-8.png"
                    alt="RFID Unlock"
                    className="w-24 h-24 lg:w-48 lg:h-48"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Tokens will enable instant access <br/>
                    to kiosks and exclusive experiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutFlow; 