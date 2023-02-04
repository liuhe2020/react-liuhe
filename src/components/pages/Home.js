import HeroSection from '../HeroSection';
import Banner from '../Banner';
import Cards from '../Cards';
import Banner2 from '../Banner2';
import Footer from '../Footer';
import { EntryTransition, ExitTransition } from '../PageTransition';
import ScrollToTop from '../../utils/ScrollToTop';

export default function Home() {
  ScrollToTop();

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
