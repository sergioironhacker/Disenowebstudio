import { motion } from 'framer-motion';
import CertificatesGallery from '../components/CertificatesGallery';
import Testimonials from '../components/Testimonials';
import CVViewer from '../components/CVViewer';
import SEO from '../components/SEO';

export default function CertificatesPage() {
  return (
    <>
      <SEO
        title="Certificados y logros | Diseño Web Estudio"
        description="Explora los certificados y logros de Diseño Web Estudio, demostrando nuestra experiencia y profesionalidad en diseño web."
        url="https://www.diseñowebstudio.com/certificates"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="pt-16"
      >
        <CertificatesGallery />
        <Testimonials />
        <CVViewer />
      </motion.div>
    </>
  );
}
