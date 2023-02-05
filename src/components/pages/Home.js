import HeroSection from '../HeroSection';
import Banner from '../Banner';
import Cards from '../Cards';
import Banner2 from '../Banner2';
import Footer from '../Footer';
import { EntryTransition, ExitTransition } from '../PageTransition';
import useScrollToTop from '../../utils/useScrollToTop';

export default function Home() {
  useScrollToTop();
  return (
    <ExitTransition>
      <HeroSection />
      <Banner />
      <Cards />
      <Banner2 />
      <Footer />
      <EntryTransition />
    </ExitTransition>
  );
}
