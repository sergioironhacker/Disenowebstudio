import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseMe from '../components/WhyChooseMe';
import TechStack from '../components/TechStack';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import Statistics from '../components/Statistics';
import Services from '../components/Services';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <About />
      <WhyChooseMe />
      <TechStack />
      <Timeline />
      <Skills />
      <Statistics />
      <Services />
    </motion.div>
  );
}
