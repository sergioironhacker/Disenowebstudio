import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-16"
    >
      <CTASection />
      <Contact />
    </motion.div>
  );
}
