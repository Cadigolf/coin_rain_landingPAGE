// src/components/Hero.tsx - Completely rebuilt to match the attached image exactly
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useAuth } from './AuthContext';
import { OnboardingFlow } from './onboarding/OnboardingFlow';

const Hero: React.FC = () => {
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const { user, hasCompletedWalletSetup } = useAuth();

  const handleCreateAccount = useCallback(() => {
    if (user && hasCompletedWalletSetup) {
      window.location.href = '/dashboard';
    } else {
      setOnboardingOpen(true);
    }
  }, [user, hasCompletedWalletSetup]);

  const handleReadDocuments = useCallback(() => {
    window.open('https://hubsai.gitbook.io/hubsai-docs/', '_blank');
  }, []);

  const handleOnboardingClose = useCallback(() => {
    setOnboardingOpen(false);
  }, []);

  const handleOnboardingComplete = useCallback(() => {
    setOnboardingOpen(false);
  }, []);

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <img src="/assets/svg/dot_bg.svg" alt="Background Pattern" className="w-full h-full object-cover" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            
            {/* Left Column - Text Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Main Headline */}
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Every Product, <span>Tokenized.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl lg:text-2xl text-custom-cyan leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Fulfillment, Rewired by AI. Real rewards on every purchase. Own the Retail Platform of the Future.
              </motion.p>

              {/* Solana Button */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <motion.button
                  className="flex items-center space-x-5 px-6 py-3 border border-custom-cyan text-white rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src="/assets/svg/solana_icon.svg" alt="Solana" className="w-10 h-10" />
                  <span>$Hubs coming soon on Solana</span>
                </motion.button>
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                {/* Create Account Button */}
                <motion.button
                  className="px-2 py-1 border border-custom-cyan text-white rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
                  onClick={handleCreateAccount}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Create HUBS <br/><span className="text-custom-cyan">Rewards account</span>
                </motion.button>

                {/* Read Documents Button */}
                <motion.button
                  className="px-2 py-1 border border-custom-cyan text-white rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
                  onClick={handleReadDocuments}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read the Documents
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Main Visual - Using hero_img-8.png */}
              <div className="relative">
                <motion.img
                  src="/assets/png/hero_img-8.png"
                  alt="HubsAI Hero Visual"
                  className="w-full h-auto scale-110"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Onboarding Flow */}
      <OnboardingFlow 
        isOpen={onboardingOpen}
        onClose={handleOnboardingClose}
        onComplete={handleOnboardingComplete}
        skipLoginStep={false}
      />
    </>
  );
};

export default Hero;