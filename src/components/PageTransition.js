import { motion } from 'framer-motion';

const EntryTransition = () => {
  const pageVariants = {
    start: { y: 0 },
    in: {
      y: '-100%',
      transition: { duration: 1.2, delay: 2, ease: [0.8, 0.1, 0.1, 0.8] },
    },
  };

  return <motion.div className='overlay' variants={pageVariants} initial='start' animate='in' />;
};

const ExitTransition = ({ children }) => {
  return (
    <motion.div className='page' initial={{ visibility: 'hidden' }} animate={{ visibility: 'visible' }} exit={{ opacity: 0, transition: { duration: 1 } }}>
      {children}
    </motion.div>
  );
};

export { EntryTransition, ExitTransition };
