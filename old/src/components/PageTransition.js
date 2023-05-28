import { motion } from 'framer-motion';

export const EntryTransition = () => {
  const pageVariants = {
    start: { y: 0 },
    in: {
      y: '-100%',
      transition: { duration: 1.2, delay: 2, ease: [0.8, 0.1, 0.1, 0.8] },
    },
  };

  return <motion.div className='overlay' variants={pageVariants} initial='start' animate='in' />;
};

// page transition wrapper, set transition in from invis to vis to avoid flashes from component mounting. fade out on exit
export default function PageTransition({ children }) {
  return (
    <motion.div className='page' initial={{ visibility: 'hidden' }} animate={{ visibility: 'visible' }} exit={{ opacity: 0, transition: { duration: 1 } }}>
      {children}
    </motion.div>
  );
}
