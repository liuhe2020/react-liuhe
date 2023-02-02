import { motion } from 'framer-motion';

export default function PageTransition() {
  const pageVariants = {
    start: { y: 0 },
    in: {
      y: '-100%',
      transition: { duration: 1.5, delay: 2, ease: [0.8, 0.1, 0.1, 0.8] },
    },
    out: {
      y: 0,
      transition: { duration: 1, delay: 1, ease: [0.8, 0.1, 0.1, 0.8] },
    },
  };

  return (
    <motion.div
      className='overlay'
      variants={pageVariants}
      initial='start'
      animate='in'
      exit='out'
    />
  );
}
