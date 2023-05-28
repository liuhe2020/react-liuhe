import { motion } from 'framer-motion';

export const EntryTransition = () => (
  <motion.div className='overlay' initial={{ y: 0 }} animate={{ y: '-100%' }} transition={{ duration: 1.2, delay: 2, ease: [0.8, 0.1, 0.1, 0.8] }} />
);

// page transition wrapper, set transition in from invis to vis to avoid flashes from component mounting. fade out on exit
export default function PageTransition({ children }) {
  return (
    <motion.div className='page' initial={{ visibility: 'hidden' }} animate={{ visibility: 'visible' }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      {children}
    </motion.div>
  );
}
