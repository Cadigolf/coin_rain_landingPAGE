import React from 'react';
import { motion } from 'framer-motion';

const LetsWork: React.FC = () => {
  return (
    <section className="relative py-32 lg:py-48 bg-black min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          src="/assets/png/reinvent-8.png"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
          style={{ objectPosition: 'center center' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="text-center space-y-6">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Let's Reinvent <br />Fulfillment - Together
          </motion.h2>
          
          <motion.p
            className="text-xl text-custom-cyan leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Backed by builders. Powered by AI. Fueled by tokenized commerce
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default LetsWork; 