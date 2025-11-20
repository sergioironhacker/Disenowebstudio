import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contacto | Diseño Web Estudio"
        description="Contacta con Diseño Web Estudio para solicitar información sobre diseño web profesional y desarrollo Full Stack en Segovia."
        url="https://www.diseñowebstudio.com/contact"
      />

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
    </>
  );
}
