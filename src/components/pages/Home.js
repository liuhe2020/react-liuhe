import React from "react";
import HeroSection from "../HeroSection";
import Banner from "../Banner";
import Cards from "../Cards";
import Banner2 from "../Banner2";
import Footer from "../Footer";
import { motion } from "framer-motion";

function Home() {
  // framer motion page transition values
  const pageVariants = {
    start: { opacity: 1 },
    in: { opacity: 1, transition: { duration: 1 } },
    out: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="page"
      id="home"
      variants={pageVariants}
      initial="start"
      animate="in"
      exit="out"
    >
      <HeroSection />
      <Banner />
      <Cards />
      <Banner2 />
      <Footer />
    </motion.div>
  );
}

export default Home;
