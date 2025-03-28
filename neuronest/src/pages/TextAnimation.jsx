/* TextAnimation.js
import React from 'react';
import { motion } from 'framer-motion';

const TextAnimation = () => {
  return (
    <motion.h2
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
      }}
    >
      Empowers beyond home!!
    </motion.h2>
  );
};

export default TextAnimation;
*/
