import { HeroSection, TextSectionFirst, Projects, TextSectionSecond, Toolbox, Footer, EntryTransition, PageTransition } from '../components';
import useScrollToTop from '../utils/useScrollToTop';

export default function Home() {
  // useScrollToTop();

  return (
    <PageTransition>
      <div className='home-container'>
        <HeroSection />
        <TextSectionFirst />
        <Projects />
        <TextSectionSecond />
        <Toolbox />
        <Footer />
        <EntryTransition />
      </div>
    </PageTransition>
  );
}
