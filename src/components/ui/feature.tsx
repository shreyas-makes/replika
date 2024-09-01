'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

export const Feature: FC = () => {
  return (
    <section className="p-20">
      <div className="container mx-auto">
        <motion.div
          className="bg-white p-10 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Awesome Feature</h2>
          <p className="text-gray-700">
            This is an example of a feature section. You can describe your product or service here.
          </p>
        </motion.div>
      </div>
    </section>
  );
};