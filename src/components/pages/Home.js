import { motion } from 'framer-motion';
import HeroSection from '../HeroSection';
import Banner from '../Banner';
import Cards from '../Cards';
import Banner2 from '../Banner2';
import Footer from '../Footer';
import PageTransition from '../PageTransition';

export default function Home() {
  return (
    <motion.div className='page'>
      <HeroSection />
      <Banner />
      <Cards />
      <Banner2 />
      <Footer />
      <PageTransition />
    </motion.div>
  );
}
